'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import type { getDictionary } from '@/lib/dictionaries';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { ListItem } from '.';
import { FilterItem } from './item';

export default function FilterItemDropdown({
  list,
  dictionary
}: {
  list: ListItem[];
  dictionary: Awaited<ReturnType<typeof getDictionary>>['sorting'];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    list.forEach((listItem: ListItem) => {
      if (
        ('path' in listItem && pathname === listItem.path) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      ) {
        const key =
          'key' in listItem
            ? (listItem.key as keyof typeof dictionary)
            : (listItem.title.toLowerCase() as keyof typeof dictionary);
        setActive(dictionary[key] || listItem.title);
      }
    });
  }, [pathname, list, searchParams, dictionary]);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className="flex w-full items-center justify-between rounded-sm border border-black/30 px-4 py-2 text-sm dark:border-white/30"
      >
        <div>{active}</div>
        <ChevronDownIcon className="h-4" />
      </div>
      {openSelect && (
        <div
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black"
        >
          {list.map((item: ListItem, i) => (
            <FilterItem key={i} item={item} dictionary={dictionary} />
          ))}
        </div>
      )}
    </div>
  );
}
