import { z } from "zod";

const ExchangeRatesResponseSchema = z.object({
  amount: z.number(),
  base: z.string(),
  date: z.string(),
  rates: z.record(z.string(), z.number()),
});

export type ExchangeRatesResponse = z.infer<typeof ExchangeRatesResponseSchema>;

export async function getExchangeRates(): Promise<ExchangeRatesResponse> {
  const response = await fetch(
    "https://api.frankfurter.app/latest?from=EUR&to=USD,GBP,PLN,JPY"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }

  const data = await response.json();
  const validatedData = ExchangeRatesResponseSchema.parse(data);

  return { ...validatedData, rates: { ...validatedData.rates, EUR: 1 } };
}
