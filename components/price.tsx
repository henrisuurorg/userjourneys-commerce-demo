'use client';

import { useCurrency } from 'components/currency-context';

const conversionRates = {
  EUR: 1,
  GBP: 0.85,
  PLN: 4.5, // Placeholder
  JPY: 165 // Placeholder
};

const currencySymbols = {
  EUR: '€',
  GBP: '£',
  PLN: 'zł',
  JPY: '¥'
};

const Price = ({
  amount,
  className,
  currencyCode = 'EUR',
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => {
  const { currency: selectedCurrency } = useCurrency();

  // Temporary comment for testing currency display
  // const convertedAmount =
  //   (parseFloat(amount) * conversionRates[selectedCurrency as keyof typeof conversionRates]) /
  //   conversionRates[currencyCode as keyof typeof conversionRates];
  const convertedAmount = parseFloat(amount);

  const displayAmount = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: selectedCurrency,
    currencyDisplay: 'narrowSymbol'
  }).format(convertedAmount);

  return (
    <p suppressHydrationWarning={true} className={className}>
      {displayAmount}
    </p>
  );
};

export default Price;
