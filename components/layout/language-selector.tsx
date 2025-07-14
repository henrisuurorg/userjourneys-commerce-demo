'use client';

import { i18n } from '@/i18n-config';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export function LanguageSelector() {
  const params = useParams();
  const lang = params.lang as string;
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="group relative">
      <div className="flex items-center">
        <span className="mr-2 text-sm text-neutral-500 dark:text-neutral-400">{lang.toUpperCase()}</span>
      </div>
      <div className="absolute bottom-full left-0 z-10 hidden w-full rounded-md border border-neutral-200 bg-white p-2 group-hover:block dark:border-neutral-700 dark:bg-black">
        <ul>
          {i18n.locales.map((locale) => {
            return (
              <li key={locale}>
                <Link
                  href={redirectedPathName(locale)}
                  className="block w-full whitespace-nowrap px-2 py-1 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  {locale.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
} 