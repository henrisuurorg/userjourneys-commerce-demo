"use client";

import { useCurrency } from "@/components/currency-context";
import LoadingDots from "components/loading-dots";

const Price = ({
  amount,
  className,
  currencyCode = "EUR",
}: {
  amount: string;
  className?: string;
  currencyCode: string;
} & React.ComponentProps<"p">) => {
  const { currency: selectedCurrency, rates, isLoading } = useCurrency();

  if (isLoading) {
    return <LoadingDots className="bg-white" />;
  }

  const convertedAmount = parseFloat(amount) * (rates[selectedCurrency] ?? 1);

  const displayAmount = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: selectedCurrency,
    currencyDisplay: "narrowSymbol",
  }).format(convertedAmount);

  return (
    <p suppressHydrationWarning={true} className={className}>
      {displayAmount}
    </p>
  );
};

export default Price;
