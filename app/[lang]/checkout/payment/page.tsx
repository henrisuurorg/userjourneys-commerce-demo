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
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [errors, setErrors] = useState<{
    cardNumber?: string;
    expiryDate?: string;
    cvc?: string;
    nameOnCard?: string;
  }>({});

  useEffect(() => {
    getDictionary(params.lang).then(setDictionary);
  }, [params.lang]);

  const validateCardNumber = (number: string): boolean => {
    // Remove spaces and check if it's only digits
    const cleanNumber = number.replace(/\s/g, '');
    if (!/^\d+$/.test(cleanNumber)) return false;
    
    // Check if it's between 13 and 19 digits (standard card lengths)
    if (cleanNumber.length < 13 || cleanNumber.length > 19) return false;
    
    // Luhn algorithm for credit card validation
    let sum = 0;
    let isEven = false;
    for (let i = cleanNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanNumber[i], 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    return sum % 10 === 0;
  };

  const validateExpiryDate = (expiry: string): boolean => {
    // Check format MM/YY or MM / YY
    const match = expiry.match(/^(0[1-9]|1[0-2])\s*\/\s*(\d{2})$/);
    if (!match) return false;
    
    const month = parseInt(match[1], 10);
    const year = parseInt('20' + match[2], 10);
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    
    // Check if card is not expired
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }
    
    // Check if year is not too far in the future (max 20 years)
    if (year > currentYear + 20) {
      return false;
    }
    
    return true;
  };

  const validateCvc = (cvc: string): boolean => {
    // CVC should be 3 or 4 digits
    return /^\d{3,4}$/.test(cvc);
  };

  const validateNameOnCard = (name: string): boolean => {
    // Name should contain at least 2 characters and only letters, spaces, hyphens, and apostrophes
    return name.length >= 2 && /^[a-zA-Z\s\-']+$/.test(name);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Clear previous errors
    const newErrors: typeof errors = {};
    
    // Validate all fields
    if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }
    
    if (!validateExpiryDate(expiryDate)) {
      newErrors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
    }
    
    if (!validateCvc(cvc)) {
      newErrors.cvc = 'Please enter a valid CVC (3 or 4 digits)';
    }
    
    if (!validateNameOnCard(nameOnCard)) {
      newErrors.nameOnCard = 'Please enter a valid name';
    }
    
    // If there are errors, display them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear errors and proceed with submission
    setErrors({});
    setIsLoading(true);

    // Simulate network request and redirect
    setTimeout(() => {
      router.push('/checkout/confirmation');
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    // Add spaces every 4 digits
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted.substring(0, 23); // Max length with spaces
  };

  const formatExpiryDate = (value: string) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    // Add slash after 2 digits
    if (cleaned.length >= 3) {
      return cleaned.substring(0, 2) + ' / ' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const formatCvc = (value: string) => {
    // Remove all non-digits and limit to 4 characters
    return value.replace(/\D/g, '').substring(0, 4);
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
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm ${
                  errors.cardNumber
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } dark:bg-gray-700`}
                placeholder="1234 5678 9101 1121"
                value={cardNumber}
                onChange={(e) => {
                  setCardNumber(formatCardNumber(e.target.value));
                  if (errors.cardNumber) {
                    setErrors({ ...errors, cardNumber: undefined });
                  }
                }}
                maxLength={23}
                required
              />
              {errors.cardNumber && (
                <p className="mt-1 text-xs text-red-500">{errors.cardNumber}</p>
              )}
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
                  className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm ${
                    errors.expiryDate
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  } dark:bg-gray-700`}
                  placeholder="MM / YY"
                  value={expiryDate}
                  onChange={(e) => {
                    setExpiryDate(formatExpiryDate(e.target.value));
                    if (errors.expiryDate) {
                      setErrors({ ...errors, expiryDate: undefined });
                    }
                  }}
                  maxLength={7}
                  required
                />
                {errors.expiryDate && (
                  <p className="mt-1 text-xs text-red-500">{errors.expiryDate}</p>
                )}
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
                  className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm ${
                    errors.cvc
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  } dark:bg-gray-700`}
                  placeholder="123"
                  value={cvc}
                  onChange={(e) => {
                    setCvc(formatCvc(e.target.value));
                    if (errors.cvc) {
                      setErrors({ ...errors, cvc: undefined });
                    }
                  }}
                  maxLength={4}
                  required
                />
                {errors.cvc && (
                  <p className="mt-1 text-xs text-red-500">{errors.cvc}</p>
                )}
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
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm ${
                  errors.nameOnCard
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } dark:bg-gray-700`}
                placeholder="John Doe"
                value={nameOnCard}
                onChange={(e) => {
                  setNameOnCard(e.target.value);
                  if (errors.nameOnCard) {
                    setErrors({ ...errors, nameOnCard: undefined });
                  }
                }}
                required
              />
              {errors.nameOnCard && (
                <p className="mt-1 text-xs text-red-500">{errors.nameOnCard}</p>
              )}
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