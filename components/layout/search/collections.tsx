import clsx from 'clsx';
import { Suspense } from 'react';

import type { getDictionary } from '@/lib/dictionaries';
import type { Locale } from 'i18n-config';
import { getCollections } from 'lib/shopify-mock/client';
import FilterList from './filter';

async function CollectionList({
  dictionary,
  lang
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  lang: Locale;
}) {
  const collections = await getCollections(lang);
  return <FilterList list={collections} title={dictionary.search.collections} dictionary={dictionary.sorting} />;
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded-sm';
const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300';
const items = 'bg-neutral-400 dark:bg-neutral-700';

export default function Collections({
  dictionary,
  lang
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  lang: Locale;
}) {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CollectionList dictionary={dictionary} lang={lang} />
    </Suspense>
  );
}
