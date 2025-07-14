export default function MockCheckoutPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gray-100 p-6 text-center dark:bg-black">
      <div className="max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
          This is a Demo Store
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          This checkout process is for demonstration purposes only. No real
          order has been placed, and no payment has been processed.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          You can safely close this page.
        </p>
      </div>
    </div>
  );
}
