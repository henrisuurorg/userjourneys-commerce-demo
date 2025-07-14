import type { Locale } from 'i18n-config';
import { Collection, Menu, Page, Product } from './types';

// Functions that are safe to run on the client
export async function getCollection(
  handle: string,
  lang: Locale
): Promise<Collection | undefined> {
  const allCollections = await getCollections(lang);
  return allCollections.find((col) => col.handle === handle);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
  lang
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
  lang: Locale;
}): Promise<Product[]> {
  const { mockProducts }: { mockProducts: Product[] } = await import(`../mock-data/${lang}.ts`);
  if (collection === 'hidden-homepage-featured-items') {
    return mockProducts.slice(0, 3);
  }
  if (collection === 'hidden-homepage-carousel') {
    return mockProducts.slice(3, 8);
  }
  const products = mockProducts.filter((product) =>
    product.tags.some((tag) => tag.toLowerCase() === collection.toLowerCase())
  );
  return products;
}

export async function getCollections(lang: Locale): Promise<Collection[]> {
  const { mockProducts }: { mockProducts: Product[] } = await import(`../mock-data/${lang}.ts`);
  const allTags = new Set<string>();
  mockProducts.forEach((p) => p.tags.forEach((t: string) => allTags.add(t)));

  const collections = [
    {
      handle: '',
      title: 'All',
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products'
      },
      path: '/search',
      updatedAt: new Date().toISOString()
    },
    ...Array.from(allTags).map(
      (tag: string) =>
        ({
          handle: tag.toLowerCase(),
          title: tag,
          description: `Products tagged with "${tag}"`,
          path: `/search/${tag.toLowerCase()}`,
          updatedAt: new Date().toISOString()
        } as Collection)
    )
  ];
  return collections;
}

export async function getMenu(handle: string, lang: Locale): Promise<Menu[]> {
  if (handle === 'next-js-frontend-header-menu') {
    return [
      { title: 'All', path: '/search' },
      { title: 'Shirts', path: '/search/shirts' },
      { title: 'Stickers', path: '/search/stickers' }
    ];
  }

  if (handle === 'next-js-frontend-footer-menu') {
    return [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Terms & Conditions', path: '/terms-conditions' },
      { title: 'Shipping & Return Policy', path: '/shipping-return-policy' },
      { title: 'Privacy Policy', path: '/privacy-policy' },
      { title: 'FAQ', path: '/faq' }
    ];
  }

  // Fallback for other menus
  const collections = await getCollections(lang);
  const menu = collections.map((c) => ({
    title: c.title,
    path: c.path
  }));
  return menu;
}

export async function getPage(handle: string): Promise<Page> {
  return {
    id: `page-${handle}`,
    title: `Mock Page: ${handle}`,
    handle: handle,
    body: `<p>This is a mock page for "${handle}". The content is generated automatically.</p>`,
    bodySummary: 'This is a mock page.',
    seo: {
      title: `Mock Page: ${handle}`,
      description: `Mock page for ${handle}`
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

export async function getPages(): Promise<Page[]> {
  return [
    {
      id: 'page-about',
      title: 'About Us',
      handle: 'about',
      body: '<p>This is a mock "About Us" page.</p>',
      bodySummary: 'Mock about page',
      seo: { title: 'About Us', description: 'About us page' },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];
}

export async function getProduct(handle: string, lang: Locale): Promise<Product | undefined> {
  const { mockProducts }: { mockProducts: Product[] } = await import(`../mock-data/${lang}.ts`);
  const product = mockProducts.find((p) => p.handle === handle);
  if (product) {
    const clonedProduct = JSON.parse(JSON.stringify(product));
    clonedProduct.availableForSale = true;
    clonedProduct.variants.forEach((variant: any) => {
      variant.availableForSale = true;
    });
    return clonedProduct;
  }
}

export async function getProductRecommendations(
  productId: string,
  lang: Locale
): Promise<Product[]> {
  const { mockProducts }: { mockProducts: Product[] } = await import(`../mock-data/${lang}.ts`);
  // Create a simple hash from productId to ensure consistent results
  const hash = productId.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

  // Use the hash as a seed for consistent "random" selection
  const availableProducts = mockProducts.filter((p) => p.id !== productId);
  const seed = Math.abs(hash);

  // Deterministic selection based on product ID hash
  const shuffled = [...availableProducts];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(
      ((((seed + i) * 9301 + 49297) % 233280) / 233280) * (i + 1)
    );
    if (j < shuffled.length) {
      const temp = shuffled[i]!;
      shuffled[i] = shuffled[j]!;
      shuffled[j] = temp;
    }
  }

  return shuffled.slice(0, 4);
}

export async function getProducts({
  query,
  reverse,
  sortKey,
  lang
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
  lang: Locale;
}): Promise<Product[]> {
  const { mockProducts }: { mockProducts: Product[] } = await import(`../mock-data/${lang}.ts`);
  let products = [...mockProducts];

  if (query) {
    products = products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
  }

  if (sortKey === 'PRICE') {
    products.sort(
      (a, b) =>
        parseFloat(a.priceRange.minVariantPrice.amount) -
        parseFloat(b.priceRange.minVariantPrice.amount)
    );
  }

  if (reverse) {
    products.reverse();
  }

  return products;
} 