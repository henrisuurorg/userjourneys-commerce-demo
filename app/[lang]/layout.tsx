import { getDictionary } from '@/lib/dictionaries';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';

import { Providers } from 'app/providers';
import { Navbar } from 'components/layout/navbar';
import { getCart } from 'lib/shopify-mock/server';
import { baseUrl } from 'lib/utils';
import { Toaster } from 'sonner';
import '../globals.css';

const { SITE_NAME } = process.env;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export async function generateMetadata({ params: { lang } }: { params: { lang: 'en' | 'et' } }) {
  // TODO: It would be better to have site name and description in dictionariesœ
  const { SITE_NAME } = process.env;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: SITE_NAME!,
      template: `%s | ${SITE_NAME}`
    },
    robots: {
      follow: true,
      index: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    icons: {
      shortcut: '/favicon.ico'
    },
    verification: {
      google: 'IzKq23k-768f7T-2N_1gZf4g4Qz3e2a1b0c9d8e7f'
    }
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: 'en' | 'et' };
}) {
  const cart = getCart();
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className={inter.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Providers cartPromise={cart}>
          <Navbar dictionary={dictionary} />
          <Suspense>
            <main>
              {children}
              <Toaster closeButton />
              {/* <WelcomeToast /> */}
            </main>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
