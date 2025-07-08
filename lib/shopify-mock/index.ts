import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { mockProducts } from "../mock-data";
import {
  Cart,
  Collection,
  Menu,
  Page,
  Product,
} from "./types";

// Always use mock data for this implementation
const USE_MOCK_DATA = true;

export async function getCart(): Promise<Cart> {
  const cartCookie = (await cookies()).get("cart")?.value;
  const cartItems: { merchandiseId: string; quantity: number }[] = cartCookie
    ? JSON.parse(cartCookie)
    : [];

  if (cartItems.length === 0) {
    return {
      id: "mock-cart",
      checkoutUrl: "/checkout/mock",
      cost: {
        subtotalAmount: { amount: "0.0", currencyCode: "USD" },
        totalAmount: { amount: "0.0", currencyCode: "USD" },
        totalTaxAmount: { amount: "0.0", currencyCode: "USD" },
      },
      lines: [],
      totalQuantity: 0,
    };
  }

  const lines: Cart["lines"] = [];
  let subtotal = 0;

  for (const item of cartItems) {
    // Find the variant and its parent product
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
      const { variants, ...productForCart } = product;
      const lineTotal = parseFloat(variant.price.amount) * item.quantity;
      subtotal += lineTotal;

      lines.push({
        id: variant.id,
        quantity: item.quantity,
        cost: {
          totalAmount: {
            amount: lineTotal.toString(),
            currencyCode: "USD",
          },
        },
        merchandise: {
          id: variant.id,
          title: variant.title,
          selectedOptions: variant.selectedOptions,
          product: productForCart,
        },
      });
    }
  }

  return {
    id: "mock-cart",
    checkoutUrl: "/checkout/mock",
    cost: {
      subtotalAmount: { amount: subtotal.toString(), currencyCode: "USD" },
      totalAmount: { amount: subtotal.toString(), currencyCode: "USD" },
      totalTaxAmount: { amount: "0.0", currencyCode: "USD" },
    },
    lines: lines,
    totalQuantity: lines.reduce((acc, line) => acc + line.quantity, 0),
  };
}

export async function getCollection(
  handle: string
): Promise<Collection | undefined> {
  const allCollections = await getCollections();
  return allCollections.find((col) => col.handle === handle);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  if (collection === "hidden-homepage-featured-items") {
    return mockProducts.slice(0, 3);
  }
  if (collection === "hidden-homepage-carousel") {
    return mockProducts.slice(3, 8);
  }
  const products = mockProducts.filter((product) =>
    product.tags.some((tag) => tag.toLowerCase() === collection.toLowerCase())
  );
  return products;
}

export async function getCollections(): Promise<Collection[]> {
  const allTags = new Set<string>();
  mockProducts.forEach((p) => p.tags.forEach((t: string) => allTags.add(t)));

  const collections = [
    {
      handle: "",
      title: "All",
      description: "All products",
      seo: {
        title: "All",
        description: "All products",
      },
      path: "/search",
      updatedAt: new Date().toISOString(),
    },
    ...Array.from(allTags).map(
      (tag: string) =>
        ({
          handle: tag.toLowerCase(),
          title: tag,
          description: `Products tagged with "${tag}"`,
          path: `/search/${tag.toLowerCase()}`,
          updatedAt: new Date().toISOString(),
        }) as Collection
    ),
  ];
  return collections;
}

export async function getMenu(handle: string): Promise<Menu[]> {
  if (handle === "next-js-frontend-header-menu") {
    return [
      { title: "All", path: "/search" },
      { title: "Shirts", path: "/search/shirts" },
      { title: "Stickers", path: "/search/stickers" },
    ];
  }

  if (handle === "next-js-frontend-footer-menu") {
    return [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Terms & Conditions", path: "/terms-conditions" },
      { title: "Shipping & Return Policy", path: "/shipping-return-policy" },
      { title: "Privacy Policy", path: "/privacy-policy" },
      { title: "FAQ", path: "/faq" },
    ];
  }

  // Fallback for other menus
  const collections = await getCollections();
  const menu = collections.map((c) => ({
    title: c.title,
    path: c.path,
  }));
  return menu;
}

export async function getPage(handle: string): Promise<Page> {
  return {
    id: `page-${handle}`,
    title: `Mock Page: ${handle}`,
    handle: handle,
    body: `<p>This is a mock page for "${handle}". The content is generated automatically.</p>`,
    bodySummary: "This is a mock page.",
    seo: {
      title: `Mock Page: ${handle}`,
      description: `Mock page for ${handle}`,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export async function getPages(): Promise<Page[]> {
  return [
    {
      id: "page-about",
      title: "About Us",
      handle: "about",
      body: '<p>This is a mock "About Us" page.</p>',
      bodySummary: "Mock about page",
      seo: { title: "About Us", description: "About us page" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return mockProducts.find((p) => p.handle === handle);
}

export async function getProductRecommendations(
  productId: string
): Promise<Product[]> {
  // Create a simple hash from productId to ensure consistent results
  const hash = productId.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

  // Use the hash as a seed for consistent "random" selection
  const availableProducts = mockProducts.filter((p) => p.id !== productId);
  const seed = Math.abs(hash);

  // Deterministic selection based on product ID hash
  const shuffled = [...availableProducts];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(
      ((((seed + i) * 9301 + 49297) % 233280) / 233280) * (i + 1)
    );
    if (j < shuffled.length) {
      const temp = shuffled[i]!;
      shuffled[i] = shuffled[j]!;
      shuffled[j] = temp;
    }
  }

  return shuffled.slice(0, 4);
}

export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  let products = [...mockProducts];

  if (query) {
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t: string) => t.toLowerCase().includes(query.toLowerCase()))
    );
  }

  if (sortKey === "PRICE") {
    products.sort((a, b) => {
      const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
      const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
      return reverse ? priceB - priceA : priceA - priceB;
    });
  } else if (sortKey === "CREATED_AT") {
    products.sort((a, b) => {
      const dateA = new Date(a.updatedAt).getTime();
      const dateB = new Date(b.updatedAt).getTime();
      return reverse ? dateA - dateB : dateB - dateA;
    });
  }
  return products;
}

// This is called from `app/api/revalidate.ts` so providers can control revalidation logic.
export async function revalidate(req: NextRequest): Promise<NextResponse> {
  // For mock data, just return a success response
  return NextResponse.json({
    status: 200,
    revalidated: true,
    now: Date.now(),
  });
}
