'use client';

import { useCurrency } from '@/components/currency-context';

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

  // TODO: add API for currency conversion
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
