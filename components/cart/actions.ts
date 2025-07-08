"use server";

import { TAGS } from "lib/constants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type SimpleCartItem = {
  merchandiseId: string;
  quantity: number;
};

type CartPayload = {
  items: SimpleCartItem[];
  promoCode?: string;
};

async function getCartFromCookie(): Promise<CartPayload> {
  const cartCookie = (await cookies()).get("cart")?.value;
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

async function setCartInCookie(cart: CartPayload) {
  (await cookies()).set("cart", JSON.stringify(cart));
}

export async function applyPromoCode(prevState: any, formData: FormData) {
  const promoCode = formData.get('promoCode') as string;

  if (promoCode.toUpperCase() !== 'SAVE20') {
    return 'Invalid promo code';
  }

  try {
    const cart = await getCartFromCookie();
    cart.promoCode = promoCode;
    await setCartInCookie(cart);
    revalidateTag(TAGS.cart);
    return null; // Success
  } catch (e) {
    return 'Error applying promo code';
  }
}

export async function addItem(
  prevState: any,
  selectedVariantId: string | undefined
) {
  if (!selectedVariantId) {
    return "Error adding item to cart";
  }

  try {
    const cart = await getCartFromCookie();
    const existingItem = cart.items.find(
      (item) => item.merchandiseId === selectedVariantId
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.items.push({ merchandiseId: selectedVariantId, quantity: 1 });
    }
    await setCartInCookie(cart);
    revalidateTag(TAGS.cart);
  } catch (e) {
    return "Error adding item to cart";
  }
}

export async function removeItem(prevState: any, merchandiseId: string) {
  try {
    const cart = await getCartFromCookie();
    cart.items = cart.items.filter((item) => item.merchandiseId !== merchandiseId);
    await setCartInCookie(cart);
    revalidateTag(TAGS.cart);
  } catch (e) {
    return "Error removing item from cart";
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  const { merchandiseId, quantity } = payload;

  try {
    const cart = await getCartFromCookie();

    if (quantity === 0) {
      cart.items = cart.items.filter(
        (item) => item.merchandiseId !== merchandiseId
      );
      await setCartInCookie(cart);
      revalidateTag(TAGS.cart);
      return;
    }

    const existingItem = cart.items.find(
      (item) => item.merchandiseId === merchandiseId
    );

    if (existingItem) {
      existingItem.quantity = quantity;
    } else if (quantity > 0) {
      cart.items.push({ merchandiseId, quantity });
    }

    await setCartInCookie(cart);
    revalidateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return "Error updating item quantity";
  }
}

export async function redirectToCheckout() {
  redirect('/checkout');
}
