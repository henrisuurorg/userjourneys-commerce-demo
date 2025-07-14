'use client';

import type { getDictionary } from '@/lib/dictionaries';
import clsx from 'clsx';
import { Menu } from 'lib/shopify-mock/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function FooterMenuItem({
  item,
  dictionary
}: {
  item: Menu;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['footerMenu'];
}) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  const key = item.title.toLowerCase() as keyof typeof dictionary;
  const translatedTitle = dictionary[key] || item.title;

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          'block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300',
          {
            'text-black dark:text-neutral-300': active
          }
        )}
      >
        {translatedTitle}
      </Link>
    </li>
  );
}

export default function FooterMenu({
  menu,
  dictionary
}: {
  menu: Menu[];
  dictionary: Awaited<ReturnType<typeof getDictionary>>['footerMenu'];
}) {
  if (!menu.length) return null;

  return (
    <nav>
      <ul>
        {menu.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} dictionary={dictionary} />;
        })}
      </ul>
    </nav>
  );
}
