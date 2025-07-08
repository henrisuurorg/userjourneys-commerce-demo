import Price from 'components/price';
import { getCart } from 'lib/shopify-mock/server';

export default async function CheckoutPage() {
  const cart = await getCart();

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <h1 className="mb-4 text-2xl font-bold">Your cart is empty.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-md dark:bg-black">
        <h1 className="mb-6 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-800 dark:border-gray-700 dark:text-white">
          Review Your Order
        </h1>

        <div className="mb-6 space-y-4">
          {cart.lines.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {item.merchandise.product.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.merchandise.title} | Qty: {item.quantity}
                </p>
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
            <span>Shipping</span>
            <span>Calculated at next step</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300">
            <span>Taxes</span>
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
            <span>Total</span>
            <Price
              amount={cart.cost.totalAmount.amount}
              currencyCode={cart.cost.totalAmount.currencyCode}
            />
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
} 