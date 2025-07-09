'use client';

import { useCurrency } from 'components/currency-context';

const conversionRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.74
};

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£'
};

const Price = ({
  amount,
  className,
  currencyCode = 'USD',
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
