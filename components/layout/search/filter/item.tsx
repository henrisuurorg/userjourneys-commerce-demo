'use client';

import type { getDictionary } from '@/lib/dictionaries';
import clsx from 'clsx';
import { SortFilterItem as SortFilterItemType } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ListItem, PathFilterItem as PathFilterItemType } from '.';

function PathFilterItem({
  item,
  dictionary
}: {
  item: PathFilterItemType;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['sorting'];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? 'p' : Link;

  newParams.delete('q');

  return (
    <li className="mt-2 flex text-black dark:text-white" key={item.title}>
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className={clsx(
          'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100',
          {
            'underline underline-offset-4': active
          }
        )}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({
  item,
  dictionary
}: {
  item: SortFilterItemType;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['sorting'];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug })
    })
  );
  const DynamicTag = active ? 'p' : Link;
  const translatedTitle = dictionary[item.key] || item.title;

  return (
    <li className="mt-2 flex text-sm text-black dark:text-white" key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx('w-full hover:underline hover:underline-offset-4', {
          'underline underline-offset-4': active
        })}
      >
        {translatedTitle}
      </DynamicTag>
    </li>
  );
}

export function FilterItem({
  item,
  dictionary
}: {
  item: ListItem;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['sorting'];
}) {
  return 'path' in item ? (
    <PathFilterItem item={item} dictionary={dictionary} />
  ) : (
    <SortFilterItem item={item} dictionary={dictionary} />
  );
}
