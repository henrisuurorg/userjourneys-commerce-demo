import { getDictionary } from '@/lib/dictionaries';
import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage({ params }: { params: { lang: 'en' | 'et' } }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <Footer dictionary={dictionary} />
    </>
  );
}
