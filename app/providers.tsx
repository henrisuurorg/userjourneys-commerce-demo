// app/providers.tsx
"use client";

import { PostHogProvider } from 'app/posthog-provider';
import { CartProvider } from 'components/cart/cart-context';
import { CurrencyProvider } from 'components/currency-context';
import type { Cart } from 'lib/shopify-mock/types';

export function Providers({
  children,
  cartPromise
}: {
  children: React.ReactNode;
  cartPromise: Promise<Cart | undefined>;
}) {
  return (
    <PostHogProvider>
      <CurrencyProvider>
        <CartProvider cartPromise={cartPromise}>{children}</CartProvider>
      </CurrencyProvider>
    </PostHogProvider>
  );
}
