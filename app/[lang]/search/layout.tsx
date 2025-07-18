import { getDictionary } from '@/lib/dictionaries';
import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';
import ChildrenWrapper from './children-wrapper';

export default async function SearchLayout(
  props: {
  children: React.ReactNode;
  params: Promise<{ lang: 'en' | 'et' }>;
}) {
  const { children } = props;
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections dictionary={dictionary} lang={params.lang} />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          <Suspense fallback={null}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Suspense>
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" dictionary={dictionary.sorting} />
        </div>
      </div>
      <Footer dictionary={dictionary} />
    </>
  );
}
