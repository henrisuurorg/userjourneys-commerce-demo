import { getDictionary } from '@/lib/dictionaries';
import Price from 'components/price';
import { getCart } from 'lib/shopify-mock/server';
import { CartItem } from 'lib/shopify-mock/types';
import Link from 'next/link';

function CheckoutActions({
  cart,
  dictionary
}: {
  cart: { lines: CartItem[] };
  dictionary: Awaited<ReturnType<typeof getDictionary>>['checkout'];
}) {
  const anyItemOutOfStock = cart.lines.some((item) => !item.merchandise.availableForSale);

  if (anyItemOutOfStock) {
    return (
      <div
        className="block w-full cursor-not-allowed rounded-md bg-gray-400 px-6 py-3 text-center font-semibold text-white"
        aria-disabled="true"
      >
        {dictionary.payment}
      </div>
    );
  }

  return (
    <Link
      href="/checkout/payment"
      className="block w-full rounded-md bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
    >
      {dictionary.payment}
    </Link>
  );
}

export default async function CheckoutPage(
  props: { params: Promise<{ lang: 'en' | 'et' }> }
) {
  const params = await props.params;
  const cart = await getCart(params.lang);
  const dictionary = await getDictionary(params.lang);

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <h1 className="mb-4 text-2xl font-bold">{dictionary.cart.yourCartIsEmpty}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-md dark:bg-black">
        <h1 className="mb-6 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-800 dark:border-gray-700 dark:text-white">
          {dictionary.checkout.order}
        </h1>

        <div className="mb-6 space-y-4">
          {cart.lines.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between ${
                !item.merchandise.availableForSale ? 'opacity-50' : ''
              }`}
            >
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {item.merchandise.product.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.merchandise.title} | {dictionary.cart.quantity}: {item.quantity}
                </p>
                {!item.merchandise.availableForSale && (
                  <p className="text-sm text-red-500">{dictionary.cart.outOfStock}</p>
                )}
              </div>
              <Price
                className="text-gray-800 dark:text-white"
                amount={item.cost.totalAmount.amount}
                currencyCode={item.cost.totalAmount.currencyCode}
              />
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-gray-200 pt-4 dark:border-gray-700">
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>Subtotal</span>
            <Price
              amount={cart.cost.subtotalAmount.amount}
              currencyCode={cart.cost.subtotalAmount.currencyCode}
            />
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>{dictionary.cart.shipping}</span>
            <span>Calculated at next step</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>{dictionary.cart.taxes}</span>
            <span>Calculated at next step</span>
          </div>
          {cart.cost.discountAmount && cart.cost.discountAmount.amount !== '0.0' && (
            <div className="flex justify-between text-green-600 dark:text-green-400">
              <span>Discount</span>
              <Price
                amount={cart.cost.discountAmount.amount}
                currencyCode={cart.cost.discountAmount.currencyCode}
              />
            </div>
          )}
          <div className="flex justify-between border-t border-gray-200 pt-2 text-xl font-bold text-gray-800 dark:border-gray-700 dark:text-white">
            <span>{dictionary.cart.total}</span>
            <Price
              amount={cart.cost.totalAmount.amount}
              currencyCode={cart.cost.totalAmount.currencyCode}
            />
          </div>
        </div>

        <div className="mt-8">
          <CheckoutActions cart={cart} dictionary={dictionary.checkout} />
        </div>
      </div>
    </div>
  );
} 