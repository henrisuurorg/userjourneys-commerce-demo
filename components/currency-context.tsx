"use client";

import { getExchangeRates } from "@/lib/currency-api";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CurrencyContextType = {
  currency: string;
  setCurrency: (currency: string) => void;
  rates: Record<string, number>;
  isLoading: boolean;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState("EUR");
  const [rates, setRates] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const { rates: fetchedRates } = await getExchangeRates();
        setRates(fetchedRates);
      } catch (error) {
        console.error("Failed to fetch currency rates:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, []);

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      rates,
      isLoading,
    }),
    [currency, rates, isLoading]
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
