"use server";

import { TAGS } from "lib/constants";
import { getCart } from "lib/shopify";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type SimpleCartItem = {
  merchandiseId: string;
  quantity: number;
};

async function getCartFromCookie(): Promise<SimpleCartItem[]> {
  const cartCookie = (await cookies()).get("cart")?.value;
  if (cartCookie) {
    try {
      return JSON.parse(cartCookie);
    } catch (e) {
      return [];
    }
  }
  return [];
}

async function setCartInCookie(cart: SimpleCartItem[]) {
  (await cookies()).set("cart", JSON.stringify(cart));
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
    const existingItem = cart.find(
      (item) => item.merchandiseId === selectedVariantId
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ merchandiseId: selectedVariantId, quantity: 1 });
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
    const newCart = cart.filter((item) => item.merchandiseId !== merchandiseId);
    await setCartInCookie(newCart);
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
      const newCart = cart.filter(
        (item) => item.merchandiseId !== merchandiseId
      );
      await setCartInCookie(newCart);
      revalidateTag(TAGS.cart);
      return;
    }

    const existingItem = cart.find(
      (item) => item.merchandiseId === merchandiseId
    );

    if (existingItem) {
      existingItem.quantity = quantity;
    } else if (quantity > 0) {
      cart.push({ merchandiseId, quantity });
    }

    await setCartInCookie(cart);
    revalidateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return "Error updating item quantity";
  }
}

export async function redirectToCheckout() {
  let cart = await getCart();
  redirect(cart.checkoutUrl);
}
