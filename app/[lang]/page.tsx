import { getDictionary } from '@/lib/dictionaries';
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage(props: { params: Promise<{ lang: 'en' | 'et' }> }) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <ThreeItemGrid lang={params.lang} />
      <Carousel lang={params.lang} />
      <Footer dictionary={dictionary} />
    </>
  );
}
