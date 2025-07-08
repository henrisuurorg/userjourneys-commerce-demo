import type { Product } from "lib/shopify-mock/types";

const imagePath = (filename: string) => `/product-images/${filename}`;

export const mockProducts: Product[] = [
  // Bags
  {
    id: "prod_drawstring_bag",
    handle: "acme-drawstring-bag",
    availableForSale: true,
    title: "Acme Drawstring Bag",
    description:
      "Strong 210D ripstop nylon drawstring bag. Available in multiple sizes. Easy-to-close durable drawstring. Sturdy, reusable, and resilient.",
    descriptionHtml:
      "<p>Strong 210D ripstop nylon drawstring bag. Available in multiple sizes. Easy-to-close durable drawstring. Sturdy, reusable, and resilient.</p>",
    options: [
      {
        id: "opt_drawstring_color",
        name: "Color",
        values: ["Black", "White"],
      },
      {
        id: "opt_drawstring_size",
        name: "Size",
        values: [
          "6 x 8 inch",
          "7 x 9 inch",
          "8 x 11 inch",
          "9 x 12 inch",
          "10 x 15 inch",
          "12 x 16 inch",
        ],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "12.0", currencyCode: "USD" },
      minVariantPrice: { amount: "12.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_drawstring_black_6x8",
        title: "Black / 6 x 8 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "6 x 8 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_black_7x9",
        title: "Black / 7 x 9 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "7 x 9 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_black_8x11",
        title: "Black / 8 x 11 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "8 x 11 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_black_9x12",
        title: "Black / 9 x 12 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "9 x 12 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_black_10x15",
        title: "Black / 10 x 15 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "10 x 15 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_black_12x16",
        title: "Black / 12 x 16 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "12 x 16 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_white_6x8",
        title: "White / 6 x 8 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "6 x 8 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_white_7x9",
        title: "White / 7 x 9 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "7 x 9 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_white_8x11",
        title: "White / 8 x 11 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "8 x 11 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_white_9x12",
        title: "White / 9 x 12 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "9 x 12 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_white_10x15",
        title: "White / 10 x 15 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "10 x 15 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
      {
        id: "var_drawstring_white_12x16",
        title: "White / 12 x 16 inch",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "12 x 16 inch" },
        ],
        price: { amount: "12.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("bag-black.png"),
      altText: "Acme Drawstring Bag in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("bag-black.png"),
        altText: "Acme Drawstring Bag in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("bag-white.png"),
        altText: "Acme Drawstring Bag in White",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Drawstring Bag",
      description:
        "Strong 210D ripstop nylon drawstring bag available in multiple sizes.",
    },
    tags: ["Bags"],
    updatedAt: new Date().toISOString(),
  },
  // Drinkware
  {
    id: "prod_acme_cup",
    handle: "acme-cup",
    availableForSale: true,
    title: "Acme Cup",
    description: "12oz double wall ceramic body with a padded bottom.",
    descriptionHtml:
      "<p>12oz double wall ceramic body with a padded bottom.</p>",
    options: [
      {
        id: "opt_acme_cup_color",
        name: "Color",
        values: ["Black", "White"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "15.0", currencyCode: "USD" },
      minVariantPrice: { amount: "15.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_acme_cup_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "15.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_cup_white",
        title: "White",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "White" }],
        price: { amount: "15.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("cup-black.png"),
      altText: "Acme Cup in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("cup-black.png"),
        altText: "Acme Cup in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cup-white.png"),
        altText: "Acme Cup in White",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Cup",
      description: "12oz double wall ceramic body with a padded bottom.",
    },
    tags: ["Drinkware"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_acme_mug",
    handle: "acme-mug",
    availableForSale: true,
    title: "Acme Mug",
    description: "12 oz Beck Cork-Bottom Mug.",
    descriptionHtml: "<p>12 oz Beck Cork-Bottom Mug.</p>",
    options: [
      {
        id: "opt_acme_mug_style",
        name: "Style",
        values: ["Default"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "15.0", currencyCode: "USD" },
      minVariantPrice: { amount: "15.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_acme_mug_default",
        title: "Default",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Default" }],
        price: { amount: "15.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("mug-1.png"),
      altText: "Acme Mug",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("mug-1.png"),
        altText: "Acme Mug",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Mug",
      description: "12 oz Beck Cork-Bottom Mug.",
    },
    tags: ["Drinkware"],
    updatedAt: new Date().toISOString(),
  },
  // Electronics
  {
    id: "prod_acme_keyboard",
    handle: "acme-keyboard",
    availableForSale: false,
    title: "Acme Keyboard",
    description: "High-quality mechanical keyboard for professional use.",
    descriptionHtml:
      "<p>High-quality mechanical keyboard for professional use.</p>",
    options: [
      {
        id: "opt_acme_keyboard_style",
        name: "Style",
        values: ["Default"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "150.0", currencyCode: "USD" },
      minVariantPrice: { amount: "150.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_acme_keyboard_default",
        title: "Default",
        availableForSale: false,
        selectedOptions: [{ name: "Style", value: "Default" }],
        price: { amount: "150.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("keyboard.png"),
      altText: "Acme Keyboard",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("keyboard.png"),
        altText: "Acme Keyboard",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Keyboard",
      description: "High-quality mechanical keyboard for professional use.",
    },
    tags: ["Electronics"],
    updatedAt: new Date().toISOString(),
  },
  // Footwear
  {
    id: "prod_slip_on_shoes",
    handle: "acme-slip-on-shoes",
    availableForSale: true,
    title: "Acme Slip-On Shoes",
    description:
      "Step into summer! Every time your head looks down, you'll see these beauties, and your mood bounces right back up. Sleek, easy, and effortlessly stylish. Acme Slip-On Shoes are the ultimate get-up-and-go footwear. The low-profile slip-on canvas upper offers unbeatable convenience, while the clean design makes this all-white slip-on the perfect choice for anyone with places to go and things to do. One of the most popular designs, these shoes are the perfect middle ground between style and convenience. Iconic slip-on shoe. Low profile canvas uppers. Supportive padded collars. Elastic side accents. Signature rubber waffle outsoles.",
    descriptionHtml:
      "<p>Step into summer! Every time your head looks down, you'll see these beauties, and your mood bounces right back up.</p><p>Sleek, easy, and effortlessly stylish. Acme Slip-On Shoes are the ultimate get-up-and-go footwear. The low-profile slip-on canvas upper offers unbeatable convenience, while the clean design makes this all-white slip-on the perfect choice for anyone with places to go and things to do. One of the most popular designs, these shoes are the perfect middle ground between style and convenience.</p><ul><li>Iconic slip-on shoe</li><li>Low profile canvas uppers</li><li>Supportive padded collars</li><li>Elastic side accents</li><li>Signature rubber waffle outsoles</li></ul>",
    options: [
      {
        id: "opt_shoes_size",
        name: "Size",
        values: [
          "1",
          "1.5",
          "2",
          "2.5",
          "3",
          "3.5",
          "4",
          "4.5",
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
        ],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "45.0", currencyCode: "USD" },
      minVariantPrice: { amount: "45.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_shoes_1",
        title: "1",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "1" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_1_5",
        title: "1.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "1.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_2",
        title: "2",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "2" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_2_5",
        title: "2.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "2.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_3",
        title: "3",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "3" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_3_5",
        title: "3.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "3.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_4",
        title: "4",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "4" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_4_5",
        title: "4.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "4.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_5",
        title: "5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_5_5",
        title: "5.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "5.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_6",
        title: "6",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "6" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_6_5",
        title: "6.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "6.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_7",
        title: "7",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "7" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_7_5",
        title: "7.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "7.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_8",
        title: "8",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "8" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_8_5",
        title: "8.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "8.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_9",
        title: "9",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "9" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_9_5",
        title: "9.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "9.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_10",
        title: "10",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "10" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_10_5",
        title: "10.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "10.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_11",
        title: "11",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "11" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_11_5",
        title: "11.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "11.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_12",
        title: "12",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "12" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_12_5",
        title: "12.5",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "12.5" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
      {
        id: "var_shoes_13",
        title: "13",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "13" }],
        price: { amount: "45.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("shoes-1.png"),
      altText: "Acme Slip-On Shoes",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("shoes-1.png"),
        altText: "Acme Slip-On Shoes - Style 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("shoes-2.png"),
        altText: "Acme Slip-On Shoes - Style 2",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("shoes-3.png"),
        altText: "Acme Slip-On Shoes - Style 3",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("shoes-4.png"),
        altText: "Acme Slip-On Shoes - Style 4",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Slip-On Shoes",
      description:
        "Sleek, easy, and effortlessly stylish slip-on shoes for ultimate convenience.",
    },
    tags: ["Footwear"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_acme_baby_cap",
    handle: "acme-baby-cap",
    availableForSale: true,
    title: "Acme Baby Cap",
    description: "100% combed ringspun cotton baby cap for ultimate comfort.",
    descriptionHtml:
      "<p>100% combed ringspun cotton baby cap for ultimate comfort.</p>",
    options: [
      {
        id: "opt_baby_cap_color",
        name: "Color",
        values: ["Black", "Gray", "White"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "10.0", currencyCode: "USD" },
      minVariantPrice: { amount: "10.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_baby_cap_black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_baby_cap_gray",
        title: "Gray",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Gray" }],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_baby_cap_white",
        title: "White",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "White" }],
        price: { amount: "10.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("baby-cap-white.png"),
      altText: "Acme Baby Cap in White",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("baby-cap-white.png"),
        altText: "Acme Baby Cap in White",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("baby-cap-black.png"),
        altText: "Acme Baby Cap in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("baby-cap-gray.png"),
        altText: "Acme Baby Cap in Gray",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Baby Cap",
      description: "100% combed ringspun cotton baby cap for ultimate comfort.",
    },
    tags: ["Kids", "Headwear"],
    updatedAt: new Date().toISOString(),
  },

  // Headwear
  {
    id: "prod_acme_cowboy_hat",
    handle: "acme-cowboy-hat",
    availableForSale: true,
    title: "Acme Cowboy Hat",
    description:
      'Part of our Buffalo collection, this cowboy hat is made in the USA of high-quality, weather-resistant 4X buffalo felt. Its classic Western profile features a classic cattleman crease, a 4" brim and a 4 1/2" regular oval crown. Additional details include a leather sweatband, satin lining, and a self-matching hat band with a three-piece silver-toned buckle set, as well as a hat box. 4" Brim. 4 1/2" Regular Oval Crown. Cattleman Crease. Self-Matching Hat Band. 3-Piece Silver Buckle Set. Hat Box. 4X Wool Felt Construction. American Buffalo Collection. Made in the USA.',
    descriptionHtml:
      '<p>Part of our Buffalo collection, this cowboy hat is made in the USA of high-quality, weather-resistant 4X buffalo felt. Its classic Western profile features a classic cattleman crease, a 4" brim and a 4 1/2" regular oval crown.</p><p>Additional details include a leather sweatband, satin lining, and a self-matching hat band with a three-piece silver-toned buckle set, as well as a hat box.</p><ul><li>4" Brim</li><li>4 1/2" Regular Oval Crown</li><li>Cattleman Crease</li><li>Self-Matching Hat Band</li><li>3-Piece Silver Buckle Set</li><li>Hat Box</li><li>4X Wool Felt Construction</li><li>American Buffalo Collection</li><li>Made in the USA</li></ul>',
    options: [
      {
        id: "opt_cowboy_color",
        name: "Color",
        values: ["Black", "Tan"],
      },
      {
        id: "opt_cowboy_size",
        name: "Size",
        values: [
          "6 3/4",
          "6 7/8",
          "7",
          "7 1/8",
          "7 1/4",
          "7 3/8",
          "7 1/2",
          "7 5/8",
          "7 3/4",
        ],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "160.0", currencyCode: "USD" },
      minVariantPrice: { amount: "160.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_cowboy_black_6_3_4",
        title: "Black / 6 3/4",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "6 3/4" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_black_6_7_8",
        title: "Black / 6 7/8",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "6 7/8" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_black_7",
        title: "Black / 7",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "7" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_black_7_1_8",
        title: "Black / 7 1/8",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "7 1/8" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_black_7_1_4",
        title: "Black / 7 1/4",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "7 1/4" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_black_7_3_8",
        title: "Black / 7 3/8",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "7 3/8" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_black_7_1_2",
        title: "Black / 7 1/2",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "7 1/2" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_black_7_5_8",
        title: "Black / 7 5/8",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "7 5/8" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_black_7_3_4",
        title: "Black / 7 3/4",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "7 3/4" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_tan_6_3_4",
        title: "Tan / 6 3/4",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Tan" },
          { name: "Size", value: "6 3/4" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_tan_6_7_8",
        title: "Tan / 6 7/8",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Tan" },
          { name: "Size", value: "6 7/8" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_tan_7",
        title: "Tan / 7",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Tan" },
          { name: "Size", value: "7" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_tan_7_1_8",
        title: "Tan / 7 1/8",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Tan" },
          { name: "Size", value: "7 1/8" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_tan_7_1_4",
        title: "Tan / 7 1/4",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Tan" },
          { name: "Size", value: "7 1/4" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_tan_7_3_8",
        title: "Tan / 7 3/8",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Tan" },
          { name: "Size", value: "7 3/8" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_tan_7_1_2",
        title: "Tan / 7 1/2",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Tan" },
          { name: "Size", value: "7 1/2" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_tan_7_5_8",
        title: "Tan / 7 5/8",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Tan" },
          { name: "Size", value: "7 5/8" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
      {
        id: "var_cowboy_tan_7_3_4",
        title: "Tan / 7 3/4",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Tan" },
          { name: "Size", value: "7 3/4" },
        ],
        price: { amount: "160.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("cowboy-hat-black-1.png"),
      altText: "Acme Cowboy Hat in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("cowboy-hat-black-1.png"),
        altText: "Acme Cowboy Hat in Black - View 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-black-2.png"),
        altText: "Acme Cowboy Hat in Black - View 2",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-tan-1.png"),
        altText: "Acme Cowboy Hat in Tan - View 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("cowboy-hat-tan-2.png"),
        altText: "Acme Cowboy Hat in Tan - View 2",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Cowboy Hat",
      description:
        "High-quality, weather-resistant 4X buffalo felt cowboy hat made in the USA.",
    },
    tags: ["Headwear"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_acme_cap",
    handle: "acme-cap",
    availableForSale: true,
    title: "Acme Cap",
    description: "100% peach-washed cotton cap for comfortable everyday wear.",
    descriptionHtml:
      "<p>100% peach-washed cotton cap for comfortable everyday wear.</p>",
    options: [
      {
        id: "opt_acme_cap_style",
        name: "Style",
        values: ["Default"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "20.0", currencyCode: "USD" },
      minVariantPrice: { amount: "20.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_acme_cap_default",
        title: "Default",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Default" }],
        price: { amount: "20.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("hat-1.png"),
      altText: "Acme Cap",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("hat-1.png"),
        altText: "Acme Cap",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Cap",
      description:
        "100% peach-washed cotton cap for comfortable everyday wear.",
    },
    tags: ["Headwear"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_acme_hoodie",
    handle: "acme-hoodie",
    availableForSale: true,
    title: "Acme Hoodie",
    description:
      "Fabric blend of Supima Cotton and Micromodal for ultimate comfort and warmth.",
    descriptionHtml:
      "<p>Fabric blend of Supima Cotton and Micromodal for ultimate comfort and warmth.</p>",
    options: [
      {
        id: "opt_hoodie_size",
        name: "Size",
        values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "50.0", currencyCode: "USD" },
      minVariantPrice: { amount: "50.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_hoodie_xs",
        title: "XS",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_hoodie_s",
        title: "S",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_hoodie_m",
        title: "M",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_hoodie_l",
        title: "L",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_hoodie_xl",
        title: "XL",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XL" }],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_hoodie_xxl",
        title: "XXL",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXL" }],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_hoodie_xxxl",
        title: "XXXL",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXXL" }],
        price: { amount: "50.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("hoodie-1.png"),
      altText: "Acme Hoodie",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("hoodie-1.png"),
        altText: "Acme Hoodie",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("hoodie-2.png"),
        altText: "Acme Hoodie - Alternative View",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Hoodie",
      description:
        "Fabric blend of Supima Cotton and Micromodal for ultimate comfort.",
    },
    tags: ["Hoodies"],
    updatedAt: new Date().toISOString(),
  },

  // Jackets
  {
    id: "prod_acme_bomber_jacket",
    handle: "acme-bomber-jacket",
    availableForSale: true,
    title: "Acme Bomber Jacket",
    description:
      "The multi-season must-have jacket: light and classic for daily wear, with a soft fleece lining for extra warmth.",
    descriptionHtml:
      "<p>The multi-season must-have jacket: light and classic for daily wear, with a soft fleece lining for extra warmth.</p>",
    options: [
      {
        id: "opt_bomber_size",
        name: "Size",
        values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      },
      {
        id: "opt_bomber_color",
        name: "Color",
        values: ["Army", "Black"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "50.0", currencyCode: "USD" },
      minVariantPrice: { amount: "50.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_bomber_army_xs",
        title: "Army / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Army" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_army_s",
        title: "Army / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Army" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_army_m",
        title: "Army / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Army" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_army_l",
        title: "Army / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Army" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_army_xl",
        title: "Army / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Army" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_army_xxl",
        title: "Army / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Army" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_army_xxxl",
        title: "Army / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Army" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_black_xs",
        title: "Black / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_black_s",
        title: "Black / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_black_m",
        title: "Black / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_black_l",
        title: "Black / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_black_xl",
        title: "Black / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_black_xxl",
        title: "Black / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
      {
        id: "var_bomber_black_xxxl",
        title: "Black / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "50.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("bomber-jacket-black.png"),
      altText: "Acme Bomber Jacket in Black",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("bomber-jacket-black.png"),
        altText: "Acme Bomber Jacket in Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("bomber-jacket-army.png"),
        altText: "Acme Bomber Jacket in Army",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Bomber Jacket",
      description:
        "Multi-season jacket with soft fleece lining for extra warmth.",
    },
    tags: ["Jackets"],
    updatedAt: new Date().toISOString(),
  },

  {
    id: "prod_acme_baby_onesie",
    handle: "acme-baby-onesie",
    availableForSale: true,
    title: "Acme Baby Onesie",
    description:
      "Short sleeve 5-oz, 100% combed ringspun cotton onesie for ultimate comfort.",
    descriptionHtml:
      "<p>Short sleeve 5-oz, 100% combed ringspun cotton onesie for ultimate comfort.</p>",
    options: [
      {
        id: "opt_onesie_size",
        name: "Size",
        values: ["NB", "3M", "6M", "12M", "18M", "24M"],
      },
      {
        id: "opt_onesie_color",
        name: "Color",
        values: ["Black", "White", "Beige"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "10.0", currencyCode: "USD" },
      minVariantPrice: { amount: "10.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_onesie_black_nb",
        title: "Black / NB",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "NB" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_black_3m",
        title: "Black / 3M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "3M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_black_6m",
        title: "Black / 6M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "6M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_black_12m",
        title: "Black / 12M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "12M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_black_18m",
        title: "Black / 18M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "18M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_black_24m",
        title: "Black / 24M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "24M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_white_nb",
        title: "White / NB",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "NB" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_white_3m",
        title: "White / 3M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "3M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_white_6m",
        title: "White / 6M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "6M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_white_12m",
        title: "White / 12M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "12M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_white_18m",
        title: "White / 18M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "18M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_white_24m",
        title: "White / 24M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "24M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_beige_nb",
        title: "Beige / NB",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Beige" },
          { name: "Size", value: "NB" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_beige_3m",
        title: "Beige / 3M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Beige" },
          { name: "Size", value: "3M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_beige_6m",
        title: "Beige / 6M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Beige" },
          { name: "Size", value: "6M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_beige_12m",
        title: "Beige / 12M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Beige" },
          { name: "Size", value: "12M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_beige_18m",
        title: "Beige / 18M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Beige" },
          { name: "Size", value: "18M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
      },
      {
        id: "var_onesie_beige_24m",
        title: "Beige / 24M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Beige" },
          { name: "Size", value: "24M" },
        ],
        price: { amount: "10.0", currencyCode: "USD" },
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
      title: "Acme Baby Onesie",
      description: "Short sleeve 5-oz, 100% combed ringspun cotton onesie.",
    },
    tags: ["Kids"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_acme_pacifier",
    handle: "acme-pacifier",
    availableForSale: true,
    title: "Acme Pacifier",
    description:
      "This line of pacifiers has been thoughtfully designed for your baby's comfort. The pacifier allows your child to self-soothe in the most natural way possible.",
    descriptionHtml:
      "<p>This line of pacifiers has been thoughtfully designed for your baby's comfort. The pacifier allows your child to self-soothe in the most natural way possible.</p>",
    options: [
      {
        id: "opt_pacifier_style",
        name: "Style",
        values: ["Default"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "10.0", currencyCode: "USD" },
      minVariantPrice: { amount: "10.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_pacifier_default",
        title: "Default",
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Default" }],
        price: { amount: "10.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("pacifier-1.png"),
      altText: "Acme Pacifier",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("pacifier-1.png"),
        altText: "Acme Pacifier",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Pacifier",
      description:
        "Thoughtfully designed pacifier for your baby's comfort and self-soothing.",
    },
    tags: ["Kids"],
    updatedAt: new Date().toISOString(),
  },

  // Pets
  {
    id: "prod_acme_dog_sweater",
    handle: "acme-dog-sweater",
    availableForSale: true,
    title: "Acme Dog Sweater",
    description:
      "Keep your dog warm all winter long - When the cold weather hits, make sure your dog isn't shivering and stays warm with the soft and stretchy fleece dog sweater. Made with 90% polyester & 5% polyurethane to keep moisture out, freezing rain or snow, and to help keep warm air in, so your dog always stays warm. Our dog clothing is safe, durable, and made to last.",
    descriptionHtml:
      "<p>Keep your dog warm all winter long - When the cold weather hits, make sure your dog isn't shivering and stays warm with the soft and stretchy fleece dog sweater.</p><p>Made with 90% polyester & 5% polyurethane to keep moisture out, freezing rain or snow, and to help keep warm air in, so your dog always stays warm. Our dog clothing is safe, durable, and made to last.</p>",
    options: [
      {
        id: "opt_dogsweater_size",
        name: "Size",
        values: [
          "0 - 5 lbs",
          "5 - 20 lbs",
          "20 - 50 lbs",
          "50 - 75 lbs",
          "75+ lbs",
        ],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "20.0", currencyCode: "USD" },
      minVariantPrice: { amount: "20.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_dogsweater_0_5",
        title: "0 - 5 lbs",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "0 - 5 lbs" }],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_dogsweater_5_20",
        title: "5 - 20 lbs",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "5 - 20 lbs" }],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_dogsweater_20_50",
        title: "20 - 50 lbs",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "20 - 50 lbs" }],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_dogsweater_50_75",
        title: "50 - 75 lbs",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "50 - 75 lbs" }],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_dogsweater_75_plus",
        title: "75+ lbs",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "75+ lbs" }],
        price: { amount: "20.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("dog-sweater-1.png"),
      altText: "Acme Dog Sweater",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("dog-sweater-1.png"),
        altText: "Acme Dog Sweater",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("dog-sweater-2.png"),
        altText: "Acme Dog Sweater - Alternative View",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Dog Sweater",
      description:
        "Soft and stretchy fleece dog sweater to keep your pet warm all winter long.",
    },
    tags: ["Pets"],
    updatedAt: new Date().toISOString(),
  },

  // Shirts
  {
    id: "prod_acme_tshirt",
    handle: "acme-t-shirt",
    availableForSale: true,
    title: "Acme T-Shirt",
    description: "60% combed ringspun cotton/40% polyester jersey tee.",
    descriptionHtml:
      "<p>60% combed ringspun cotton/40% polyester jersey tee.</p>",
    options: [
      {
        id: "opt_acme_tshirt_color",
        name: "Color",
        values: ["Black", "Blue", "Gray", "Pink", "White"],
      },
      {
        id: "opt_acme_tshirt_size",
        name: "Size",
        values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "20.0", currencyCode: "USD" },
      minVariantPrice: { amount: "20.0", currencyCode: "USD" },
    },
    variants: [
      // Black
      {
        id: "var_acme_tshirt_black_xs",
        title: "Black / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_black_s",
        title: "Black / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_black_m",
        title: "Black / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_black_l",
        title: "Black / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_black_xl",
        title: "Black / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_black_xxl",
        title: "Black / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_black_xxxl",
        title: "Black / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      // Blue
      {
        id: "var_acme_tshirt_blue_xs",
        title: "Blue / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_blue_s",
        title: "Blue / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_blue_m",
        title: "Blue / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_blue_l",
        title: "Blue / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_blue_xl",
        title: "Blue / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_blue_xxl",
        title: "Blue / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_blue_xxxl",
        title: "Blue / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      // Gray
      {
        id: "var_acme_tshirt_gray_xs",
        title: "Gray / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_gray_s",
        title: "Gray / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_gray_m",
        title: "Gray / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_gray_l",
        title: "Gray / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_gray_xl",
        title: "Gray / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_gray_xxl",
        title: "Gray / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_gray_xxxl",
        title: "Gray / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      // Pink
      {
        id: "var_acme_tshirt_pink_xs",
        title: "Pink / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Pink" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_pink_s",
        title: "Pink / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Pink" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_pink_m",
        title: "Pink / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Pink" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_pink_l",
        title: "Pink / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Pink" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_pink_xl",
        title: "Pink / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Pink" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_pink_xxl",
        title: "Pink / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Pink" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_pink_xxxl",
        title: "Pink / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Pink" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      // White
      {
        id: "var_acme_tshirt_white_xs",
        title: "White / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_white_s",
        title: "White / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_white_m",
        title: "White / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_white_l",
        title: "White / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_white_xl",
        title: "White / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_white_xxl",
        title: "White / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_tshirt_white_xxxl",
        title: "White / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("t-shirt-color-black.png"),
      altText: "Acme T-Shirt",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("t-shirt-color-black.png"),
        altText: "Acme T-Shirt - Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-color-blue.png"),
        altText: "Acme T-Shirt - Blue",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-color-gray.png"),
        altText: "Acme T-Shirt - Gray",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-color-pink.png"),
        altText: "Acme T-Shirt - Pink",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-color-white.png"),
        altText: "Acme T-Shirt - White",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme T-Shirt",
      description:
        "60% combed ringspun cotton/40% polyester jersey tee in multiple colors and sizes.",
    },
    tags: ["Shirts"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_acme_prism_tshirt",
    handle: "acme-prism-t-shirt",
    availableForSale: true,
    title: "Acme Prism T-Shirt",
    description: "60% combed ringspun cotton/40% polyester jersey tee.",
    descriptionHtml:
      "<p>60% combed ringspun cotton/40% polyester jersey tee.</p>",
    options: [
      {
        id: "opt_acme_prism_size",
        name: "Size",
        values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "25.0", currencyCode: "USD" },
      minVariantPrice: { amount: "25.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_acme_prism_xs",
        title: "XS",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_prism_s",
        title: "S",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_prism_m",
        title: "M",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_prism_l",
        title: "L",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_prism_xl",
        title: "XL",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XL" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_prism_xxl",
        title: "XXL",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXL" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_prism_xxxl",
        title: "XXXL",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXXL" }],
        price: { amount: "25.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("t-shirt-spiral-1.png"),
      altText: "Acme Prism T-Shirt",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("t-shirt-spiral-1.png"),
        altText: "Acme Prism T-Shirt - View 1",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-spiral-2.png"),
        altText: "Acme Prism T-Shirt - View 2",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-spiral-3.png"),
        altText: "Acme Prism T-Shirt - View 3",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-spiral-4.png"),
        altText: "Acme Prism T-Shirt - View 4",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Prism T-Shirt",
      description:
        "Stylish prism design T-shirt made from combed ringspun cotton and polyester blend.",
    },
    tags: ["Shirts"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_acme_circles_tshirt",
    handle: "acme-circles-t-shirt",
    availableForSale: true,
    title: "Acme Circles T-Shirt",
    description: "60% combed ringspun cotton/40% polyester jersey tee.",
    descriptionHtml:
      "<p>60% combed ringspun cotton/40% polyester jersey tee.</p>",
    options: [
      {
        id: "opt_acme_circles_color",
        name: "Color",
        values: ["Black", "White", "Blue"],
      },
      {
        id: "opt_acme_circles_size",
        name: "Size",
        values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "20.0", currencyCode: "USD" },
      minVariantPrice: { amount: "20.0", currencyCode: "USD" },
    },
    variants: [
      // Black
      {
        id: "var_acme_circles_black_xs",
        title: "Black / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_black_s",
        title: "Black / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_black_m",
        title: "Black / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_black_l",
        title: "Black / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_black_xl",
        title: "Black / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_black_xxl",
        title: "Black / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_black_xxxl",
        title: "Black / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      // White
      {
        id: "var_acme_circles_white_xs",
        title: "White / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_white_s",
        title: "White / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_white_m",
        title: "White / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_white_l",
        title: "White / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_white_xl",
        title: "White / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_white_xxl",
        title: "White / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_white_xxxl",
        title: "White / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "White" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      // Blue
      {
        id: "var_acme_circles_blue_xs",
        title: "Blue / XS",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "XS" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_blue_s",
        title: "Blue / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_blue_m",
        title: "Blue / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_blue_l",
        title: "Blue / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_blue_xl",
        title: "Blue / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_blue_xxl",
        title: "Blue / XXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "XXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
      {
        id: "var_acme_circles_blue_xxxl",
        title: "Blue / XXXL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Blue" },
          { name: "Size", value: "XXXL" },
        ],
        price: { amount: "20.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("t-shirt-circles-black.png"),
      altText: "Acme Circles T-Shirt",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("t-shirt-circles-black.png"),
        altText: "Acme Circles T-Shirt - Black",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-circles-white.png"),
        altText: "Acme Circles T-Shirt - White",
        width: 1000,
        height: 1000,
      },
      {
        url: imagePath("t-shirt-circles-blue.png"),
        altText: "Acme Circles T-Shirt - Blue",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Circles T-Shirt",
      description:
        "Stylish circles design T-shirt made from combed ringspun cotton and polyester blend.",
    },
    tags: ["Shirts"],
    updatedAt: new Date().toISOString(),
  },

  // Stickers
  {
    id: "prod_acme_sticker",
    handle: "acme-sticker",
    availableForSale: true,
    title: "Acme Sticker",
    description: "High-quality durable sticker.",
    descriptionHtml: "<p>High-quality durable sticker.</p>",
    options: [
      {
        id: "opt_acme_sticker_type",
        name: "Type",
        values: ["Default"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "4.0", currencyCode: "USD" },
      minVariantPrice: { amount: "4.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_acme_sticker_default",
        title: "Default",
        availableForSale: true,
        selectedOptions: [{ name: "Type", value: "Default" }],
        price: { amount: "4.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("sticker.png"),
      altText: "Acme Sticker",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("sticker.png"),
        altText: "Acme Sticker",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Sticker",
      description: "High-quality durable sticker for any surface.",
    },
    tags: ["Stickers"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_acme_rainbow_sticker",
    handle: "acme-rainbow-sticker",
    availableForSale: true,
    title: "Acme Rainbow Sticker",
    description: "High-quality durable rainbow sticker.",
    descriptionHtml: "<p>High-quality durable rainbow sticker.</p>",
    options: [
      {
        id: "opt_acme_rainbow_sticker_type",
        name: "Type",
        values: ["Default"],
      },
    ],
    priceRange: {
      maxVariantPrice: { amount: "4.0", currencyCode: "USD" },
      minVariantPrice: { amount: "4.0", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var_acme_rainbow_sticker_default",
        title: "Default",
        availableForSale: true,
        selectedOptions: [{ name: "Type", value: "Default" }],
        price: { amount: "4.0", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: imagePath("sticker-rainbow.png"),
      altText: "Acme Rainbow Sticker",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        url: imagePath("sticker-rainbow.png"),
        altText: "Acme Rainbow Sticker",
        width: 1000,
        height: 1000,
      },
    ],
    seo: {
      title: "Acme Rainbow Sticker",
      description:
        "Colorful rainbow sticker made with high-quality durable materials.",
    },
    tags: ["Stickers"],
    updatedAt: new Date().toISOString(),
  },
];
