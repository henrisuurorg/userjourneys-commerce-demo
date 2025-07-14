import type { Product } from 'lib/shopify-mock/types';

const imagePath = (filename: string) => `/product-images/${filename}`;

export const mockProducts: Product[] = [
  // Kotid
  {
    id: 'prod_drawstring_bag',
    handle: 'acme-drawstring-bag',
    availableForSale: true,
    title: 'Acme Nööriga Kott',
    description:
      'Tugev 210D ripstop nailonist nööriga kott. Saadaval mitmes suuruses. Lihtsalt suletav vastupidav nöör. Tugev, korduvkasutatav ja vastupidav.',
    descriptionHtml:
      '<p>Tugev 210D ripstop nailonist nööriga kott. Saadaval mitmes suuruses. Lihtsalt suletav vastupidav nöör. Tugev, korduvkasutatav ja vastupidav.</p>',
    options: [
      {
        id: 'opt_drawstring_color',
        name: 'Värv',
        values: ['Must', 'Valge']
      },
      {
        id: 'opt_drawstring_size',
        name: 'Suurus',
        values: [
          '6 x 8 tolli',
          '7 x 9 tolli',
          '8 x 11 tolli',
          '9 x 12 tolli',
          '10 x 15 tolli',
          '12 x 16 tolli'
        ]
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '12.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '12.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_drawstring_black_6x8',
        title: 'Must / 6 x 8 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '6 x 8 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_black_7x9',
        title: 'Must / 7 x 9 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '7 x 9 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_black_8x11',
        title: 'Must / 8 x 11 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '8 x 11 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_black_9x12',
        title: 'Must / 9 x 12 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '9 x 12 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_black_10x15',
        title: 'Must / 10 x 15 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '10 x 15 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_black_12x16',
        title: 'Must / 12 x 16 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '12 x 16 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_white_6x8',
        title: 'Valge / 6 x 8 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '6 x 8 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_white_7x9',
        title: 'Valge / 7 x 9 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '7 x 9 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_white_8x11',
        title: 'Valge / 8 x 11 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '8 x 11 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_white_9x12',
        title: 'Valge / 9 x 12 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '9 x 12 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_white_10x15',
        title: 'Valge / 10 x 15 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '10 x 15 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      },
      {
        id: 'var_drawstring_white_12x16',
        title: 'Valge / 12 x 16 tolli',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '12 x 16 tolli' }
        ],
        price: { amount: '12.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('bag-black.png'),
      altText: 'Acme Nööriga Kott Mustas',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('bag-black.png'),
        altText: 'Acme Nööriga Kott Mustas',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('bag-white.png'),
        altText: 'Acme Nööriga Kott Valges',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Nööriga Kott',
      description: 'Tugev 210D ripstop nailonist nööriga kott, saadaval mitmes suuruses.'
    },
    tags: ['Kotid'],
    updatedAt: new Date().toISOString()
  },
  // Jooginõud
  {
    id: 'prod_acme_cup',
    handle: 'acme-cup',
    availableForSale: true,
    title: 'Acme Tass',
    description: '12oz topeltseinaga keraamiline korpus polsterdatud põhjaga.',
    descriptionHtml: '<p>12oz topeltseinaga keraamiline korpus polsterdatud põhjaga.</p>',
    options: [
      {
        id: 'opt_acme_cup_color',
        name: 'Värv',
        values: ['Must', 'Valge']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '15.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '15.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_acme_cup_black',
        title: 'Must',
        availableForSale: true,
        selectedOptions: [{ name: 'Värv', value: 'Must' }],
        price: { amount: '15.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_cup_white',
        title: 'Valge',
        availableForSale: true,
        selectedOptions: [{ name: 'Värv', value: 'Valge' }],
        price: { amount: '15.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('cup-black.png'),
      altText: 'Acme Tass Mustas',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('cup-black.png'),
        altText: 'Acme Tass Mustas',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('cup-white.png'),
        altText: 'Acme Tass Valges',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Tass',
      description: '12oz topeltseinaga keraamiline korpus polsterdatud põhjaga.'
    },
    tags: ['Jooginõud'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_acme_mug',
    handle: 'acme-mug',
    availableForSale: true,
    title: 'Acme Kruus',
    description: '12 oz Beck korgist põhjaga kruus.',
    descriptionHtml: '<p>12 oz Beck korgist põhjaga kruus.</p>',
    options: [
      {
        id: 'opt_acme_mug_style',
        name: 'Stiil',
        values: ['Vaikimisi']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '15.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '15.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_acme_mug_default',
        title: 'Vaikimisi',
        availableForSale: true,
        selectedOptions: [{ name: 'Stiil', value: 'Vaikimisi' }],
        price: { amount: '15.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('mug-1.png'),
      altText: 'Acme Kruus',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('mug-1.png'),
        altText: 'Acme Kruus',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Kruus',
      description: '12 oz Beck korgist põhjaga kruus.'
    },
    tags: ['Jooginõud'],
    updatedAt: new Date().toISOString()
  },
  // Elektroonika
  {
    id: 'prod_acme_keyboard',
    handle: 'acme-keyboard',
    availableForSale: false,
    title: 'Acme Klaviatuur',
    description: 'Kvaliteetne mehaaniline klaviatuur professionaalseks kasutamiseks.',
    descriptionHtml: '<p>Kvaliteetne mehaaniline klaviatuur professionaalseks kasutamiseks.</p>',
    options: [
      {
        id: 'opt_acme_keyboard_style',
        name: 'Stiil',
        values: ['Vaikimisi']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '150.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '150.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_acme_keyboard_default',
        title: 'Vaikimisi',
        availableForSale: false,
        selectedOptions: [{ name: 'Stiil', value: 'Vaikimisi' }],
        price: { amount: '150.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('keyboard.png'),
      altText: 'Acme Klaviatuur',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('keyboard.png'),
        altText: 'Acme Klaviatuur',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Klaviatuur',
      description: 'Kvaliteetne mehaaniline klaviatuur professionaalseks kasutamiseks.'
    },
    tags: ['Elektroonika'],
    updatedAt: new Date().toISOString()
  },
  // Jalanõud
  {
    id: 'prod_slip_on_shoes',
    handle: 'acme-slip-on-shoes',
    availableForSale: true,
    title: 'Acme Slip-On Kingad',
    description:
      "Astu suvesse! Iga kord, kui pilgu alla heidad, näed neid kaunitare ja su tuju tõuseb kohe lakke. Stiilsed, kerged ja vaevata šikid. Acme Slip-On Kingad on ülimad jalatsid liikumiseks. Madala profiiliga libistatav lõuendist pealis pakub ületamatut mugavust, samas kui puhas disain teeb sellest täiesti valgest libistatavast kingast täiusliku valiku kõigile, kel on kohti, kuhu minna, ja asju, mida teha. Üks populaarsemaid disaine, need kingad on täiuslik kesktee stiili ja mugavuse vahel. Ikooniline libistatav king. Madala profiiliga lõuendist pealised. Toetavad polsterdatud kraed. Elastsed külgmised aktsendid. Iseloomulikud kummist vahvlitallad.",
    descriptionHtml:
      '<p>Astu suvesse! Iga kord, kui pilgu alla heidad, näed neid kaunitare ja su tuju tõuseb kohe lakke.</p><p>Stiilsed, kerged ja vaevata šikid. Acme Slip-On Kingad on ülimad jalatsid liikumiseks. Madala profiiliga libistatav lõuendist pealis pakub ületamatut mugavust, samas kui puhas disain teeb sellest täiesti valgest libistatavast kingast täiusliku valiku kõigile, kel on kohti, kuhu minna, ja asju, mida teha. Üks populaarsemaid disaine, need kingad on täiuslik kesktee stiili ja mugavuse vahel.</p><ul><li>Ikooniline libistatav king</li><li>Madala profiiliga lõuendist pealised</li><li>Toetavad polsterdatud kraed</li><li>Elastsed külgmised aktsendid</li><li>Iseloomulikud kummist vahvlitallad</li></ul>',
    options: [
      {
        id: 'opt_shoes_size',
        name: 'Suurus',
        values: [
          '34',
          '34.5',
          '35',
          '35.5',
          '36',
          '36.5',
          '37',
          '37.5',
          '38',
          '38.5',
          '39',
          '39.5',
          '40',
          '40.5',
          '41',
          '41.5',
          '42',
          '42.5',
          '43',
          '43.5',
          '44',
          '44.5',
          '45',
          '45.5',
          '46'
        ]
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '45.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '45.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_shoes_1',
        title: '34',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '34' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_1_5',
        title: '34.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '34.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_2',
        title: '35',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '35' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_2_5',
        title: '35.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '35.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_3',
        title: '36',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '36' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_3_5',
        title: '36.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '36.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_4',
        title: '37',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '37' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_4_5',
        title: '37.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '37.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_5',
        title: '38',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '38' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_5_5',
        title: '38.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '38.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_6',
        title: '39',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '39' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_6_5',
        title: '39.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '39.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_7',
        title: '40',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '40' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_7_5',
        title: '40.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '40.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_8',
        title: '41',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '41' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_8_5',
        title: '41.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '41.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_9',
        title: '42',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '42' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_9_5',
        title: '42.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '42.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_10',
        title: '43',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '43' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_10_5',
        title: '43.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '43.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_11',
        title: '44',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '44' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_11_5',
        title: '44.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '44.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_12',
        title: '45',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '45' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_12_5',
        title: '45.5',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '45.5' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      },
      {
        id: 'var_shoes_13',
        title: '46',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '46' }],
        price: { amount: '45.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('shoes-1.png'),
      altText: 'Acme Slip-On Kingad',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('shoes-1.png'),
        altText: 'Acme Slip-On Kingad - Stiil 1',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('shoes-2.png'),
        altText: 'Acme Slip-On Kingad - Stiil 2',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('shoes-3.png'),
        altText: 'Acme Slip-On Kingad - Stiil 3',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('shoes-4.png'),
        altText: 'Acme Slip-On Kingad - Stiil 4',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Slip-On Kingad',
      description: 'Stiilsed, kerged ja vaevata šikid libistatavad kingad ülimaks mugavuseks.'
    },
    tags: ['Jalanõud'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_acme_baby_cap',
    handle: 'acme-baby-cap',
    availableForSale: true,
    title: 'Acme Beebimüts',
    description: '100% kammitud ringspun puuvillast beebimüts ülimaks mugavuseks.',
    descriptionHtml: '<p>100% kammitud ringspun puuvillast beebimüts ülimaks mugavuseks.</p>',
    options: [
      {
        id: 'opt_baby_cap_color',
        name: 'Värv',
        values: ['Must', 'Hall', 'Valge']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '10.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '10.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_baby_cap_black',
        title: 'Must',
        availableForSale: true,
        selectedOptions: [{ name: 'Värv', value: 'Must' }],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_baby_cap_gray',
        title: 'Hall',
        availableForSale: true,
        selectedOptions: [{ name: 'Värv', value: 'Hall' }],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_baby_cap_white',
        title: 'Valge',
        availableForSale: true,
        selectedOptions: [{ name: 'Värv', value: 'Valge' }],
        price: { amount: '10.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('baby-cap-white.png'),
      altText: 'Acme Beebimüts Valges',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('baby-cap-white.png'),
        altText: 'Acme Beebimüts Valges',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('baby-cap-black.png'),
        altText: 'Acme Beebimüts Mustas',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('baby-cap-gray.png'),
        altText: 'Acme Beebimüts Hallis',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Beebimüts',
      description: '100% kammitud ringspun puuvillast beebimüts ülimaks mugavuseks.'
    },
    tags: ['Lapsed', 'Peakatted'],
    updatedAt: new Date().toISOString()
  },

  // Peakatted
  {
    id: 'prod_acme_cowboy_hat',
    handle: 'acme-cowboy-hat',
    availableForSale: true,
    title: 'Acme Kauboikaabu',
    description:
      'Osa meie Buffalo kollektsioonist, see kauboikaabu on valmistatud USAs kvaliteetsest, ilmastikukindlast 4X pühvli vildist. Selle klassikalisel lääne profiilil on klassikaline karjase korts, 4-tolline serv ja 4 1/2-tolline regulaarne ovaalne kroon. Lisadetailide hulka kuuluvad nahast higipael, satiinvooder ja isesobiv mütsipael kolmeosalise hõbedatooni pandlaga, samuti mütsikarp. 4-tolline serv. 4 1/2-tolline regulaarne ovaalne kroon. Karjase korts. Isesobiv mütsipael. 3-osaline hõbedane pandlakomplekt. Mütsikarp. 4X villavildi konstruktsioon. Ameerika Buffalo kollektsioon. Valmistatud USAs.',
    descriptionHtml:
      '<p>Osa meie Buffalo kollektsioonist, see kauboikaabu on valmistatud USAs kvaliteetsest, ilmastikukindlast 4X pühvli vildist. Selle klassikalisel lääne profiilil on klassikaline karjase korts, 4-tolline serv ja 4 1/2-tolline regulaarne ovaalne kroon.</p><p>Lisadetailide hulka kuuluvad nahast higipael, satiinvooder ja isesobiv mütsipael kolmeosalise hõbedatooni pandlaga, samuti mütsikarp.</p><ul><li>4-tolline serv</li><li>4 1/2-tolline regulaarne ovaalne kroon</li><li>Karjase korts</li><li>Isesobiv mütsipael</li><li>3-osaline hõbedane pandlakomplekt</li><li>Mütsikarp</li><li>4X villavildi konstruktsioon</li><li>Ameerika Buffalo kollektsioon</li><li>Valmistatud USAs</li></ul>',
    options: [
      {
        id: 'opt_cowboy_color',
        name: 'Värv',
        values: ['Must', 'Pruun']
      },
      {
        id: 'opt_cowboy_size',
        name: 'Suurus',
        values: [
          '6 3/4',
          '6 7/8',
          '7',
          '7 1/8',
          '7 1/4',
          '7 3/8',
          '7 1/2',
          '7 5/8',
          '7 3/4'
        ]
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '160.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '160.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_cowboy_black_6_3_4',
        title: 'Must / 6 3/4',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '6 3/4' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_black_6_7_8',
        title: 'Must / 6 7/8',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '6 7/8' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_black_7',
        title: 'Must / 7',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '7' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_black_7_1_8',
        title: 'Must / 7 1/8',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '7 1/8' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_black_7_1_4',
        title: 'Must / 7 1/4',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '7 1/4' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_black_7_3_8',
        title: 'Must / 7 3/8',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '7 3/8' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_black_7_1_2',
        title: 'Must / 7 1/2',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '7 1/2' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_black_7_5_8',
        title: 'Must / 7 5/8',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '7 5/8' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_black_7_3_4',
        title: 'Must / 7 3/4',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '7 3/4' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_tan_6_3_4',
        title: 'Pruun / 6 3/4',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Pruun' },
          { name: 'Suurus', value: '6 3/4' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_tan_6_7_8',
        title: 'Pruun / 6 7/8',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Pruun' },
          { name: 'Suurus', value: '6 7/8' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_tan_7',
        title: 'Pruun / 7',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Pruun' },
          { name: 'Suurus', value: '7' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_tan_7_1_8',
        title: 'Pruun / 7 1/8',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Pruun' },
          { name: 'Suurus', value: '7 1/8' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_tan_7_1_4',
        title: 'Pruun / 7 1/4',
        availableForSale: false,
        selectedOptions: [
          { name: 'Värv', value: 'Pruun' },
          { name: 'Suurus', value: '7 1/4' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_tan_7_3_8',
        title: 'Pruun / 7 3/8',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Pruun' },
          { name: 'Suurus', value: '7 3/8' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_tan_7_1_2',
        title: 'Pruun / 7 1/2',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Pruun' },
          { name: 'Suurus', value: '7 1/2' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_tan_7_5_8',
        title: 'Pruun / 7 5/8',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Pruun' },
          { name: 'Suurus', value: '7 5/8' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      },
      {
        id: 'var_cowboy_tan_7_3_4',
        title: 'Pruun / 7 3/4',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Pruun' },
          { name: 'Suurus', value: '7 3/4' }
        ],
        price: { amount: '160.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('cowboy-hat-black-1.png'),
      altText: 'Acme Kauboikaabu Mustas',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('cowboy-hat-black-1.png'),
        altText: 'Acme Kauboikaabu Mustas - Vaade 1',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('cowboy-hat-black-2.png'),
        altText: 'Acme Kauboikaabu Mustas - Vaade 2',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('cowboy-hat-tan-1.png'),
        altText: 'Acme Kauboikaabu Pruunis - Vaade 1',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('cowboy-hat-tan-2.png'),
        altText: 'Acme Kauboikaabu Pruunis - Vaade 2',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Kauboikaabu',
      description: 'Kvaliteetne, ilmastikukindel 4X pühvli vildist kauboikaabu, valmistatud USAs.'
    },
    tags: ['Peakatted'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_acme_cap',
    handle: 'acme-cap',
    availableForSale: true,
    title: 'Acme Müts',
    description: '100% virsikutöödeldud puuvillast müts mugavaks igapäevaseks kandmiseks.',
    descriptionHtml: '<p>100% virsikutöödeldud puuvillast müts mugavaks igapäevaseks kandmiseks.</p>',
    options: [
      {
        id: 'opt_acme_cap_style',
        name: 'Stiil',
        values: ['Vaikimisi']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '20.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '20.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_acme_cap_default',
        title: 'Vaikimisi',
        availableForSale: true,
        selectedOptions: [{ name: 'Stiil', value: 'Vaikimisi' }],
        price: { amount: '20.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('hat-1.png'),
      altText: 'Acme Müts',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('hat-1.png'),
        altText: 'Acme Müts',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Müts',
      description: '100% virsikutöödeldud puuvillast müts mugavaks igapäevaseks kandmiseks.'
    },
    tags: ['Peakatted'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_acme_hoodie',
    handle: 'acme-hoodie',
    availableForSale: true,
    title: 'Acme Pusa',
    description: 'Supima puuvilla ja mikromodaali kangasegu ülimaks mugavuseks ja soojuseks.',
    descriptionHtml:
      '<p>Supima puuvilla ja mikromodaali kangasegu ülimaks mugavuseks ja soojuseks.</p>',
    options: [
      {
        id: 'opt_hoodie_size',
        name: 'Suurus',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '50.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '50.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_hoodie_xs',
        title: 'XS',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'XS' }],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_hoodie_s',
        title: 'S',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'S' }],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_hoodie_m',
        title: 'M',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'M' }],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_hoodie_l',
        title: 'L',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'L' }],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_hoodie_xl',
        title: 'XL',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'XL' }],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_hoodie_xxl',
        title: 'XXL',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'XXL' }],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_hoodie_xxxl',
        title: 'XXXL',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'XXXL' }],
        price: { amount: '50.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('hoodie-1.png'),
      altText: 'Acme Pusa',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('hoodie-1.png'),
        altText: 'Acme Pusa',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('hoodie-2.png'),
        altText: 'Acme Pusa - Alternatiivne Vaade',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Pusa',
      description: 'Supima puuvilla ja mikromodaali kangasegu ülimaks mugavuseks.'
    },
    tags: ['Pusad'],
    updatedAt: new Date().toISOString()
  },

  // Jakid
  {
    id: 'prod_acme_bomber_jacket',
    handle: 'acme-bomber-jacket',
    availableForSale: true,
    title: 'Eriväljaanne Aastapäeva Kõikide Ilmadega Toimiv Bomber-Jakk',
    description:
      "Bomber-jakk on stiilne ja mitmekülgne ülerõivas. See on valmistatud vastupidavast ja veekindlast materjalist, muutes selle ideaalseks igapäevaseks kandmiseks. Jakil on lõdvestunud istuvus ning soonikkoes krae, kätised ja alläär. Sellel on ka kaks esitaskut ja lukuga varrukatasku. Bomber-jakk on saadaval erinevates värvides ja suurustes, nii et leiate endale sobivaima.",
    descriptionHtml:
      "<p>Bomber-jakk on stiilne ja mitmekülgne ülerõivas. See on valmistatud vastupidavast ja veekindlast materjalist, muutes selle ideaalseks igapäevaseks kandmiseks. Jakil on lõdvestunud istuvus ning soonikkoes krae, kätised ja alläär. Sellel on ka kaks esitaskut ja lukuga varrukatasku. Bomber-jakk on saadaval erinevates värvides ja suurustes, nii et leiate endale sobivaima.</p>",
    options: [
      {
        id: 'opt_bomber_size',
        name: 'Suurus',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
      },
      {
        id: 'opt_bomber_color',
        name: 'Värv',
        values: ['Armee', 'Must']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '50.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '50.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_bomber_army_xs',
        title: 'Armee / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Armee' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_army_s',
        title: 'Armee / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Armee' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_army_m',
        title: 'Armee / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Armee' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_army_l',
        title: 'Armee / L',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Armee' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_army_xl',
        title: 'Armee / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Armee' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_army_xxl',
        title: 'Armee / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Armee' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_army_xxxl',
        title: 'Armee / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Armee' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_black_xs',
        title: 'Must / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_black_s',
        title: 'Must / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_black_m',
        title: 'Must / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_black_l',
        title: 'Must / L',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_black_xl',
        title: 'Must / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_black_xxl',
        title: 'Must / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      },
      {
        id: 'var_bomber_black_xxxl',
        title: 'Must / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '50.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('bomber-jacket-black.png'),
      altText: 'Acme Bomber-Jakk Mustas',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('bomber-jacket-black.png'),
        altText: 'Acme Bomber-Jakk Mustas',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('bomber-jacket-army.png'),
        altText: 'Acme Bomber-Jakk Armees',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Bomber-Jakk',
      description: 'Mitme hooaja jakk pehme fliisvoodriga lisasoojuse saamiseks.'
    },
    tags: ['Jakid'],
    updatedAt: new Date().toISOString()
  },

  {
    id: 'prod_acme_baby_onesie',
    handle: 'acme-baby-onesie',
    availableForSale: true,
    title: 'Acme Beebibodi',
    description: 'Lühikeste varrukatega 5-untsine, 100% kammitud ringspun puuvillast bodi ülimaks mugavuseks.',
    descriptionHtml:
      '<p>Lühikeste varrukatega 5-untsine, 100% kammitud ringspun puuvillast bodi ülimaks mugavuseks.</p>',
    options: [
      {
        id: 'opt_onesie_size',
        name: 'Suurus',
        values: ['NB', '3M', '6M', '12M', '18M', '24M']
      },
      {
        id: 'opt_onesie_color',
        name: 'Värv',
        values: ['Must', 'Valge', 'Beež']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '10.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '10.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_onesie_black_nb',
        title: 'Must / NB',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'NB' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_black_3m',
        title: 'Must / 3M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '3M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_black_6m',
        title: 'Must / 6M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '6M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_black_12m',
        title: 'Must / 12M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '12M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_black_18m',
        title: 'Must / 18M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '18M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_black_24m',
        title: 'Must / 24M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: '24M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_white_nb',
        title: 'Valge / NB',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'NB' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_white_3m',
        title: 'Valge / 3M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '3M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_white_6m',
        title: 'Valge / 6M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '6M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_white_12m',
        title: 'Valge / 12M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '12M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_white_18m',
        title: 'Valge / 18M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '18M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_white_24m',
        title: 'Valge / 24M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: '24M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_beige_nb',
        title: 'Beež / NB',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Beež' },
          { name: 'Suurus', value: 'NB' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_beige_3m',
        title: 'Beež / 3M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Beež' },
          { name: 'Suurus', value: '3M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_beige_6m',
        title: 'Beež / 6M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Beež' },
          { name: 'Suurus', value: '6M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_beige_12m',
        title: 'Beež / 12M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Beež' },
          { name: 'Suurus', value: '12M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_beige_18m',
        title: 'Beež / 18M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Beež' },
          { name: 'Suurus', value: '18M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      },
      {
        id: 'var_onesie_beige_24m',
        title: 'Beež / 24M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Beež' },
          { name: 'Suurus', value: '24M' }
        ],
        price: { amount: '10.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('baby-onesie-beige-1.png'),
      altText: 'Mugav Beebibodi Beežis',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('baby-onesie-beige-1.png'),
        altText: 'Mugav Beebibodi Beežis',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('baby-onesie-beige-2.png'),
        altText: 'Mugav Beebibodi Beežis',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('baby-onesie-black-1.png'),
        altText: 'Mugav Beebibodi Mustas',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('baby-onesie-black-2.png'),
        altText: 'Mugav Beebibodi Mustas',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('baby-onesie-white-1.png'),
        altText: 'Mugav Beebibodi Valges',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('baby-onesie-white-2.png'),
        altText: 'Mugav Beebibodi Valges',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Beebibodi',
      description: 'Lühikeste varrukatega 5-untsine, 100% kammitud ringspun puuvillast bodi.'
    },
    tags: ['Lapsed'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_acme_pacifier',
    handle: 'acme-pacifier',
    availableForSale: true,
    title: 'Acme Lutt',
    description:
      'See luttide sari on läbimõeldult disainitud teie beebi mugavuse tagamiseks. Lutt võimaldab teie lapsel end kõige loomulikumal viisil rahustada.',
    descriptionHtml:
      '<p>See luttide sari on läbimõeldult disainitud teie beebi mugavuse tagamiseks. Lutt võimaldab teie lapsel end kõige loomulikumal viisil rahustada.</p>',
    options: [
      {
        id: 'opt_pacifier_style',
        name: 'Stiil',
        values: ['Vaikimisi']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '10.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '10.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_pacifier_default',
        title: 'Vaikimisi',
        availableForSale: true,
        selectedOptions: [{ name: 'Stiil', value: 'Vaikimisi' }],
        price: { amount: '10.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('pacifier-1.png'),
      altText: 'Acme Lutt',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('pacifier-1.png'),
        altText: 'Acme Lutt',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Lutt',
      description: 'Läbimõeldult disainitud lutt teie beebi mugavuseks ja eneserahustuseks.'
    },
    tags: ['Lapsed'],
    updatedAt: new Date().toISOString()
  },

  // Lemmikloomad
  {
    id: 'prod_acme_dog_sweater',
    handle: 'acme-dog-sweater',
    availableForSale: true,
    title: 'Acme Koerakampsun',
    description:
      'Hoidke oma koer soojas kogu talve - Kui külm ilm saabub, veenduge, et teie koer ei väriseks ja püsiks soojas pehme ja veniva fliisist koerakampsuniga. Valmistatud 90% polüestrist ja 5% polüuretaanist, et hoida niiskust eemal, külmutavat vihma või lund, ja aidata hoida sooja õhku sees, nii et teie koer püsib alati soojas. Meie koerariided on ohutud, vastupidavad ja loodud kestma.',
    descriptionHtml:
      '<p>Hoidke oma koer soojas kogu talve - Kui külm ilm saabub, veenduge, et teie koer ei väriseks ja püsiks soojas pehme ja veniva fliisist koerakampsuniga.</p><p>Valmistatud 90% polüestrist ja 5% polüuretaanist, et hoida niiskust eemal, külmutavat vihma või lund, ja aidata hoida sooja õhku sees, nii et teie koer püsib alati soojas. Meie koerariided on ohutud, vastupidavad ja loodud kestma.</p>',
    options: [
      {
        id: 'opt_dogsweater_size',
        name: 'Suurus',
        values: ['0 - 2 kg', '2 - 9 kg', '9 - 23 kg', '23 - 34 kg', '34+ kg']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '20.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '20.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_dogsweater_0_5',
        title: '0 - 2 kg',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '0 - 2 kg' }],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_dogsweater_5_20',
        title: '2 - 9 kg',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '2 - 9 kg' }],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_dogsweater_20_50',
        title: '9 - 23 kg',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '9 - 23 kg' }],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_dogsweater_50_75',
        title: '23 - 34 kg',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '23 - 34 kg' }],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_dogsweater_75_plus',
        title: '34+ kg',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: '34+ kg' }],
        price: { amount: '20.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('dog-sweater-1.png'),
      altText: 'Acme Koerakampsun',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('dog-sweater-1.png'),
        altText: 'Acme Koerakampsun',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('dog-sweater-2.png'),
        altText: 'Acme Koerakampsun - Alternatiivne Vaade',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Koerakampsun',
      description: 'Pehme ja veniv fliisist koerakampsun, et hoida teie lemmikloom soojas kogu talve.'
    },
    tags: ['Lemmikloomad'],
    updatedAt: new Date().toISOString()
  },

  // Särgid
  {
    id: 'prod_acme_tshirt',
    handle: 'acme-t-shirt',
    availableForSale: true,
    title: 'Acme T-särk',
    description: '60% kammitud ringspun puuvillast/40% polüestrist jersey-särk.',
    descriptionHtml: '<p>60% kammitud ringspun puuvillast/40% polüestrist jersey-särk.</p>',
    options: [
      {
        id: 'opt_acme_tshirt_color',
        name: 'Värv',
        values: ['Must', 'Sinine', 'Hall', 'Roosa', 'Valge']
      },
      {
        id: 'opt_acme_tshirt_size',
        name: 'Suurus',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '20.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '20.0', currencyCode: 'USD' }
    },
    variants: [
      // Must
      {
        id: 'var_acme_tshirt_black_xs',
        title: 'Must / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_black_s',
        title: 'Must / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_black_m',
        title: 'Must / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_black_l',
        title: 'Must / L',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_black_xl',
        title: 'Must / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_black_xxl',
        title: 'Must / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_black_xxxl',
        title: 'Must / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      // Sinine
      {
        id: 'var_acme_tshirt_blue_xs',
        title: 'Sinine / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_blue_s',
        title: 'Sinine / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_blue_m',
        title: 'Sinine / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_blue_l',
        title: 'Sinine / L',
        availableForSale: false,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_blue_xl',
        title: 'Sinine / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_blue_xxl',
        title: 'Sinine / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_blue_xxxl',
        title: 'Sinine / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      // Hall
      {
        id: 'var_acme_tshirt_gray_xs',
        title: 'Hall / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Hall' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_gray_s',
        title: 'Hall / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Hall' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_gray_m',
        title: 'Hall / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Hall' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_gray_l',
        title: 'Hall / L',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Hall' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_gray_xl',
        title: 'Hall / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Hall' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_gray_xxl',
        title: 'Hall / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Hall' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_gray_xxxl',
        title: 'Hall / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Hall' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      // Roosa
      {
        id: 'var_acme_tshirt_pink_xs',
        title: 'Roosa / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Roosa' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_pink_s',
        title: 'Roosa / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Roosa' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_pink_m',
        title: 'Roosa / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Roosa' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_pink_l',
        title: 'Roosa / L',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Roosa' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_pink_xl',
        title: 'Roosa / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Roosa' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_pink_xxl',
        title: 'Roosa / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Roosa' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_pink_xxxl',
        title: 'Roosa / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Roosa' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      // Valge
      {
        id: 'var_acme_tshirt_white_xs',
        title: 'Valge / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_white_s',
        title: 'Valge / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_white_m',
        title: 'Valge / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_white_l',
        title: 'Valge / L',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_white_xl',
        title: 'Valge / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_white_xxl',
        title: 'Valge / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_tshirt_white_xxxl',
        title: 'Valge / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('t-shirt-color-black.png'),
      altText: 'Acme T-särk',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('t-shirt-color-black.png'),
        altText: 'Acme T-särk - Must',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('t-shirt-color-blue.png'),
        altText: 'Acme T-särk - Sinine',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('t-shirt-color-gray.png'),
        altText: 'Acme T-särk - Hall',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('t-shirt-color-pink.png'),
        altText: 'Acme T-särk - Roosa',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('t-shirt-color-white.png'),
        altText: 'Acme T-särk - Valge',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme T-särk',
      description: '60% kammitud ringspun puuvillast/40% polüestrist jersey-särk mitmes värvis ja suuruses.'
    },
    tags: ['Särgid'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_acme_prism_tshirt',
    handle: 'acme-prism-t-shirt',
    availableForSale: true,
    title: 'Acme Prisma T-särk',
    description: '60% kammitud ringspun puuvillast/40% polüestrist jersey-särk.',
    descriptionHtml: '<p>60% kammitud ringspun puuvillast/40% polüestrist jersey-särk.</p>',
    options: [
      {
        id: 'opt_acme_prism_size',
        name: 'Suurus',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '25.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '25.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_acme_prism_xs',
        title: 'XS',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'XS' }],
        price: { amount: '25.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_prism_s',
        title: 'S',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'S' }],
        price: { amount: '25.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_prism_m',
        title: 'M',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'M' }],
        price: { amount: '25.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_prism_l',
        title: 'L',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'L' }],
        price: { amount: '25.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_prism_xl',
        title: 'XL',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'XL' }],
        price: { amount: '25.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_prism_xxl',
        title: 'XXL',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'XXL' }],
        price: { amount: '25.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_prism_xxxl',
        title: 'XXXL',
        availableForSale: true,
        selectedOptions: [{ name: 'Suurus', value: 'XXXL' }],
        price: { amount: '25.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('t-shirt-spiral-1.png'),
      altText: 'Acme Prisma T-särk',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('t-shirt-spiral-1.png'),
        altText: 'Acme Prisma T-särk',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('t-shirt-spiral-2.png'),
        altText: 'Acme Prisma T-särk - Alternatiivne Vaade 1',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('t-shirt-spiral-3.png'),
        altText: 'Acme Prisma T-särk - Alternatiivne Vaade 2',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('t-shirt-spiral-4.png'),
        altText: 'Acme Prisma T-särk - Alternatiivne Vaade 3',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Prisma T-särk',
      description: 'Stiilne prismadisainiga T-särk, mis on valmistatud kammitud ringspun puuvilla ja polüestri segust.'
    },
    tags: ['Särgid'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_acme_circles_tshirt',
    handle: 'acme-circles-t-shirt',
    availableForSale: true,
    title: 'Acme Ringidega T-särk',
    description: '60% kammitud ringspun puuvillast/40% polüestrist jersey-särk.',
    descriptionHtml: '<p>60% kammitud ringspun puuvillast/40% polüestrist jersey-särk.</p>',
    options: [
      {
        id: 'opt_acme_circles_color',
        name: 'Värv',
        values: ['Must', 'Valge', 'Sinine']
      },
      {
        id: 'opt_acme_circles_size',
        name: 'Suurus',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '20.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '20.0', currencyCode: 'USD' }
    },
    variants: [
      // Must
      {
        id: 'var_acme_circles_black_xs',
        title: 'Must / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_black_s',
        title: 'Must / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_black_m',
        title: 'Must / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_black_l',
        title: 'Must / L',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_black_xl',
        title: 'Must / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_black_xxl',
        title: 'Must / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_black_xxxl',
        title: 'Must / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Must' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      // Valge
      {
        id: 'var_acme_circles_white_xs',
        title: 'Valge / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_white_s',
        title: 'Valge / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_white_m',
        title: 'Valge / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_white_l',
        title: 'Valge / L',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_white_xl',
        title: 'Valge / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_white_xxl',
        title: 'Valge / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_white_xxxl',
        title: 'Valge / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Valge' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      // Sinine
      {
        id: 'var_acme_circles_blue_xs',
        title: 'Sinine / XS',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'XS' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_blue_s',
        title: 'Sinine / S',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'S' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_blue_m',
        title: 'Sinine / M',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'M' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_blue_l',
        title: 'Sinine / L',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'L' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_blue_xl',
        title: 'Sinine / XL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'XL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_blue_xxl',
        title: 'Sinine / XXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'XXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      },
      {
        id: 'var_acme_circles_blue_xxxl',
        title: 'Sinine / XXXL',
        availableForSale: true,
        selectedOptions: [
          { name: 'Värv', value: 'Sinine' },
          { name: 'Suurus', value: 'XXXL' }
        ],
        price: { amount: '20.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('t-shirt-circles-black.png'),
      altText: 'Acme Ringidega T-särk',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('t-shirt-circles-black.png'),
        altText: 'Acme Ringidega T-särk - Must',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('t-shirt-circles-white.png'),
        altText: 'Acme Ringidega T-särk - Valge',
        width: 1000,
        height: 1000
      },
      {
        url: imagePath('t-shirt-circles-blue.png'),
        altText: 'Acme Ringidega T-särk - Sinine',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Ringidega T-särk',
      description: 'Stiilne ringidisainiga T-särk, mis on valmistatud kammitud ringspun puuvilla ja polüestri segust.'
    },
    tags: ['Särgid'],
    updatedAt: new Date().toISOString()
  },

  // Kleepsud
  {
    id: 'prod_acme_sticker',
    handle: 'acme-sticker',
    availableForSale: true,
    title: 'Acme Kleeps',
    description: 'Kvaliteetne vastupidav kleeps.',
    descriptionHtml: '<p>Kvaliteetne vastupidav kleeps.</p>',
    options: [
      {
        id: 'opt_acme_sticker_type',
        name: 'Tüüp',
        values: ['Vaikimisi']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '4.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '4.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_acme_sticker_default',
        title: 'Vaikimisi',
        availableForSale: true,
        selectedOptions: [{ name: 'Tüüp', value: 'Vaikimisi' }],
        price: { amount: '4.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('sticker.png'),
      altText: 'Acme Kleeps',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('sticker.png'),
        altText: 'Acme Kleeps',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Kleeps',
      description: 'Kvaliteetne vastupidav kleeps igale pinnale.'
    },
    tags: ['Kleepsud'],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'prod_acme_rainbow_sticker',
    handle: 'acme-rainbow-sticker',
    availableForSale: true,
    title: 'Acme Vikerkaare Kleeps',
    description: 'Kvaliteetne vastupidav vikerkaarekleeps.',
    descriptionHtml: '<p>Kvaliteetne vastupidav vikerkaarekleeps.</p>',
    options: [
      {
        id: 'opt_acme_rainbow_sticker_type',
        name: 'Tüüp',
        values: ['Vaikimisi']
      }
    ],
    priceRange: {
      maxVariantPrice: { amount: '4.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '4.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'var_acme_rainbow_sticker_default',
        title: 'Vaikimisi',
        availableForSale: true,
        selectedOptions: [{ name: 'Tüüp', value: 'Vaikimisi' }],
        price: { amount: '4.0', currencyCode: 'USD' }
      }
    ],
    featuredImage: {
      url: imagePath('sticker-rainbow.png'),
      altText: 'Acme Vikerkaare Kleeps',
      width: 1000,
      height: 1000
    },
    images: [
      {
        url: imagePath('sticker-rainbow.png'),
        altText: 'Acme Vikerkaare Kleeps',
        width: 1000,
        height: 1000
      }
    ],
    seo: {
      title: 'Acme Vikerkaare Kleeps',
      description: 'Värviline vikerkaarekleeps, mis on valmistatud kvaliteetsetest vastupidavatest materjalidest.'
    },
    tags: ['Kleepsud'],
    updatedAt: new Date().toISOString()
  }
]; 