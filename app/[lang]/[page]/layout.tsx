import { getDictionary } from '@/lib/dictionaries';
import Footer from 'components/layout/footer';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: 'en' | 'et' }>;
}) {
  const { children } = props;
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <div className="w-full">
        <div className="mx-8 max-w-2xl py-20 sm:mx-auto">{children}</div>
      </div>
      <Footer dictionary={dictionary} />
    </>
  );
}
