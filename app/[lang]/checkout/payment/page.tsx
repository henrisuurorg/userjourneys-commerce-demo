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
  const [errors, setErrors] = useState<{
    cardNumber?: string;
    expiryDate?: string;
    cvc?: string;
    nameOnCard?: string;
  }>({});
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    nameOnCard: ''
  });

  useEffect(() => {
    getDictionary(params.lang).then(setDictionary);
  }, [params.lang]);

  const validateCardNumber = (value: string): boolean => {
    const cleanedValue = value.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleanedValue)) {
      return false;
    }
    
    let sum = 0;
    let shouldDouble = false;
    for (let i = cleanedValue.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanedValue.charAt(i), 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  };

  const validateExpiryDate = (value: string): boolean => {
    const regex = /^(0[1-9]|1[0-2])\s*\/\s*(\d{2})$/;
    const match = value.match(regex);
    if (!match) return false;
    
    const month = parseInt(match[1], 10);
    const year = parseInt(match[2], 10);
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }
    
    return true;
  };

  const validateCVC = (value: string): boolean => {
    return /^\d{3,4}$/.test(value);
  };

  const validateNameOnCard = (value: string): boolean => {
    return value.trim().length >= 2 && /^[a-zA-Z\s'-]+$/.test(value);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const formatCardNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };

  const formatExpiryDate = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + ' / ' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newErrors: typeof errors = {};
    
    if (!validateCardNumber(formData.cardNumber)) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }
    
    if (!validateExpiryDate(formData.expiryDate)) {
      newErrors.expiryDate = 'Please enter a valid expiry date (MM / YY)';
    }
    
    if (!validateCVC(formData.cvc)) {
      newErrors.cvc = 'Please enter a valid CVC (3-4 digits)';
    }
    
    if (!validateNameOnCard(formData.nameOnCard)) {
      newErrors.nameOnCard = 'Please enter a valid name';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
                className={`mt-1 block w-full rounded-md px-3 py-2 text-sm shadow-sm ${
                  errors.cardNumber
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } dark:bg-gray-700`}
                placeholder="1234 5678 9101 1121"
                value={formData.cardNumber}
                onChange={(e) => {
                  const formatted = formatCardNumber(e.target.value);
                  if (formatted.replace(/\s/g, '').length <= 19) {
                    handleInputChange('cardNumber', formatted);
                  }
                }}
                maxLength={23}
                required
              />
              {errors.cardNumber && (
                <p className="mt-1 text-xs text-red-600">{errors.cardNumber}</p>
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
                  className={`mt-1 block w-full rounded-md px-3 py-2 text-sm shadow-sm ${
                    errors.expiryDate
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  } dark:bg-gray-700`}
                  placeholder="MM / YY"
                  value={formData.expiryDate}
                  onChange={(e) => {
                    const formatted = formatExpiryDate(e.target.value);
                    if (e.target.value.replace(/\D/g, '').length <= 4) {
                      handleInputChange('expiryDate', formatted);
                    }
                  }}
                  maxLength={7}
                  required
                />
                {errors.expiryDate && (
                  <p className="mt-1 text-xs text-red-600">{errors.expiryDate}</p>
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
                  className={`mt-1 block w-full rounded-md px-3 py-2 text-sm shadow-sm ${
                    errors.cvc
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  } dark:bg-gray-700`}
                  placeholder="123"
                  value={formData.cvc}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, '');
                    if (cleaned.length <= 4) {
                      handleInputChange('cvc', cleaned);
                    }
                  }}
                  maxLength={4}
                  required
                />
                {errors.cvc && (
                  <p className="mt-1 text-xs text-red-600">{errors.cvc}</p>
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
                className={`mt-1 block w-full rounded-md px-3 py-2 text-sm shadow-sm ${
                  errors.nameOnCard
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } dark:bg-gray-700`}
                placeholder="John Doe"
                value={formData.nameOnCard}
                onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                required
              />
              {errors.nameOnCard && (
                <p className="mt-1 text-xs text-red-600">{errors.nameOnCard}</p>
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