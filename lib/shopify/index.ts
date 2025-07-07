import {
  HIDDEN_PRODUCT_TAG,
  SHOPIFY_GRAPHQL_API_ENDPOINT,
  TAGS,
} from "lib/constants";
import { isShopifyError } from "lib/type-guards";
import { ensureStartsWith } from "lib/utils";
import { revalidateTag } from "next/cache";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { mockProducts } from "../mock-data";
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery,
} from "./queries/collection";
import { getMenuQuery } from "./queries/menu";
import { getPageQuery, getPagesQuery } from "./queries/page";
import {
  getProductQuery,
  getProductRecommendationsQuery,
  getProductsQuery,
} from "./queries/product";
import {
  Cart,
  Collection,
  Connection,
  Image,
  Menu,
  Page,
  Product,
  ShopifyCart,
  ShopifyCollection,
  ShopifyCollectionOperation,
  ShopifyCollectionProductsOperation,
  ShopifyCollectionsOperation,
  ShopifyMenuOperation,
  ShopifyPageOperation,
  ShopifyPagesOperation,
  ShopifyProduct,
  ShopifyProductOperation,
  ShopifyProductRecommendationsOperation,
  ShopifyProductsOperation,
} from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://")
  : "";
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

// To make the app self-contained, we'll short-circuit the Shopify fetch
const USE_MOCK_DATA = true;

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

export async function shopifyFetch<T>({
  headers,
  query,
  variables,
  // Let's add an override to force a real fetch if needed
  forceFetch = false,
}: {
  headers?: HeadersInit;
  query: string;
  variables?: ExtractVariables<T>;
  forceFetch?: boolean;
}): Promise<{ status: number; body: T } | never> {
  // If we're using mock data and not forcing a real fetch, we can return early.
  // For now, we don't have mock responses for mutations, so we'll let them pass through.
  if (USE_MOCK_DATA && !forceFetch && !query.trim().startsWith("mutation")) {
    // This is a query. We'll handle it in the calling function.
    // We will return a dummy response. The actual logic will be in the exported functions.
    return {
      status: 200,
      body: {} as T,
    };
  }

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || "unknown",
        status: e.status || 500,
        message: e.message,
        query,
      };
    }

    throw {
      error: e,
      query,
    };
  }
}

const removeEdgesAndNodes = <T>(array: Connection<T>): T[] => {
  return array.edges.map((edge) => edge?.node);
};

const reshapeCart = (cart: ShopifyCart): Cart => {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: "0.0",
      currencyCode: cart.cost.totalAmount.currencyCode,
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines),
  };
};

const reshapeCollection = (
  collection: ShopifyCollection
): Collection | undefined => {
  if (!collection) {
    return undefined;
  }

  return {
    ...collection,
    path: `/search/${collection.handle}`,
  };
};

const reshapeCollections = (collections: ShopifyCollection[]) => {
  const reshapedCollections = [];

  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection);

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }

  return reshapedCollections;
};

const reshapeImages = (images: Connection<Image>, productTitle: string) => {
  const flattened = removeEdgesAndNodes(images);

  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)?.[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`,
    };
  });
};

const reshapeProduct = (
  product: ShopifyProduct,
  filterHiddenProducts: boolean = true
) => {
  if (
    !product ||
    (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))
  ) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants),
  };
};

const reshapeProducts = (products: ShopifyProduct[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

export async function getCart(): Promise<Cart> {
  const cartCookie = (await cookies()).get("cart")?.value;
  const cartItems: { merchandiseId: string; quantity: number }[] = cartCookie
    ? JSON.parse(cartCookie)
    : [];

  if (cartItems.length === 0) {
    return {
      id: "mock-cart",
      checkoutUrl: "/checkout/mock",
      cost: {
        subtotalAmount: { amount: "0.0", currencyCode: "USD" },
        totalAmount: { amount: "0.0", currencyCode: "USD" },
        totalTaxAmount: { amount: "0.0", currencyCode: "USD" },
      },
      lines: [],
      totalQuantity: 0,
    };
  }

  const lines: Cart["lines"] = [];
  let subtotal = 0;

  for (const item of cartItems) {
    // Find the variant and its parent product
    let variant;
    let product;

    for (const p of mockProducts) {
      const foundVariant = p.variants.find((v) => v.id === item.merchandiseId);
      if (foundVariant) {
        variant = foundVariant;
        product = p;
        break;
      }
    }

    if (variant && product) {
      const { variants, ...productForCart } = product;
      const lineTotal = parseFloat(variant.price.amount) * item.quantity;
      subtotal += lineTotal;

      lines.push({
        id: variant.id,
        quantity: item.quantity,
        cost: {
          totalAmount: {
            amount: lineTotal.toString(),
            currencyCode: "USD",
          },
        },
        merchandise: {
          id: variant.id,
          title: variant.title,
          selectedOptions: variant.selectedOptions,
          product: productForCart,
        },
      });
    }
  }

  return {
    id: "mock-cart",
    checkoutUrl: "/checkout/mock",
    cost: {
      subtotalAmount: { amount: subtotal.toString(), currencyCode: "USD" },
      totalAmount: { amount: subtotal.toString(), currencyCode: "USD" }, // Assuming no tax/shipping for mock
      totalTaxAmount: { amount: "0.0", currencyCode: "USD" },
    },
    lines: lines,
    totalQuantity: lines.reduce((acc, line) => acc + line.quantity, 0),
  };
}

export async function getCollection(
  handle: string
): Promise<Collection | undefined> {
  if (USE_MOCK_DATA) {
    const allCollections = await getCollections();
    return allCollections.find((col) => col.handle === handle);
  }

  const { body } = await shopifyFetch<ShopifyCollectionOperation>({
    query: getCollectionQuery,
    variables: {
      handle,
    },
  });

  return reshapeCollection(body.data.collection);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  if (USE_MOCK_DATA) {
    if (collection === "hidden-homepage-featured-items") {
      return mockProducts.slice(0, 3);
    }
    if (collection === "hidden-homepage-carousel") {
      return mockProducts.slice(3, 8);
    }
    const products = mockProducts.filter((product) =>
      product.tags.some((tag) => tag.toLowerCase() === collection.toLowerCase())
    );
    return products;
  }

  const { body } = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
    },
  });

  if (!body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(
    body.data.collection.products.edges.map((e) => e.node)
  );
}

export async function getCollections(): Promise<Collection[]> {
  if (USE_MOCK_DATA) {
    const allTags = new Set<string>();
    mockProducts.forEach((p) => p.tags.forEach((t) => allTags.add(t)));

    const collections = [
      {
        handle: "",
        title: "All",
        description: "All products",
        seo: {
          title: "All",
          description: "All products",
        },
        path: "/search",
        updatedAt: new Date().toISOString(),
      },
      ...Array.from(allTags).map(
        (tag) =>
          ({
            handle: tag.toLowerCase(),
            title: tag,
            description: `Products tagged with "${tag}"`,
            path: `/search/${tag.toLowerCase()}`,
            updatedAt: new Date().toISOString(),
          }) as Collection
      ),
    ];
    return collections;
  }
  // 'use cache';
  // cacheTag(TAGS.collections);
  // cacheLife('days');

  const res = await shopifyFetch<ShopifyCollectionsOperation>({
    query: getCollectionsQuery,
  });
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
  const collections = [
    {
      handle: "",
      title: "All",
      description: "All products",
      seo: {
        title: "All",
        description: "All products",
      },
      path: "/search",
      updatedAt: new Date().toISOString(),
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith("hidden")
    ),
  ];

  return collections;
}

export async function getMenu(handle: string): Promise<Menu[]> {
  if (USE_MOCK_DATA) {
    if (handle === "next-js-frontend-header-menu") {
      return [
        { title: "All", path: "/search" },
        { title: "Shirts", path: "/search/shirts" },
        { title: "Stickers", path: "/search/stickers" },
      ];
    }

    if (handle === "next-js-frontend-footer-menu") {
      return [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Terms & Conditions", path: "/terms-conditions" },
        { title: "Shipping & Return Policy", path: "/shipping-return-policy" },
        { title: "Privacy Policy", path: "/privacy-policy" },
        { title: "FAQ", path: "/faq" },
      ];
    }

    // Fallback for other menus if any
    const collections = await getCollections();
    const menu = collections.map((c) => ({
      title: c.title,
      path: c.path,
    }));
    return menu;
  }
  // 'use cache';
  // cacheTag(TAGS.collections);
  // cacheLife('days');

  const res = await shopifyFetch<ShopifyMenuOperation>({
    query: getMenuQuery,
    variables: {
      handle,
    },
  });

  return (
    res.body?.data?.menu?.items.map((item: { title: string; url: string }) => ({
      title: item.title,
      path: item.url
        .replace(domain, "")
        .replace("/collections", "/search")
        .replace("/pages", ""),
    })) || []
  );
}

export async function getPage(handle: string): Promise<Page> {
  if (USE_MOCK_DATA) {
    return {
      id: `page-${handle}`,
      title: `Mock Page: ${handle}`,
      handle: handle,
      body: `<p>This is a mock page for "${handle}". The content is generated automatically.</p>`,
      bodySummary: "This is a mock page.",
      seo: {
        title: `Mock Page: ${handle}`,
        description: `Mock page for ${handle}`,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
  const res = await shopifyFetch<ShopifyPageOperation>({
    query: getPageQuery,
    variables: { handle },
  });

  return res.body.data.pageByHandle;
}

export async function getPages(): Promise<Page[]> {
  if (USE_MOCK_DATA) {
    return [
      {
        id: "page-about",
        title: "About Us",
        handle: "about",
        body: '<p>This is a mock "About Us" page.</p>',
        bodySummary: "Mock about page",
        seo: { title: "About Us", description: "About us page" },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }
  const res = await shopifyFetch<ShopifyPagesOperation>({
    query: getPagesQuery,
  });

  return removeEdgesAndNodes(res.body.data.pages);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  if (USE_MOCK_DATA) {
    return mockProducts.find((p) => p.handle === handle);
  }
  // 'use cache';
  // cacheTag(TAGS.products);
  // cacheLife('days');

  const res = await shopifyFetch<ShopifyProductOperation>({
    query: getProductQuery,
    variables: {
      handle,
    },
  });

  return reshapeProduct(res.body.data.product, false);
}

export async function getProductRecommendations(
  productId: string
): Promise<Product[]> {
  if (USE_MOCK_DATA) {
    // Create a simple hash from productId to ensure consistent results
    const hash = productId.split("").reduce((a, b) => {
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
  // 'use cache';
  // cacheTag(TAGS.products);
  // cacheLife('days');

  const res = await shopifyFetch<ShopifyProductRecommendationsOperation>({
    query: getProductRecommendationsQuery,
    variables: {
      productId,
    },
  });

  return reshapeProducts(res.body.data.productRecommendations);
}

export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  if (USE_MOCK_DATA) {
    let products = [...mockProducts];

    if (query) {
      products = products.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      );
    }

    if (sortKey === "PRICE") {
      products.sort((a, b) => {
        const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
        const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
        return reverse ? priceB - priceA : priceA - priceB;
      });
    } else if (sortKey === "CREATED_AT") {
      products.sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return reverse ? dateA - dateB : dateB - dateA;
      });
    }
    return products;
  }
  // 'use cache';
  // cacheTag(TAGS.products);
  // cacheLife('days');

  const res = await shopifyFetch<ShopifyProductsOperation>({
    query: getProductsQuery,
    variables: {
      query,
      reverse,
      sortKey,
    },
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

// This is called from `app/api/revalidate.ts` so providers can control revalidation logic.
export async function revalidate(req: NextRequest): Promise<NextResponse> {
  // If we are using mock data, we can just return a success response.
  if (USE_MOCK_DATA) {
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
    });
  }

  // We always need to respond with a 200 status code to Shopify,
  // otherwise it will continue to retry the request.
  const collectionWebhooks = [
    "collections/create",
    "collections/delete",
    "collections/update",
  ];
  const productWebhooks = [
    "products/create",
    "products/delete",
    "products/update",
  ];
  const topic = (await headers()).get("x-shopify-topic") || "unknown";
  const secret = req.nextUrl.searchParams.get("secret");
  const isCollectionUpdate = collectionWebhooks.includes(topic);
  const isProductUpdate = productWebhooks.includes(topic);

  if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
    console.error("Invalid revalidation secret.");
    return NextResponse.json({ status: 401 });
  }

  if (!isCollectionUpdate && !isProductUpdate) {
    // We don't need to revalidate anything for any other topics.
    return NextResponse.json({ status: 200 });
  }

  if (isCollectionUpdate) {
    revalidateTag(TAGS.collections);
  }

  if (isProductUpdate) {
    revalidateTag(TAGS.products);
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
