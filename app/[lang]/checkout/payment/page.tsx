'use client';

import { getDictionary } from '@/lib/dictionaries';
import { useCart } from 'components/cart/cart-context';
import LoadingDots from 'components/loading-dots';
import Price from 'components/price';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PaymentPage({ params }: { params: { lang: 'en' | 'et' } }) {
  const router = useRouter();
  const { cart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [dictionary, setDictionary] =
    useState<Awaited<ReturnType<typeof getDictionary>> | null>(null);

  useEffect(() => {
    getDictionary(params.lang).then(setDictionary);
  }, [params.lang]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const cardNumber = (form.elements.namedItem('card-number') as HTMLInputElement).value;
    const expiryDate = (form.elements.namedItem('expiry-date') as HTMLInputElement).value;
    const cvc = (form.elements.namedItem('cvc') as HTMLInputElement).value;
    const nameOnCard = (form.elements.namedItem('name-on-card') as HTMLInputElement).value;
    
    // Validate card number (should be 13-19 digits)
    const cardNumberClean = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cardNumberClean)) {
      alert('Invalid card number. Please enter a valid credit card number.');
      return;
    }
    
    // Validate expiry date (MM/YY or MM / YY format)
    const expiryClean = expiryDate.replace(/\s/g, '');
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryClean)) {
      alert('Invalid expiry date. Please enter in MM/YY format.');
      return;
    }
    
    // Validate CVC (3 or 4 digits)
    if (!/^\d{3,4}$/.test(cvc)) {
      alert('Invalid CVC. Please enter 3 or 4 digits.');
      return;
    }
    
    // Validate name on card (at least 2 characters, letters and spaces only)
    if (!/^[a-zA-Z\s]{2,}$/.test(nameOnCard.trim())) {
      alert('Invalid name. Please enter the name as it appears on your card.');
      return;
    }
    
    setIsLoading(true);

    // Simulate network request and redirect
    setTimeout(() => {
      router.push('/checkout/confirmation');
    }, 2000);
  };

  if (!dictionary || !cart || cart.lines.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <h1 className="mb-4 text-2xl font-bold">{dictionary?.cart.yourCartIsEmpty}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-md dark:bg-black">
        <h1 className="mb-6 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-800 dark:border-gray-700 dark:text-white">
          {dictionary.checkout.payment}
        </h1>

        {/* Order Summary */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
          <div className="space-y-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            {cart.lines.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.merchandise.product.title} x {item.quantity}
                </span>
                <Price
                  amount={item.cost.totalAmount.amount}
                  currencyCode={item.cost.totalAmount.currencyCode}
                />
              </div>
            ))}
            {/* TODO: This total is calculated incorrectly, needs to account for discounts. */}
            <div className="flex justify-between border-t border-gray-200 pt-2 font-bold dark:border-gray-700">
              <span>{dictionary.cart.total}</span>
              <Price
                amount={cart.cost.subtotalAmount.amount}
                currencyCode={cart.cost.subtotalAmount.currencyCode}
              />
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                name="card-number"
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700"
                placeholder="1234 5678 9101 1121"
                pattern="[0-9\s]{13,23}"
                maxLength={23}
                required
                title="Enter a valid credit card number (13-19 digits)"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiry-date"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry-date"
                  name="expiry-date"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700"
                  placeholder="MM / YY"
                  pattern="(0[1-9]|1[0-2])\s?/\s?[0-9]{2}"
                  maxLength={7}
                  required
                  title="Enter expiry date in MM/YY format"
                />
              </div>
              <div>
                <label
                  htmlFor="cvc"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700"
                  placeholder="123"
                  pattern="[0-9]{3,4}"
                  maxLength={4}
                  required
                  title="Enter 3 or 4 digit CVC code"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="name-on-card"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="name-on-card"
                name="name-on-card"
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700"
                placeholder="John Doe"
                pattern="[a-zA-Z\s]{2,}"
                required
                title="Enter the name as it appears on your card"
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            For demonstration purposes only. Do not enter real credit card information.
          </p>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? (
                <LoadingDots className="bg-white" />
              ) : (
                <span>{dictionary.checkout.payNow}</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 