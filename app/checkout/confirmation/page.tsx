'use client';

import { clearCart } from 'components/cart/actions';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ConfirmationPage() {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center dark:bg-gray-900">
      <div className="max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
          Order Confirmed!
        </h1>
        <p className="mb-6 mt-2 text-gray-600 dark:text-gray-300">
          Thank you for your purchase. Your order #ACME12345 has been placed.
        </p>
        <Link
          href="/"
          className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
} 