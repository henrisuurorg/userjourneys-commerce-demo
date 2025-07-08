import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';

import { Providers } from 'app/providers';
import { Navbar } from 'components/layout/navbar';
import { getCart } from 'lib/shopify-mock/server';
import { baseUrl } from 'lib/utils';
import { Toaster } from 'sonner';
import './globals.css';

const { SITE_NAME, TWITTER_CREATOR, TWITTER_SITE } = process.env;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
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

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cart = getCart();

  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Providers cartPromise={cart}>
          <Navbar />
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
