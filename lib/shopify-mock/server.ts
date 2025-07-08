import { TAGS } from 'lib/constants';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { mockProducts } from '../mock-data';
import type { Cart, CartCost, CartProduct } from './types';

type SimpleCartItem = {
  merchandiseId: string;
  quantity: number;
};

type CartPayload = {
  items: SimpleCartItem[];
  promoCode?: string;
};

async function getCartPayloadFromCookie(): Promise<CartPayload> {
  const cartCookie = (await cookies()).get('cart')?.value;
  if (cartCookie) {
    try {
      const parsed = JSON.parse(cartCookie);
      // Ensure it's in the new format
      if (Array.isArray(parsed)) {
        return { items: parsed, promoCode: undefined };
      }
      return parsed;
    } catch (e) {
      return { items: [], promoCode: undefined };
    }
  }
  return { items: [], promoCode: undefined };
}

export async function getCart(): Promise<Cart> {
  const cartPayload = await getCartPayloadFromCookie();

  if (cartPayload.items.length === 0) {
    return {
      id: 'mock-cart',
      checkoutUrl: '/checkout',
      cost: {
        subtotalAmount: { amount: '0.0', currencyCode: 'USD' },
        totalAmount: { amount: '0.0', currencyCode: 'USD' },
        totalTaxAmount: { amount: '0.0', currencyCode: 'USD' }
      },
      lines: [],
      totalQuantity: 0
    };
  }

  const lines: Cart['lines'] = [];
  let subtotal = 0;

  for (const item of cartPayload.items) {
    let variant;
    let product;

    for (const p of mockProducts) {
      const foundVariant = p.variants.find((v: any) => v.id === item.merchandiseId);
      if (foundVariant) {
        variant = foundVariant;
        product = p;
        break;
      }
    }

    if (variant && product) {
      const { variants, ...productForCart }: { variants: any;[key: string]: any } = product;
      const lineTotal = parseFloat(variant.price.amount) * item.quantity;
      subtotal += lineTotal;

      lines.push({
        id: variant.id,
        quantity: item.quantity,
        cost: {
          totalAmount: {
            amount: lineTotal.toString(),
            currencyCode: 'USD'
          }
        },
        merchandise: {
          id: variant.id,
          title: variant.title,
          selectedOptions: variant.selectedOptions,
          product: productForCart as CartProduct
        }
      });
    }
  }

  let discountAmount = 0;
  if (cartPayload.promoCode?.toUpperCase() === 'SAVE20') {
    discountAmount = subtotal * 0.2;
  }

  const total = subtotal - discountAmount;
  const totalWithTaxes = total; // Assuming no tax for now

  const cost: CartCost = {
    subtotalAmount: { amount: subtotal.toString(), currencyCode: 'USD' },
    totalAmount: { amount: totalWithTaxes.toString(), currencyCode: 'USD' },
    totalTaxAmount: { amount: '0.0', currencyCode: 'USD' }
  };

  if (discountAmount > 0) {
    cost.discountAmount = { amount: discountAmount.toString(), currencyCode: 'USD' };
  }


  return {
    id: 'mock-cart',
    checkoutUrl: '/checkout',
    cost,
    lines: lines,
    totalQuantity: lines.reduce((acc, line) => acc + line.quantity, 0),
  };
}

export async function revalidate(req: NextRequest): Promise<NextResponse> {
  // We always need to respond with a 200 status code to Shopify,
  // otherwise it will continue to retry the request.
  const collectionWebhooks = ['collections/create', 'collections/delete', 'collections/update'];
  const productWebhooks = ['products/create', 'products/delete', 'products/update'];
  const topic = req.headers.get('x-shopify-topic') || 'unknown';
  const secret = req.nextUrl.searchParams.get('secret');
  const isCollectionUpdate = collectionWebhooks.includes(topic);
  const isProductUpdate = productWebhooks.includes(topic);

  if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
    console.error('Invalid revalidation secret.');
    return NextResponse.json({ status: 200 });
  }

  if (!isCollectionUpdate && !isProductUpdate) {
    // We don't need to revalidate anything for any other topics.
    return NextResponse.json({ status: 200 });
  }

  if (isCollectionUpdate) {
    revalidateTag(TAGS.collections);
  }

  if (isProductUpdate) {
    revalidateTag(TAGS.products);
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
} 