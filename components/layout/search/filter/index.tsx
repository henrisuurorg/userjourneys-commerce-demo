import type { getDictionary } from '@/lib/dictionaries';
import { SortFilterItem } from 'lib/constants';
import { Suspense } from 'react';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({
  list,
  dictionary
}: {
  list: ListItem[];
  dictionary: Awaited<ReturnType<typeof getDictionary>>['sorting'];
}) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} dictionary={dictionary} />
      ))}
    </>
  );
}

export default function FilterList({
  list,
  title,
  dictionary
}: {
  list: ListItem[];
  title?: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['sorting'];
}) {
  return (
    <>
      <nav>
        {title ? (
          <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
            {title}
          </h3>
        ) : null}
        <ul className="hidden md:block">
          <Suspense fallback={null}>
            <FilterItemList list={list} dictionary={dictionary} />
          </Suspense>
        </ul>
        <ul className="md:hidden">
          <Suspense fallback={null}>
            <FilterItemDropdown list={list} dictionary={dictionary} />
          </Suspense>
        </ul>
      </nav>
    </>
  );
}
