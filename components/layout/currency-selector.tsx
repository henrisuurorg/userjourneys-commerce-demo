'use client';

import { useCurrency } from 'components/currency-context';

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="relative">
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as any)}
        className="appearance-none rounded border bg-black py-2 pl-3 pr-8 text-sm text-white"
      >
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="PLN">PLN</option>
        <option value="JPY">JPY</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.516 7.548c.436-.446 1.144-.446 1.58 0L10 10.434l2.904-2.886c.436-.446 1.144-.446 1.58 0 .436.446.436 1.17 0 1.616l-3.5 3.5c-.218.223-.504.335-.79.335s-.572-.112-.79-.335l-3.5-3.5c-.436-.446-.436-1.17 0-1.616z" />
        </svg>
      </div>
    </div>
  );
} 