import type { Product } from "lib/shopify/types";

const imagePath = (filename: string) => `/product-images/${filename}`;

export const mockProducts: Product[] = [
  // Headwear
  {
    id: "prod_cowboy_hat",
    handle: "classic-cowboy-hat",
    availableForSale: true,
    title: "Classic Cowboy Hat",
    description:
      "The perfect hat for a sunny day or a night out. Made from high-quality materials for a comfortable fit.",
    descriptionHtml:
      "<p>The perfect hat for a sunny day or a night out. Made from high-quality materials for a comfortable fit.</p>",
    options: [
      {
        id: "opt_hat_color",
        name: "Color",
        values: ["Black", "Tan"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "75.0", currencyCode: "USD" },
      minVariantPrice: { amount: "75.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_hat_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "75.0", currencyCode: "USD" },
      },
      {
        id: "var_hat_tan",
        title: "Tan",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Tan" }],
        price: { amount: "75.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("cowboy-hat-black-1.png"),
      altText: "Classic Cowboy Hat in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("cowboy-hat-black-1.png"),
        altText: "Classic Cowboy Hat in Black - View 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-black-2.png"),
        altText: "Classic Cowboy Hat in Black - View 2",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-black-3.png"),
        altText: "Classic Cowboy Hat in Black - View 3",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-black-4.png"),
        altText: "Classic Cowboy Hat in Black - View 4",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-black-5.png"),
        altText: "Classic Cowboy Hat in Black - View 5",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-black-6.png"),
        altText: "Classic Cowboy Hat in Black - View 6",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-tan-1.png"),
        altText: "Classic Cowboy Hat in Tan - View 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-tan-2.png"),
        altText: "Classic Cowboy Hat in Tan - View 2",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-tan-3.png"),
        altText: "Classic Cowboy Hat in Tan - View 3",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-tan-4.png"),
        altText: "Classic Cowboy Hat in Tan - View 4",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-tan-5.png"),
        altText: "Classic Cowboy Hat in Tan - View 5",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-tan-6.png"),
        altText: "Classic Cowboy Hat in Tan - View 6",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Classic Cowboy Hat",
      description: "The perfect hat for a sunny day or a night out.",
    },
    tags: ["Headwear"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_baseball_hat",
    handle: "classic-baseball-hat",
    availableForSale: true,
    title: "Classic Baseball Hat",
    description: "A timeless baseball hat, perfect for any casual occasion.",
    descriptionHtml:
      "<p>A timeless baseball hat, perfect for any casual occasion.</p>",
    options: [
      {
        id: "opt_bhat_style",
        name: "Style",
        values: ["Style 1", "Style 2", "Style 3"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "22.0", currencyCode: "USD" },
      minVariantPrice: { amount: "22.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_bhat_1",
        title: "Style 1",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 1" }],
        price: { amount: "22.0", currencyCode: "USD" },
      },
      {
        id: "var_bhat_2",
        title: "Style 2",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 2" }],
        price: { amount: "22.0", currencyCode: "USD" },
      },
      {
        id: "var_bhat_3",
        title: "Style 3",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 3" }],
        price: { amount: "22.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("hat-1.png"),
      altText: "Hat Style 1",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("hat-1.png"),
        altText: "Hat Style 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("hat-2.png"),
        altText: "Hat Style 2",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("hat-3.png"),
        altText: "Hat Style 3",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Classic Baseball Hat",
      description: "A timeless baseball hat, perfect for any casual occasion.",
    },
    tags: ["Headwear"],
    updatedAt: new Date().toISOString(),
  },

  // Shirts
  {
    id: "prod_tshirt_classic",
    handle: "classic-unisex-t-shirt",
    availableForSale: true,
    title: "Classic Unisex T-Shirt",
    description: "A comfortable, durable, and stylish t-shirt.",
    descriptionHtml:
      "<p>A comfortable, durable, and stylish t-shirt. Made from 100% premium cotton.</p>",
    options: [
      {
        id: "opt_tshirt_color",
        name: "Color",
        values: ["Black", "White", "Blue", "Pink", "Gray"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "25.0", currencyCode: "USD" },
      minVariantPrice: { amount: "25.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_tshirt_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_tshirt_white",
        title: "White",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "White" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_tshirt_blue",
        title: "Blue",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Blue" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_tshirt_pink",
        title: "Pink",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Pink" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_tshirt_gray",
        title: "Gray",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Gray" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("t-shirt-color-black.png"),
      altText: "Classic Unisex T-Shirt in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("t-shirt-color-black.png"),
        altText: "Classic Unisex T-Shirt in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-color-white.png"),
        altText: "Classic Unisex T-Shirt in White",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-color-blue.png"),
        altText: "Classic Unisex T-Shirt in Blue",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-color-pink.png"),
        altText: "Classic Unisex T-Shirt in Pink",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-color-gray.png"),
        altText: "Classic Unisex T-Shirt in Gray",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Classic Unisex T-Shirt",
      description: "A comfortable, durable, and stylish t-shirt.",
    },
    tags: ["Shirts"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_tshirt_circles",
    handle: "circles-graphic-t-shirt",
    availableForSale: true,
    title: "Circles Graphic T-Shirt",
    description: "A stylish t-shirt with a unique circular graphic design.",
    descriptionHtml:
      "<p>A stylish t-shirt with a unique circular graphic design.</p>",
    options: [
      {
        id: "opt_tcircles_color",
        name: "Color",
        values: ["Black", "Blue", "White"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "28.0", currencyCode: "USD" },
      minVariantPrice: { amount: "28.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_tcircles_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "28.0", currencyCode: "USD" },
      },
      {
        id: "var_tcircles_blue",
        title: "Blue",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Blue" }],
        price: { amount: "28.0", currencyCode: "USD" },
      },
      {
        id: "var_tcircles_white",
        title: "White",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "White" }],
        price: { amount: "28.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("t-shirt-circles-black.png"),
      altText: "Circles Graphic T-Shirt in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("t-shirt-circles-black.png"),
        altText: "Circles Graphic T-Shirt in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-circles-blue.png"),
        altText: "Circles Graphic T-Shirt in Blue",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-circles-white.png"),
        altText: "Circles Graphic T-Shirt in White",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Circles Graphic T-Shirt",
      description: "A stylish t-shirt with a unique circular graphic design.",
    },
    tags: ["Shirts"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_tshirt_spiral",
    handle: "spiral-graphic-t-shirt",
    availableForSale: true,
    title: "Spiral Graphic T-Shirt",
    description: "A vibrant t-shirt with a mesmerizing spiral design.",
    descriptionHtml:
      "<p>A vibrant t-shirt with a mesmerizing spiral design.</p>",
    options: [
      {
        id: "opt_tspiral_style",
        name: "Style",
        values: ["Style 1", "Style 2", "Style 3", "Style 4"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "28.0", currencyCode: "USD" },
      minVariantPrice: { amount: "28.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_tspiral_1",
        title: "Style 1",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 1" }],
        price: { amount: "28.0", currencyCode: "USD" },
      },
      {
        id: "var_tspiral_2",
        title: "Style 2",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 2" }],
        price: { amount: "28.0", currencyCode: "USD" },
      },
      {
        id: "var_tspiral_3",
        title: "Style 3",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 3" }],
        price: { amount: "28.0", currencyCode: "USD" },
      },
      {
        id: "var_tspiral_4",
        title: "Style 4",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 4" }],
        price: { amount: "28.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("t-shirt-spiral-1.png"),
      altText: "Spiral Graphic T-Shirt - Style 1",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("t-shirt-spiral-1.png"),
        altText: "Spiral Graphic T-Shirt - Style 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-spiral-2.png"),
        altText: "Spiral Graphic T-Shirt - Style 2",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-spiral-3.png"),
        altText: "Spiral Graphic T-Shirt - Style 3",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-spiral-4.png"),
        altText: "Spiral Graphic T-Shirt - Style 4",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Spiral Graphic T-Shirt",
      description: "A vibrant t-shirt with a mesmerizing spiral design.",
    },
    tags: ["Shirts"],
    updatedAt: new Date().toISOString(),
  },

  // Jackets
  {
    id: "prod_bomber_jacket",
    handle: "flight-bomber-jacket",
    availableForSale: true,
    title: "Flight Bomber Jacket",
    description: "A timeless bomber jacket with a modern fit.",
    descriptionHtml:
      "<p>A timeless bomber jacket with a modern fit. Features a full-zip front and a ribbed collar, cuffs, and hem.</p>",
    options: [
      {
        id: "opt_jacket_color",
        name: "Color",
        values: ["Black", "Army Green"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "120.0", currencyCode: "USD" },
      minVariantPrice: { amount: "120.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_jacket_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "120.0", currencyCode: "USD" },
      },
      {
        id: "var_jacket_army",
        title: "Army Green",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Army Green" }],
        price: { amount: "120.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("bomber-jacket-black.png"),
      altText: "Flight Bomber Jacket in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("bomber-jacket-black.png"),
        altText: "Flight Bomber Jacket in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("bomber-jacket-army.png"),
        altText: "Flight Bomber Jacket in Army Green",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Flight Bomber Jacket",
      description: "A timeless bomber jacket with a modern fit.",
    },
    tags: ["Jackets"],
    updatedAt: new Date().toISOString(),
  },

  // Hoodies
  {
    id: "prod_hoodie",
    handle: "cozy-pullover-hoodie",
    availableForSale: true,
    title: "Cozy Pullover Hoodie",
    description: "The perfect hoodie for staying warm and comfortable.",
    descriptionHtml:
      "<p>The perfect hoodie for staying warm and comfortable. Made from a soft cotton blend.</p>",
    options: [
      { id: "opt_hoodie_color", name: "Color", values: ["Spirited", "Gray"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "65.0", currencyCode: "USD" },
      minVariantPrice: { amount: "65.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_hoodie_spirited",
        title: "Spirited",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Spirited" }],
        price: { amount: "65.0", currencyCode: "USD" },
      },
      {
        id: "var_hoodie_gray",
        title: "Gray",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Gray" }],
        price: { amount: "65.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("hoodie-1.png"),
      altText: "Cozy Pullover Hoodie - Spirited",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("hoodie-1.png"),
        altText: "Cozy Pullover Hoodie - Spirited",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("hoodie-2.png"),
        altText: "Cozy Pullover Hoodie - Gray",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Cozy Pullover Hoodie",
      description: "The perfect hoodie for staying warm and comfortable.",
    },
    tags: ["Hoodies"],
    updatedAt: new Date().toISOString(),
  },

  // Footwear
  {
    id: "prod_shoes",
    handle: "canvas-sneakers",
    availableForSale: true,
    title: "Canvas Sneakers",
    description: "Versatile canvas sneakers for everyday wear.",
    descriptionHtml: "<p>Versatile canvas sneakers for everyday wear.</p>",
    options: [
      {
        id: "opt_shoes_style",
        name: "Style",
        values: ["Style 1", "Style 2", "Style 3", "Style 4"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "85.0", currencyCode: "USD" },
      minVariantPrice: { amount: "85.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_shoes_1",
        title: "Style 1",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 1" }],
        price: { amount: "85.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_2",
        title: "Style 2",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 2" }],
        price: { amount: "85.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_3",
        title: "Style 3",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 3" }],
        price: { amount: "85.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_4",
        title: "Style 4",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 4" }],
        price: { amount: "85.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("shoes-1.png"),
      altText: "Canvas Sneakers - Style 1",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("shoes-1.png"),
        altText: "Canvas Sneakers - Style 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("shoes-2.png"),
        altText: "Canvas Sneakers - Style 2",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("shoes-3.png"),
        altText: "Canvas Sneakers - Style 3",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("shoes-4.png"),
        altText: "Canvas Sneakers - Style 4",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Canvas Sneakers",
      description: "Versatile canvas sneakers for everyday wear.",
    },
    tags: ["Footwear"],
    updatedAt: new Date().toISOString(),
  },

  // Bags
  {
    id: "prod_canvas_bag",
    handle: "everyday-canvas-bag",
    availableForSale: true,
    title: "Everyday Canvas Bag",
    description: "A versatile and durable canvas bag.",
    descriptionHtml:
      "<p>A versatile and durable canvas bag, perfect for daily use, shopping, or a day at the beach.</p>",
    options: [
      { id: "opt_bag_color", name: "Color", values: ["Black", "White"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "45.0", currencyCode: "USD" },
      minVariantPrice: { amount: "45.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_bag_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_bag_white",
        title: "White",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "White" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("bag-black.png"),
      altText: "Everyday Canvas Bag in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("bag-black.png"),
        altText: "Everyday Canvas Bag in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("bag-white.png"),
        altText: "Everyday Canvas Bag in White",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Everyday Canvas Bag",
      description: "A versatile and durable canvas bag for daily use.",
    },
    tags: ["Bags"],
    updatedAt: new Date().toISOString(),
  },

  // Kids
  {
    id: "prod_baby_cap",
    handle: "soft-baby-cap",
    availableForSale: true,
    title: "Soft Baby Cap",
    description: "Keep your little one cozy and cute with our soft baby cap.",
    descriptionHtml:
      "<p>Keep your little one cozy and cute with our soft baby cap. Made from 100% organic cotton.</p>",
    options: [
      {
        id: "opt_babycap_color",
        name: "Color",
        values: ["Black", "Gray", "White"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "15.0", currencyCode: "USD" },
      minVariantPrice: { amount: "15.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_babycap_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "15.0", currencyCode: "USD" },
      },
      {
        id: "var_babycap_gray",
        title: "Gray",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Gray" }],
        price: { amount: "15.0", currencyCode: "USD" },
      },
      {
        id: "var_babycap_white",
        title: "White",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "White" }],
        price: { amount: "15.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("baby-cap-white.png"),
      altText: "Soft Baby Cap in White",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("baby-cap-white.png"),
        altText: "Soft Baby Cap in White",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("baby-cap-black.png"),
        altText: "Soft Baby Cap in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("baby-cap-gray.png"),
        altText: "Soft Baby Cap in Gray",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Soft Baby Cap",
      description: "Keep your little one cozy and cute with our soft baby cap.",
    },
    tags: ["Kids", "Headwear"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_baby_onesie",
    handle: "cozy-baby-onesie",
    availableForSale: true,
    title: "Cozy Baby Onesie",
    description: "A soft and comfortable onesie for your baby.",
    descriptionHtml:
      "<p>A soft and comfortable onesie for your baby, made from 100% organic cotton.</p>",
    options: [
      {
        id: "opt_onesie_color",
        name: "Color",
        values: ["Beige", "Black", "White"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "20.0", currencyCode: "USD" },
      minVariantPrice: { amount: "20.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_onesie_beige",
        title: "Beige",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Beige" }],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_white",
        title: "White",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "White" }],
        price: { amount: "20.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("baby-onesie-beige-1.png"),
      altText: "Cozy Baby Onesie in Beige",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("baby-onesie-beige-1.png"),
        altText: "Cozy Baby Onesie in Beige",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("baby-onesie-beige-2.png"),
        altText: "Cozy Baby Onesie in Beige",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("baby-onesie-black-1.png"),
        altText: "Cozy Baby Onesie in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("baby-onesie-black-2.png"),
        altText: "Cozy Baby Onesie in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("baby-onesie-white-1.png"),
        altText: "Cozy Baby Onesie in White",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("baby-onesie-white-2.png"),
        altText: "Cozy Baby Onesie in White",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Cozy Baby Onesie",
      description: "A soft and comfortable onesie for your baby.",
    },
    tags: ["Kids"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_pacifier",
    handle: "modern-pacifier",
    availableForSale: true,
    title: "Modern Pacifier",
    description: "A safe and stylish pacifier for your little one.",
    descriptionHtml: "<p>A safe and stylish pacifier for your little one.</p>",
    options: [
      {
        id: "opt_pacifier_style",
        name: "Style",
        values: ["Style 1", "Style 2"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "8.0", currencyCode: "USD" },
      minVariantPrice: { amount: "8.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_pacifier_1",
        title: "Style 1",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 1" }],
        price: { amount: "8.0", currencyCode: "USD" },
      },
      {
        id: "var_pacifier_2",
        title: "Style 2",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 2" }],
        price: { amount: "8.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("pacifier-1.png"),
      altText: "Modern Pacifier - Style 1",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("pacifier-1.png"),
        altText: "Modern Pacifier - Style 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("pacifier-2.png"),
        altText: "Modern Pacifier - Style 2",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Modern Pacifier",
      description: "A safe and stylish pacifier for your little one.",
    },
    tags: ["Kids"],
    updatedAt: new Date().toISOString(),
  },

  // Pets
  {
    id: "prod_dog_sweater",
    handle: "cozy-dog-sweater",
    availableForSale: true,
    title: "Cozy Dog Sweater",
    description:
      "Keep your furry friend warm and stylish with this cozy sweater.",
    descriptionHtml:
      "<p>Keep your furry friend warm and stylish with this cozy sweater.</p>",
    options: [
      {
        id: "opt_dogsweater_style",
        name: "Style",
        values: ["Style 1", "Style 2"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "30.0", currencyCode: "USD" },
      minVariantPrice: { amount: "30.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_dogsweater_1",
        title: "Style 1",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 1" }],
        price: { amount: "30.0", currencyCode: "USD" },
      },
      {
        id: "var_dogsweater_2",
        title: "Style 2",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 2" }],
        price: { amount: "30.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("dog-sweater-1.png"),
      altText: "Cozy Dog Sweater - Style 1",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("dog-sweater-1.png"),
        altText: "Cozy Dog Sweater - Style 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("dog-sweater-2.png"),
        altText: "Cozy Dog Sweater - Style 2",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Cozy Dog Sweater",
      description: "A warm and stylish sweater for your dog.",
    },
    tags: ["Pets"],
    updatedAt: new Date().toISOString(),
  },

  // Drinkware
  {
    id: "prod_cup",
    handle: "reusable-cup",
    availableForSale: true,
    title: "Reusable Cup",
    description: "A stylish and eco-friendly reusable cup.",
    descriptionHtml: "<p>A stylish and eco-friendly reusable cup.</p>",
    options: [
      { id: "opt_cup_color", name: "Color", values: ["Black", "White"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "18.0", currencyCode: "USD" },
      minVariantPrice: { amount: "18.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_cup_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "18.0", currencyCode: "USD" },
      },
      {
        id: "var_cup_white",
        title: "White",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "White" }],
        price: { amount: "18.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("cup-black.png"),
      altText: "Reusable Cup in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("cup-black.png"),
        altText: "Reusable Cup in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cup-white.png"),
        altText: "Reusable Cup in White",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Reusable Cup",
      description: "A stylish and eco-friendly reusable cup.",
    },
    tags: ["Drinkware"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_mug",
    handle: "ceramic-mug",
    availableForSale: true,
    title: "Ceramic Mug",
    description: "A classic ceramic mug for your favorite beverage.",
    descriptionHtml: "<p>A classic ceramic mug for your favorite beverage.</p>",
    options: [
      { id: "opt_mug_style", name: "Style", values: ["Style 1", "Style 2"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "15.0", currencyCode: "USD" },
      minVariantPrice: { amount: "15.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_mug_1",
        title: "Style 1",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 1" }],
        price: { amount: "15.0", currencyCode: "USD" },
      },
      {
        id: "var_mug_2",
        title: "Style 2",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Style 2" }],
        price: { amount: "15.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("mug-1.png"),
      altText: "Ceramic Mug - Style 1",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("mug-1.png"),
        altText: "Ceramic Mug - Style 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("mug-2.png"),
        altText: "Ceramic Mug - Style 2",
        width: 1000,
        height: 1000,
      },
    ],
    seo: { title: "Ceramic Mug", description: "A classic ceramic mug." },
    tags: ["Drinkware"],
    updatedAt: new Date().toISOString(),
  },

  // Electronics
  {
    id: "prod_keyboard",
    handle: "mechanical-keyboard",
    availableForSale: true,
    title: "Mechanical Keyboard",
    description:
      "A high-performance mechanical keyboard for typing and gaming.",
    descriptionHtml:
      "<p>A high-performance mechanical keyboard for typing and gaming.</p>",
    options: [{ id: "opt_keyboard_style", name: "Style", values: ["Default"] }],
    priceRange: {
      maxVariantPrice: { amount: "150.0", currencyCode: "USD" },
      minVariantPrice: { amount: "150.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_keyboard_default",
        title: "Default",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Default" }],
        price: { amount: "150.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("keyboard.png"),
      altText: "Mechanical Keyboard",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("keyboard.png"),
        altText: "Mechanical Keyboard",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Mechanical Keyboard",
      description: "A high-performance mechanical keyboard.",
    },
    tags: ["Electronics"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_webcam_cover",
    handle: "privacy-webcam-cover",
    availableForSale: true,
    title: "Privacy Webcam Cover",
    description: "A simple and effective way to protect your privacy.",
    descriptionHtml:
      "<p>A simple and effective way to protect your privacy.</p>",
    options: [{ id: "opt_webcam_style", name: "Style", values: ["Default"] }],
    priceRange: {
      maxVariantPrice: { amount: "5.0", currencyCode: "USD" },
      minVariantPrice: { amount: "5.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_webcam_default",
        title: "Default",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Default" }],
        price: { amount: "5.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("webcam-cover.png"),
      altText: "Privacy Webcam Cover",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("webcam-cover.png"),
        altText: "Privacy Webcam Cover",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Privacy Webcam Cover",
      description: "Protect your privacy with this webcam cover.",
    },
    tags: ["Electronics"],
    updatedAt: new Date().toISOString(),
  },

  // Stickers
  {
    id: "prod_stickers",
    handle: "sticker-pack",
    availableForSale: true,
    title: "Sticker Pack",
    description: "A collection of high-quality, durable stickers.",
    descriptionHtml: "<p>A collection of high-quality, durable stickers.</p>",
    options: [
      {
        id: "opt_sticker_style",
        name: "Style",
        values: ["Standard", "Rainbow"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "10.0", currencyCode: "USD" },
      minVariantPrice: { amount: "10.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_sticker_standard",
        title: "Standard",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Standard" }],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_sticker_rainbow",
        title: "Rainbow",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Rainbow" }],
        price: { amount: "10.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("sticker.png"),
      altText: "Sticker Pack - Standard",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("sticker.png"),
        altText: "Sticker Pack - Standard",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("sticker-rainbow.png"),
        altText: "Sticker Pack - Rainbow",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Sticker Pack",
      description: "A collection of high-quality stickers.",
    },
    tags: ["Stickers"],
    updatedAt: new Date().toISOString(),
  },
];
