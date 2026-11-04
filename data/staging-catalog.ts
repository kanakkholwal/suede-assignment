import type { CatalogProduct } from './product-types';

type StagingCatalogProduct = Omit<CatalogProduct, 'categoryId'>;

/**
 * Static snapshot of active staging products captured on 2026-09-15.
 * The candidate app queries local SQLite at runtime through local API routes.
 * It makes no remote database, catalog, or image requests.
 * Source links open only when a user explicitly chooses to research an item.
 * Supplier costs, lead times, dimensions, and reviews are intentionally omitted.
 */
export const STAGING_CATALOG_CAPTURED_AT = '2026-09-15';

export const STAGING_CATALOG_PRODUCTS: readonly StagingCatalogProduct[] = [
  {
    "id": "bfc49fab-7502-46d0-87d5-74a9aa5e1b87",
    "name": "4in1 Montessori Climbing Set: Pikler Triangle, Arch, Slide Board, and Cushion for Toddlers (1–3 Years)",
    "brand": "Goodevas",
    "productType": "4in1 Playsets",
    "category": "Uncategorized",
    "roomTypes": [],
    "tags": [
      "Goodevas",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/4in1-montessori-climbing-set-pikler-triangle-arch-slide-board-and-cushion-for-toddlers-1-3-years",
    "description": "4in1 Montessori Climbing Set is a perfect tool for parents to improve their children's abilities. It's a universal method for children aged 1 to 3 to enhance their cognitive, emotional, and physical growth by enhancing muscle strength. At the same time, it improves balance and hand-eye coordination and nurtures motor skills while motivating confidence in first motions. The Montessori climbing gym fits well in small apartments thanks to its compact size. Detailed Components Pikler Triangle The triangle is a core element of the set, designed to foster muscle strength, balance, and motor skills development. The Pikler triangle set is ideal for independent climbing and exploration. Climbing Arch A multi-functional toy that functions as both a climbing arch and a rocker, encouraging diverse play scenarios and stimulating imagination. Slide Board This is a dual-purpose board for sliding and climbing, with its colorful climbing holds on the other side to encourage problem-solving and motor skill development. The toy can be a ramp or bridge for endless creative setups while enhancing physical activity. Cushion Lightweight and soft, the cushion enhances comfort during play, rest, or reading, adding a cozy touch to these engaging baby climbing toys . These toddler climbing toys combine functionality, safety, and the principles of Montessori education, making them a perfect choice. Climbing toys for 1 year old provide a sufficient environment for babies to grow intellectually and physically.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-001.jpg",
        "alt": "4in1 Montessori Climbing Set: Pikler Triangle, Arch, Slide Board, and Cushion for Toddlers (1–3 Years) by Goodevas"
      }
    ],
    "variants": [
      {
        "id": "e2b6a445-de17-4642-8903-ab2a02d5dc67",
        "label": "Beige / Beige",
        "priceCents": 13900,
        "available": false
      },
      {
        "id": "f140d607-c05a-4a14-95cf-91070a7f9ba4",
        "label": "Beige / Green",
        "priceCents": 13900,
        "available": false
      },
      {
        "id": "69ae88b3-e245-4516-8c82-bc1869a13182",
        "label": "Beige / Blue",
        "priceCents": 15900,
        "available": false
      },
      {
        "id": "277a12c4-827f-41a1-946f-c57131d42aa5",
        "label": "Beige / Pink",
        "priceCents": 15900,
        "available": false
      },
      {
        "id": "97862971-4279-423a-9038-0a3cf5707273",
        "label": "Ivory / Beige",
        "priceCents": 13900,
        "available": false
      },
      {
        "id": "f5041527-19b6-4a20-afbf-2d4771a8152c",
        "label": "Ivory / Blue",
        "priceCents": 13900,
        "available": false
      },
      {
        "id": "c9908283-f02f-4c36-97b4-c7cbd6ec11b4",
        "label": "Ivory / Pink",
        "priceCents": 13900,
        "available": false
      }
    ],
    "availability": "backorder",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "fd1c6e37-5484-4c70-9ab7-e5d0a7a458fa",
    "name": "Antwerp Armchair",
    "brand": "House of Leon",
    "productType": "Arm Chairs, Recliners & Sleeper Chairs",
    "category": "Armchair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-armchair",
    "description": "A chair designed to ground a space with the weight of honest materials. Defined by proportion and material honesty, this armchair is made for permanence. The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty Belgian linen or brushed cotton woven in the Netherlands to fall with natural drape. The seat cushion is topped with box-quilted down, while backrest pillows are a 30/70 mix of down feather and fiber fill, together offering enduring softness and comfort. The armchair frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-002.jpg",
        "alt": "Antwerp Armchair by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "fe861531-6917-4544-a1c8-c94aa9579292",
        "label": "Vintage Black",
        "priceCents": 175000,
        "available": true
      },
      {
        "id": "dabc30e2-2d36-471c-ac60-6cc34c68e2b8",
        "label": "Bone",
        "priceCents": 175000,
        "available": true
      },
      {
        "id": "ab6fec3b-f26a-40cf-8bb4-7d643b48961d",
        "label": "Cocoa",
        "priceCents": 175000,
        "available": true
      },
      {
        "id": "fef25296-8919-4996-b331-bbd90be9a0a6",
        "label": "Rust",
        "priceCents": 175000,
        "available": true
      },
      {
        "id": "36e875c5-5200-4477-8ebd-5af6b398375d",
        "label": "White",
        "priceCents": 175000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e8df9ed6-902f-44a7-9eec-9c436e2d22f2",
    "name": "Antwerp Bench",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Bench",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-bench",
    "description": "The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty Belgian linen or brushed cotton woven in the Netherlands to fall with natural drape. The seat cushion is topped with box-quilted down, offering enduring softness and comfort. The bench frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-003.jpg",
        "alt": "Antwerp Bench by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "b8c7f6e6-b77b-40b5-99d5-854b2cb2599b",
        "label": "Bone",
        "priceCents": 145000,
        "available": true
      },
      {
        "id": "d68fb928-cea3-4056-8d0f-789eb3415243",
        "label": "Cocoa",
        "priceCents": 145000,
        "available": true
      },
      {
        "id": "1228e82f-3379-4738-b630-0fe990b289b0",
        "label": "Rust",
        "priceCents": 145000,
        "available": true
      },
      {
        "id": "d9bdd1eb-7804-4982-85f0-9401c8f37e21",
        "label": "Vintage Black",
        "priceCents": 145000,
        "available": true
      },
      {
        "id": "383fe388-13de-431a-a78e-6e0e7f1defba",
        "label": "White",
        "priceCents": 145000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "b807777b-3164-4754-8e0a-b8a0a2165494",
    "name": "Antwerp Chaise Lounge",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Chaise Lounge",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-chaise-lounge",
    "description": "A chaise designed to lounge in, grounding a space with the weight of honest materials. Defined by proportion and material honesty, this chaise is made for lounging. The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty Belgian linen or brushed cotton woven in the Netherlands to fall with natural drape. The seat cushion is topped with box-quilted down, while backrest pillows are a 30/70 mix of down feather and fiber fill, together offering enduring softness and comfort. The chaise frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-004.jpg",
        "alt": "Antwerp Chaise Lounge by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "4c0ab73d-2c04-49ae-8c10-4f08a9dcf5ef",
        "label": "Bone",
        "priceCents": 245000,
        "available": true
      },
      {
        "id": "15c1af57-bce3-4c35-8b05-7d060f216f20",
        "label": "Cocoa",
        "priceCents": 245000,
        "available": true
      },
      {
        "id": "5b40d1e2-ed4e-4c21-82d4-5ca5a36a5b0b",
        "label": "Rust",
        "priceCents": 245000,
        "available": true
      },
      {
        "id": "94416ae1-9a6c-4bc0-9d19-9904990774af",
        "label": "Vintage Black",
        "priceCents": 245000,
        "available": true
      },
      {
        "id": "ec7dc24f-f728-4e01-a17a-5f5cc5c9be21",
        "label": "White",
        "priceCents": 245000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e48b1ea3-9268-4c03-8105-90e9d30d6597",
    "name": "Antwerp Desk 60\"",
    "brand": "House of Leon",
    "productType": "Desks",
    "category": "Desk",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-desk-60",
    "description": "The Antwerp Desk is framed in solid French white oak and topped with inlaid beige travertine. The combination creates a commanding silhouette for any office space. Its proportions emphasize weight and stability, allowing the grain of the French white oak, sourced in France, to read clearly from every angle. A single drawer, with an integrated drawer-pull and soft-closing German-made full-extension drawer-slides, is housed within the front apron. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-005.jpg",
        "alt": "Antwerp Desk 60\" by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "87f6ba79-85e7-48ec-8d18-e323d2964658",
        "label": "Default Title",
        "priceCents": 245000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "46f7134f-9933-4c6e-bd91-e2ca40f911f2",
    "name": "Antwerp Dining Table",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-dining-table",
    "description": "An architectural table composed of oak + stone, designed with restraint. The Antwerp Dining Table is framed in solid French white oak and topped with an inlaid beige travertine surface. The composition yields a commanding yet composed silhouette, suited to both dining and office settings. Its proportions emphasize weight and stability, allowing the grain of the French white oak to read clearly from every angle. The flush-set travertine introduces a restrained shift in texture creating a clean dialogue with the surrounding oak. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-006.jpg",
        "alt": "Antwerp Dining Table by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "e0637618-fd4b-44bf-abb4-12291811729b",
        "label": "72\"",
        "priceCents": 495000,
        "available": true
      },
      {
        "id": "9a7255ba-26b7-4ef5-93db-e23ef88fb7bb",
        "label": "88\"",
        "priceCents": 555000,
        "available": true
      },
      {
        "id": "e97ae1b2-0924-4386-a10a-421c524dbf6e",
        "label": "100\"",
        "priceCents": 625000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "1d842efa-1a74-4da3-816c-29d67f462730",
    "name": "Antwerp Dresser",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Dresser",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-dresser",
    "description": "Crafted entirely from solid French white oak, the Antwerp Dresser offers six or nine drawers arranged in columns, each face revealing the depth of grain and natural character that makes every piece distinct. There are no pulls or handles allowing the form to stay clean, defined only by the shadow lines between drawers. Fitted with Hafele soft-close, full-extension slides, every drawer moves with smooth and deliberate function. Low and wide, the piece sits comfortably in a room without overwhelming it, with a generous top surface for everyday use. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you'd rather not weather the drama, the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-007.png",
        "alt": "Antwerp Dresser by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "31661ed2-a744-4b95-bb64-9f97d854c3b0",
        "label": "6 Drawer",
        "priceCents": 395000,
        "available": true
      },
      {
        "id": "357ad436-1c08-4f30-8385-1957a2b48195",
        "label": "9 Drawers",
        "priceCents": 545000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "d96f69bd-cf76-4412-bf83-2bf0c4b208b5",
    "name": "Antwerp Nightstand",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Nightstand",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-nightstand",
    "description": "The Antwerp Nightstand is an exercise in proportion and material honesty. Crafted entirely from solid French white oak, its surface reveals a depth of grain and natural character that makes each piece distinct. Three drawers, fitted with Hafele soft-close, full-extension slides, offer smooth and deliberate function, while the overall form remains composed and architectural beside the bed. Available in 28\" and 36\" widths. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-008.jpg",
        "alt": "Antwerp Nightstand by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "d8e4cb66-03a2-4607-bc02-a1053a302830",
        "label": "Regular",
        "priceCents": 165000,
        "available": true
      },
      {
        "id": "b96035d2-78e3-47e9-ab83-64dbf2beac0c",
        "label": "Wide",
        "priceCents": 195000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "1659beb2-b0e9-48bc-8a2c-40fcc1228d22",
    "name": "Antwerp Ottoman",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-ottoman",
    "description": "Tailored upholstered ottoman with structured form and plush comfort. A versatile accent designed for modern, high-end interiors. The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty Belgian linen or brushed cotton woven in the Netherlands to fall with natural drape. The seat cushion is topped with box-quilted down, offering enduring softness and comfort. The ottoman frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-009.jpg",
        "alt": "Antwerp Ottoman by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "2492f748-6a19-4174-8ba4-594735d944be",
        "label": "Bone",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "7d2069e9-7cec-45dd-ae07-30e65bfcbf80",
        "label": "Cocoa",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "1faf2026-a11f-4ab1-b54b-6b75a4018c80",
        "label": "Rust",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "14fb1d40-86ab-4c48-808b-97f1e4b62068",
        "label": "Vintage Black",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "adab1a9e-96aa-4cc6-910f-9095fca47d3c",
        "label": "White",
        "priceCents": 79500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "642d3aa2-7991-4605-805a-687b79b68a88",
    "name": "Antwerp Pouf",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-pouf",
    "description": "A grounding accent piece, often paired as a set. Works seamlessly with our Antwerp upholstery collection. The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty Belgian linen or brushed cotton woven in the Netherlands to fall with natural drape. The seat cushion is topped with box-quilted down, offering enduring softness and comfort. The pouf frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-010.jpg",
        "alt": "Antwerp Pouf by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "60df0d92-dc6f-46fb-be00-8d3a7ac33664",
        "label": "Bone",
        "priceCents": 55000,
        "available": true
      },
      {
        "id": "0d195b65-a8d7-4f26-ba66-f5348a9631c2",
        "label": "Cocoa",
        "priceCents": 55000,
        "available": true
      },
      {
        "id": "1a97b6af-7a58-48de-bfb6-7bdd1fb01fbe",
        "label": "Rust",
        "priceCents": 55000,
        "available": true
      },
      {
        "id": "f0d3389b-fb71-4be4-8d7e-a15a5983dbd9",
        "label": "Vintage Black",
        "priceCents": 55000,
        "available": true
      },
      {
        "id": "60c2f4de-f725-4680-b048-2ae51e4809dc",
        "label": "White",
        "priceCents": 55000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7a71f46f-69bf-4cb9-8c0b-c203c7ac5751",
    "name": "Antwerp Sofa - Bone",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-sofa-bone",
    "description": "Defined by proportion and material honesty, this sofa is made for permanence. The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty Belgian linen to fall with natural drape. The seat cushion is topped with box-quilted down, while backrest pillows are a 30/70 mix of down feather and fiber fill, offering enduring softness and comfort. The sofa frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-011.jpg",
        "alt": "Antwerp Sofa - Bone by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "dd083dbd-b950-4c5d-8b95-15d546771481",
        "label": "72\"",
        "priceCents": 325000,
        "available": true
      },
      {
        "id": "cddcd58d-4bb5-4949-9aab-e3c167701723",
        "label": "96\"",
        "priceCents": 395000,
        "available": true
      },
      {
        "id": "d98538f7-4b87-4d0d-8001-a6c0852d3a0e",
        "label": "120\"",
        "priceCents": 495000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "efa72337-555a-4696-9c12-24a55c39b105",
    "name": "Antwerp Sofa - Cocoa",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-sofa-cocoa",
    "description": "Defined by proportion and material honesty, this sofa is made for permanence. The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty Belgian linen to fall with natural drape. The seat cushion is topped with box-quilted down, while backrest pillows are a 30/70 mix of down feather and fiber fill, offering enduring softness and comfort. The sofa frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-012.jpg",
        "alt": "Antwerp Sofa - Cocoa by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "3a826075-43d7-4296-8a81-96a2225bbfdb",
        "label": "72\"",
        "priceCents": 325000,
        "available": true
      },
      {
        "id": "203e8c68-72e0-4cd2-8774-e4da6e388ae3",
        "label": "96\"",
        "priceCents": 395000,
        "available": true
      },
      {
        "id": "4f542766-4341-4e58-b667-a60bb527dfea",
        "label": "120\"",
        "priceCents": 495000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c514633d-5a5e-4d00-a13d-0c3ede70650c",
    "name": "Antwerp Sofa - Rust",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-sofa-rust",
    "description": "Defined by proportion and material honesty, this sofa is made for permanence. The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty brushed cotton fabric woven in the Netherlands, to fall with natural drape. The seat cushion is topped with box-quilted down, while backrest pillows are a 30/70 mix of down feather and fiber fill, together offering enduring softness and comfort. The sofa frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-013.png",
        "alt": "Antwerp Sofa - Rust by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "dc1a483c-7eb9-4ca6-a1d3-3a40de2dda5c",
        "label": "72\"",
        "priceCents": 325000,
        "available": true
      },
      {
        "id": "b03462f2-c9d4-4471-b8c2-dc3dda90600a",
        "label": "96\"",
        "priceCents": 395000,
        "available": true
      },
      {
        "id": "04f1669f-c8d8-4d98-b826-003d0d3b24cf",
        "label": "120\"",
        "priceCents": 495000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "2c69816c-de7f-48b7-bb32-22fe96dd18a8",
    "name": "Antwerp Sofa - Vintage Black",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-sofa-vintage-black",
    "description": "Defined by proportion and material honesty, this sofa is made for permanence. The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty brushed cotton fabric woven in the Netherlands, to fall with natural drape. The seat cushion is topped with box-quilted down, while backrest pillows are a 30/70 mix of down feather and fiber fill, together offering enduring softness and comfort. The sofa frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-014.jpg",
        "alt": "Antwerp Sofa - Vintage Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "00d3a286-5e48-4490-bef2-6fa61ddec30d",
        "label": "72\"",
        "priceCents": 325000,
        "available": true
      },
      {
        "id": "9536f765-312d-48a5-961f-9f7fbe1e7eaa",
        "label": "96\"",
        "priceCents": 395000,
        "available": true
      },
      {
        "id": "1f00fb0e-79df-45e0-b7b8-343d711a9288",
        "label": "120\"",
        "priceCents": 495000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "d4e8a9a8-dac1-4b42-8914-4ac67900e867",
    "name": "Antwerp Sofa - White",
    "brand": "House of Leon",
    "productType": "Sofas",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/antwerp-sofa-white",
    "description": "Defined by proportion and material honesty, this sofa is made for permanence. The classic Belgian shape establishes a grounded, continuous silhouette, balancing structure with ease. A straightforward slipcover allows a weighty Belgian linen to fall with natural drape. The seat cushion is topped with box-quilted down, while backrest pillows are a 30/70 mix of down feather and fiber fill, offering enduring softness and comfort. The sofa frame carries a lifetime warranty.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-015.jpg",
        "alt": "Antwerp Sofa - White by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "baaf9a8a-19c4-47f7-8e7a-7a03240f3145",
        "label": "72\"",
        "priceCents": 325000,
        "available": true
      },
      {
        "id": "af09c0e4-87c7-4e28-a8e7-9ede215c7508",
        "label": "96\"",
        "priceCents": 395000,
        "available": true
      },
      {
        "id": "6a118751-4ef8-424e-bcca-c92aa898e6bf",
        "label": "120\"",
        "priceCents": 495000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "6ab81b9f-2802-4c8a-ac6a-0f4f170580e1",
    "name": "Backgammon Board",
    "brand": "House of Leon",
    "productType": "Games",
    "category": "Game Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/backgammon-board",
    "description": "The House of Leon Backgammon Set is more than a game—it's an invitation to slow down and savor meaningful moments. Handcrafted with care, its rich walnut frame, supple leather, and striking marbled resin pieces create an experience that feels both luxurious and personal. Whether you're deep in strategy or enjoying the simple pleasure of friendly competition, this set transforms every match into a memorable occasion. When not in use, it serves as a work of art, infusing your space with timeless elegance and a sense of playful indulgence.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-016.jpg",
        "alt": "Backgammon Board by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "edcc1ba2-5260-46c0-aaeb-967ac538e995",
        "label": "Default Title",
        "priceCents": 79000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "38177ddb-e6ed-44d0-bff9-0e3cd9c8b777",
    "name": "Black Limestone Coffee Table",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/black-limestone-coffee-table",
    "description": "Black Limestone Coffee Table",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-017.jpg",
        "alt": "Black Limestone Coffee Table by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "ce6e3b26-ae33-4618-8ec5-1c7f44905504",
        "label": "Default Title",
        "priceCents": 249000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3d6016da-f815-4fad-a44c-ca723bc6d1b8",
    "name": "Charcoal Sculpture Pedestal - Medium",
    "brand": "House of Leon",
    "productType": "Sculptural Pedestal",
    "category": "Sculpture",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charcoal-sculpture-pedestal-medium",
    "description": "Sculptural in its own right, the Charcoal Sculpture Pedestal, crafted from solid Douglas Fir, undergoes the ancient shou-sugi-ban technique, revealing deep grooves and textures that evolve with time. As it ages, the wood tells its own story, expanding and shifting, showing hints of the natural grain beneath its burnished surface. Raw, organic, and unapologetically bold, this piece brings a sense of wild beauty into your home, letting nature take center stage. Due to the nature of this wood piece, cracking may occur as it acclimates to its environment. If desired, exposed areas can be refinished by carefully torching with high heat or applying a matte black spray paint for a seamless look. Please note, this product is final sale. Finish: The piece, made of solid Douglas Fir wood, is then treated with the shou-sugi-ban application of burning the first few layers of wood and finished with a clear matte seal. Please be sure not to break the seal when moving the piece within your home. The Medium and Short heights are photographed together in these spaces.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-018.jpg",
        "alt": "Charcoal Sculpture Pedestal - Medium by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "ee5ed607-56f3-4436-8294-ca1d165d708d",
        "label": "Default Title",
        "priceCents": 75000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7cb17320-f865-4f0e-bab6-c7bf8d98db7c",
    "name": "Charcoal Sculpture Pedestal - Short",
    "brand": "House of Leon",
    "productType": "Sculptural Pedestal",
    "category": "Sculpture",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charcoal-sculpture-pedestal-short",
    "description": "Sculptural in its own right, the Charcoal Sculpture Pedestal, crafted from solid Douglas Fir, undergoes the ancient shou-sugi-ban technique, revealing deep grooves and textures that evolve with time. As it ages, the wood tells its own story, expanding and shifting, showing hints of the natural grain beneath its burnished surface. Raw, organic, and unapologetically bold, this piece brings a sense of wild beauty into your home, letting nature take center stage. Due to the nature of this wood piece, cracking may occur as it acclimates to its environment. If desired, exposed areas can be refinished by carefully torching with high heat or applying a matte black spray paint for a seamless look. Please note, this product is final sale. Finish: The piece, made of solid Douglas Fir wood, is then treated with the shou-sugi-ban application of burning the first few layers of wood and finished with a clear matte seal. Please be sure not to break the seal when moving the piece within your home. The Medium and Short heights are photographed together in these spaces.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-019.jpg",
        "alt": "Charcoal Sculpture Pedestal - Short by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "0182e754-c7fe-4e87-8db2-e8e927c8cd0b",
        "label": "Default Title",
        "priceCents": 50000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "96a05b1f-5d45-4313-b70f-180345a38bd8",
    "name": "Charcoal Sculpture Pedestal - Tall",
    "brand": "House of Leon",
    "productType": "Sculptural Pedestal",
    "category": "Sculpture",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charcoal-sculpture-pedestal-tall",
    "description": "Sculptural in its own right, the Charcoal Sculpture Pedestal, crafted from solid Douglas Fir, undergoes the ancient shou-sugi-ban technique, revealing deep grooves and textures that evolve with time. As it ages, the wood tells its own story, expanding and shifting, showing hints of the natural grain beneath its burnished surface. Raw, organic, and unapologetically bold, this piece brings a sense of wild beauty into your home, letting nature take center stage. Due to the nature of this wood piece, cracking may occur as it acclimates to its environment. If desired, exposed areas can be refinished by carefully torching with high heat or applying a matte black spray paint for a seamless look. Please note, this product is final sale. Finish: The piece, made of solid Douglas Fir wood, is then treated with the shou-sugi-ban application of burning the first few layers of wood and finished with a clear matte seal. Please be sure not to break the seal when moving the piece within your home.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-020.jpg",
        "alt": "Charcoal Sculpture Pedestal - Tall by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "c7619bdb-eb4f-499e-be99-4dea61d52015",
        "label": "Default Title",
        "priceCents": 125000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cda7267d-0728-4210-b7d4-39fc2194db87",
    "name": "Charlie Counter Stool - Black",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charlie-counter-stool-black",
    "description": "The Charlie Counter Stool in Black effortlessly transforms your dining space with a playful cozy look. Its black boucle upholstery invites you to sink in, making every meal feel like a special occasion. The solid white oak legs bring a touch of playfulness, creating an atmosphere that feels both stylish and welcoming. Perfect for long dinners and shared moments, this chair harmonizes form and function, turning your dining area into a haven for connection and conversation.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-021.png",
        "alt": "Charlie Counter Stool - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "904706c6-09fd-43dc-bf92-e1bcddaa98ed",
        "label": "Default Title",
        "priceCents": 105000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "d9dcc3ac-7681-45c6-952e-dddf6b201295",
    "name": "Charlie Counter Stool - Camel Boucle",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charlie-counter-stool-camel-boucle",
    "description": "With tapered solid white oak legs and a rich beige boucle woven in Belgium, the Charlie Counter Stool brings a whimsical exciting look to your kitchen space with a design focused on comfort. The natural warm oak finish offers playful beauty that elevates the feeling in any setting. A perfect combination of both form and function, this counter stool will fit into any kitchen/dining setting while still providing ultimate comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-022.jpg",
        "alt": "Charlie Counter Stool - Camel Boucle by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "8235b7c9-85f6-48de-8dc9-9e040cdaecf4",
        "label": "Default Title",
        "priceCents": 105000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cc8f3cd0-26fb-43e7-8ae1-2567d8d3832a",
    "name": "Charlie Counter Stool - Mocha",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charlie-counter-stool-mocha",
    "description": "With tapered solid white oak legs and a soft brown mohair boucle from Tuscany, the Charlie Dining Chair brings a warm exciting look to your dining room space with a design focused on comfort. The tapered legs offer playful beauty that elevates the feeling in any setting. A perfect combination of both form and function, this dining chair will fit into any dining area while still providing ultimate comfort for long dinners and sit times.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-023.jpg",
        "alt": "Charlie Counter Stool - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "7c2a5277-6701-4217-a37f-cc7e5b7d8941",
        "label": "Default Title",
        "priceCents": 105000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e72cf861-baa9-49af-a334-65380e344f7c",
    "name": "Charlie Dining Chair - Black",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charlie-dining-chair-black",
    "description": "The Charlie Dining Chair in Black effortlessly transforms your dining space with a playful cozy look. Its black boucle upholstery invites you to sink in, making every meal feel like a special occasion. The solid white oak legs bring a touch of playfulness, creating an atmosphere that feels both stylish and welcoming. Perfect for long dinners and shared moments, this chair harmonizes form and function, turning your dining area into a haven for connection and conversation.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-024.png",
        "alt": "Charlie Dining Chair - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "52879988-1f50-4082-a594-1f677ca452fa",
        "label": "Default Title",
        "priceCents": 89000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "55409048-5156-46dc-abbe-b4d91b43eae5",
    "name": "Charlie Dining Chair - Camel Boucle",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charlie-dining-chair-camel-boucle",
    "description": "Our best selling Charlie, now in a soft beige boucle woven in Belgium. With tapered solid white oak legs , the Charlie Dining Chair brings a whimsical exciting look to your dining room space with a design focused on comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-025.jpg",
        "alt": "Charlie Dining Chair - Camel Boucle by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "fccd6e9b-1e72-416e-9b5c-e439c21e0d0d",
        "label": "Default Title",
        "priceCents": 99000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a4e92d85-521c-4d64-8360-5fec74b53790",
    "name": "Charlie Dining Chair - Mocha",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charlie-dining-chair-mocha",
    "description": "With tapered solid white oak legs and a soft brown mohair boucle from Tuscany, the Charlie Dining Chair brings a warm exciting look to your dining room space with a design focused on comfort. The tapered legs offer playful beauty that elevates the feeling in any setting. A perfect combination of both form and function, this dining chair will fit into any dining room while still providing ultimate comfort for long dinners and sit times.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-026.jpg",
        "alt": "Charlie Dining Chair - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "e462234c-78f3-4323-80bf-36b0487cb1af",
        "label": "Default Title",
        "priceCents": 99000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a6f32986-60d6-49a8-811e-fbd739667c08",
    "name": "Charlie Dining Chair - Warm Oak",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/charlie-dining-chair-warm-oak",
    "description": "With tapered solid warm oak legs and white boucle upholstery, the Charlie Dining Chair brings a young exciting look to your dining room space with a design focused on comfort. The natural warm oak finish offers playful beauty that elevates the feeling in any setting. A perfect combination of both form and function, this dining chair will fit into any dining room while still providing ultimate comfort for long dinners and sit times. The acrylic boucle fabric is perfect for dining areas as the material, unlike natural fibers, does not absorb any liquid or food spills.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-027.jpg",
        "alt": "Charlie Dining Chair - Warm Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "55962688-77e2-400d-bc91-2ec28f9dc108",
        "label": "Default Title",
        "priceCents": 89000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "9a4d7ff8-18d1-4562-8db4-cfb995057a8e",
    "name": "Classic Turkish Cotton Towels (Bone)",
    "brand": "Parachute Home",
    "productType": "Towels",
    "category": "Bath Towel",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/classic-turkish-cotton-towels-bone",
    "description": "Our exceptionally plush Turkish cotton towels are made using innovative Aerocotton Technology. Soft and absorbent – these luxe bath linens will leave you feeling fresh and clean.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-028.jpg",
        "alt": "Classic Turkish Cotton Towels (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "2967fcec-d8c5-4bae-a2b7-68a10181e577",
        "label": "Washcloth / Bone",
        "priceCents": 1400,
        "available": false
      },
      {
        "id": "c1902d31-f98b-42f5-93c9-e1e603e1b315",
        "label": "Hand Towel / Bone",
        "priceCents": 2900,
        "available": true
      },
      {
        "id": "132c0035-4926-4f37-905a-4551267e6d10",
        "label": "Bath Towel / Bone",
        "priceCents": 4900,
        "available": false
      },
      {
        "id": "f271e39f-8460-4e20-afaf-6f9f86eab458",
        "label": "Bath Sheet / Bone",
        "priceCents": 7900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f0534f39-4638-47e0-9fe7-025cb652beb7",
    "name": "Classic Turkish Cotton Towels (Dusk)",
    "brand": "Parachute Home",
    "productType": "Towels",
    "category": "Bath Towel",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/classic-turkish-cotton-towels-dusk",
    "description": "Our exceptionally plush Turkish cotton towels are made using innovative Aerocotton Technology. Soft and absorbent – these luxe bath linens will leave you feeling fresh and clean.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-029.jpg",
        "alt": "Classic Turkish Cotton Towels (Dusk) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "f1f636d2-8ade-4701-883b-66b53a217a8b",
        "label": "Washcloth / Dusk",
        "priceCents": 1400,
        "available": true
      },
      {
        "id": "43d789c4-537b-4b15-a358-fbb025cc47ad",
        "label": "Hand Towel / Dusk",
        "priceCents": 2900,
        "available": true
      },
      {
        "id": "3f4d30c4-cacf-4d56-84a7-ca905322c349",
        "label": "Bath Towel / Dusk",
        "priceCents": 4900,
        "available": true
      },
      {
        "id": "a9938e7c-5b68-4851-839f-5a25389ad7ec",
        "label": "Bath Sheet / Dusk",
        "priceCents": 7900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cbf0446a-1d4e-46ce-9f4b-c4b9fcf20c17",
    "name": "Classic Turkish Cotton Towels (White)",
    "brand": "Parachute Home",
    "productType": "Towels",
    "category": "Bath Towel",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/classic-turkish-cotton-towels-white",
    "description": "Our exceptionally plush Turkish cotton towels are made using innovative Aerocotton Technology. Soft and absorbent – these luxe bath linens will leave you feeling fresh and clean",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-030.jpg",
        "alt": "Classic Turkish Cotton Towels (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "2899eb42-c811-4e00-aecf-ee8ce0a3c568",
        "label": "Washcloth / White",
        "priceCents": 1400,
        "available": true
      },
      {
        "id": "565779da-ab73-49e6-876b-3d6851df5232",
        "label": "Hand Towel / White",
        "priceCents": 2900,
        "available": true
      },
      {
        "id": "c8282c38-63c9-4915-8ed7-7283dbaa7e90",
        "label": "Bath Towel / White",
        "priceCents": 4900,
        "available": true
      },
      {
        "id": "a87b963e-5ff5-4abc-8da0-268d5e846099",
        "label": "Bath Sheet / White",
        "priceCents": 7900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c1b19827-8bcc-4200-8600-2efc5786f042",
    "name": "Classic Turkish Cotton Tub Mat (Bone)",
    "brand": "Parachute Home",
    "productType": "Tub Mats",
    "category": "Bath Mat",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/classic-turkish-cotton-tub-mat-bone",
    "description": "Step out of the tub and onto this plush mat, designed to keep your bathroom floor dry and your toes nice and warm.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-031.jpg",
        "alt": "Classic Turkish Cotton Tub Mat (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "fde0ae7a-2247-43a0-897a-20b47addc836",
        "label": "Bone",
        "priceCents": 5900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "d879b37f-7249-406a-ae27-0181891c1930",
    "name": "Classic Turkish Cotton Tub Mat (Dusk)",
    "brand": "Parachute Home",
    "productType": "Tub Mats",
    "category": "Bath Mat",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/classic-turkish-cotton-tub-mat-dusk",
    "description": "Step out of the tub and onto this plush mat, designed to keep your bathroom floor dry and your toes nice and warm.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-032.jpg",
        "alt": "Classic Turkish Cotton Tub Mat (Dusk) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "2c89b0b2-6fad-44fa-8dfc-c74019b96b60",
        "label": "Dusk",
        "priceCents": 5900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "521aa7e1-69a3-4900-a67a-aebd63a21b45",
    "name": "Classic Turkish Cotton Tub Mat (White)",
    "brand": "Parachute Home",
    "productType": "Tub Mats",
    "category": "Bath Mat",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/classic-turkish-cotton-tub-mat-white",
    "description": "Step out of the tub and onto this plush mat, designed to keep your bathroom floor dry and your toes nice and warm.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-033.jpg",
        "alt": "Classic Turkish Cotton Tub Mat (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "cc5b5393-162f-4572-966e-a645d44c1e3e",
        "label": "White",
        "priceCents": 5900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "9a817e40-1985-477c-b980-d3d7eeec3870",
    "name": "Copper Coffee Table",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/copper-coffee-table",
    "description": "A study in contrast, the Copper Coffee Table balances strength with warmth. Crafted from stainless steel and finished in a brushed copper, its surface catches the light like the copper details found throughout Milan—a city where modernity and history coexist in quiet harmony. Available in square and rectangular sizes, its clean lines and reflective warmth make it a striking anchor for any space, adding depth without demanding attention. A piece that speaks in subtlety but leaves a lasting impression.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-034.jpg",
        "alt": "Copper Coffee Table by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "ef885c7a-dfc8-41a0-8984-beabf951a19b",
        "label": "Square",
        "priceCents": 249000,
        "available": true
      },
      {
        "id": "4358f708-603a-4c80-aa90-b6c16837b5e6",
        "label": "Rectangular",
        "priceCents": 269000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "eb74db93-c602-4d2d-bdf6-b0e0affef806",
    "name": "Copper Rug",
    "brand": "House of Leon",
    "productType": "Rug",
    "category": "Area Rug",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/copper-rug",
    "description": "Handwoven from 100% New Zealand Wool Our rugs are crafted from the highest-grade New Zealand wool, known for its softness, durability, and natural resilience. Each piece is abrash dyed, a traditional technique that creates subtle tonal shifts within a single color—giving the rug a rich sense of depth, movement, and character. Naturally stain-resistant and breathable, these rugs are made to last and age beautifully with time. A grounding piece with quiet impact.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-035.jpg",
        "alt": "Copper Rug by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "0fb1f839-e891-4709-97c7-2911f10346cf",
        "label": "10'x14'",
        "priceCents": 295000,
        "available": true
      },
      {
        "id": "ce5355fe-ea4c-4c08-b163-39ac898a2d2d",
        "label": "5'x8'",
        "priceCents": 95000,
        "available": true
      },
      {
        "id": "a9296179-3510-432b-ba7c-26fc076d1023",
        "label": "6'x9'",
        "priceCents": 125000,
        "available": true
      },
      {
        "id": "041a7f0a-3a1f-4807-bc7c-824913d950ec",
        "label": "8'x10'",
        "priceCents": 169000,
        "available": true
      },
      {
        "id": "94a10ae6-0e03-4ca5-81fe-2b9c5aa2980e",
        "label": "9'x12'",
        "priceCents": 215000,
        "available": true
      },
      {
        "id": "4b16695c-4754-45dd-a3ab-e22041f39023",
        "label": "12'x15'",
        "priceCents": 345000,
        "available": true
      },
      {
        "id": "831ec999-485c-4c06-9d14-29104e43c95a",
        "label": "Swatch",
        "priceCents": 1500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "0d29d363-9f2c-4849-a91d-b6c8bff279e5",
    "name": "Cypress Rug",
    "brand": "House of Leon",
    "productType": "Rug",
    "category": "Area Rug",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/cypress-rug",
    "description": "Handwoven from 100% New Zealand Wool Our rugs are crafted from the highest-grade New Zealand wool, known for its softness, durability, and natural resilience. Each piece is abrash dyed, a traditional technique that creates subtle tonal shifts within a single color—giving the rug a rich sense of depth, movement, and character. Naturally stain-resistant and breathable, these rugs are made to last and age beautifully with time. A grounding piece with quiet impact.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-036.jpg",
        "alt": "Cypress Rug by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "946d70bc-02f9-4b5a-a565-e73556188dd2",
        "label": "5'x8'",
        "priceCents": 95000,
        "available": true
      },
      {
        "id": "fe9e543d-69c7-4c23-af49-ae4410034b1b",
        "label": "6'x9'",
        "priceCents": 125000,
        "available": true
      },
      {
        "id": "1b282cd8-b389-4e1a-bc95-a5a29d0e1a85",
        "label": "8'x10'",
        "priceCents": 169000,
        "available": true
      },
      {
        "id": "19bf992b-89e7-4326-9786-4a605f087ced",
        "label": "9'x12'",
        "priceCents": 215000,
        "available": true
      },
      {
        "id": "91255d22-d1f4-4c5e-8891-a497bbe4e802",
        "label": "10'x14'",
        "priceCents": 295000,
        "available": true
      },
      {
        "id": "d6a57bf2-096d-42f5-a8c6-c0fdb247bb25",
        "label": "12'x15'",
        "priceCents": 345000,
        "available": true
      },
      {
        "id": "0793f317-70da-4cf2-8a5d-c17e0c51d715",
        "label": "Swatch",
        "priceCents": 1500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "0114c816-7ea5-462d-9c57-23adb74700bf",
    "name": "Delphina Sculpture Candle",
    "brand": "House of Leon",
    "productType": "Candles",
    "category": "Candle",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/delphina-sculpture-candle",
    "description": "Delphina’s figure was sculpted by California based artist, Firoozeh Neman, whose bodies of work are celebrations of the glory and power of the female form. “The jagged edges are a deviation from the usual depiction of the female figure,” describes the artist. “They allude to the strength and power of women who are so often illustrated as delicate in nature.” Perfect for moments of reflection or gathering with loved ones, this candle invites you to celebrate the power within.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-037.jpg",
        "alt": "Delphina Sculpture Candle by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "40c726d2-8114-4f2e-8893-cc6ca8977871",
        "label": "Obsidian Black",
        "priceCents": 12000,
        "available": false
      },
      {
        "id": "666a23e3-ddd6-4212-bf0d-730d74208c6b",
        "label": "Beige",
        "priceCents": 12000,
        "available": false
      },
      {
        "id": "8959c15a-3e35-4605-802f-3e179a3150e1",
        "label": "Olive Green",
        "priceCents": 12000,
        "available": false
      },
      {
        "id": "dede8e2b-aa4d-4b17-a82c-b310a0c6660c",
        "label": "Stone",
        "priceCents": 12000,
        "available": true
      },
      {
        "id": "de97004a-e953-4099-8b1a-1a67cd81e45d",
        "label": "Ivory",
        "priceCents": 12000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "228679f0-6abe-4589-9bb3-0fbdaf9f031b",
    "name": "Down Alternative Duvet Insert",
    "brand": "Parachute Home",
    "productType": "Duvet Inserts",
    "category": "Comforter",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/down-alternative-duvet-insert",
    "description": "Transform your bed into a cloud of comfort. This duvet insert is stuffed with recycled microfiber fill that mimics the fluffiness and insulating ability of luxury down. Soft sateen is sewn around the fill in a baffle box construction, keeping it evenly distributed. We finish it off with sturdy, double stitched seams to maintain its shape and durability for years to come.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-038.jpg",
        "alt": "Down Alternative Duvet Insert by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "34ee7579-ab56-4c14-8618-1b43b35dfe18",
        "label": "Twin/Twin XL / Lightweight",
        "priceCents": 21000,
        "available": true
      },
      {
        "id": "d54ea993-9c64-4dda-a307-b089d57ae2ad",
        "label": "Twin/Twin XL / Midweight",
        "priceCents": 26000,
        "available": true
      },
      {
        "id": "548b7dfa-3d00-450a-82ba-45ef06d730f5",
        "label": "Twin/Twin XL / Heavyweight",
        "priceCents": 31000,
        "available": true
      },
      {
        "id": "45a9001f-2d0d-4806-9395-ccc6814b7221",
        "label": "Full/Queen / Lightweight",
        "priceCents": 26000,
        "available": true
      },
      {
        "id": "495475f0-e123-439f-8ffe-1607299afc38",
        "label": "Full/Queen / Midweight",
        "priceCents": 31000,
        "available": true
      },
      {
        "id": "1344ff8f-2c8f-4337-a128-ddcee0961ba0",
        "label": "Full/Queen / Heavyweight",
        "priceCents": 36000,
        "available": true
      },
      {
        "id": "a5911c40-5bee-42df-9eaa-3a4236236cb6",
        "label": "King/Cal King / Lightweight",
        "priceCents": 31000,
        "available": true
      },
      {
        "id": "817dfc85-de68-45ba-84b8-b948cb39536f",
        "label": "King/Cal King / Midweight",
        "priceCents": 36000,
        "available": true
      },
      {
        "id": "cabda894-6d62-4ce0-8062-17c6e5806cd8",
        "label": "King/Cal King / Heavyweight",
        "priceCents": 41000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f2173f5b-7cbb-40df-a2a9-dc287bdf2406",
    "name": "Down Alternative Pillow",
    "brand": "Parachute Home",
    "productType": "Pillows",
    "category": "Bed Pillow",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/down-alternative-pillow",
    "description": "Rest your head on supreme plushness. Our recycled microfiber fill is perfect for someone who wants a hypoallergenic alternative with the same loftiness and support of down. We’ve designed three densities: soft, medium and firm, so that you can choose the fill that suits your sleep style.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-039.jpg",
        "alt": "Down Alternative Pillow by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "fbf2adaf-f013-4752-a077-d4d8b2fa58b4",
        "label": "Standard / Firm",
        "priceCents": 10000,
        "available": true
      },
      {
        "id": "c163e7fe-03f7-4603-ba6e-8cc01ce56645",
        "label": "Standard / Medium",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "bfd428f9-6926-489d-b8b5-bc8da39e33ae",
        "label": "Standard / Soft",
        "priceCents": 8000,
        "available": true
      },
      {
        "id": "cb70a5b1-dbf2-4ba1-bcc2-675c1ff9acba",
        "label": "King / Firm",
        "priceCents": 11000,
        "available": true
      },
      {
        "id": "9e75341d-ff0c-48ad-976d-995ce29370ad",
        "label": "King / Medium",
        "priceCents": 10000,
        "available": true
      },
      {
        "id": "c4eb4199-95f9-4674-8834-9588bc26d077",
        "label": "King / Soft",
        "priceCents": 9000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "767ac23d-a583-439c-b97a-51da0e1f35bb",
    "name": "Down Duvet Insert",
    "brand": "Parachute Home",
    "productType": "Duvet Inserts",
    "category": "Comforter",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/down-duvet-insert",
    "description": "Transform your bed into a cloud of comfort. Made with European white down, our inserts have a fill power of 750 – giving it superior fluff and just the right amount of warmth. Soft sateen is sewn around the down in a baffle box construction, keeping the feathers evenly distributed. We finish it off with sturdy, double stitched seams to maintain its shape and durability for years to come.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-040.jpg",
        "alt": "Down Duvet Insert by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "54b3804a-16b6-431a-816b-966cfb2108e5",
        "label": "Twin/Twin XL / Lightweight",
        "priceCents": 35000,
        "available": true
      },
      {
        "id": "471ed580-caf2-4d4b-9daa-8e0cc06442f0",
        "label": "Twin/Twin XL / Midweight",
        "priceCents": 43000,
        "available": true
      },
      {
        "id": "7fc8edd4-77d5-4bdd-9de0-a005554a2220",
        "label": "Full/Queen / Lightweight",
        "priceCents": 45000,
        "available": true
      },
      {
        "id": "8c686ed2-a9cc-457f-989a-0a26fba04566",
        "label": "Full/Queen / Midweight",
        "priceCents": 53000,
        "available": true
      },
      {
        "id": "ba873a2a-298f-40de-9c5e-5ea1eb1180ec",
        "label": "Full/Queen / Heavyweight",
        "priceCents": 61000,
        "available": true
      },
      {
        "id": "940ea619-c35e-42fc-9943-a5887e754bfe",
        "label": "King/Cal King / Lightweight",
        "priceCents": 55000,
        "available": true
      },
      {
        "id": "421e2355-b71b-4660-811e-8657e8b080c3",
        "label": "King/Cal King / Midweight",
        "priceCents": 63000,
        "available": true
      },
      {
        "id": "29441c8e-d761-4226-bafd-29f482ad4f8a",
        "label": "King/Cal King / Heavyweight",
        "priceCents": 71000,
        "available": true
      },
      {
        "id": "9c4d9202-6e51-4ec0-b5c6-185295c979c2",
        "label": "Twin/Twin XL / Heavyweight",
        "priceCents": 51000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "b4248ebd-2358-48ba-bb1c-0c66b1cdbb71",
    "name": "Down Pillow",
    "brand": "Parachute Home",
    "productType": "Pillows",
    "category": "Bed Pillow",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/down-pillow",
    "description": "Rest your head on supreme plushness. Made with European white down, our pillows have a luxurious, supportive-yet-airy quality that provides optimum comfort. Available in three densities: soft, medium and firm, so that you can choose the fill that suits your sleep style.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-041.jpg",
        "alt": "Down Pillow by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "6a97c714-5387-4529-a59f-213d0ad679ba",
        "label": "Standard / Soft",
        "priceCents": 16000,
        "available": true
      },
      {
        "id": "76d937c9-7e59-423f-8189-4073318db664",
        "label": "Standard / Medium",
        "priceCents": 18500,
        "available": true
      },
      {
        "id": "06e4dd31-d23d-4cc9-a1da-456704df9fc5",
        "label": "Standard / Firm",
        "priceCents": 20500,
        "available": true
      },
      {
        "id": "39200529-65cd-46f2-96c3-4cd0d44159fa",
        "label": "King / Soft",
        "priceCents": 21000,
        "available": true
      },
      {
        "id": "089d3b19-0e96-4013-b172-b70269f20ca6",
        "label": "King / Medium",
        "priceCents": 23500,
        "available": true
      },
      {
        "id": "6fb82526-4da1-4f28-a208-b4ac296e90e6",
        "label": "King / Firm",
        "priceCents": 25500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e1333e59-81b4-4b63-9bce-457f78077b82",
    "name": "Eclipse 90\" Sleeper Sofa in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eclipse-90-sleeper-sofa-in-hemp-blend",
    "description": "The Eclipse 90\" Sleeper Sofa converts from a modern sofa to a queen bed, making it an ideal choice for guest rooms, studio apartments, and flexible living spaces. Upholstered in a breathable, natural hemp blend and built on an FSC-certified wood frame, it combines non-toxic materials with everyday comfort. Available in a range of colors, it's designed for sustainable homes that don't compromise on style or function.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-042.png",
        "alt": "Eclipse 90\" Sleeper Sofa in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "07c737a2-aa3c-44a8-b9e2-dbea3c0beabf",
        "label": "Thistle / Amber",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "f4c85a7c-5631-44bd-ba1e-e52cab4e1945",
        "label": "Thistle / Indigo",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "135cc1dd-3a60-41e7-a883-66df0d928eaa",
        "label": "Thistle",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "1428ef99-d047-468e-a6d7-2b1e4e54a96d",
        "label": "Fir",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "196ec627-5001-42fc-be12-33c3f2aaa3dc",
        "label": "Fir / Thistle",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "c64e5909-6da8-4c8a-a6d8-c186d03f0886",
        "label": "Fir / Natural",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "681d1bc2-4fcf-4290-b2bd-43b4afc54158",
        "label": "Yellow Clay",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "43855a9b-47b5-4e01-b593-790f3663a708",
        "label": "Yellow Clay / Mustard",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "f1c0650b-c524-4ebe-a2fc-65659901a9fd",
        "label": "Yellow Clay / Amber",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "086937a5-6fb4-45e5-a18d-73a7308ec95d",
        "label": "Natural",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "5af6065b-44ee-41a9-bb1b-70c5f3aaa2d2",
        "label": "Natural / Fir",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "e2e33746-9585-4449-a0ba-5c45be9be1d7",
        "label": "Fog",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "c4d2a6a2-e06b-4bb7-a21c-17ec775fb1da",
        "label": "Sand",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "720e39af-2fc9-443a-ad3e-5ca988ebbc3f",
        "label": "Sand / Indigo",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "c3c81a78-5640-4e96-b3be-2bb75a59cfb4",
        "label": "Field",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "3051cba1-c0ed-40ac-9fb9-7804aacbe7db",
        "label": "Redwood",
        "priceCents": 309500,
        "available": true
      },
      {
        "id": "db42f38e-4a4a-4780-92a7-ed2b05f1dd7c",
        "label": "Brick / Natural",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "e6951aff-2d9f-49a5-b2ba-4117b789196e",
        "label": "Cobalt",
        "priceCents": 319500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "fb350e1a-b4ad-4167-89f0-23c309d78338",
    "name": "Eclipse 90\" Sleeper Sofa in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eclipse-90-sleeper-sofa-in-recycled-velvet",
    "description": "The Eclipse Sleeper Sofa converts from sofa to queen bed with a modern, space-saving design. Crafted with FSC-certified wood and non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-043.png",
        "alt": "Eclipse 90\" Sleeper Sofa in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "7f07a7d2-17bb-4eef-877c-806c2fc26c55",
        "label": "Amber",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "244c3f43-ddfb-4700-accd-f2053e14e8ce",
        "label": "Amber / Chocolate",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "2628937b-e21a-4554-a40c-ccbcb3cb5f4e",
        "label": "Moss",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "60416f0d-ea74-4f9d-8365-730b07cbacba",
        "label": "Cashew",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "562276c1-5c74-4760-beaa-e36a37360ce9",
        "label": "Chocolate",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "d224ee95-19d1-46bb-89fe-18bd5c68e46a",
        "label": "Chocolate / Amber",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "21c3c394-dbb9-452c-928d-8345ed67a8a3",
        "label": "Indigo",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "95e30ee4-7943-4d46-a1f1-16cc4eb520b2",
        "label": "Indigo / Amber",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "be5f1e9b-de56-42fe-bac2-43d48117567e",
        "label": "Dusty Rose",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "b2564424-ea9b-4989-8e98-119fb2fb11e4",
        "label": "Dusty Rose / Amber",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "709adcf7-9afe-48c1-a475-af322a78a1ee",
        "label": "Seafoam",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "3f8c468a-7dd1-4213-847a-d918314dee14",
        "label": "Seafoam / Indigo",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "20009550-3b70-495c-b74d-6b65f1eb1ea5",
        "label": "Seafoam / Amber",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "1575f254-88ce-413b-bbd0-9bd0c1ce54d3",
        "label": "Mustard",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "d23119ee-8718-47b2-a2c0-7c9b4183e57e",
        "label": "Cornflower",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "956bbfe9-39ce-46df-a423-844341a83dcb",
        "label": "Cornflower / Amber",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "85cb076c-cb05-47fb-95bb-f196d0264dcf",
        "label": "Cornflower / Chocolate",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "b69bef4d-ab0d-4d1e-9548-85a9f00f3ff2",
        "label": "Ash",
        "priceCents": 259500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c64a0de0-4bb4-4fc1-8746-34a095a424fb",
    "name": "Eclipse 90\" Sleeper Sofa in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eclipse-90-sleeper-sofa-in-upcycled-poly",
    "description": "The Eclipse Sleeper Sofa converts from sofa to queen bed with a modern, space-saving design. Crafted with FSC-certified wood and non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-044.png",
        "alt": "Eclipse 90\" Sleeper Sofa in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "38816fbc-7b14-4831-b48c-4bff7ec48aec",
        "label": "Oat",
        "priceCents": 284500,
        "available": true
      },
      {
        "id": "81434318-c85f-4223-9b4f-52f3d350a562",
        "label": "Moon",
        "priceCents": 284500,
        "available": true
      },
      {
        "id": "7af9f2ed-9c85-44c7-91af-3f4045b913a7",
        "label": "Farro",
        "priceCents": 284500,
        "available": true
      },
      {
        "id": "8435be5f-6350-4757-98dd-f848fe3203b9",
        "label": "Midnight",
        "priceCents": 284500,
        "available": true
      },
      {
        "id": "b143f909-65b9-4165-81f1-78b01ca92970",
        "label": "Shadow",
        "priceCents": 284500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "890114df-2808-4441-93fb-a7307f0ef407",
    "name": "Eclipse Lumbar Pillow - Chair in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eclipse-lumbar-pillow-chair-in-hemp-blend",
    "description": "Description was not provided in the staging snapshot.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-045.png",
        "alt": "Eclipse Lumbar Pillow - Chair in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "7e719515-5931-4117-b5a7-19334e17d5b1",
        "label": "Fir",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "a4be4a2b-9382-463d-b561-c2cbfc09f809",
        "label": "Fir / Natural",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "038a796c-55bf-4814-9e1d-10ec52d2dc8d",
        "label": "Fir / Thistle",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "3dcc7f42-7c11-457f-9ad6-a0c261db86a5",
        "label": "Fog",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "720e2317-7f2e-43aa-9ea1-26dfd5639dd6",
        "label": "Sand",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "eec8ac19-8541-488a-a783-58cf71f42e77",
        "label": "Sand / Indigo",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "090ead65-411b-47dc-bc8d-373100cc4d51",
        "label": "Sand / Moss",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "96c314bb-1a54-42ea-be03-32992c497c34",
        "label": "Thistle",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "696e0ceb-9a01-4410-b6fe-5bd9d8a061e1",
        "label": "Thistle / Amber",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "8f9a7ec9-5f61-46cc-a23e-3ed7e6dd91ce",
        "label": "Thistle / Indigo",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "d50dc7dc-6eb0-49cd-98c0-275053de4234",
        "label": "Thistle / Natural",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "758eaa6c-67c8-4569-9730-8714193597cb",
        "label": "Natural",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "d5346106-269d-4c7d-91bd-f1b404371837",
        "label": "Natural / Fir",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "a61100fa-27b4-434f-9e30-f8c58161d8c7",
        "label": "Field",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "e261bd5b-8b8a-4166-860f-0b1e72b5a52c",
        "label": "Yellow Clay",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "ed5df013-9a15-4b1d-8d16-72fb38a7bd5c",
        "label": "Yellow Clay / Mustard",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "f36f1506-6bd5-4aa1-a955-ede2145038ae",
        "label": "Yellow Clay / Amber",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "9b9c0887-73c3-41ea-a778-40b35bda4ac8",
        "label": "Field / Natural",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "06569871-3667-4376-8c42-9b4484e979fe",
        "label": "Cobalt",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "7bd45bbc-fac7-4bb0-ada5-e9884bdf7177",
        "label": "Redwood",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "5dee0d75-4dce-4f18-a05d-5c4123f183b1",
        "label": "Brick / Natural",
        "priceCents": 17500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8cc92c36-603e-4d5b-95c8-ce36c39e9963",
    "name": "Eclipse Lumbar Pillow - Chair in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eclipse-lumbar-pillow-chair-in-recycled-velvet",
    "description": "Description was not provided in the staging snapshot.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-046.png",
        "alt": "Eclipse Lumbar Pillow - Chair in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "2ed4adf1-1541-4bdd-8999-3683385c5124",
        "label": "Amber",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "c894a590-628a-4311-8053-5155f4863522",
        "label": "Amber / Chocolate",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "4ee8adb7-123a-41b2-84b1-7b8d4ac6b519",
        "label": "Moss",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "b546a479-bc29-440b-ad75-afbc211da9a5",
        "label": "Mustard",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "b116375d-6a7e-41e2-a975-a129ad4fd4ca",
        "label": "Chocolate",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "4de5d5f6-08a8-4673-89ec-9cafbde566ee",
        "label": "Chocolate / Amber",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "b4be40d6-979a-4368-a36f-805fd54918aa",
        "label": "Indigo",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "c5491903-c752-4f87-b194-45f00731698e",
        "label": "Indigo / Amber",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "9b962563-8c05-4a12-976a-937846d5710b",
        "label": "Dusty Rose",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "0d2d9d52-c02d-4182-a081-a904cdb20df2",
        "label": "Dusty Rose / Amber",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "51739450-7306-49cb-a0b2-aaa7fa6c7969",
        "label": "Seafoam",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "3b86f302-bb46-44e7-8775-d142dd79137b",
        "label": "Seafoam / Indigo",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "8d66bb04-51ae-4a9c-912c-0917bb07eb9a",
        "label": "Seafoam / Amber",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "04c3c959-2e09-4e9b-a313-1e20e88469f1",
        "label": "Ash",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "74c7f2e7-9239-4183-97cc-84bd6c58d2e4",
        "label": "Cashew",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "90d0808d-4c47-4495-bc75-b772668b05da",
        "label": "Cornflower",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "6f36c218-2674-4b93-9295-589effed59ad",
        "label": "Cornflower / Mustard",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "ccbc937f-b921-400a-a210-fefde54d50e0",
        "label": "Cornflower / Chocolate",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "0d7fd061-0dba-4663-949f-1b39ce58665a",
        "label": "Cornflower / Amber",
        "priceCents": 15500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "04312486-8cf9-400d-b42d-e71b03789008",
    "name": "Eclipse Lumbar Pillow - Chair in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eclipse-lumbar-pillow-chair-in-upcycled-poly",
    "description": "Description was not provided in the staging snapshot.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-047.png",
        "alt": "Eclipse Lumbar Pillow - Chair in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "a32189e8-0c46-4517-ba76-1504440d34de",
        "label": "Oat",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "e3682852-ed80-428f-be02-a421e21de5e6",
        "label": "Moon",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "7c2a49de-b497-4255-90a8-353019a25da5",
        "label": "Midnight",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "5357064d-5bca-4ed8-a324-12d381c3365f",
        "label": "Farro",
        "priceCents": 15500,
        "available": true
      },
      {
        "id": "ab9d1a6d-5425-433d-9c68-78092b0d1196",
        "label": "Shadow",
        "priceCents": 15500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "10c3173b-1187-4116-b9e1-1a6d20e1a953",
    "name": "Eclipse Lumbar Pillow - Sofa in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eclipse-lumbar-pillow-sofa-in-hemp-blend",
    "description": "Description was not provided in the staging snapshot.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-048.png",
        "alt": "Eclipse Lumbar Pillow - Sofa in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "b62aee95-140e-4b30-9118-9719302d64e3",
        "label": "Fir",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "9458d866-e5c9-4a26-b4f3-cb1c82a2fd68",
        "label": "Fir / Natural",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "325fc7e5-54f7-4b6d-9276-6b648e82d0ea",
        "label": "Fir / Thistle",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "c84514f8-8baf-4efd-b4d3-6e9d17185b9a",
        "label": "Fog",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "2e13aef8-1b96-4cca-8a9f-91faf2214e43",
        "label": "Sand",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "25972435-7cab-4d49-b66a-0f5619c51683",
        "label": "Sand / Indigo",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "ef574ed6-6e86-4cc6-bd46-232d9091cc67",
        "label": "Sand / Moss",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "5aef9ccf-eb34-46fb-b23f-0367141a3d4a",
        "label": "Natural",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "7ab787c4-ad7f-49b2-b335-b23ad59e7305",
        "label": "Thistle",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "65cc4272-4a05-4190-a215-468c42109c5d",
        "label": "Thistle / Amber",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "56442428-ce22-44e8-8a35-86e07bebeba0",
        "label": "Thistle / Indigo",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "f650b2c0-5eef-4d8a-843d-431cf7514ac8",
        "label": "Thistle / Natural",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "e2c351c3-e97c-4d6a-90c5-981b9c6e873b",
        "label": "Natural / Fir",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "2a43bc11-b94c-457b-a3a5-c4e32a3731ed",
        "label": "Field",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "0837dc6e-3745-4139-82b7-889e57af761c",
        "label": "Yellow Clay",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "d55e7686-88d0-4dd7-bb5b-5310d7b28d82",
        "label": "Yellow Clay / Mustard",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "7ad1609f-dccf-4613-b7b4-ceac19a056b3",
        "label": "Yellow Clay / Amber",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "e818af3d-9835-4019-9922-5fe96f4bd6a8",
        "label": "Field / Natural",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "8bb80c81-201d-4a00-a6d2-c4384f3942b3",
        "label": "Cobalt",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "28cd3bce-253f-4403-8fd7-842785f08141",
        "label": "Redwood",
        "priceCents": 21500,
        "available": true
      },
      {
        "id": "01f6965f-04b9-4a35-bac9-b121900f040c",
        "label": "Brick / Natural",
        "priceCents": 21500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "4fd814e7-20f8-4fff-b068-b7fc84e2b59d",
    "name": "Eclipse Lumbar Pillow - Sofa in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eclipse-lumbar-pillow-sofa-in-recycled-velvet",
    "description": "Description was not provided in the staging snapshot.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-049.png",
        "alt": "Eclipse Lumbar Pillow - Sofa in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "a7aa3996-def8-41c0-9e53-1e83dd9519b0",
        "label": "Amber",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "c6f43a42-458a-4519-83fa-35a161d7c289",
        "label": "Amber / Chocolate",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "9ec4334c-bee3-4b78-a592-fb098bbb66ee",
        "label": "Moss",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "4b9ed648-d307-416c-a5ef-c6f62ded4e39",
        "label": "Mustard",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "0771565d-ab3a-48e9-8165-adb3db43e375",
        "label": "Chocolate",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "14163627-62d1-4863-8e3e-e9e0bb2029ad",
        "label": "Chocolate / Amber",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "df8ac33c-6684-4c4a-9485-e0ccb7f99904",
        "label": "Indigo",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "5de8826f-eca0-4e7b-a82d-8ec8762c9752",
        "label": "Indigo / Amber",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "5ef573dd-0bb3-4746-9ccd-37b840e0b039",
        "label": "Dusty Rose",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "f462abb2-87e5-4659-a02d-cdc22f3e5322",
        "label": "Dusty Rose / Amber",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "3cc740c4-89af-4b00-9621-8760275f2aa2",
        "label": "Seafoam",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "83570f25-a2b9-47fd-8902-8fab8dec2c76",
        "label": "Seafoam / Indigo",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "96e7ba5e-a3e7-4b69-8c30-54d1573b3b76",
        "label": "Seafoam / Amber",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "0e3ec43a-60b2-4615-a7a1-003414443f04",
        "label": "Ash",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "a121f122-ce65-4119-b415-5a3d941b0922",
        "label": "Cashew",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "32f249f2-7cb9-41ae-a856-a017ddf4b186",
        "label": "Cornflower",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "fd35239a-f16f-4743-9803-b79a7e8d056c",
        "label": "Cornflower / Mustard",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "c5fc07a5-a7e2-413b-9d12-908b434f9c2d",
        "label": "Cornflower / Chocolate",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "6dc6060f-e270-441f-aebe-d9fb3b9de33b",
        "label": "Cornflower / Amber",
        "priceCents": 17500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "43c78ec8-99e8-40cf-8ea1-514d504fd19a",
    "name": "Eclipse Lumbar Pillow - Sofa in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eclipse-lumbar-pillow-sofa-in-upcycled-poly",
    "description": "Description was not provided in the staging snapshot.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-050.png",
        "alt": "Eclipse Lumbar Pillow - Sofa in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "77553ba0-f613-4694-b6cf-63af8ac1037c",
        "label": "Oat",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "a1a6fd38-de67-4fa2-a4ae-912975ca4d98",
        "label": "Moon",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "91b782e3-1089-460d-a3c6-98c7d9675359",
        "label": "Midnight",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "d74e9c60-911c-4be0-9225-41eb89e52dd7",
        "label": "Farro",
        "priceCents": 17500,
        "available": true
      },
      {
        "id": "1ed24bae-c310-4fae-afc5-9fbc4b321b70",
        "label": "Shadow",
        "priceCents": 17500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "01827d76-27bf-4ac7-8d66-19fb839d299a",
    "name": "Eco Mattress",
    "brand": "Parachute Home",
    "productType": "Mattress",
    "category": "Mattress",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eco-mattress",
    "description": "The foundation of a great night's sleep, The Eco Mattress was thoughtfully designed and masterfully crafted to be supportive, comfortable, and eco-friendly. Comfort &amp; Support : Firm in the middle for back support; softer at the head and feet for pressure relief and alignment. Learn more about the hybrid mattress on our Blog. Premium Materials : This product is foam-free and crafted from Pure New Zealand wool, 100% organic cotton, and pocketed steel coils. Eco-Friendly : Wool sourced through the Wool Integrity NZ™ program. Superior Design : 5x the coils of a standard mattress; hand-tufted for durability. No Box Spring Needed : Designed to work without a box spring. Made in the USA : Crafted with domestic and imported materials. 10-Year Warranty : Sleep with peace of mind. Protect and complete your perfect bed. Consider our Mattress Toppers and Pads created specifically for our mattress. See it in person: our stores have display mattresses , but do not carry them in stock. All mattress orders will be shipped to your home.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-051.jpg",
        "alt": "Eco Mattress by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "8491ad74-0ce1-4eb6-8ca7-02f340b30c4a",
        "label": "Cal King",
        "priceCents": 285000,
        "available": true
      },
      {
        "id": "07b9a0d8-1bfb-490c-ad4c-e01ba3204eed",
        "label": "King",
        "priceCents": 285000,
        "available": true
      },
      {
        "id": "4f2a49bc-8eb5-4950-b09a-1cd992ecf1f1",
        "label": "Queen",
        "priceCents": 265000,
        "available": true
      },
      {
        "id": "82204ed1-c549-4874-9204-688d1d4f7397",
        "label": "Full",
        "priceCents": 245000,
        "available": true
      },
      {
        "id": "ba11c185-2079-4ca1-8a14-9e27b7e6748a",
        "label": "Twin XL",
        "priceCents": 155000,
        "available": true
      },
      {
        "id": "fec0410a-da43-461c-bd84-1a9586702ebf",
        "label": "Twin",
        "priceCents": 155000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "827ecc34-9ee9-4729-8eeb-9e8ec7d88864",
    "name": "Eik Bench",
    "brand": "House of Leon",
    "productType": "Bench",
    "category": "Bench",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eik-bench",
    "description": "A solid French white oak beam paired on its own or as a set of two in coffee table form. The Eik Bench is built from solid French white oak, with a thick top resting on block-like legs set wide at each end. The form is reduced and deliberate, allowing proportion and material to carry the piece. Natural cracks, knots, and grain shifts are left intact, giving the bench a sense of weight and use from the outset. Style with two for a dynamic coffee table design. Please note, knots and cracks are left intentionally unfilled and may expand depending on your environment as the thick wood finds its final resting place. If these characteristics are of concern, we do not recommend this piece. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-052.jpg",
        "alt": "Eik Bench by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "359d1ceb-c6d8-489b-a996-f45497a4897e",
        "label": "Default Title",
        "priceCents": 195000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f071f789-72c9-45c2-949b-fc9b5595cb38",
    "name": "Eik Chest",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Trunk",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eik-chest",
    "description": "The Eik Chest is constructed from solid French white oak and assembled using exposed dovetail joinery structurally locking the panels together. The hinged lid is supported by a soft-close mechanism. The hollow box provides ample storage for all your living room needs. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-053.jpg",
        "alt": "Eik Chest by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "36a2c043-8ad0-4983-9129-f98b95e3feb7",
        "label": "Default Title",
        "priceCents": 95000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ebf5504e-0a2b-4a28-a1cc-d55a35bb39de",
    "name": "Eik Coffee Table - Square",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eik-coffee-table-square",
    "description": "An heirloom piece in the making. We’re not supposed to have favorites, but we do. Our Eik Coffee Tables are crafted from thick slabs of solid French white oak, chosen for their depth of grain and rich character. There’s something beautiful about allowing a material to feel like itself. A light brown oiled finish let's the wood’s natural personality shine through. Knots and cracks remain intact, with nothing overly refined or polished into anonymity. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our white oak pieces from our Ojai Collection offer a calmer, more stable partnership. Please note, knots and cracks are left intentionally unfilled and may expand depending on your environment as the thick wood finds its final resting place. If these characteristics are of concern, we do not recommend this piece.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-054.jpg",
        "alt": "Eik Coffee Table - Square by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "a687033e-d8bd-4b14-8aff-344e63d56cb6",
        "label": "55\"",
        "priceCents": 365000,
        "available": true
      },
      {
        "id": "ab840057-7eb2-4177-b964-32f20ccbe743",
        "label": "38\"",
        "priceCents": 245000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "b2aba914-9d99-44a2-a6e3-f872bd6986f9",
    "name": "Eik Coffee Table - Rectangle",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eik-coffee-table-rectangle",
    "description": "An heirloom piece in the making. We’re not supposed to have favorites, but we do. Our Eik Coffee Tables are crafted from thick slabs of solid French white oak, chosen for their depth of grain and rich character. There’s something beautiful about allowing a material to feel like itself. A light brown oiled finish let's the wood’s natural personality shine through. Knots and cracks remain intact, with nothing overly refined or polished into anonymity. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our white oak pieces from our Ojai Collection offer a calmer, more stable partnership. Please note, knots and cracks are left intentionally unfilled and may expand depending on your environment as the thick wood finds its final resting place. If these characteristics are of concern, we do not recommend this piece.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-055.jpg",
        "alt": "Eik Coffee Table - Rectangle by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "6b8a0ec4-7967-4d1f-81ea-647d2d4b18cd",
        "label": "Default Title",
        "priceCents": 325000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "5ea13bc2-0d73-456f-aefc-a31528e87b61",
    "name": "Eik Round Coffee Table",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eik-round-coffee-table",
    "description": "An heirloom piece in the making. We’re not supposed to have favorites, but we do. Our Eik Coffee Tables are crafted from thick slabs of solid French white oak, chosen for their depth of grain and rich character. There’s something beautiful about allowing a material to feel like itself. A light brown oiled finish let's the wood’s natural personality shine through. Knots and cracks remain intact, with nothing overly refined or polished into anonymity. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our white oak pieces from our Ojai Collection offer a calmer, more stable partnership. Please note, knots and cracks are left intentionally unfilled and may expand depending on your environment as the thick wood finds its final resting place. If these characteristics are of concern, we do not recommend this piece.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-056.jpg",
        "alt": "Eik Round Coffee Table by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "07073325-2d79-46ea-b9c8-2ac19a2a3e4b",
        "label": "Default Title",
        "priceCents": 335000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cf207665-9d9f-49dc-82d5-5d73f9366bce",
    "name": "Eik Round Dining Table - French Oak",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eik-round-dining-table-french-oak",
    "description": "A quiet dialogue between wood, stone, and the people around it. The Eik Round Dining Table is a study in materiality. French white oak forms a grounded pedestal that supports a beige travertine top, allowing wood and stone to speak plainly to one another. The relationship is deliberate and unadorned with natural grain, tonal variation, and rich character. Steady and centered in its silhouette, the table carries a composed presence, anchoring the room without excess. Round being the shape most naturally favored for gathering, conversation, and shared time. When considering this piece, think of the French oak as passionate — expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-057.jpg",
        "alt": "Eik Round Dining Table - French Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "ba1050b6-5efc-4d61-a532-c331aa253556",
        "label": "48\"",
        "priceCents": 395000,
        "available": true
      },
      {
        "id": "da2c670a-963b-4d2a-933c-61eb275d6fc9",
        "label": "60\"",
        "priceCents": 495000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "605c97a6-78da-4858-8bcd-98b0c7ea6f4d",
    "name": "Eik Round Dining Table - Watercolor Black",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eik-round-dining-table-watercolor-black",
    "description": "A quiet dialogue between wood, stone, and the people around it. The Eik Round Dining Table is a study in materiality. French white oak forms a grounded pedestal that supports a black travertine top, allowing wood and stone to speak plainly to one another. The relationship is deliberate and unadorned with natural grain, tonal variation, and rich character. Steady and centered in its silhouette, the table carries a composed presence, anchoring the room without excess. Round being the shape most naturally favored for gathering, conversation, and shared time. When considering this piece, think of the French oak as passionate — expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-058.jpg",
        "alt": "Eik Round Dining Table - Watercolor Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "969da875-2a97-4fc0-9152-ed62b2937104",
        "label": "48\"",
        "priceCents": 395000,
        "available": true
      },
      {
        "id": "036e3f3d-759b-4636-8407-1bedcc74e68b",
        "label": "60\"",
        "priceCents": 495000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "33de8912-3715-4f1c-97fe-48b689121b55",
    "name": "Eik Screen",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Room Divider",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/eik-screen",
    "description": "The Eik Screen is constructed from solid French white oak and organized as a series of hinged vertical panels. Each panel is left broad and uninterrupted, allowing grain, knots, and natural variation warm up a space. The Eik Screen is designed as a freestanding piece to delineate and divide space. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-059.jpg",
        "alt": "Eik Screen by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "40731055-c18a-421e-bda4-324d0781d416",
        "label": "Default Title",
        "priceCents": 195000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3f5d1c8a-03a4-433f-a581-eed0fe5a1a34",
    "name": "Emperador Donut Bowl",
    "brand": "House of Leon",
    "productType": "Vases",
    "category": "Vase",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/emperador-donut-bowl",
    "description": "Carved from a single block of richly veined Emperador Marble sourced in the south of Spain, the Donut Bowl is a whimsical shape softening a usually hard material. Designed to hold small objects—or nothing at all—it brings a sense of quiet weight to any surface. Subtle yet striking, no two pieces are exactly alike. The variations in tone and veining are a reminder of the material’s origin and permanence.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-060.jpg",
        "alt": "Emperador Donut Bowl by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "0df24bd0-6007-43fc-90f0-f79b4c64483b",
        "label": "Default Title",
        "priceCents": 18000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "4a7904dc-eeb1-4ac5-ad93-8ca85061ce97",
    "name": "Espresso Rug",
    "brand": "House of Leon",
    "productType": "Rug",
    "category": "Area Rug",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/espresso-rug",
    "description": "Handwoven from 100% New Zealand Wool Our rugs are crafted from the highest-grade New Zealand wool, known for its softness, durability, and natural resilience. Each piece is abrash dyed, a traditional technique that creates subtle tonal shifts within a single color—giving the rug a rich sense of depth, movement, and character. Naturally stain-resistant and breathable, these rugs are made to last and age beautifully with time. A grounding piece with quiet impact.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-061.jpg",
        "alt": "Espresso Rug by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "f032fef3-db91-459b-bf33-74c5baedac6b",
        "label": "5'x8'",
        "priceCents": 95000,
        "available": false
      },
      {
        "id": "0422f3ae-ca85-45a0-a751-a78bff5ed9a4",
        "label": "6'x9'",
        "priceCents": 125000,
        "available": true
      },
      {
        "id": "24d745d8-c38b-4cba-a7c0-1a1383b465ad",
        "label": "8'x10'",
        "priceCents": 169000,
        "available": true
      },
      {
        "id": "050327dc-3998-492d-b66a-9e07a78a86ce",
        "label": "9'x12'",
        "priceCents": 215000,
        "available": false
      },
      {
        "id": "2e0c6a6a-f199-42c2-8d87-a0b20ab0b767",
        "label": "10'x14'",
        "priceCents": 295000,
        "available": false
      },
      {
        "id": "6bf90f35-4b31-4dea-ab3f-322559968e6f",
        "label": "12'x15'",
        "priceCents": 345000,
        "available": true
      },
      {
        "id": "2410a7db-59d0-4166-ab30-b769fb301649",
        "label": "Swatch",
        "priceCents": 1500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7466744c-0434-4945-89f9-bb398082c9b3",
    "name": "Ghent Dining Table",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/ghent-dining-table",
    "description": "Inspired by the cobblestone streets of Ghent, the parquet French white oak table-top surface introduces a measured rhythm. While visiting our Belgian textile mill, we were struck by how small, familiar details, repeated daily and often overlooked, can lend enduring charm to even the most ordinary streets. This piece is a tribute to that subtle beauty. Defined by material honesty, the Ghent Dining Table is crafted entirely from solid French white oak. The parquet pattern breaks the surface into smaller sections, revealing natural grain variation, depth, and character. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-062.jpg",
        "alt": "Ghent Dining Table by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "d50aeac0-7ca6-4517-96d6-15348688b62d",
        "label": "72\"",
        "priceCents": 275000,
        "available": true
      },
      {
        "id": "5c13e19d-b996-4a17-a1ef-26d6a97b32dc",
        "label": "88\"",
        "priceCents": 325000,
        "available": true
      },
      {
        "id": "af22cd49-7809-42e0-aaea-0ebb4916345f",
        "label": "100\"",
        "priceCents": 375000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "66e01baf-98bf-4cba-957f-74d770d21705",
    "name": "House of Leon Backpack",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Uncategorized",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/house-of-leon-backpack",
    "description": "The House of Leon backpack, available in a camel and espresso suede, includes a padded laptop sleeve (fits up to a 16\" Macbook Pro), an internal compartment, and a front pocket for additional organization. The padded back and shoulder straps add an additional element of comfort for frequent prolonged use.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-063.jpg",
        "alt": "House of Leon Backpack by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "58fa74c5-9554-45b0-abde-d323691b11d2",
        "label": "Camel Suede",
        "priceCents": 35000,
        "available": true
      },
      {
        "id": "a9065200-b6a1-4384-bf13-a8ba8e436c95",
        "label": "Espresso Suede",
        "priceCents": 35000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "00c1a9b6-7861-4239-8f53-01fb9c5d98f8",
    "name": "I-Beam Bench",
    "brand": "House of Leon",
    "productType": "Bench",
    "category": "Bench",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/i-beam-bench",
    "description": "A simple nod to the I-Beam, the I-Beam Bench is a refined tribute to the architectural backbone of Milan's race to the sky. Poured aluminum with a cast iron finish gives it both weight and presence, while its clean, structural form provides a bold yet understated foundation. It offers versatile display space with the same sculptural elegance. Where raw strength meets refined design, this console transforms the industrial into the sophisticated, becoming both a functional piece and a statement in any home.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-064.jpg",
        "alt": "I-Beam Bench by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "69eef87b-2294-4106-92aa-63dfc4148939",
        "label": "Default Title",
        "priceCents": 385000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f075e8e7-6fe2-462d-8004-64aee430ec2d",
    "name": "I-Beam Entry Console",
    "brand": "House of Leon",
    "productType": "Entry Console",
    "category": "Console Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/i-beam-entry-console",
    "description": "A simple nod to the I-Beam, the I-Beam Entry Console is a refined tribute to the architectural backbone of Milan's race to the sky. Poured aluminum with a cast iron finish gives it both weight and presence, while its clean, structural form provides a bold yet understated foundation. Available in both 30\" and 48\" widths, it offers versatile display space with the same sculptural elegance. Where raw strength meets refined design, this console transforms the industrial into the sophisticated, becoming both a functional piece and a statement in any home.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-065.jpg",
        "alt": "I-Beam Entry Console by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "f4db0e19-6ffd-4bc5-9509-79716e948c78",
        "label": "30\"",
        "priceCents": 165000,
        "available": true
      },
      {
        "id": "c9fa6d56-6322-4999-b5c8-1b4245d462cd",
        "label": "48\"",
        "priceCents": 225000,
        "available": true
      },
      {
        "id": "9f17c80b-e2ac-4fee-9b25-ca33d6b7193b",
        "label": "60\"",
        "priceCents": 395000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "4c081c84-ff7e-4f21-92cc-e77e0bc7565b",
    "name": "I-Beam Pedestal",
    "brand": "House of Leon",
    "productType": "Sculptural Pedestal",
    "category": "Sculpture",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/i-beam-pedestal",
    "description": "A simple nod to the I-Beam, the I-Beam Sculptural Pedestal is a distilled tribute to the architectural backbone of every city’s skyline. Poured aluminum with a cast iron finish gives it weight and presence, while its clean, structural form offers a bold yet understated foundation for your most prized pieces. Both sculpture and stage, it transforms the industrial into the elegant—where raw strength meets refined display. Sculpture: “Iris N.10” by Chala Toprak, via Tappan Collective.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-066.jpg",
        "alt": "I-Beam Pedestal by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "22614531-5e3b-41ce-968a-8d5afda669d2",
        "label": "Default Title",
        "priceCents": 149000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8f1a1869-edf3-4e4c-8473-1e18677074df",
    "name": "I-Beam Side Table",
    "brand": "House of Leon",
    "productType": "Side Table",
    "category": "Side Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/i-beam-side-table",
    "description": "A refined nod to the I-Beam, the I-Beam Side Table distills an industrial icon into a sculptural, functional form. Poured aluminum with a cast iron finish gives it weight and presence, while its clean, structured silhouette offers a bold yet understated foundation. Both sculpture and surface, it transforms raw strength into elegant utility—where architecture meets design.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-067.jpg",
        "alt": "I-Beam Side Table by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "7934676a-3370-4b7b-b6e3-3a83e56da808",
        "label": "Slender",
        "priceCents": 109000,
        "available": true
      },
      {
        "id": "26726bbe-6e5a-4b23-b11f-5b4eae8b322b",
        "label": "Wide",
        "priceCents": 129000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "0a4488d3-b2b0-4ab4-99c1-da5c3db4ef6a",
    "name": "Kyoto Coffee Table - Charcoal",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/kyoto-coffee-table-charcoal",
    "description": "Simple in design, the Kyoto Coffee Table is a pleaser for the striving minimalist. Made from solid white oak wood, a clear matte protective finish is used to allow the unique grain of each piece stand out. The solid wood planks are then joined by two \"butterfly joints,\" made famous by Japanese-American woodworker George Nakashima in the 1950's. The piece is available in 50\" x 21\" or 60\" x 27.5\" in natural or a \"watercolor\" black finish.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-068.jpg",
        "alt": "Kyoto Coffee Table - Charcoal by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "91c8b2df-a070-4d89-8d44-29d495972323",
        "label": "50\" x 21\" x 13\"",
        "priceCents": 149000,
        "available": true
      },
      {
        "id": "941b6f5a-0f3a-4fe0-8c47-dfb67f8c032f",
        "label": "60\" x 27.5\" x 13\"",
        "priceCents": 159000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "09d254df-091a-4bec-82dc-f6301632a9d3",
    "name": "Kyoto Coffee Table - Natural",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/kyoto-coffee-table-natural",
    "description": "Simple in design, the Kyoto Coffee Table is a pleaser for the striving minimalist. Made from solid white oak wood, a clear matte protective finish is used to allow the unique grain of each piece stand out. The solid wood planks are then joined by two \"butterfly joints,\" made famous by Japanese-American woodworker George Nakashima in the 1950's. The piece is available in 50\" x 21\" or 60\" x 27.5\" in natural, mocha, or a \"watercolor\" black finish.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-069.jpg",
        "alt": "Kyoto Coffee Table - Natural by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "e2385420-3936-47fc-bc09-80ddcba5904d",
        "label": "50\" x 21\" x 13\"",
        "priceCents": 149000,
        "available": true
      },
      {
        "id": "3541efbe-3483-44ab-bb3c-8afc972a7c79",
        "label": "60\" x 27.5\" x 13\"",
        "priceCents": 159000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "bd36317e-1d16-4c99-b3bb-c2849fb08a08",
    "name": "Kyoto Entry Console - White Oak",
    "brand": "House of Leon",
    "productType": "Accent Tables",
    "category": "Side Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/kyoto-entry-console-white-oak",
    "description": "A piece for the minimalist, the Kyoto Entry Console in White Oak is simple in design, setting the stage for the pieces to be showcased. Made from solid white oak wood, a light, yet protective, watercolor finish is used to highlight the beauty in the grain that makes each piece unique. We can accept this piece in custom lengths. Please reach out to hello@houseofleon.com to inquire further.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-070.jpg",
        "alt": "Kyoto Entry Console - White Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "1d402141-ab85-4d21-9f1b-82143aca2a72",
        "label": "Default Title",
        "priceCents": 159000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "945e52df-2f3c-439f-8926-35e5b7411f12",
    "name": "Linen Box Quilt (Bone)",
    "brand": "Parachute Home",
    "productType": "Quilts & Blankets",
    "category": "Quilt",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-box-quilt-bone",
    "description": "Our modern take on the classic quilt, this box pattern blanket has a medium weight that's ideal for layering.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-071.jpg",
        "alt": "Linen Box Quilt (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "2a80c132-0d5f-4fcb-ba14-ceeb2d0544e6",
        "label": "Twin/Twin XL / Bone",
        "priceCents": 22300,
        "available": false
      },
      {
        "id": "ac3e465e-f00a-4be6-a8e7-c802106c61fc",
        "label": "Full/Queen / Bone",
        "priceCents": 30900,
        "available": true
      },
      {
        "id": "9035e922-7b29-4c15-90d9-e26b319ef011",
        "label": "King/Cal King / Bone",
        "priceCents": 32900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7a7e801d-cb56-42ed-aa20-5b0dfa146d32",
    "name": "Linen Box Quilt (Dusk)",
    "brand": "Parachute Home",
    "productType": "Quilts & Blankets",
    "category": "Quilt",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-box-quilt-dusk",
    "description": "Our modern take on the classic quilt, this box pattern blanket has a medium weight that's ideal for layering.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-072.jpg",
        "alt": "Linen Box Quilt (Dusk) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "c309be1b-132d-4869-9ea0-f1c237f433d6",
        "label": "Full/Queen / Dusk",
        "priceCents": 30900,
        "available": true
      },
      {
        "id": "6ab9eb15-e814-4fd8-931c-96c66d852820",
        "label": "King/Cal King / Dusk",
        "priceCents": 32900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cb69ee5e-03fd-4424-a10e-7796ff9a0ca7",
    "name": "Linen Box Quilt (Warm Grey)",
    "brand": "Parachute Home",
    "productType": "Quilts & Blankets",
    "category": "Quilt",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-box-quilt-warm-grey",
    "description": "Our modern take on the classic quilt, this box pattern blanket has a medium weight that's ideal for layering.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-073.jpg",
        "alt": "Linen Box Quilt (Warm Grey) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "8e6f412a-23d4-436b-babe-7d87f92f3677",
        "label": "Full/Queen / Warm Grey",
        "priceCents": 30900,
        "available": true
      },
      {
        "id": "76691d0e-4d2e-40fd-ac13-4422f2685f9d",
        "label": "King/Cal King / Warm Grey",
        "priceCents": 32900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "66f0e676-48e5-4865-ab7b-4220d07a2779",
    "name": "Linen Box Quilted Sham Set (Bone)",
    "brand": "Parachute Home",
    "productType": "Sham Sets, Decorative Shams",
    "category": "Pillow Sham",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-box-quilted-sham-set-bone",
    "description": "A set of two decorative quilted shams for a minimalist finishing touch.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-074.jpg",
        "alt": "Linen Box Quilted Sham Set (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "a944f699-9876-455b-a172-91c938e65f7d",
        "label": "Standard / Bone",
        "priceCents": 9900,
        "available": true
      },
      {
        "id": "80934694-fe1b-43da-b2b1-eca197d4e7f5",
        "label": "King / Bone",
        "priceCents": 10900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cb081e25-0908-41de-9652-9659ca9ae23b",
    "name": "Linen Box Quilted Sham Set (Dusk)",
    "brand": "Parachute Home",
    "productType": "Sham Sets",
    "category": "Pillow Sham",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-box-quilted-sham-set-dusk",
    "description": "A set of two decorative quilted shams for a minimalist finishing touch.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-075.jpg",
        "alt": "Linen Box Quilted Sham Set (Dusk) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "89bf15b8-5fc2-447e-bac9-020c1e4d5ef9",
        "label": "Standard / Dusk",
        "priceCents": 9900,
        "available": true
      },
      {
        "id": "48c857ab-25f8-4fc6-bd4c-437593db9aea",
        "label": "King / Dusk",
        "priceCents": 10900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "4d02655b-6063-48ce-a0f5-f954fb51700f",
    "name": "Linen Box Quilted Sham Set (Warm Grey)",
    "brand": "Parachute Home",
    "productType": "Sham Sets, Decorative Shams",
    "category": "Pillow Sham",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-box-quilted-sham-set-warm-grey",
    "description": "A set of two decorative quilted shams for a minimalist finishing touch.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-076.jpg",
        "alt": "Linen Box Quilted Sham Set (Warm Grey) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "b29f6ccc-a4df-4570-accf-02cfcd7f4905",
        "label": "Standard / Warm Grey",
        "priceCents": 9900,
        "available": true
      },
      {
        "id": "585ce93c-482f-4ece-9da9-a47473024dff",
        "label": "King / Warm Grey",
        "priceCents": 10900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ce65c14b-d17b-4ac2-b15a-f05cd85eea73",
    "name": "Linen Duvet Cover (Adobe)",
    "brand": "Parachute Home",
    "productType": "Duvet Covers, Sheeting",
    "category": "Duvet Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-duvet-cover-adobe",
    "description": "Protect your duvet insert while keeping cozy; this cover feels as good as it looks. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-077.jpg",
        "alt": "Linen Duvet Cover (Adobe) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "254ebf90-fc33-44bf-8ad7-bea6ebc46221",
        "label": "Full/Queen / Adobe",
        "priceCents": 33000,
        "available": true
      },
      {
        "id": "400b3853-193b-4361-abd5-99d1d05e37f4",
        "label": "King/Cal King / Adobe",
        "priceCents": 36000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a0398265-1c49-416d-9464-b3cda4089c47",
    "name": "Linen Duvet Cover (Bone)",
    "brand": "Parachute Home",
    "productType": "Duvet Covers, Sheeting",
    "category": "Duvet Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-duvet-cover-bone",
    "description": "Protect your duvet insert while keeping cozy; this cover feels as good as it looks. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-078.jpg",
        "alt": "Linen Duvet Cover (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "5a6f6515-1e4c-4b4b-b355-98b96ca9d1d6",
        "label": "Twin/Twin XL / Bone",
        "priceCents": 29000,
        "available": false
      },
      {
        "id": "755c1da7-72f0-4b54-918d-29502c3f39c7",
        "label": "Full/Queen / Bone",
        "priceCents": 33000,
        "available": true
      },
      {
        "id": "44799365-7262-4b3d-8fc0-b1d1f12a6c13",
        "label": "King/Cal King / Bone",
        "priceCents": 36000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "eab90118-e97a-4a87-80a2-46ce7b0e236e",
    "name": "Linen Duvet Cover (White)",
    "brand": "Parachute Home",
    "productType": "Duvet Covers, Sheeting",
    "category": "Duvet Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-duvet-cover-white",
    "description": "Protect your duvet insert while keeping cozy; this cover feels as good as it looks. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-079.jpg",
        "alt": "Linen Duvet Cover (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "09893bf9-b07c-45c7-a7c6-e062e4e99297",
        "label": "Twin/Twin XL / White",
        "priceCents": 29000,
        "available": false
      },
      {
        "id": "3e77d120-e2b7-46b7-bb04-6ec1a0930c3a",
        "label": "Full/Queen / White",
        "priceCents": 33000,
        "available": true
      },
      {
        "id": "8cbf7610-f1a4-4a68-9400-85d0d96b034d",
        "label": "King/Cal King / White",
        "priceCents": 36000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "886eb5c9-52fe-4ba6-b2f6-840e31c027bb",
    "name": "Linen Fitted Sheet (Adobe)",
    "brand": "Parachute Home",
    "productType": "Fitted Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-fitted-sheet-adobe",
    "description": "Our comfortable, durable fitted sheet hugs your mattress with a continuous elastic hem. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-080.jpg",
        "alt": "Linen Fitted Sheet (Adobe) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "6d371032-2ff7-4c1e-9ac7-26dbb5a43d99",
        "label": "Full / Adobe",
        "priceCents": 14000,
        "available": true
      },
      {
        "id": "4eb49e01-6884-41c3-97a5-0f57000a6210",
        "label": "Queen / Adobe",
        "priceCents": 15000,
        "available": true
      },
      {
        "id": "9403a972-d2d1-4551-b55d-003a1dfc5d44",
        "label": "King / Adobe",
        "priceCents": 17000,
        "available": true
      },
      {
        "id": "eab11dc2-5c0c-4e02-8dd1-fbab81a69b5e",
        "label": "Cal King / Adobe",
        "priceCents": 17000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "68c5b839-97c5-4e66-8eb8-3d6aee33c015",
    "name": "Linen Fitted Sheet (Bone)",
    "brand": "Parachute Home",
    "productType": "Fitted Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-fitted-sheet-bone",
    "description": "Our comfortable, durable fitted sheet hugs your mattress with a continuous elastic hem. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-081.jpg",
        "alt": "Linen Fitted Sheet (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "4a92605e-edea-48c1-a1ba-b5a9e2298f9d",
        "label": "Twin / Bone",
        "priceCents": 13000,
        "available": false
      },
      {
        "id": "9c050c05-2c6a-4d6d-ab43-c3b4586a8308",
        "label": "Twin XL / Bone",
        "priceCents": 13000,
        "available": false
      },
      {
        "id": "0fd49b5d-27bf-4b80-962d-48c45e8e3b92",
        "label": "Full / Bone",
        "priceCents": 14000,
        "available": true
      },
      {
        "id": "1661ae35-1eb1-40a5-bdd7-ee85c2f3d735",
        "label": "Queen / Bone",
        "priceCents": 15000,
        "available": true
      },
      {
        "id": "4ee78a5e-e1ec-4f8c-b3b0-38a1c8adabd2",
        "label": "King / Bone",
        "priceCents": 17000,
        "available": true
      },
      {
        "id": "3ea2a8ad-9a7f-4eba-9087-3bd6c780439d",
        "label": "Cal King / Bone",
        "priceCents": 17000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "04855b4b-95d0-4e60-b814-af220825b7d7",
    "name": "Linen Fitted Sheet (White)",
    "brand": "Parachute Home",
    "productType": "Fitted Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-fitted-sheet-white",
    "description": "Our comfortable, durable fitted sheet hugs your mattress with a continuous elastic hem. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-082.jpg",
        "alt": "Linen Fitted Sheet (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "6bed8fdd-eb1c-4118-a956-509cc962ec1d",
        "label": "Twin / White",
        "priceCents": 13000,
        "available": false
      },
      {
        "id": "3bd69329-c2f0-445f-ade7-9aebbe89c86d",
        "label": "Twin XL / White",
        "priceCents": 13000,
        "available": false
      },
      {
        "id": "f8c1ff64-8938-4b8d-aa80-b8c036d1174b",
        "label": "Full / White",
        "priceCents": 14000,
        "available": true
      },
      {
        "id": "74c8850d-39ff-45c4-ae1e-e0efb8dc36e9",
        "label": "Queen / White",
        "priceCents": 15000,
        "available": true
      },
      {
        "id": "2e61cc21-b19c-435e-80c0-78882eff0934",
        "label": "King / White",
        "priceCents": 17000,
        "available": true
      },
      {
        "id": "43b6ecd8-dab5-41e0-b6dc-2ec2da85380d",
        "label": "Cal King / White",
        "priceCents": 17000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "52e1b136-c599-475f-b9fc-70b5800a9f51",
    "name": "Linen Pillowcase Set (Adobe)",
    "brand": "Parachute Home",
    "productType": "Pillowcase Sets, Sheets",
    "category": "Pillow Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-pillowcase-set-adobe",
    "description": "Rest easy with these soft, natural pillowcases. Available in our signature back envelope closure and a traditional side open style. Choose what makes you happy. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-083.jpg",
        "alt": "Linen Pillowcase Set (Adobe) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "8265104f-40af-4cf3-8e6b-1313fe4795e9",
        "label": "Standard / Adobe / Back Envelope",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "23496b52-6b75-4fb3-b480-ae462d52b0d9",
        "label": "Standard / Adobe / Side Envelope",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "22d62be7-9196-4ca1-85b2-50fff8c304dc",
        "label": "King / Adobe / Back Envelope",
        "priceCents": 8900,
        "available": true
      },
      {
        "id": "95597669-8439-425e-a102-769fb905e8f7",
        "label": "King / Adobe / Side Envelope",
        "priceCents": 8900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c2931498-b828-4e05-92ce-40a1adc02465",
    "name": "Linen Pillowcase Set (Bone)",
    "brand": "Parachute Home",
    "productType": "Pillowcase Sets, Sheets",
    "category": "Pillow Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-pillowcase-set-bone",
    "description": "Rest easy with these soft, natural pillowcases. Available in our signature back envelope closure and a traditional side open style. Choose what makes you happy. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-084.jpg",
        "alt": "Linen Pillowcase Set (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "873e8ec2-0bed-46e6-a65a-53e9e083d4ab",
        "label": "Standard / Bone / Back Envelope",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "1d3801ec-aacb-44ba-a7b0-db333676fbd0",
        "label": "Standard / Bone / Side Open",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "f6a3ea1b-1657-4d9a-aeb0-b8fd0d49afda",
        "label": "Standard / Bone / Side Envelope",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "e9d57fba-b0b0-41d4-9f12-16aa0fe009ab",
        "label": "King / Bone / Back Envelope",
        "priceCents": 8900,
        "available": true
      },
      {
        "id": "49660257-36ba-4f78-8472-abc583220cd6",
        "label": "King / Bone / Side Open",
        "priceCents": 8900,
        "available": false
      },
      {
        "id": "3f19d93f-f9ce-47c6-8e9f-b99891005cb6",
        "label": "King / Bone / Side Envelope",
        "priceCents": 8900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ae9090a5-9aa9-464d-ae79-dcf200d202fa",
    "name": "Linen Pillowcase Set (White)",
    "brand": "Parachute Home",
    "productType": "Pillowcase Sets, Sheets",
    "category": "Pillow Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-pillowcase-set-white",
    "description": "Rest easy with these soft, natural pillowcases. Available in our signature back envelope closure and a traditional side open style. Choose what makes you happy. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-085.jpg",
        "alt": "Linen Pillowcase Set (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "26512c48-fd17-4861-ab84-72ee607beb05",
        "label": "Standard / White / Back Envelope",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "5b7eae2a-a767-4df0-b27a-8ac678c3837e",
        "label": "Standard / White / Side Open",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "19f72754-5fd8-495b-8a68-32016b480722",
        "label": "Standard / White / Side Envelope",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "8feccc99-f1e6-4ef6-a9ed-1f2f2ebefc5d",
        "label": "King / White / Back Envelope",
        "priceCents": 8900,
        "available": true
      },
      {
        "id": "49f06865-5e7d-4e8b-80b0-755185005ca5",
        "label": "King / White / Side Open",
        "priceCents": 8900,
        "available": true
      },
      {
        "id": "91ed12aa-daa0-4ab7-be0e-59aa18a98a72",
        "label": "King / White / Side Envelope",
        "priceCents": 8900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "77c990b7-d002-4099-9cd0-fa4ab27dc71b",
    "name": "Linen Rug",
    "brand": "House of Leon",
    "productType": "Rug",
    "category": "Area Rug",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-rug",
    "description": "Handwoven from 100% New Zealand Wool Our rugs are crafted from the highest-grade New Zealand wool, known for its softness, durability, and natural resilience. Each piece is abrash dyed, a traditional technique that creates subtle tonal shifts within a single color—giving the rug a rich sense of depth, movement, and character. Naturally stain-resistant and breathable, these rugs are made to last and age beautifully with time. A grounding piece with quiet impact.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-086.jpg",
        "alt": "Linen Rug by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "77b6c9d0-39d1-46f9-8b7b-389b53111d79",
        "label": "5'x8'",
        "priceCents": 95000,
        "available": true
      },
      {
        "id": "d20b5e17-9ae8-444a-97ab-60f10c584cf2",
        "label": "6'x9'",
        "priceCents": 125000,
        "available": true
      },
      {
        "id": "f6e9e90a-f1c2-40af-ad85-7adaf05bebce",
        "label": "8'x10'",
        "priceCents": 169000,
        "available": true
      },
      {
        "id": "1493c78f-fc7d-4fa6-9674-ba7f0144e1c3",
        "label": "9'x12'",
        "priceCents": 215000,
        "available": true
      },
      {
        "id": "620c9e42-fb5a-4db8-b4e3-c02a77485f2a",
        "label": "10'x14'",
        "priceCents": 295000,
        "available": true
      },
      {
        "id": "1e3eba12-2112-4d2f-90fc-a0f876e3fcdb",
        "label": "12'x15'",
        "priceCents": 345000,
        "available": true
      },
      {
        "id": "b1a1cc7f-f9ef-479a-ab65-16abade6b49f",
        "label": "Swatch",
        "priceCents": 1500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ca26e936-9fb6-4086-9d6b-dcdc23bc092b",
    "name": "Linen Sham Set (Adobe)",
    "brand": "Parachute Home",
    "productType": "Sham Sets, Sheeting",
    "category": "Pillow Sham",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-sham-set-adobe",
    "description": "Finish your bed with this set of two decorative shams. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-087.jpg",
        "alt": "Linen Sham Set (Adobe) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "75cc402f-be6f-4abe-a03f-8575774e8c5c",
        "label": "Standard / Adobe",
        "priceCents": 9900,
        "available": true
      },
      {
        "id": "184be3e5-f7c4-4681-9236-80f550c3bef5",
        "label": "King / Adobe",
        "priceCents": 10900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "5596118f-c062-4355-afef-327eba5dcdfe",
    "name": "Linen Sham Set (Bone)",
    "brand": "Parachute Home",
    "productType": "Sham Sets, Sheeting",
    "category": "Pillow Sham",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-sham-set-bone",
    "description": "Finish your bed with this set of two decorative shams. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-088.jpg",
        "alt": "Linen Sham Set (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "9d3b432d-ebcf-4c2e-8359-97540dd918ff",
        "label": "Standard / Bone",
        "priceCents": 9900,
        "available": true
      },
      {
        "id": "6133dd2f-ce89-452e-b766-5749caf1e7e1",
        "label": "King / Bone",
        "priceCents": 10900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f88b8972-e577-48e2-9020-7ef7e3d7cd64",
    "name": "Linen Sham Set (White)",
    "brand": "Parachute Home",
    "productType": "Sham Sets, Sheeting",
    "category": "Pillow Sham",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-sham-set-white",
    "description": "Finish your bed with this set of two decorative shams. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-089.jpg",
        "alt": "Linen Sham Set (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "19395d63-836b-4084-9b66-ec0cf16aa443",
        "label": "Standard / White",
        "priceCents": 9900,
        "available": true
      },
      {
        "id": "cf0e0dbe-f0ef-4603-9f1a-dba85f0b3643",
        "label": "King / White",
        "priceCents": 10900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "17778f70-645b-47a0-9092-d36f0250bb8d",
    "name": "Linen Top Sheet - Bone",
    "brand": "Parachute Home",
    "productType": "Top Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-top-sheet-bone",
    "description": "Add a layer of pure comfort with our oversized top sheet. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-090.jpg",
        "alt": "Linen Top Sheet - Bone by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "a4579e8f-6a62-49f3-92fa-c01c39ed60cd",
        "label": "Twin/Twin XL / Bone",
        "priceCents": 11000,
        "available": false
      },
      {
        "id": "001bab60-d023-496e-b7a6-3bd5b87aab43",
        "label": "Full/Queen / Bone",
        "priceCents": 13000,
        "available": true
      },
      {
        "id": "fbd3e012-0b63-4cb1-90ef-8080eb82cb1d",
        "label": "King/Cal King / Bone",
        "priceCents": 14000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7a2dde66-80cb-4e2a-83de-336d9aa6bdb5",
    "name": "Linen Top Sheet - White",
    "brand": "Parachute Home",
    "productType": "Top Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-top-sheet-white",
    "description": "Add a layer of pure comfort with our oversized top sheet. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-091.jpg",
        "alt": "Linen Top Sheet - White by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "a7c14091-6a16-4aaa-996b-2cfc2dc9c642",
        "label": "Twin/Twin XL / White",
        "priceCents": 11000,
        "available": false
      },
      {
        "id": "35ad35ca-2140-4938-ac69-be15225f9c25",
        "label": "Full/Queen / White",
        "priceCents": 13000,
        "available": true
      },
      {
        "id": "844d7453-61a8-4047-a979-3f73695f1075",
        "label": "King/Cal King / White",
        "priceCents": 14000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8642b0f4-3b11-458b-a928-a9c4129ec426",
    "name": "Linen Top Sheet (Adobe)",
    "brand": "Parachute Home",
    "productType": "Top Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/linen-top-sheet-adobe",
    "description": "Add a layer of pure comfort with our oversized top sheet. The softest linen you’ll ever touch – ours is crafted in Portugal from the finest European flax and garment washed for a perfectly lived-in feel from night one.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-092.jpg",
        "alt": "Linen Top Sheet (Adobe) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "f7c5698f-afa9-456a-a5fb-82476ae73cfa",
        "label": "Full/Queen / Adobe",
        "priceCents": 13000,
        "available": true
      },
      {
        "id": "b61d3c2c-1609-42ca-96c5-4b56645e3743",
        "label": "King/Cal King / Adobe",
        "priceCents": 14000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "b97ce789-9080-4166-abbf-f02a973c0581",
    "name": "Milan Ash Tray - Black",
    "brand": "House of Leon",
    "productType": "Decorative Trays",
    "category": "Tray",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/milan-ash-tray-black",
    "description": "The Milan Ashtray brings a touch of vintage elegance to your space, inviting moments of relaxation and connection. Its rich black patina and exposed brass detailing create a striking focal point, effortlessly enhancing your decor with old-world charm and modern sophistication. Designed to be both functional and beautiful, this substantial piece provides a sense of luxury while elevating your home, office, or patio. Perfect as a thoughtful gift, the Milan Ashtray transforms everyday rituals into luxurious experiences, inviting you to savor the simple pleasures of life.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-093.jpg",
        "alt": "Milan Ash Tray - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "d55f5b08-c584-4e0f-accc-b70f30de4310",
        "label": "Default Title",
        "priceCents": 19000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "08f04329-28b9-46be-9016-bd702016dee2",
    "name": "Milan Ash Tray- Stone",
    "brand": "House of Leon",
    "productType": "Decorative Trays",
    "category": "Tray",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/milan-ash-tray-stone",
    "description": "The Milan Ashtray combines vintage charm with contemporary elegance, creating an inviting atmosphere for relaxation and conversation. The rich chemical patina and solid brass craftsmanship not only enhance its striking appearance but also ensure it remains a lasting fixture in your decor. Its substantial weight adds stability, while its sophisticated design elevates any setting—be it your home, office, or patio. Perfect as a thoughtful gift, the Milan Ashtray transforms everyday rituals into luxurious experiences, inviting you to savor life’s simple pleasures.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-094.jpg",
        "alt": "Milan Ash Tray- Stone by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "52a6d4cd-b056-4636-8606-079a97574e40",
        "label": "Default Title",
        "priceCents": 19000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7b91fe61-bc91-4047-952c-25f02279ef25",
    "name": "Milan Daybed",
    "brand": "House of Leon",
    "productType": "Media Storage Cabinets & Racks",
    "category": "Media Console",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/milan-daybed",
    "description": "A study in contrast—strength and softness, structure and ease—the Milan Daybed is a refined statement of luxury. Its stainless steel base offers a crisp, architectural foundation, while the plush cushion invites a sense of warmth and repose. Upholstery options include a supple camel nubuck that patinas beautifully over time and a rich mohair boucle woven in Tuscany, each chosen for its depth, texture, and timeless appeal. Designed to be as inviting as it is striking, the Milan Daybed is a place to pause, lounge, and dream. Our nubuck is finished minimally to preserve its velvety softness and natural character. Subtle marks or scratches are part of the hide’s original story—signs of a life once lived, not imperfections. Gross weight: Base: 103.4lbs Top: 48.4lbs",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-095.jpg",
        "alt": "Milan Daybed by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "4b19c2a0-2b12-45f5-ad5d-ffb035a26797",
        "label": "Camel Nubuck",
        "priceCents": 349000,
        "available": true
      },
      {
        "id": "e6f04a4e-fd7e-49ec-8da2-c01379e83590",
        "label": "Mocha Boucle",
        "priceCents": 329000,
        "available": true
      },
      {
        "id": "8e76e51b-b09d-4257-aa60-a7c5ffcc91ec",
        "label": "Shearling Bone",
        "priceCents": 329000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "955c5d36-b659-41fb-947c-dc4ef86660b2",
    "name": "Milan Media Console",
    "brand": "House of Leon",
    "productType": "Media Storage Cabinets & Racks",
    "category": "Media Console",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/milan-media-console",
    "description": "Designed with versatility at its core, the Milan Media Console is both function and sculpture. Resting on a sleek stainless steel base, its top options—natural or mocha-finished white oak, Brazilian black leather, or rich mohair boucle woven in Tuscany—bring warmth and texture to the clean-lined silhouette. Whether serving as a refined entryway bench with discreet shoe storage or as a striking media console with a solid wood top, this piece seamlessly adapts to the way you live. Strong, sophisticated, and endlessly functional, it’s a quiet statement of considered design. 2\" holes for wire access are located at the back of the lower shelves on either end.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-096.jpg",
        "alt": "Milan Media Console by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "05839fa3-658d-4734-864c-7e5fa20d0098",
        "label": "Mocha Boucle",
        "priceCents": 475000,
        "available": true
      },
      {
        "id": "b8ca1ede-8ecf-4cb7-a403-66c92f718f5e",
        "label": "White Oak Wood",
        "priceCents": 465000,
        "available": true
      },
      {
        "id": "9c4f4e64-d4ef-48cd-8157-654e37ed6e41",
        "label": "Mocha Wood",
        "priceCents": 465000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "4320664b-7bd7-4f78-a982-3534fad8c9d6",
    "name": "Milan Pedestal",
    "brand": "House of Leon",
    "productType": "Sculptural Pedestal",
    "category": "Sculpture",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/milan-pedestal",
    "description": "The Milan Column Pedestal, made from brushed stainless steel, has a finish that keeps the cool material feeling warm and inviting, giving it a soft, diffused sheen that interacts gently with light. Solid yet understated, it serves as a quiet anchor for the objects it holds. Gross weight 41.8lbs Sculpture: “Wild Petals N.1” by Chala Toprak, via Tappan Collective.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-097.jpg",
        "alt": "Milan Pedestal by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "4b838469-9c86-4e1a-8213-6b5feb26150f",
        "label": "Default Title",
        "priceCents": 115000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "111deea0-90d5-4a34-ae07-baf048b8c75a",
    "name": "Nonna Bench",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/nonna-bench",
    "description": "The Nonna Bench invites a sense of warmth and nostalgia into your home. Inspired by the simplicity and charm of European countryside living, the soft, woven seat provides a comforting embrace. Built from solid white oak, the Nonna Bench feels both timeless and enduring, effortlessly blending into any space. Whether in your entryway, at your dining table, or in the bedroom, it creates a welcoming atmosphere that’s as functional as it is beautiful.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-098.jpg",
        "alt": "Nonna Bench by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "a1a8d8ae-effa-4704-a4cf-1987f79d9ac9",
        "label": "Default Title",
        "priceCents": 139000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cf6ac7ea-1c27-4b75-936d-f1724535cb8b",
    "name": "Nonna Counter Stool - Black",
    "brand": "House of Leon",
    "productType": "Counter Stools",
    "category": "Stool",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/nonna-counter-stool-black",
    "description": "With a wide seat made from soft woven jute and a curved lower backrest, the Nonna Counter Stool in Black stands tall and strong while offering long-lasting comfort. Made from solid white oak, the stools are beautiful, durable pieces that bring character to any space. The rich oil-black finish enhances the natural beauty of the wood, creating a feeling of warmth that is often overlooked in traditional black-painted pieces. Perfect for gathering around the kitchen island or creating a cozy bar area, the Nonna Counter Stool invites you to enjoy every moment spent with friends and family. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-099.jpg",
        "alt": "Nonna Counter Stool - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "a4e61120-47bf-4ef5-85d9-b959b4bb5046",
        "label": "Default Title",
        "priceCents": 79000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "55414e3a-e774-4380-a1b0-28957381484d",
    "name": "Nonna Counter Stool - Warm Oak",
    "brand": "House of Leon",
    "productType": "Counter Stools",
    "category": "Stool",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/nonna-counter-stool-warm-oak",
    "description": "With a wide seat made from soft woven jute and a curved lower backrest, the Nonna Counter Stool stands tall and strong while offering long-lasting comfort. Made from solid white oak the stools are beautiful, durable pieces that bring warmth and character to any space. The jute rope seating is soft to the touch, with incredibly durable tensile strength. Perfect for gathering around the kitchen island or creating a cozy bar area, the Nonna Counter Stool invites you to enjoy every moment spent with friends and family. These chairs can be customized for commercial projects/high traffic areas. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-100.jpg",
        "alt": "Nonna Counter Stool - Warm Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "e2b59e8e-14be-468f-aaeb-e8062abdf722",
        "label": "Default Title",
        "priceCents": 79000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c7091914-1548-4a3f-aea4-4204e49c5d11",
    "name": "Nonna Dining Chair - Black",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/nonna-dining-chair-black",
    "description": "The Nonna Dining Chair in Black, designed for beauty and comfort, was inspired by the chairs found throughout European countryside homes and popularized by Charlotte Perriand in the 1950s. The pieces, made from solid White Oak offer premium quality at an affordable price-point. These chairs have been designed for maximum comfort with soft woven jute seats, curved back legs and a rounded white oak veneered backrest. The finish, a soft oil black, lets the character of the white oak wood shine through for a feeling of richness in the materiality that oftentimes gets lost in blackened furniture. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-101.jpg",
        "alt": "Nonna Dining Chair - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "e1c9bbf8-d7c5-4c72-b244-9c1fdb64d11c",
        "label": "Default Title",
        "priceCents": 59000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7d8d1069-6243-48c6-b219-a287d473b09d",
    "name": "Nonna Dining Chair - Warm Oak",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/nonna-dining-chair-warm-oak",
    "description": "The Nonna Dining Chair, designed for beauty and comfort, was inspired by the chairs found throughout European countryside homes and popularized by Charlotte Perriand in the 1950s. The pieces, made from solid White Oak offer premium quality at an affordable price-point. the chair has been designed for maximum comfort with its soft woven seat and gently curved back, it provides a cozy embrace for long dinners filled with laughter and conversation. The jute rope is soft to the touch with durable tensile strength. The soft white oak finish effortlessly complements any decor, making the Nonna Dining Chair a delightful addition to your home—a place where memories are made around the table. These chairs can be customized for commercial projects/high traffic areas. Just reach out to hello@houseofleon.com to inquire. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-102.jpg",
        "alt": "Nonna Dining Chair - Warm Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "cf44c762-379e-4290-a1bf-4263570e7218",
        "label": "Default Title",
        "priceCents": 59000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ebde1fe0-19ca-4d3b-9885-e389e44027df",
    "name": "Ojai Floor Mirror - Charcoal",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Mirror",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/ojai-floor-mirror-charcoal",
    "description": "The Ojai Floor Mirror in Charcoal is composed of a White Oak Wooden Frame in a charocal finish and designed to lean against a wall for added depth and decor. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-103.jpg",
        "alt": "Ojai Floor Mirror - Charcoal by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "d7d9137a-6085-441f-a698-e20aff92ed3d",
        "label": "40\"",
        "priceCents": 129000,
        "available": true
      },
      {
        "id": "1815d77d-718e-4d4f-88cd-44cbcae4f169",
        "label": "60\"",
        "priceCents": 235000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e70ce60a-c1ec-4504-b538-8ad583ed7231",
    "name": "Ojai Floor Mirror - Warm Oak",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Mirror",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/ojai-floor-mirror-warm-oak-1",
    "description": "The Ojai Floor Mirror in Warm Oak is composed of a White Oak Frame and designed to lean against a wall for added depth and decor. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-104.jpg",
        "alt": "Ojai Floor Mirror - Warm Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "0195830c-297f-4cc3-adb0-3599285c1660",
        "label": "40\"",
        "priceCents": 135000,
        "available": true
      },
      {
        "id": "ce0d5abe-7dc2-4080-8529-4bb647169a4f",
        "label": "60\"",
        "priceCents": 235000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f12fd039-1194-450c-ba9f-b25a05f6f6db",
    "name": "Ojai Outdoor Daybed - Full",
    "brand": "House of Leon",
    "productType": "Outdoor Beds",
    "category": "Outdoor Chaise",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/ojai-outdoor-daybed-full",
    "description": "Experience the epitome of outdoor serenity with the Ojai Outdoor Daybed. Our take on a classic double chaise, the Ojai Daybed features a rich solid teak frame that offers a sense of luxury and stunning visuals that standard daybeds don't offer. Designed to provide ample space for two, the daybed's unique silhouette is complemented by performance-upholstered Sunbrella cushions, ensuring both exceptional comfort and durability. Whether you're lounging by the pool or simply enjoying a leisurely day outdoors, the Ojai Outdoor Daybed is the perfect statement piece for any luxurious outdoor living area.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-105.jpg",
        "alt": "Ojai Outdoor Daybed - Full by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "5a093d1a-38c1-442e-bac8-faf762477359",
        "label": "Default Title",
        "priceCents": 545000,
        "available": false
      }
    ],
    "availability": "backorder",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a3599f16-1f4b-4a45-8da4-8d051d7ba2e6",
    "name": "Ojai Outdoor Daybed - Full Cover",
    "brand": "House of Leon",
    "productType": "Cover",
    "category": "Outdoor Pillow",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/ojai-outdoor-daybed-full-cover",
    "description": "Keep your Ojai Daybed looking great for years to come. Lightweight and durable, the cover is uniquely woven to resist wear and fading. Durable fabric allows moisture to evaporate while water-resistant finish protects against rain, snow and sleet. Rather than big and bulky covers, its lightweight build makes it easy to tuck away when not in use.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-106.jpg",
        "alt": "Ojai Outdoor Daybed - Full Cover by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "26997606-898e-4baa-8a75-2eda27aa843e",
        "label": "Default Title",
        "priceCents": 20000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "68ebaba7-c3f3-4d8a-8683-f28948acfe42",
    "name": "Ojai Outdoor Daybed - Single",
    "brand": "House of Leon",
    "productType": "Outdoor Beds",
    "category": "Outdoor Chaise",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/ojai-outdoor-daybed-single",
    "description": "Experience the epitome of outdoor serenity with the Ojai Outdoor Daybed. Our take on a classic chaise lounger, the Ojai Daybed features a rich solid teak frame that offers a sense of luxury and stunning visuals that standard daybeds don't offer. Designed to provide ample space for two, the daybed's unique silhouette is complemented by performance-upholstered Sunbrella cushions, ensuring both exceptional comfort and durability. Whether you're lounging by the pool or simply enjoying a leisurely day outdoors, the Ojai Outdoor Daybed is the perfect statement piece for any luxurious outdoor living area.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-107.jpg",
        "alt": "Ojai Outdoor Daybed - Single by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "581d4bb7-c18a-4a6d-972c-35894cc7f9a1",
        "label": "Default Title",
        "priceCents": 349000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "dd3916df-eb10-4125-b9d5-ff63621251e8",
    "name": "Ojai Outdoor Daybed - Single Cover",
    "brand": "House of Leon",
    "productType": "Cover",
    "category": "Outdoor Pillow",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/ojai-outdoor-daybed-single-cover",
    "description": "Keep your Ojai Daybed looking great for years to come. Lightweight and durable, the cover is uniquely woven to resist wear and fading. Durable fabric allows moisture to evaporate while water-resistant finish protects against rain, snow and sleet. Rather than big and bulky covers, its lightweight build makes it easy to tuck away when not in use.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-108.jpg",
        "alt": "Ojai Outdoor Daybed - Single Cover by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "d998d2c2-8fcd-4725-8560-c5a76ef3d39c",
        "label": "Default Title",
        "priceCents": 15000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "de60b53e-8991-4e34-8fc5-45d73d2276ec",
    "name": "Ojai Sofa - Stone Beige Linen",
    "brand": "House of Leon",
    "productType": "Sofas",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/ojai-sofa-stone-beige-linen",
    "description": "With 15” wide arms and a low build, the Ojai Sofa is a definite statement piece that makes any room feel grand. The sofa, designed to melt into while maintaining its structure, is made using soft linen fabric and goose down pillows. With just the right amount of structure + softness, the Ojai Sofa offers the perfect balance between comfort, support and style. We have one Ojai Sofa left and the pillow arrangement is the cleaner more modern look in the last photo with 2 large backrest pillows and two slender accents pillows.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-109.jpg",
        "alt": "Ojai Sofa - Stone Beige Linen by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "3bbe2153-95d1-4b94-bce1-aed7b6d8384a",
        "label": "Default Title",
        "priceCents": 349000,
        "available": false
      }
    ],
    "availability": "backorder",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "9939baf2-de45-4d6d-887a-b69ed97a52f2",
    "name": "Ojai Vanity Desk",
    "brand": "House of Leon",
    "productType": "Desks",
    "category": "Desk",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/ojai-vanity-desk",
    "description": "The Ojai Vanity Desk transforms your daily routine into a moment of quiet luxury. We offer it in both a natural stone or warm oak top with a warm oak base create a calming space where elegance meets function. With its generous storage, everything you need is within reach, making your morning or evening rituals feel effortless. The soft-close drawers offer a quiet, seamless experience, so you can enjoy a peaceful and organized environment. Crafted to elevate your space, the Ojai Vanity Desk brings a touch of refinement to your day, every day. Color Disclaimer: The cuts of stone can vary from a cool white to a warm white with a pink undertone.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-110.png",
        "alt": "Ojai Vanity Desk by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "d134064a-50de-4203-ba45-215dccac4f68",
        "label": "White Oak Marble",
        "priceCents": 375000,
        "available": true
      },
      {
        "id": "011656d9-2c67-4ab0-bb72-6249016d7c87",
        "label": "Mocha Marble",
        "priceCents": 375000,
        "available": true
      },
      {
        "id": "b58a6d50-53af-4d05-b931-b3586ee67f37",
        "label": "White Oak Wood",
        "priceCents": 345000,
        "available": true
      },
      {
        "id": "95622f7a-0d04-4f77-a021-ecca41ae4c76",
        "label": "Mocha Wood",
        "priceCents": 375000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "691d8c13-cf17-467a-a297-9e5aaa350727",
    "name": "Oli Wood Chair",
    "brand": "House of Leon",
    "productType": "Dining Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/oli-wood-chair",
    "description": "The Oli Chair is constructed from solid Basralocus sourced from South America. This exceptionally dense hardwood is prized for its strength, stability, and resistance to rot—qualities that have long made it a standard in marine construction, bridges, and heavy decking. Basralocus wood outperforms teak in both silvering and durability. The frame is assembled using traditional mortise-and-tenon joinery, with connections left exposed and integral to the build. The wood's warm brown tone and straight grain lend both visual depth and structural assurance. Included with the chair is a quick dry foam cushions upholstered in a flax \"linen\" made in Belgium from 100% solution dyed acrylic fibers.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-111.jpg",
        "alt": "Oli Wood Chair by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "a127f6b7-d870-40ba-9e82-80ad5d875e25",
        "label": "Default Title",
        "priceCents": 119000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8975c7bf-b629-4ac1-a6ee-efb7b3436274",
    "name": "Oli Wood Chair - Armless",
    "brand": "House of Leon",
    "productType": "Dining Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/oli-wood-chair-armless",
    "description": "The Oli Chair is constructed from solid Basralocus sourced from South America. This exceptionally dense hardwood is prized for its strength, stability, and resistance to rot—qualities that have long made it a standard in marine construction, bridges, and heavy decking. Basralocus wood outperforms teak in both silvering and durability. The frame is assembled using traditional mortise-and-tenon joinery, with connections left exposed and integral to the build. The wood's warm brown tone and straight grain lend both visual depth and structural assurance. Included with the chair is a quick dry foam cushions upholstered in a flax \"linen\" woven in Belgium from 100% solution dyed acrylic fibers.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-112.jpg",
        "alt": "Oli Wood Chair - Armless by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "37944165-b21f-4525-87c7-c015ebd3e049",
        "label": "Default Title",
        "priceCents": 99000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "50839bf6-5230-48e6-b42c-0a792775ec7f",
    "name": "Olive Rug",
    "brand": "House of Leon",
    "productType": "Rug",
    "category": "Area Rug",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/olive-rug",
    "description": "Handwoven from 100% New Zealand Wool Our rugs are crafted from the highest-grade New Zealand wool, known for its softness, durability, and natural resilience. Each piece is abrash dyed, a traditional technique that creates subtle tonal shifts within a single color—giving the rug a rich sense of depth, movement, and character. Naturally stain-resistant and breathable, these rugs are made to last and age beautifully with time. A grounding piece with quiet impact.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-113.jpg",
        "alt": "Olive Rug by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "68c9e43b-f65c-4560-9011-989ea0557d89",
        "label": "5'x8'",
        "priceCents": 95000,
        "available": true
      },
      {
        "id": "d3cc8114-4159-4ea5-b258-3e4219378c90",
        "label": "6'x9'",
        "priceCents": 125000,
        "available": true
      },
      {
        "id": "ee877c88-45e8-4d3f-84c1-5a86071ee8f5",
        "label": "8'x10'",
        "priceCents": 169000,
        "available": true
      },
      {
        "id": "42ba377a-9539-4cb8-8036-70135f48fd4c",
        "label": "9'x12'",
        "priceCents": 215000,
        "available": true
      },
      {
        "id": "e14ea678-5f7d-4e74-b69e-c070fc10a9a7",
        "label": "10'x14'",
        "priceCents": 295000,
        "available": true
      },
      {
        "id": "963fca7e-05b8-4528-825e-5b8b22d8649c",
        "label": "12'x15'",
        "priceCents": 345000,
        "available": true
      },
      {
        "id": "4d2dd024-c902-42a3-9893-aea80992fdec",
        "label": "Swatch",
        "priceCents": 1500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7879d02b-96fe-426c-b1d3-95313ccd236d",
    "name": "Organic Cloud Cotton Quilt (Moss)",
    "brand": "Parachute Home",
    "productType": "Quilts & Blankets",
    "category": "Quilt",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/organic-cloud-cotton-quilt-moss",
    "description": "Bring an alluring loftiness and elegance to your linens with this warm bedding essential. Made of a 100% organic cotton shell and stuffed with an insulating polyester fill. So soft and fluffy – you have to feel it to believe it.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-114.jpg",
        "alt": "Organic Cloud Cotton Quilt (Moss) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "3068c3fd-53b2-4a9a-bf94-5ff03d98e6c5",
        "label": "Twin/Twin XL / Moss",
        "priceCents": 25900,
        "available": true
      },
      {
        "id": "b21dba20-b9e2-49aa-8f11-201a0299731f",
        "label": "Full/Queen / Moss",
        "priceCents": 28900,
        "available": true
      },
      {
        "id": "adf2d054-57b0-4d3a-9cfc-d3d7e3e1c47c",
        "label": "King/Cal King / Moss",
        "priceCents": 30900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "32b1912a-6735-4b83-8fa3-28b909c609b8",
    "name": "Organic Cloud Cotton Quilt (White)",
    "brand": "Parachute Home",
    "productType": "Quilts & Blankets",
    "category": "Quilt",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/organic-cloud-cotton-quilt-white",
    "description": "Bring an alluring loftiness and elegance to your linens with this warm bedding essential. Made of a 100% organic cotton shell and stuffed with an insulating polyester fill. So soft and fluffy – you have to feel it to believe it.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-115.jpg",
        "alt": "Organic Cloud Cotton Quilt (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "26d0a6c0-9f31-43a5-8412-707a1f7afd08",
        "label": "Twin/Twin XL / White",
        "priceCents": 25900,
        "available": true
      },
      {
        "id": "c83a1ebe-c63f-49a4-853d-d5afe03c7fd8",
        "label": "Full/Queen / White",
        "priceCents": 28900,
        "available": true
      },
      {
        "id": "184ec6dd-5259-43b8-af16-ae9d170304b3",
        "label": "King/Cal King / White",
        "priceCents": 30900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8f891401-9320-47b0-b841-565745ec57bb",
    "name": "Palazzo Floor Mirror - White Oak",
    "brand": "House of Leon",
    "productType": "Mirrors",
    "category": "Mirror",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/palazzo-floor-mirror-white-oak",
    "description": "Inspired by Milan’s historic palazzos, the Palazzo Floor Mirror brings the details often lost in modern design back into frame. With subtle nods to the intricate moldings of the city’s architecture, the solid white oak frame adds a timeless sophistication to any space. It serves as a quiet statement of refinement, bringing warmth and character back into the contemporary home.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-116.jpg",
        "alt": "Palazzo Floor Mirror - White Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "c50efb3c-a387-4452-9ed3-78d761f633f6",
        "label": "Default Title",
        "priceCents": 150000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e9c50038-6c9e-4d7d-985d-4eacfdfec9a9",
    "name": "Papa Teddy Chair - Mocha Boucle",
    "brand": "House of Leon",
    "productType": "Arm Chairs, Recliners & Sleeper Chairs",
    "category": "Armchair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/papa-teddy-chair-mocha-boucle",
    "description": "House of Leon’s Papa Teddy Lounge Chair is the ultimate spot to settle in and unwind. Upholstered in rich mocha mohair boucle, woven in Tuscany, Italy, that hugs every curve. The Papa Teddy turns any room into a luxurious retreat. Plush yet refined, this chair features tight cushioning, smooth, seamless lines, and tufting that add just the right touch of sophistication. Perfect for a quiet moment or a cozy catch-up, the Papa Teddy makes comfort elegant, bringing warmth and quiet luxury into your space. Pair it with our matching ottoman to complete the experience. Ottoman sold separately.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-117.jpg",
        "alt": "Papa Teddy Chair - Mocha Boucle by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "96976863-406e-4da5-8746-4c8b649efde2",
        "label": "Fixed Base",
        "priceCents": 315000,
        "available": true
      },
      {
        "id": "a96dd2b8-192f-4606-b82c-82a46299fdcf",
        "label": "Swivel",
        "priceCents": 335000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a6c3384e-fb95-4a1d-bed2-675b79d08f4c",
    "name": "Papa Teddy Ottoman - Mocha Boucle",
    "brand": "House of Leon",
    "productType": "Ottomans",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/papa-teddy-ottoman-mocha-boucle",
    "description": "House of Leon’s Papa Teddy Ottoman is the perfect accent piece to settle in and unwind. Upholstered in rich mocha mohair boucle, woven in Tuscany, Italy, that hugs every curve. Add the Ottoman for the perfect quiet moment. The upholstered piece brings warmth and luxury into any space. Pair it with our Papa Teddy to complete the experience.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-118.jpg",
        "alt": "Papa Teddy Ottoman - Mocha Boucle by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "a21eba16-5794-411f-89bb-cebaa48db442",
        "label": "Default Title",
        "priceCents": 89000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "635d165b-4f98-4b56-be76-5682c62898f2",
    "name": "Papa Teddy Ottoman - White Boucle",
    "brand": "House of Leon",
    "productType": "Ottomans",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/papa-teddy-ottoman-white-boucle",
    "description": "House of Leon’s Papa Teddy Ottoman is the perfect accent piece to settle in and unwind. Upholstered in rich white mohair boucle, woven in Tuscany, Italy, that hugs every curve. Add the Ottoman for the perfect quiet moment. The upholstered piece brings warmth and luxury into any space. Pair it with our Papa Teddy to complete the experience.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-119.jpg",
        "alt": "Papa Teddy Ottoman - White Boucle by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "7b35f6e2-4899-4c8e-8ccc-1327fb99c97a",
        "label": "Default Title",
        "priceCents": 89000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "1fa566e7-88f8-4d40-a618-34955c0a0800",
    "name": "Percale Duvet Cover (Bone)",
    "brand": "Parachute Home",
    "productType": "Duvet Cover Sets",
    "category": "Duvet Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-duvet-cover-bone",
    "description": "Protect your duvet insert while keeping cozy; this cover feels as good as it looks. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale sheets are lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-120.jpg",
        "alt": "Percale Duvet Cover (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "0ad0ceb0-e7db-4867-a41e-baf2197239dd",
        "label": "Twin/Twin XL / Bone",
        "priceCents": 20000,
        "available": true
      },
      {
        "id": "fbbab1ee-61db-4a97-87c3-a30f921c27a4",
        "label": "Full/Queen / Bone",
        "priceCents": 22000,
        "available": true
      },
      {
        "id": "365c61ee-46f6-421e-97d5-4e64009abb0d",
        "label": "King/Cal King / Bone",
        "priceCents": 24000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "76523c81-8ca2-4029-af6c-ccc7423485d8",
    "name": "Percale Duvet Cover (Warm Grey)",
    "brand": "Parachute Home",
    "productType": "Duvet Covers",
    "category": "Duvet Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-duvet-cover-warm-grey",
    "description": "Protect your duvet insert while keeping cozy; this cover feels as good as it looks. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale sheets are lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-121.jpg",
        "alt": "Percale Duvet Cover (Warm Grey) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "cf72d4e0-d4eb-4c81-9551-c7b124b39304",
        "label": "Twin/TwinXL / Warm Grey",
        "priceCents": 20000,
        "available": true
      },
      {
        "id": "082c3606-aaa7-4890-94df-feb127c9f323",
        "label": "Full/Queen / Warm Grey",
        "priceCents": 22000,
        "available": true
      },
      {
        "id": "982dc705-eb75-4d16-8c00-b42cd3602fbe",
        "label": "King/Cal King / Warm Grey",
        "priceCents": 24000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "259734c3-80f6-4ac2-bc9c-72793714d8ba",
    "name": "Percale Duvet Cover (White)",
    "brand": "Parachute Home",
    "productType": "Duvet Cover Sets",
    "category": "Duvet Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-duvet-cover-white",
    "description": "Protect your duvet insert while keeping cozy; this cover feels as good as it looks. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale sheets are lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-122.jpg",
        "alt": "Percale Duvet Cover (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "d5f8f205-d37b-49ca-a31a-82b47595a216",
        "label": "Twin/Twin XL / White",
        "priceCents": 20000,
        "available": true
      },
      {
        "id": "ddcc0ffe-cc06-4c77-bc35-21feafc4e38e",
        "label": "Full/Queen / White",
        "priceCents": 22000,
        "available": true
      },
      {
        "id": "dce015ac-bbf0-417d-a235-ffb9935690e6",
        "label": "King/Cal King / White",
        "priceCents": 24000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "d12aa128-ea2c-4708-8341-0bca8e1a580c",
    "name": "Percale Fitted Sheet (Bone)",
    "brand": "Parachute Home",
    "productType": "Fitted Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-fitted-sheet-bone",
    "description": "Our comfortable, durable fitted sheet hugs your mattress with a continuous elastic hem. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale is lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-123.jpg",
        "alt": "Percale Fitted Sheet (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "4f0b29f6-3584-477c-94b7-95e03ac9770c",
        "label": "Twin / Bone",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "f4e8454b-4a7b-4fab-b481-d1c41c5f5c5e",
        "label": "Twin XL / Bone",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "28c94229-aadd-4b6f-bb93-54b4f98122d7",
        "label": "Full / Bone",
        "priceCents": 10000,
        "available": true
      },
      {
        "id": "ffb7eed1-61a6-46b3-b041-5143446b217a",
        "label": "Queen / Bone",
        "priceCents": 11000,
        "available": true
      },
      {
        "id": "51b9b457-67b4-4d05-9056-0b00e51d2447",
        "label": "King / Bone",
        "priceCents": 12000,
        "available": true
      },
      {
        "id": "7ef583b0-3b78-47df-8f45-b8e6a807389e",
        "label": "Cal King / Bone",
        "priceCents": 12000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "9f9dab22-b39c-40ac-8409-23dc940d558b",
    "name": "Percale Fitted Sheet (Warm Grey)",
    "brand": "Parachute Home",
    "productType": "Fitted Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-fitted-sheet-warm-grey",
    "description": "Our comfortable, durable fitted sheet hugs your mattress with a continuous elastic hem. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale is lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-124.jpg",
        "alt": "Percale Fitted Sheet (Warm Grey) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "c93f8831-39d8-4988-829f-10b67215434c",
        "label": "Twin / Warm Grey",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "22dc3947-2c6e-4233-83da-bfd15d510149",
        "label": "Twin XL / Warm Grey",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "676de952-0c6d-489c-9fb6-5047e802713c",
        "label": "Full / Warm Grey",
        "priceCents": 10000,
        "available": true
      },
      {
        "id": "2667d47a-e1c8-4e3f-b792-bc13cb84f798",
        "label": "Queen / Warm Grey",
        "priceCents": 11000,
        "available": true
      },
      {
        "id": "43c20128-cef2-472a-836f-97e12cd60bc3",
        "label": "King / Warm Grey",
        "priceCents": 12000,
        "available": true
      },
      {
        "id": "e36bd1f6-32bd-4d4b-bc3d-5d8a55c027ac",
        "label": "Cal King / Warm Grey",
        "priceCents": 12000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "43b512bd-4f5b-4430-a8e2-70382d349e49",
    "name": "Percale Fitted Sheet (White)",
    "brand": "Parachute Home",
    "productType": "Fitted Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-fitted-sheet-white",
    "description": "Our comfortable, durable fitted sheet hugs your mattress with a continuous elastic hem. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale is lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-125.jpg",
        "alt": "Percale Fitted Sheet (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "0205d166-906b-48fc-864c-0a8571dd36c5",
        "label": "Twin / White",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "5fa7b4e8-0e26-4949-a2db-64b760224267",
        "label": "Twin XL / White",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "c7829f82-2e28-407d-a8ec-74cc7927e324",
        "label": "Full / White",
        "priceCents": 10000,
        "available": true
      },
      {
        "id": "68744444-e3c2-44ce-a2df-51906fdb33bb",
        "label": "Queen / White",
        "priceCents": 11000,
        "available": true
      },
      {
        "id": "c9c6014e-d6cf-4e7e-800e-1cb655261111",
        "label": "King / White",
        "priceCents": 12000,
        "available": true
      },
      {
        "id": "1f55e780-c6d3-4315-8012-507d5e74d124",
        "label": "Cal King / White",
        "priceCents": 12000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "bca5424c-4dc7-4cdf-9bbe-608506704adc",
    "name": "Percale Pillowcase Set (Bone)",
    "brand": "Parachute Home",
    "productType": "Pillowcase Sets, Sheets",
    "category": "Pillow Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-pillowcase-set-bone",
    "description": "Rest easy with these soft, natural pillowcases. Available in our signature back envelope closure and a traditional side open style. Choose what makes you happy. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale is lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-126.jpg",
        "alt": "Percale Pillowcase Set (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "621e65d2-0f54-4a59-9cd7-28a4d6ea3413",
        "label": "Standard / Bone / Back Envelope",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "3ee6a1b4-a762-43b4-ab90-e034bb189ef2",
        "label": "Standard / Bone / Side Open",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "f2a695c7-5bcc-484a-ba83-85b762ed01d3",
        "label": "Standard / Bone / Side Envelope",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "34a9b382-65f5-42c1-9c4c-0481d6752b08",
        "label": "King / Bone / Back Envelope",
        "priceCents": 6900,
        "available": true
      },
      {
        "id": "4f6adc72-5b90-4aec-a174-f7a2b478b4b5",
        "label": "King / Bone / Side Open",
        "priceCents": 6900,
        "available": true
      },
      {
        "id": "5900fd09-0ae1-4eee-b74d-4777531fcd4a",
        "label": "King / Bone / Side Envelope",
        "priceCents": 6900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "de3dbb87-b207-4105-b54b-49d2f8a14891",
    "name": "Percale Pillowcase Set (Warm Grey)",
    "brand": "Parachute Home",
    "productType": "Pillowcase Sets, Sheets",
    "category": "Pillow Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-pillowcase-set-warm-grey",
    "description": "Rest easy with these soft, natural pillowcases. Available in our signature back envelope closure and a traditional side open style. Choose what makes you happy. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale is lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-127.jpg",
        "alt": "Percale Pillowcase Set (Warm Grey) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "3338a501-b6ba-4525-b131-bc67ca641962",
        "label": "Standard / Warm Grey / Back Envelope",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "17a09b3a-123e-4810-8cf7-8df2d0d9d468",
        "label": "Standard / Warm Grey / Side Envelope",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "9c440b4a-ffe9-4808-b9e6-1a6dfc387186",
        "label": "King / Warm Grey / Back Envelope",
        "priceCents": 6900,
        "available": true
      },
      {
        "id": "a93ec64e-d565-430e-a2a6-1c420ec2ebed",
        "label": "King / Warm Grey / Side Envelope",
        "priceCents": 5900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "dfaabed1-3384-4fab-99ed-e48bb58ccdf2",
    "name": "Percale Pillowcase Set (White)",
    "brand": "Parachute Home",
    "productType": "Pillowcase Sets, Sheets",
    "category": "Pillow Cover",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-pillowcase-set-white",
    "description": "Rest easy with these soft, natural pillowcases. Available in our signature back envelope closure and a traditional side open style. Choose what makes you happy. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale is lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-128.jpg",
        "alt": "Percale Pillowcase Set (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "9341397a-db1e-4b48-8363-9c7d6d9c0537",
        "label": "Standard / White / Back Envelope",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "a8a415e8-f47d-4a83-9560-0d19d508f40d",
        "label": "Standard / White / Side Open",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "8d6cbc59-d4f5-49b1-894f-c99d11600c13",
        "label": "Standard / White / Side Envelope",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "66313619-7835-41a2-892d-e3ccd2bdc412",
        "label": "King / White / Back Envelope",
        "priceCents": 6900,
        "available": true
      },
      {
        "id": "6a191f2f-6d09-4a76-887b-99f418578908",
        "label": "King / White / Side Open",
        "priceCents": 6900,
        "available": true
      },
      {
        "id": "626b9465-511f-494d-ab5f-a6802808ad69",
        "label": "King / White / Side Envelope",
        "priceCents": 6900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "75f521c9-5189-4790-babd-865b9948ae44",
    "name": "Percale Sham Set (Bone)",
    "brand": "Parachute Home",
    "productType": "Sham Sets, Sheets",
    "category": "Pillow Sham",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-sham-set-bone",
    "description": "Finish your bed with this set of two decorative shams. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale is lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-129.jpg",
        "alt": "Percale Sham Set (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "f7cc439d-e583-42c5-ab28-46793de36614",
        "label": "Standard / Bone",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "d1761e2b-4c4d-4ef8-8daa-c1cf6dbbb8c3",
        "label": "King / Bone",
        "priceCents": 8900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "4018ad04-bd46-415d-9e2f-2561bfd44732",
    "name": "Percale Sham Set (Warm Grey)",
    "brand": "Parachute Home",
    "productType": "Sham Sets, Sheets",
    "category": "Pillow Sham",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-sham-set-warm-grey",
    "description": "Finish your bed with this set of two decorative shams. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale is lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-130.jpg",
        "alt": "Percale Sham Set (Warm Grey) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "5d9af3f2-4d3a-438d-8f32-885c5de248cc",
        "label": "Standard / Warm Grey",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "4203bce7-0385-4661-9f06-95a88faf0205",
        "label": "King / Warm Grey",
        "priceCents": 8900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "aa0575e6-ec51-4299-8f8e-c500ca34cf8a",
    "name": "Percale Sham Set (White)",
    "brand": "Parachute Home",
    "productType": "Sham Sets, Sheets",
    "category": "Pillow Sham",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-sham-set-white",
    "description": "Finish your bed with this set of two decorative shams. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale is lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-131.jpg",
        "alt": "Percale Sham Set (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "ad3010ce-6197-45f6-9554-93e682933e11",
        "label": "Standard / White",
        "priceCents": 7900,
        "available": true
      },
      {
        "id": "ad693d4d-6a24-4d33-a185-a1c097886859",
        "label": "King / White",
        "priceCents": 8900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ab075544-19e7-45f9-84dc-366b78780571",
    "name": "Percale Top Sheet (Bone)",
    "brand": "Parachute Home",
    "productType": "Top Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-top-sheet-bone",
    "description": "Add a layer of pure comfort with our oversized top sheet. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale sheets are lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-132.jpg",
        "alt": "Percale Top Sheet (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "e411e40d-489b-433b-926e-d2f2320b9d09",
        "label": "Twin/Twin XL / Bone",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "0be98799-8292-4dc9-9e3b-4a702807dbc7",
        "label": "Full/Queen / Bone",
        "priceCents": 10000,
        "available": true
      },
      {
        "id": "c9d74d66-1c8a-46fb-b70c-f153742a6132",
        "label": "King/Cal King / Bone",
        "priceCents": 11000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a8b1b3b3-1c7d-48a1-b677-109e68d6694a",
    "name": "Percale Top Sheet (Warm Grey)",
    "brand": "Parachute Home",
    "productType": "Top Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-top-sheet-warm-grey",
    "description": "Add a layer of pure comfort with our oversized top sheet. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale sheets are lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-133.jpg",
        "alt": "Percale Top Sheet (Warm Grey) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "7e191035-538d-4407-883d-e0b422bdcf49",
        "label": "Twin/Twin XL / Warm Grey",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "04e2a350-cbed-4156-ab57-6ea02e3cad85",
        "label": "Full/Queen / Warm Grey",
        "priceCents": 10000,
        "available": true
      },
      {
        "id": "09302e54-f63a-4c3c-9216-99360d2f4119",
        "label": "King/Cal King / Warm Grey",
        "priceCents": 11000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "10cbc033-2615-471d-b13d-360bf0a0823f",
    "name": "Percale Top Sheet (White)",
    "brand": "Parachute Home",
    "productType": "Top Sheets",
    "category": "Sheet Set",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/percale-top-sheet-white",
    "description": "Add a layer of pure comfort with our oversized top sheet. Crafted in Portugal from 100% premium, certified long-staple Egyptian cotton – our percale sheets are lightweight and durable with a crisp finish that only gets better with time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-134.jpg",
        "alt": "Percale Top Sheet (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "25020460-471c-48a3-bce3-cec315af2e39",
        "label": "Twin/Twin XL / White",
        "priceCents": 9000,
        "available": true
      },
      {
        "id": "fdd3ce78-968b-41fc-9b29-f4bd29821fce",
        "label": "Full/Queen / White",
        "priceCents": 10000,
        "available": true
      },
      {
        "id": "bc3282ec-342e-40a5-a48f-b1e8983277c5",
        "label": "King/Cal King / White",
        "priceCents": 11000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "87e13de4-b8dc-4c58-9fbb-704233b845c2",
    "name": "Pietra Towels",
    "brand": "Italic",
    "productType": "Product",
    "category": "Bath Towel",
    "roomTypes": [],
    "tags": [
      "Italic",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/pietra-towels",
    "description": "Modern Sophistication Reimagined. Refine your daily ritual with the Pietra Towel, featuring a bold, warped-checkered design that brings a contemporary edge to your space. Crafted from plush 100% Australian Cotton (600 GSM), its premium construction delivers superior absorbency and a curated, spa-like feel. Quick-drying, durable, and finished with a convenient locker loop, it’s the ultimate blend of elevated style and daily utility. Dimensions Washcloth (set of 2): 13 in x 13 in (33 cm x 33 cm) Hand towel (set of 2): 16 in x 28 in (40.1 cm x 71.1 cm) Bath sheet (set of 2): 40 in x 65 in (101.6 cm x 165.1 cm) Materials 100% Australian Cotton Towels: 600 GSM Product Details 600 GSM towel with a 1.0 cm pile Soft and plush against the skin Absorbent and quick-drying for daily use Finished with a locker loop for easy drying We recommend washing towels before use Designed in the USA Luxe Set Includes: 2x Pietra Washcloth 2x Capri Hand towel 2x Pietra Bath sheet Family Set I ncludes: 1x Pietra Luxe Set 1x Sorrel Standard Set Care Instructions Machine wash cold. Do not bleach. Tumble dry low.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-135.jpg",
        "alt": "Pietra Towels by Italic"
      }
    ],
    "variants": [
      {
        "id": "9bc19169-1905-4e89-bc44-720dba67dcde",
        "label": "Tan & Ecru / Washcloths (Set of 2)",
        "priceCents": 2500,
        "available": true
      },
      {
        "id": "4f86183e-b595-4bfb-8224-df52d8ccdc58",
        "label": "Tan & Ecru / Bath Sheets (Set of 2)",
        "priceCents": 11500,
        "available": true
      },
      {
        "id": "d572ff3a-8501-4923-ba20-235c33852052",
        "label": "Tan & Ecru / Luxe Set (Set of 6 with Pietra Bath Sheets)",
        "priceCents": 18100,
        "available": true
      },
      {
        "id": "dc4ee33b-9837-4562-b560-498b882f4059",
        "label": "Tan & Ecru / Family Set (Set of 12)",
        "priceCents": 32500,
        "available": false
      },
      {
        "id": "eca48e2c-d541-4641-bab4-dbd73eaa3fd4",
        "label": "Tan & Ecru / Washcloths (Set of 4)",
        "priceCents": 5100,
        "available": true
      },
      {
        "id": "ef09d41f-1407-4d6f-b0d4-a4503957075b",
        "label": "Tan & Ecru / Bath Sheet (Single)",
        "priceCents": 3400,
        "available": true
      },
      {
        "id": "e00c890e-20c2-4e29-bdf3-e2277d1d2a10",
        "label": "Sky & Tomato / Washcloths (Set of 2)",
        "priceCents": 3400,
        "available": true
      },
      {
        "id": "cd82ae22-e7f5-45f3-8126-614243392168",
        "label": "Sky & Tomato / Bath Sheets (Set of 2)",
        "priceCents": 15400,
        "available": true
      },
      {
        "id": "7f95231f-f84f-436f-93bc-d297a7f04f35",
        "label": "Sky & Tomato / Luxe Set (Set of 6 with Pietra Bath Sheets)",
        "priceCents": 19400,
        "available": true
      },
      {
        "id": "d93a4045-52dc-48cc-a84b-e6ad2d2adeee",
        "label": "Sky & Tomato / Family Set (Set of 12)",
        "priceCents": 5400,
        "available": true
      },
      {
        "id": "235a363e-2a9d-4c40-9164-ec4bad1bc032",
        "label": "Sky & Tomato / Bath Sheet (Single)",
        "priceCents": 7700,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ebdb3b9c-3398-4d71-9ef5-5575ae3c1f2d",
    "name": "Rio Pivot Dining Chair",
    "brand": "House of Leon",
    "productType": "Dining Chair",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/rio-pivot-dining-chair",
    "description": "The Rio is framed in solid walnut or black-stained wood, with a sculptural silhouette softened by its leather seat and backrest. Exposed saddle stitching traces the edges of the upholstery, highlighting the craftsmanship and precision behind each piece. Designed around the natural rhythm of the body, its pivoting backrest introduces a subtle sense of flexibility, allowing the chair to move with you through long dinners and lingering conversations. Available in walnut with brown leather, walnut with black leather, or black with black leather.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-136.jpg",
        "alt": "Rio Pivot Dining Chair by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "c09e59bc-6e29-40d6-93b3-30f9b9dbf625",
        "label": "Brown Walnut",
        "priceCents": 115000,
        "available": true
      },
      {
        "id": "ffc18cff-c088-4eed-b57b-bec5cf01b7d9",
        "label": "Black Walnut",
        "priceCents": 115000,
        "available": true
      },
      {
        "id": "b4610fc4-3021-40e2-8e95-79f4a71383ac",
        "label": "Black on Black",
        "priceCents": 115000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3dd21f3d-d225-414d-bb76-ae5af5f9ea0a",
    "name": "River Stone Bowl",
    "brand": "House of Leon",
    "productType": "Decorative Bowls",
    "category": "Decorative Bowl",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/river-stone-bowl",
    "description": "The River Stone Bowl is crafted from stones sourced in the rivers surrounding Danao City. M eticulously carved from organic river stones, each bowl is a unique piece, showcasing the natural beauty and strength of its material. Its versatility makes it ideal for serving or for display. Bring a touch of nature's artistry into your home with this piece, a testament to both beauty and simplicity. *Please note, each piece is carved from a natural stone and will therefore have variations from the image depicted. The piece is watertight.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-137.jpg",
        "alt": "River Stone Bowl by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "d57cf84f-d2ea-4b4a-874a-04c6800d360e",
        "label": "Default Title",
        "priceCents": 15000,
        "available": false
      }
    ],
    "availability": "backorder",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "db28fd13-a66b-45c7-997c-f4d0d518c3b5",
    "name": "River Stone Footed Bowl",
    "brand": "House of Leon",
    "productType": "Decorative Bowls",
    "category": "Decorative Bowl",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/river-stone-footed-bowl",
    "description": "The River Stone Footed Bowl is crafted from stones sourced in the rivers surrounding Danao City. M eticulously carved from organic river stones, each bowl is a unique piece, showcasing the natural beauty and strength of its material. Its versatility makes it ideal for serving or for display. Bring a touch of nature's artistry into your home with this piece, a testament to both beauty and simplicity. *Please note, each piece is carved from a natural stone and will therefore have variations from the image depicted. The piece is watertight.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-138.jpg",
        "alt": "River Stone Footed Bowl by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "98820b07-74e5-4c02-ac9d-6a039f0ba822",
        "label": "Default Title",
        "priceCents": 18000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "59cefafe-aeba-43e2-ab5e-8b97604e2d8b",
    "name": "River Stone Vase",
    "brand": "House of Leon",
    "productType": "Vases",
    "category": "Vase",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/river-stone-vase",
    "description": "The River Stone Vase is crafted from stones sourced in the rivers surrounding Danao City. M eticulously carved from organic river stones, each vase is a unique masterpiece, showcasing the natural beauty and strength of its material. Its versatility makes it ideal for fresh flowers, dried arrangements, or as a standalone art piece. Bring a touch of nature's artistry into your home with this piece, a testament to both beauty and simplicity. *Please note, each piece is carved from a natural stone and will therefore have variations from the image depicted. The piece is watertight.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-139.jpg",
        "alt": "River Stone Vase by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "c5642ba1-c12f-492f-88a7-182104e88618",
        "label": "Default Title",
        "priceCents": 18000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "27bd3965-f2fe-42ec-a8b1-2b21186c116c",
    "name": "Round Topa Topa Dining Table - Black",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/round-topa-topa-dining-table-black",
    "description": "Made of solid White Oak wood, the Topa Topa Round Dining Table is designed to bring a playful look to your space. The round shape encourages laughter and conversation, making every gathering feel special. Named after the Topa Topa Mountain Range that lines the Ojai Valley, the Topa Topa Table is a constant crowd pleaser. Using its own beautiful grain, a black stain is used to protect and accentuate its existing beauty. The piece has 3 protective coatings for durable protection against food and liquid spills. The table comfortably seats 6 dining chairs at a width of about 20\" per chair. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-140.jpg",
        "alt": "Round Topa Topa Dining Table - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "469b797e-16ef-4fdd-a08c-96e96b27ce9a",
        "label": "40\"",
        "priceCents": 279000,
        "available": true
      },
      {
        "id": "6a1bae0e-24ab-4f1f-9a90-0a7f5e463301",
        "label": "50\"",
        "priceCents": 289000,
        "available": true
      },
      {
        "id": "625ebd0a-d062-45c2-986a-8739885157b9",
        "label": "72\"",
        "priceCents": 449000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7604ccb8-4756-44ea-9d61-2bc0e07c2694",
    "name": "Round Topa Topa Dining Table - Mocha",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/round-topa-topa-dining-table-mocha",
    "description": "Made of solid White Oak wood, the Topa Topa Round Dining Table is designed to bring a playful look to your space. The round shape encourages laughter and conversation, making every gathering feel special. Named after the Topa Topa Mountain Range that lines the Ojai Valley, the Topa Topa Table is a constant crowd pleaser. Using its own beautiful grain, a warm mocha stain is used to protect and accentuate its existing beauty. The piece has 3 protective coatings for durable protection against food and liquid spills. The table comfortably seats 6 dining chairs at a width of about 20\" per chair. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Wood Disclaimer: The solid wood should be viewed as a living breathing material. It's substantial thickness can lead to movement as it adjusts to new environments, especially those that are especially humid, dry, or sunny. This movement can lead to cracking during its initial adjustment period and is something that needs to be considered when making the decision to purchase a solid wood table.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-141.jpg",
        "alt": "Round Topa Topa Dining Table - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "33b5ff33-9b8c-4d8e-9a6c-25593fe90001",
        "label": "40\"",
        "priceCents": 279000,
        "available": true
      },
      {
        "id": "af74fc3e-2026-4267-921a-f6fbec22c62d",
        "label": "50\"",
        "priceCents": 289000,
        "available": true
      },
      {
        "id": "dafefd3d-aff2-457e-9a15-6a8c56c0d33c",
        "label": "72\"",
        "priceCents": 449000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "efb2916a-99fc-40be-ac38-a90294aea474",
    "name": "Round Topa Topa Dining Table - Natural",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/round-topa-topa-dining-table-natural",
    "description": "Made of solid Ash wood, the Topa Topa Round Dining Table is designed to bring a playful look to your space. The round shape encourages laughter and conversation, making every gathering feel special. Named after the Topa Topa Mountain Range that lines the Ojai Valley, the Topa Topa Table is a constant crowd pleaser. Using its own beautiful grain, a subtle white wash under a clear finish is used to protect and accentuate its existing beauty. The piece has 3 protective coatings for durable protection against food and liquid spills. The table comfortably seats 6 dining chairs at a width of about 20\" per chair. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Wood Disclaimer: The solid wood should be viewed as a living breathing material. It's substantial thickness can lead to movement as it adjusts to new environments, especially those that are especially humid, dry, or sunny. This movement can lead to cracking during its initial adjustment period and is something that needs to be considered when making the decision to purchase a solid wood table.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-142.jpg",
        "alt": "Round Topa Topa Dining Table - Natural by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "5f72e2a1-adbe-420b-a928-48efc8a1ed5e",
        "label": "40\"",
        "priceCents": 279000,
        "available": true
      },
      {
        "id": "2adee1c4-1d1b-4223-a160-55a2ce538492",
        "label": "50\"",
        "priceCents": 289000,
        "available": true
      },
      {
        "id": "9d40d108-117a-4794-b62f-8041a633f634",
        "label": "72\"",
        "priceCents": 449000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "2ee0a087-50a5-4bfd-a3ac-16ac301c35ea",
    "name": "Round Topa Topa Dining Table - Warm Oak",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/round-topa-topa-dining-table-warm-oak",
    "description": "Made of solid White Oak wood, the Topa Topa Round Dining Table is designed to bring a playful look to your space. The round shape encourages laughter and conversation, making every gathering feel special. Named after the Topa Topa Mountain Range that lines the Ojai Valley, the Topa Topa Table is a constant crowd pleaser. Using its own beautiful grain, a warm natural stain is used to protect and accentuate its existing beauty. The piece has 3 protective coatings for durable protection against food and liquid spills. The table comfortably seats 6 dining chairs at a width of about 20\" per chair. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Wood Disclaimer: The solid wood should be viewed as a living breathing material. It's substantial thickness can lead to movement as it adjusts to new environments, especially those that are especially humid, dry, or sunny. This movement can lead to cracking during its initial adjustment period and is something that needs to be considered when making the decision to purchase a solid wood table.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-143.jpg",
        "alt": "Round Topa Topa Dining Table - Warm Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "6fc9c483-c250-444c-b00d-3b5a13117ba7",
        "label": "40\"",
        "priceCents": 279000,
        "available": true
      },
      {
        "id": "cecf51cc-9ab6-48b3-aab0-a3d09ef84c17",
        "label": "50\"",
        "priceCents": 289000,
        "available": true
      },
      {
        "id": "c122eeda-fb2d-4237-b650-bbd0eb2772d5",
        "label": "72\"",
        "priceCents": 449000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "356139f6-3fe7-40ca-a46b-9ba5de2e2824",
    "name": "Saddle Oak Ottoman - Mocha",
    "brand": "House of Leon",
    "productType": "Ottomans",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/saddle-oak-ottoman-mocha",
    "description": "The Saddle Ottoman in Mocha is a refined blend of texture and craftsmanship. Handcrafted from solid white oak with a rich mocha finish, its sculptural form is both grounding and elegant. Upholstered in a luxurious Italian mohair boucle, the piece offers an inviting softness that contrasts beautifully with its structured base. Designed as a versatile accent, it functions effortlessly as a footrest, seat, or statement piece in any space.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-144.jpg",
        "alt": "Saddle Oak Ottoman - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "a9985b2a-4814-4ab7-9fbb-a467ba1255f2",
        "label": "Default Title",
        "priceCents": 95000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "dde05730-433c-4144-a8ef-ff141cce8bbf",
    "name": "Sherpa Counter Stool",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Stool",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sherpa-counter-stool",
    "description": "This counter stool pairs a French white oak base with a shearling seat, bringing structure and softness into direct alignment. The solid paneled form, built with an inset footrest, is compact and weighty, creating a strong grounding form. The shearling seat adds a soft texture without altering the underlying geometry. Offered in both counter stool and ottoman heights, the piece remains grounded and direct, with balance achieved through proportion and material contrast. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-145.jpg",
        "alt": "Sherpa Counter Stool by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "7caf2ea8-fdd9-4041-9d66-e4495f43190f",
        "label": "Default Title",
        "priceCents": 145000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3fcca1cf-4f58-4cb9-bea7-570a9093f7cc",
    "name": "Sherpa Ottoman",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sherpa-ottoman",
    "description": "This stool pairs a solid French white oak base with a shearling seat, bringing structure and softness into direct alignment. The paneled solid oak form is compact and weighty, reading as a single volume rather than a frame. Offered in both counter stool and ottoman heights, the piece remains grounded and direct, with its shearling top bringing warmth and texture to a space. When considering this piece, think of the French white oak as passionate, expressive, reactive to its environment, and occasionally unpredictable. If you’d rather not weather the drama, our the white oak pieces from our Ojai Collection offer a calmer, more stable partnership.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-146.jpg",
        "alt": "Sherpa Ottoman by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "d4d29490-511d-486b-b225-dcdd7293a091",
        "label": "Default Title",
        "priceCents": 115000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "1eec04e3-acca-4626-b0b5-02ed061fcae0",
    "name": "Shou Sugi Ban Entry Console",
    "brand": "House of Leon",
    "productType": "Entry Console",
    "category": "Console Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/shou-sugi-ban-entry-console",
    "description": "Introducing our Shou Sugi Ban Entry Console, a fusion of modern elegance and historical craftsmanship. Crafted from premium Douglas Fir and treated with the ancient Japanese technique of Shou Sugi Ban, this console boasts both striking aesthetics and enhanced durability. Each surface showcases the intricate texture and depth of the wood achieved through Shou Sugi Ban, while also fortifying the wood against the elements. Elevate your home with our Solid White Oak Entry Console, where luxury meets functionality in every detail. Cleaning Instructions: After the third round of charring, the wood is sealed with a protective layer of clear matte polyurethane (PU). To preserve the integrity of the finish, it’s important not to damage the seal while cleaning. Gently clean the surface with a damp cloth, carefully dabbing any areas that need attention. Alternatively, you can use a feather duster for regular upkeep. We can accept this piece in custom lengths. Please reach out to hello@houseofleon.com to inquire further.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-147.jpg",
        "alt": "Shou Sugi Ban Entry Console by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "7540e0ff-8db3-4c83-9e7d-bf9e480c4524",
        "label": "Default Title",
        "priceCents": 185000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "46b0e641-63fd-409f-a7bb-a0f089bd0d47",
    "name": "Slipcover: The Eclipse 70\" Sleeper Sofa",
    "brand": "Sabai Design",
    "productType": "Component",
    "category": "Sleeper Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/slipcover-the-eclipse-70-sleeper-sofa",
    "description": "Description was not provided in the staging snapshot.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-148.png",
        "alt": "Slipcover: The Eclipse 70\" Sleeper Sofa by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "e20f71e8-36ea-4504-acde-861093820ebb",
        "label": "Oat Upcycled Poly",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "95f4ab09-fc5e-47ba-8ebf-5bf427e24aa9",
        "label": "Moon Upcycled Poly",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "d3ed1859-5fb7-431b-b5d8-a65c2c2874c6",
        "label": "Farro Upcycled Poly",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "83b81c9f-6072-4d1a-973a-5d5aa157516d",
        "label": "Midnight Upcycled Poly",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "eaea3630-f69a-4dba-9e17-45605583c5fa",
        "label": "Shadow Upcycled Poly",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "c00e0f23-7bfc-48e8-9acf-62b7d9a4f5d0",
        "label": "Amber Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "738d1559-e1ac-4724-a270-95ded4115655",
        "label": "Amber (Recycled Velvet) / Chocolate (Recycled Velvet)",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "6bf34327-4d54-4391-ba39-0d4b59176885",
        "label": "Moss Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "c8daa824-d453-42d6-b1a7-1e0179f1d8e5",
        "label": "Mustard Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "c0faf8a4-b820-40ed-b208-73979772aabd",
        "label": "Chocolate Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "35ba12ac-dc59-4073-9ec0-5fb1bd094f76",
        "label": "Chocolate (Recycled Velvet) / Amber (Recycled Velvet)",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "82730f68-ced0-42d3-bd75-07bf834ab5c8",
        "label": "Indigo Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "c4282087-880d-4807-9a37-f77d5e5f0c0d",
        "label": "Indigo (Recycled Velvet) / Amber (Recycled Velvet)",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "6612b636-abbb-4c67-960c-747315391a52",
        "label": "Dusty Rose Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "a3c6cab5-b0cd-430a-bebc-56db5fd6d454",
        "label": "Dusty Rose (Recycled Velvet) / Amber (Recycled Velvet)",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "d3d17de6-86d8-4ba0-9bc8-daf4c287e611",
        "label": "Seafoam Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "2f9fd657-b277-453d-8f60-32e6d4b2fcaa",
        "label": "Seafoam (Recycled Velvet) / Indigo (Recycled Velvet)",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "f679e069-874f-4c04-98e0-8d1f163e6112",
        "label": "Seafoam (Recycled Velvet) / Amber (Recycled Velvet)",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "63cba2f2-6ffa-4275-8427-6b6e60d244e1",
        "label": "Ash Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "8b18f297-7f2c-421a-9c7c-332e4cc53667",
        "label": "Cashew Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "7ef9e050-6bb4-4b83-888e-bbf8485c4d15",
        "label": "Cornflower Recycled Velvet",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "32ce104b-a808-4355-aa69-9dfd4a929f5c",
        "label": "Cornflower (Velvet) / Mustard (Velvet)",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "f77d1d87-ce23-46b7-9cad-cf8c9d05d72d",
        "label": "Cornflower (Velvet) / Chocolate (Velvet)",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "3bdeaebf-b9ab-43e1-977a-329ba23ce3fb",
        "label": "Cornflower (Velvet) / Amber (Velvet)",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "f05a4c87-c7f4-4a14-8193-b7539b429f4b",
        "label": "Fir Hemp Blend",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "e40c87fc-9b1f-489a-9b62-a82e73317cc0",
        "label": "Fir (Hemp Blend) / Natural (Hemp Blend)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "ec5de71d-675e-4ff2-b8dc-6d211d2754ff",
        "label": "Fir (Hemp Blend) / Thistle (Hemp Blend)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "cd4a6c13-1481-4f85-a65b-0da221150e27",
        "label": "Fog Hemp Blend",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "7a918243-ba5c-4444-8919-64d7ee73e46f",
        "label": "Sand Hemp Blend",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "0e24148f-bad7-4ce8-8f11-c32df567dfee",
        "label": "Sand (Hemp Blend) / Indigo (Velvet)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "a983b59d-bf6e-4e2a-827d-1e92125272d8",
        "label": "Sand (Hemp Blend) / Moss (Velvet)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "9882ca7b-7ac1-4dd6-a1c6-ffb5d82daf5f",
        "label": "Thistle Hemp Blend",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "5e21faa5-edfc-4eb9-a424-5465f22dd908",
        "label": "Thistle (Hemp Blend) / Amber (Velvet)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "04a931ef-0b28-4975-84fa-279291a09972",
        "label": "Thistle (Hemp Blend) / Indigo (Velvet)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "50ebe8e8-1927-4bfd-8a7c-066340f5ab41",
        "label": "Thistle (Hemp Blend) / Natural (Hemp Blend)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "95eb63f1-ea54-4293-b003-b2c55c52575c",
        "label": "Natural Hemp Blend",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "4a2c8e33-f933-41b0-806b-6c4af24037d1",
        "label": "Natural (Hemp Blend) / Fir (Hemp Blend)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "e37c2328-dbcb-4bec-b40c-95e29c4b0de7",
        "label": "Field Hemp Blend",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "136530f8-3ccc-477e-94eb-2f6dad9a5b8b",
        "label": "Yellow Clay Hemp Blend",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "c47937fc-2dfc-41c6-ae71-515c05ab523a",
        "label": "Yellow Clay (Hemp Blend) / Mustard (Velvet)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "8418fc35-8143-4482-9f70-2a0ba4a9f1a7",
        "label": "Yellow Clay (Hemp Blend) / Amber (Velvet)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "edf35ef4-30e6-4bc0-b464-759a52e4a5eb",
        "label": "Field (Hemp Blend) / Natural (Hemp Blend)",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "442fd135-5544-499d-a0e6-89b3f5b8b57c",
        "label": "Redwood Hemp Blend",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "44604256-8b3d-4ed8-808f-83513399a72d",
        "label": "Cobalt Hemp Blend",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "598c1433-3394-48d0-b8b5-9ba0b9288ce8",
        "label": "Brick (Hemp Blend) / Natural (Hemp Blend)",
        "priceCents": 69500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e8ef0ed5-e85c-45b5-917c-ac3d76c04ad0",
    "name": "Slipcover: The Eclipse Sleeper Chair",
    "brand": "Sabai Design",
    "productType": "Component",
    "category": "Recliner",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/slipcover-the-eclipse-sleeper-chair",
    "description": "Description was not provided in the staging snapshot.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-149.png",
        "alt": "Slipcover: The Eclipse Sleeper Chair by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "6bf6b106-cb27-4084-8c79-09b03b903f44",
        "label": "Oat Upcycled Poly",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "4103b02e-5998-422e-a8ce-6cae99954c86",
        "label": "Moon Upcycled Poly",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "23c624cd-ddaa-4330-a1e3-954bf07ff4d1",
        "label": "Farro Upcycled Poly",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "93e8c232-c880-462d-b096-d81e1ef98a24",
        "label": "Midnight Upcycled Poly",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "791c4a4a-1a7f-48b4-8d15-7b77a786b5fe",
        "label": "Shadow Upcycled Poly",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "3b3fe425-f66e-4551-b758-5358870b08de",
        "label": "Amber Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "7adf77f6-dcd3-47e5-b587-0cd8c16c284b",
        "label": "Amber (Recycled Velvet) / Chocolate (Recycled Velvet)",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "bf683857-9e85-46bf-8c74-3a158d6e963e",
        "label": "Moss Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "53841e2a-b96c-4946-9b70-1815b2327c1b",
        "label": "Mustard Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "0c5b5421-3767-4aee-a73a-e994f4ba64e0",
        "label": "Chocolate Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "2519ee17-f8d8-4a68-95a9-e0c627ca5151",
        "label": "Chocolate (Recycled Velvet) / Amber (Recycled Velvet)",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "557f9cb6-98ce-4590-b270-a90444e99cbc",
        "label": "Indigo Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "a4f8d222-a6ea-44b8-850e-dc867eee71ed",
        "label": "Indigo (Recycled Velvet) / Amber (Recycled Velvet)",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "961b7986-7c29-4676-a18f-894124641c6b",
        "label": "Dusty Rose Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "8883054f-73b0-4ef2-85f5-90e2a0529dd6",
        "label": "Dusty Rose (Recycled Velvet) / Amber (Recycled Velvet)",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "befd1645-4d15-4596-98b5-c44ec7f37f54",
        "label": "Seafoam Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "44b89569-c8c9-47d1-a7ed-79176b5740ab",
        "label": "Seafoam (Recycled Velvet) / Indigo (Recycled Velvet)",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "63547e84-03e3-425a-a3eb-a9402340a4a2",
        "label": "Seafoam (Recycled Velvet) / Amber (Recycled Velvet)",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "1e86c588-e7d3-45b9-9f8e-683ba181aa0b",
        "label": "Ash Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "80a8913e-94c0-4749-9dfb-134e4cc2307b",
        "label": "Cashew Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "17942d49-c5ef-4ea9-816a-3dce6b753583",
        "label": "Cornflower Recycled Velvet",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "d32d2494-a76e-48f3-88e7-b0ff121e320a",
        "label": "Cornflower (Velvet) / Mustard (Velvet)",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "55a6bdf2-7b19-4deb-8574-870af04d2f1a",
        "label": "Cornflower (Velvet) / Chocolate (Velvet)",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "28d07856-cb7b-45c4-bf83-23f56a075f73",
        "label": "Cornflower (Velvet) / Amber (Velvet)",
        "priceCents": 36500,
        "available": true
      },
      {
        "id": "f57d7f28-0349-449f-8ab3-0030a6d148dd",
        "label": "Fir Hemp Blend",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "f133bec2-3074-42b7-adbb-a5d6fc8d4b1e",
        "label": "Fir (Hemp Blend) / Natural (Hemp Blend)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "08cdcfb6-a3a0-4690-88d6-a674c46b2dfd",
        "label": "Fir (Hemp Blend) / Thistle (Hemp Blend)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "c24af3f3-b95d-40d2-b916-38bcdefac427",
        "label": "Fog Hemp Blend",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "da073628-e379-4dbe-84b9-4eefd6d9955f",
        "label": "Sand Hemp Blend",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "1e018085-ad57-4bb4-8d4a-3777035cf735",
        "label": "Sand (Hemp Blend) / Indigo (Velvet)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "0800e4ec-e1bc-4346-851f-55988b22ccae",
        "label": "Sand (Hemp Blend) / Moss (Velvet)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "f135f114-8035-49d6-908d-6c34ff63d4d5",
        "label": "Thistle Hemp Blend",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "eccf73c2-eefc-41c5-a6f6-53d5a35f37d4",
        "label": "Thistle (Hemp Blend) / Amber (Velvet)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "327816d9-6748-4a7b-bc66-b49d7cafca16",
        "label": "Thistle (Hemp Blend) / Indigo (Velvet)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "ebbebc8d-55f8-49aa-ac91-21c5a5c331d0",
        "label": "Thistle (Hemp Blend) / Natural (Hemp Blend)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "a5834bfd-f803-467f-a317-653b1e4d5c65",
        "label": "Natural Hemp Blend",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "f5240873-e360-4129-91e5-67b0956ca491",
        "label": "Natural (Hemp Blend) / Fir (Hemp Blend)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "ee3112f7-9968-49ff-9d82-5626a2970092",
        "label": "Field Hemp Blend",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "a9912abb-49ff-4045-b284-c3e379f6a45b",
        "label": "Yellow Clay Hemp Blend",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "51d6034d-cc59-4eaf-bebb-370c2b4f0942",
        "label": "Yellow Clay (Hemp Blend) / Mustard (Velvet)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "3f5d414c-70b5-4b14-a8b3-4d7abab8ae16",
        "label": "Yellow Clay (Hemp Blend) / Amber (Velvet)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "31157d42-456b-4e26-adc6-18ec5335892c",
        "label": "Field (Hemp Blend) / Natural (Hemp Blend)",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "8dda8e01-51b0-4fe5-a284-0b47cabb115f",
        "label": "Redwood Hemp Blend",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "ae3b9aa8-6fcd-4461-88e2-12badd78b7e1",
        "label": "Cobalt Hemp Blend",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "f4366fd2-e5fd-460d-bda4-6dd18ee25332",
        "label": "Brick (Hemp Blend) / Natural (Hemp Blend)",
        "priceCents": 52500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "091d4a14-cd32-448a-ad46-85a17c27536d",
    "name": "Sofita 5 Drawer Chest - Mocha",
    "brand": "House of Leon",
    "productType": "Dresser",
    "category": "Dresser",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-5-drawer-chest-mocha",
    "description": "The Sofita Five Drawer Chest brings a sense of quiet luxury to your space with its refined design and timeless appeal. Crafted with a rich mocha base and topped with a raw-edge slab of Sofita stone, it serves as a striking focal point in any bedroom or living area. Thoughtfully designed for both beauty and function, the chest offers generous storage to keep your essentials neatly organized while elevating the room around it. Each drawer glides effortlessly on premium Hafele soft-close slides, ensuring a smooth and satisfying experience every time. More than just storage, the Sofita Chest embodies understated elegance with clean lines and natural materials that allow it to blend seamlessly across styles. Embrace the balance of form and function, and let the Sofita 5 Drawer Chest bring effortless sophistication to your everyday routine. Color Disclaimer: The cuts of stone can vary from a cool white to a warm white with a pink undertone.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-150.png",
        "alt": "Sofita 5 Drawer Chest - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "8c42c80a-d386-404a-afd9-8b4d844e024f",
        "label": "Default Title",
        "priceCents": 259000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "dcfe6985-7df2-424c-83b2-4e7e447224f1",
    "name": "Sofita 5 Drawer Chest - White Oak",
    "brand": "House of Leon",
    "productType": "Dresser",
    "category": "Dresser",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-5-drawer-chest-white-oak",
    "description": "The Sofita Five Drawer Chest brings a sense of quiet luxury to your space with its refined design and timeless appeal. Crafted with a rich white oak base and topped with a raw-edge slab of Sofita stone, it serves as a striking focal point in any bedroom or living area. Thoughtfully designed for both beauty and function, the chest offers generous storage to keep your essentials neatly organized while elevating the room around it. Each drawer glides effortlessly on premium Hafele soft-close slides, ensuring a smooth and satisfying experience every time. More than just storage, the Sofita Chest embodies understated elegance with clean lines and natural materials that allow it to blend seamlessly across styles. Embrace the balance of form and function, and let the Sofita 5 Drawer Chest bring effortless sophistication to your everyday routine. Color Disclaimer: The cuts of stone can vary from a cool white to a warm white with a pink undertone.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-151.png",
        "alt": "Sofita 5 Drawer Chest - White Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "14991d4e-c689-4dc9-80ac-e05c7db09883",
        "label": "Default Title",
        "priceCents": 259000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "dca3d282-d3a4-4ca0-a981-6060be543e71",
    "name": "Sofita Marble Coffee Table",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-marble-coffee-table",
    "description": "Made from Italian and Turkish Sofita Marble with unique variations and minimal veining, this stunning statement piece will elevate any space by celebrating natural materials. Please note that each piece is unique due to the natural variation of marble. The edges are buffed out for safety in family environments. Due to the nature of hand chipping the soft stone, some pieces may continue to flake off upon delivery shaken loose from its transport journey. This is safe and to be expected. Color Disclaimer: The cuts of stone can vary from a cool white to a warm white with a pink undertone.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-152.jpg",
        "alt": "Sofita Marble Coffee Table by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "b8f9912e-9cb4-498b-a2fb-a36d120ee2b7",
        "label": "Default Title",
        "priceCents": 249000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "6ce7c12f-e1d1-42f5-80f2-764c126230f2",
    "name": "Sofita Marble Coffee Table - Low",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-marble-coffee-table-low",
    "description": "Made from Italian and Turkish Sofita Marble with unique variations and minimal veining, this stunning statement piece will elevate any space by celebrating natural materials. Please note that each piece is unique due to the natural variation of marble. The edges are buffed out for safety in family environments. Due to the nature of hand chipping the soft stone, some pieces may continue to flake off upon delivery shaken loose from its transport journey. This is safe and to be expected. Color Disclaimer: The cuts of stone can vary from a cool white to a warm white with a pink undertone.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-153.jpg",
        "alt": "Sofita Marble Coffee Table - Low by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "64691075-08f6-4e51-8751-f44b0a88c0da",
        "label": "Default Title",
        "priceCents": 239000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "937a09d5-a345-463c-aa94-25685b24b117",
    "name": "Sofita Marble Coffee Table - Square",
    "brand": "House of Leon",
    "productType": "Coffee Tables",
    "category": "Coffee Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-marble-coffee-table-square",
    "description": "Made from Italian and Turkish Sofita Marble with unique variations and minimal veining, this stunning statement piece will elevate any space by celebrating natural materials. Please note that each piece is unique due to the natural variation of marble. The edges are buffed out for safety in family environments. Due to the nature of hand chipping the soft stone, some pieces may continue to flake off upon delivery shaken loose from its transport journey. This is safe and to be expected. Color Disclaimer: The cuts of stone can vary from a cool white to a warm white with a pink undertone.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-154.jpg",
        "alt": "Sofita Marble Coffee Table - Square by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "4bf91e46-98ba-4218-baeb-1b1f47d95199",
        "label": "Default Title",
        "priceCents": 259000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c586557d-7cd3-4e8e-b26e-b9d877dca6d9",
    "name": "Sofita Marble Dresser - Mocha",
    "brand": "House of Leon",
    "productType": "Dresser",
    "category": "Dresser",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-marble-dresser-mocha",
    "description": "Please note, c rated marble pieces are final sale. The Sofita Marble Drawer Dresser effortlessly elevates your space with its sophisticated design and timeless elegance. Crafted with a rich mocha base and a raw-edge slab of Sofita stone, this dresser becomes a striking focal point in any bedroom or living room. Designed with both beauty and functionality in mind, the dresser provides ample storage to keep your essentials organized while enhancing the overall aesthetic of your home. The high-quality Hafele soft-close drawer slides ensure a seamless experience, making every interaction a pleasure. More than just a piece of furniture, the Sofita Dresser brings a touch of quiet luxury to your daily routine. Its simple yet sophisticated design allows it to blend harmoniously with various decor styles, making it a versatile addition to your home. Embrace the perfect balance of form and function, and let this dresser be a special part of your routine. Color Disclaimer: The cuts of stone can vary from a cool white to a warm white with a pink undertone.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-155.jpg",
        "alt": "Sofita Marble Dresser - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "4107708d-ff01-4f15-940d-96b071ea82d8",
        "label": "4 Drawer",
        "priceCents": 319000,
        "available": true
      },
      {
        "id": "f93b8baf-860a-446c-b678-97098a0edfcd",
        "label": "6 Drawer",
        "priceCents": 339000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "bfb9b763-f80a-4922-b1b0-31937c7ccf30",
    "name": "Sofita Marble Dresser - White Oak",
    "brand": "House of Leon",
    "productType": "Dresser",
    "category": "Dresser",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-marble-dresser-white-oak",
    "description": "Please note, c rated marble pieces are final sale. The Sofita Marble Dresser effortlessly elevates your space with its sophisticated design and timeless elegance. Crafted with a soft white oak base and a raw-edge slab of Sofita stone, this dresser becomes a striking focal point in any bedroom or living room. Designed with both beauty and functionality in mind, the dresser provides ample storage to keep your essentials organized while enhancing the overall aesthetic of your home. The high-quality Hafele soft-close drawer slides ensure a seamless experience, making every interaction a pleasure. More than just a piece of furniture, the Sofita Dresser brings a touch of quiet luxury to your daily routine. Its simple yet sophisticated design allows it to blend harmoniously with various decor styles, making it a versatile addition to your home. Embrace the perfect balance of form and function, and let this dresser be a special part of your routine. Color Disclaimer: The cuts of stone can vary from a cool white to a warm white with a pink undertone.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-156.png",
        "alt": "Sofita Marble Dresser - White Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "82a92c94-641f-4596-8b26-e963b7edc187",
        "label": "4 Drawer",
        "priceCents": 319000,
        "available": true
      },
      {
        "id": "28802cd0-eb3b-4f68-84c2-3049d99429b6",
        "label": "6 Drawer",
        "priceCents": 339000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "04c3a0e1-ee81-449e-925d-5aa07d15e211",
    "name": "Sofita Marble Nightstand - White Oak",
    "brand": "House of Leon",
    "productType": "End Tables",
    "category": "Side Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-marble-nightstand-white-oak",
    "description": "The Sofita Marble Nightstand brings understated elegance to any bedroom or living space with its solid white oak base and a raw-edge Sofita stone top, known for its delicate beige tones and rose veining. The naturally scratch and heat-resistant marble ensures long-lasting beauty, while the nightstand's ample storage space keeps your essentials within easy reach. Thoughtfully designed with Hafele soft-close drawer slides for smooth functionality, this piece strikes the perfect balance between luxury and practicality. It’s more than a nightstand—it’s a sophisticated touch that elevates your home with both beauty and purpose. Color Disclaimer: The cuts of stone can vary from a cool white to a warm white with a pink undertone.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-157.jpg",
        "alt": "Sofita Marble Nightstand - White Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "6d3a6c3f-40c6-4dcb-8143-b571e92f6ddb",
        "label": "Regular",
        "priceCents": 149000,
        "available": true
      },
      {
        "id": "aa4002dd-3bcb-4d6c-a466-d7fc63bc5a1b",
        "label": "Wide",
        "priceCents": 169000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ef6815f3-39b7-4f19-9ce0-9c39aae0c8a7",
    "name": "Sofita Wood Dresser - Mocha",
    "brand": "House of Leon",
    "productType": "Dresser",
    "category": "Dresser",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-wood-dresser-mocha",
    "description": "The Sofita Marble Drawer Dresser effortlessly elevates your space with its sophisticated design and timeless elegance. Crafted with a rich mocha base and a raw-edge slab of Sofita stone, this dresser becomes a striking focal point in any bedroom or living room. Designed with both beauty and functionality in mind, the dresser provides ample storage to keep your essentials organized while enhancing the overall aesthetic of your home. The high-quality Hafele soft-close drawer slides ensure a seamless experience, making every interaction a pleasure. More than just a piece of furniture, the Sofita Dresser brings a touch of quiet luxury to your daily routine. Its simple yet sophisticated design allows it to blend harmoniously with various decor styles, making it a versatile addition to your home. Embrace the perfect balance of form and function, and let this dresser be a special part of your routine.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-158.png",
        "alt": "Sofita Wood Dresser - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "b5a73f32-8027-4733-9eed-88adf0827cda",
        "label": "4 Drawer",
        "priceCents": 319000,
        "available": true
      },
      {
        "id": "2448ee0d-b1d9-43c9-9c62-5d24ad72ea63",
        "label": "6 Drawer",
        "priceCents": 339000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "6c5079f0-198a-40d3-99bd-cf3dcf857140",
    "name": "Sofita Wood Dresser - White Oak",
    "brand": "House of Leon",
    "productType": "Dresser",
    "category": "Dresser",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-wood-dresser-white-oak",
    "description": "The Sofita Marble Dresser effortlessly elevates your space with its sophisticated design and timeless elegance. Crafted with a soft white oak base and a raw-edge slab of Sofita stone, this dresser becomes a striking focal point in any bedroom or living room. Designed with both beauty and functionality in mind, the dresser provides ample storage to keep your essentials organized while enhancing the overall aesthetic of your home. The high-quality Hafele soft-close drawer slides ensure a seamless experience, making every interaction a pleasure. More than just a piece of furniture, the Sofita Dresser brings a touch of quiet luxury to your daily routine. Its simple yet sophisticated design allows it to blend harmoniously with various decor styles, making it a versatile addition to your home. Embrace the perfect balance of form and function, and let this dresser be a special part of your routine.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-159.png",
        "alt": "Sofita Wood Dresser - White Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "64106b96-e467-41cd-a902-adacb3ebff35",
        "label": "4 Drawer",
        "priceCents": 319000,
        "available": true
      },
      {
        "id": "73648d5d-295b-4f6d-ab81-e6f5f03d63fd",
        "label": "6 Drawer",
        "priceCents": 339000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e04ae25a-b1df-4eb8-9e71-937cfd436269",
    "name": "Sofita Wood Nightstand - Mocha",
    "brand": "House of Leon",
    "productType": "End Tables",
    "category": "Side Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-wood-nightstand-mocha",
    "description": "The Sofita Wood Nightstand brings quiet luxury to any bedroom or living space with its solid white oak base with a mocha finish and clean wood inlay. The shelf for easy to reach items and styling is paired with ample drawer storage to keep your essentials within easy reach. Thoughtfully designed with Hafele soft-close drawer slides for smooth functionality, this piece strikes the perfect balance between luxury and practicality. It’s more than a nightstand—it’s a sophisticated touch that elevates your home with both beauty and purpose.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-160.jpg",
        "alt": "Sofita Wood Nightstand - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "1dd9ba45-95f1-4443-b6c3-b1c0f88e3cda",
        "label": "Regular",
        "priceCents": 139000,
        "available": true
      },
      {
        "id": "92ebb4d6-317c-426d-97d5-d2cfc2a2c69c",
        "label": "Wide",
        "priceCents": 159000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "fa87d22b-7530-44bc-aab4-af76f4b537da",
    "name": "Sofita Wood Nightstand - White Oak",
    "brand": "House of Leon",
    "productType": "End Tables",
    "category": "Side Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/sofita-wood-nightstand-white-oak",
    "description": "The Sofita Wood Nightstand brings quiet luxury to any bedroom or living space with its solid white oak base and clean wood inlay. The shelf for easy to reach items and styling is paired with ample drawer storage to keep your essentials within easy reach. Thoughtfully designed with Hafele soft-close drawer slides for smooth functionality, this piece strikes the perfect balance between luxury and practicality. It’s more than a nightstand—it’s a sophisticated touch that elevates your home with both beauty and purpose.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-161.jpg",
        "alt": "Sofita Wood Nightstand - White Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "103a5b97-b47c-494e-a403-66b22b0fe817",
        "label": "Regular",
        "priceCents": 139000,
        "available": true
      },
      {
        "id": "640905df-a424-473a-9f03-7cb643aca0e6",
        "label": "Wide",
        "priceCents": 159000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "14ea3807-18f0-45cf-9c28-37f856ed1abc",
    "name": "Soft Rib Towels (Adobe)",
    "brand": "Parachute Home",
    "productType": "Towels",
    "category": "Bath Towel",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/soft-rib-towels-adobe",
    "description": "Rejuvenate your bath with these supersoft and absorbent towels. Made from 100% long-staple Turkish cotton, they feature a sculpted rib design for a fresh look and faster drying time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-162.jpg",
        "alt": "Soft Rib Towels (Adobe) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "c188f3cf-8b65-4338-90e1-e34cdeb926f6",
        "label": "Washcloth / Adobe",
        "priceCents": 1900,
        "available": true
      },
      {
        "id": "6049dca0-9a6f-4994-a6e5-2a307e67ee35",
        "label": "Hand Towel / Adobe",
        "priceCents": 3400,
        "available": true
      },
      {
        "id": "a4a78e5f-9695-469d-be69-b0d661f131cc",
        "label": "Bath Towel / Adobe",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "735a2e5d-ff67-4415-b49a-67c7ba7a42b5",
        "label": "Bath Sheet / Adobe",
        "priceCents": 8900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e50c5324-9689-4d88-9aa8-7b51860121ab",
    "name": "Soft Rib Towels (Bone)",
    "brand": "Parachute Home",
    "productType": "Towels",
    "category": "Bath Towel",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/soft-rib-towels-bone",
    "description": "Rejuvenate your bath with these supersoft and absorbent towels. Made from 100% long-staple Turkish cotton, they feature a sculpted rib design for a fresh look and faster drying time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-163.jpg",
        "alt": "Soft Rib Towels (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "d2d82923-c895-45b3-ae4f-6a64729aa38b",
        "label": "Washcloth / Bone",
        "priceCents": 1900,
        "available": true
      },
      {
        "id": "de0f9a3e-5ea3-472d-b788-891b776c6b86",
        "label": "Hand Towel / Bone",
        "priceCents": 3400,
        "available": true
      },
      {
        "id": "f513a21b-4a92-4a3f-86e5-6395e919e506",
        "label": "Bath Towel / Bone",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "b81647c6-5d24-4c42-8b6b-df31a3a310df",
        "label": "Bath Sheet / Bone",
        "priceCents": 8900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "0e4a651a-da8b-4c5e-9358-0371f62bc039",
    "name": "Soft Rib Towels (White)",
    "brand": "Parachute Home",
    "productType": "Towels",
    "category": "Bath Towel",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/soft-rib-towels-white",
    "description": "Rejuvenate your bath with these supersoft and absorbent towels. Made from 100% long-staple Turkish cotton, they feature a sculpted rib design for a fresh look and faster drying time.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-164.jpg",
        "alt": "Soft Rib Towels (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "19cee1ac-ec3e-4c83-8b6b-cb6a195fe36f",
        "label": "Washcloth / White",
        "priceCents": 1900,
        "available": true
      },
      {
        "id": "0b749f4f-44fa-48d7-b83f-27beec03a85a",
        "label": "Hand Towel / White",
        "priceCents": 3400,
        "available": true
      },
      {
        "id": "13202d32-0739-4f2c-b50f-0ae39fff548f",
        "label": "Bath Towel / White",
        "priceCents": 5900,
        "available": true
      },
      {
        "id": "80ac3793-7973-4fae-b8f3-2361ea9ccb3a",
        "label": "Bath Sheet / White",
        "priceCents": 8900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "1556a560-19c0-48e5-99e5-6038ca5d3a37",
    "name": "Soft Rib Tub Mat (Adobe)",
    "brand": "Parachute Home",
    "productType": "Tub Mats",
    "category": "Bath Mat",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/soft-rib-tub-mat-adobe",
    "description": "Rejuvenate your bath with this plush, supersoft and absorbent tub mat. Made from 100% long-staple Turkish cotton, it features a sculpted rib design for a fresh look and faster drying time. Choose from six modern, versatile and naturally grounding hues.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-165.jpg",
        "alt": "Soft Rib Tub Mat (Adobe) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "2ec8c974-6116-4acb-81c3-03bffda0c14b",
        "label": "Adobe",
        "priceCents": 6900,
        "available": false
      }
    ],
    "availability": "backorder",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "5f142d93-2b6b-40e0-8cad-dd66f7db39a3",
    "name": "Soft Rib Tub Mat (Bone)",
    "brand": "Parachute Home",
    "productType": "Tub Mats",
    "category": "Bath Mat",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/soft-rib-tub-mat-bone",
    "description": "Rejuvenate your bath with this plush, supersoft and absorbent tub mat. Made from 100% long-staple Turkish cotton, it features a sculpted rib design for a fresh look and faster drying time. Choose from six modern, versatile and naturally grounding hues.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-166.jpg",
        "alt": "Soft Rib Tub Mat (Bone) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "a9aa0aec-5582-405d-8500-9fe457e9bf6f",
        "label": "Bone",
        "priceCents": 6900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "72b31083-2bd8-45d8-bedd-3333d389a44a",
    "name": "Soft Rib Tub Mat (White)",
    "brand": "Parachute Home",
    "productType": "Tub Mats",
    "category": "Bath Mat",
    "roomTypes": [],
    "tags": [
      "Parachute Home",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/soft-rib-tub-mat-white",
    "description": "Rejuvenate your bath with this plush, supersoft and absorbent tub mat. Made from 100% long-staple Turkish cotton, it features a sculpted rib design for a fresh look and faster drying time. Choose from six modern, versatile and naturally grounding hues.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-167.jpg",
        "alt": "Soft Rib Tub Mat (White) by Parachute Home"
      }
    ],
    "variants": [
      {
        "id": "3b2f5220-7c71-4c36-a487-cde94c2cb784",
        "label": "White",
        "priceCents": 6900,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "56feaf65-cbe3-4797-9dc6-614ae929a086",
    "name": "Teddy Counter Stool - Black",
    "brand": "House of Leon",
    "productType": "Counter Stools",
    "category": "Stool",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-counter-stool-black",
    "description": "The Teddy Counter Stool combines a sleek, minimalist frame with a generously wide seat for ultimate comfort. Crafted from solid white oak, its rounded backrest adds a touch of comfort and sophistication to any space. Designed with flexibility in mind, the Teddy Series makes custom upholstery a breeze. The seat can be unscrewed from the frame, allowing you to easily reupholster with your favorite fabric or leather—whether through a local professional or a DIY project. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-168.jpg",
        "alt": "Teddy Counter Stool - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "dce7826f-6cd6-40c6-96ec-7573abcba5c6",
        "label": "Default Title",
        "priceCents": 89000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "6a3e3bb6-2e61-458d-ae86-ecd39f6c24c5",
    "name": "Teddy Counter Stool - Camel",
    "brand": "House of Leon",
    "productType": "Counter Stools",
    "category": "Stool",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-counter-stool-camel",
    "description": "The Teddy Counter Stool combines a sleek frame with a generously wide seat, offering both style and comfort to your dining or family space. The warm oak wood is paired with a complimentary camel boucle fabric woven in Belgium, while the rounded white oak veneer backrest adds a soft, inviting touch. Designed for customization, the Teddy Series makes it easy to refresh your space. The seat can be easily unscrewed and reupholstered, whether by a local professional or through your own DIY efforts, giving you endless possibilities with your choice of fabric or leather. Each stool is a unique creation, handmade by skilled artisans using locally sourced materials. Variations in the wood’s warm oak grain are celebrated, enhanced by organic coatings and protective stains that bond with the wood for durability. This thoughtful craftsmanship brings out the character of the oak, ensuring every piece feels one-of-a-kind.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-169.jpg",
        "alt": "Teddy Counter Stool - Camel by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "78e8480b-dfc3-4c4e-8927-0bc71e4179ce",
        "label": "Default Title",
        "priceCents": 79000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "67526617-29d7-487a-8ed4-b204a5f1d1e2",
    "name": "Teddy Counter Stool - Mocha",
    "brand": "House of Leon",
    "productType": "Counter Stools",
    "category": "Stool",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-counter-stool-mocha",
    "description": "The Mocha Teddy Counter Stool combines elegance with everyday functionality. Built from solid white oak with a rich brown finish, it offers a sturdy yet refined presence. With mocha-colored mohair boucle seat, sourced from a mill just outside of Tuscany, the stools bring a soft yet luxurious texture to your space. Perfect for the kitchen or bar, this stool adds a natural warmth to your home, creating an inviting spot that balances comfort with a modern edge. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-170.png",
        "alt": "Teddy Counter Stool - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "c96c3c6b-01c9-4e44-9dc9-baeabb35f5b8",
        "label": "Default Title",
        "priceCents": 99000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f35e609b-7c90-4f3b-96db-f49995d332af",
    "name": "Teddy Counter Stool - Natural",
    "brand": "House of Leon",
    "productType": "Counter Stools",
    "category": "Stool",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-counter-stool-natural",
    "description": "The Teddy Counter Stool combines a sleek frame with a generously wide seat, offering both style and comfort to your dining or family space. The natural ash wood paired with white boucle fabric creates a striking contrast that draws attention, while the rounded white oak veneer backrest adds a soft, inviting touch. The acrylic boucle fabric is ideal for dining areas, as it resists absorbing liquid or food spills, making it both practical and family-friendly. Designed for customization, the Teddy Series makes it easy to refresh your space. The seat can be easily unscrewed and reupholstered, whether by a local professional or through your own DIY efforts, giving you endless possibilities with your choice of fabric or leather. Each stool is a unique creation, handmade by skilled artisans using locally sourced materials. Variations in the wood’s natural grain are celebrated, enhanced by organic coatings and protective stains that bond with the wood for durability. This thoughtful craftsmanship brings out the character of the oak, ensuring every piece feels one-of-a-kind.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-171.jpg",
        "alt": "Teddy Counter Stool - Natural by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "cb1e125b-adbb-4c58-82b7-b990c864710f",
        "label": "Default Title",
        "priceCents": 89000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "6170ed8b-3d74-4ef1-a6ab-34a09b0828cf",
    "name": "Teddy Counter Stool - Warm Oak",
    "brand": "House of Leon",
    "productType": "Table & Bar Stools",
    "category": "Stool",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-counter-stool-warm-oak",
    "description": "The Teddy Counter Stool is a delightful blend of style and comfort, featuring a sleek frame paired with a wide, inviting seat. The combination of solid white oak and chunky white boucle fabric makes a bold statement that enhances any family space while ensuring comfort for you and your guests. Designed with practicality in mind, the acrylic boucle fabric resists liquid and food spills, making it an ideal choice for dining areas and everyday use. The Teddy Series also embraces customization; the seat can be effortlessly unscrewed from the frame, allowing for easy reupholstering by a local professional or a fun DIY project with your favorite fabric or leather. Each stool is uniquely handcrafted by skilled artisans using locally sourced materials, meaning variations in the wood's grain are not just expected but celebrated. Our organic coatings and protective stains ensure durability while enhancing the natural beauty of the oak, resulting in a piece that reflects your individual style and the craftsmanship behind it.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-172.jpg",
        "alt": "Teddy Counter Stool - Warm Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "98237a4f-9b3e-4100-b9fa-d1d6753eb5ac",
        "label": "Default Title",
        "priceCents": 89000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e9e2b1d8-3c85-4823-9960-a1f666453597",
    "name": "Teddy Dining Chair - Black",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-dining-chair-black",
    "description": "The Teddy Dining Chair in Black offers clean lines and natural beauty that seamlessly blend with any setting. A perfect combination of both form and function, this boucle dining chair will fit into any space while still providing ultimate comfort for long dinners with friend and family around the table. The frame is made from solid white oak with a rounded solid white oak backrest. In regards to custom upholstery: The Teddy Series was designed to be easily re-upholstered. The seat can be easily unscrewed from the frame and re-upholstered by your local upholstery team or DIY with a favorite fabric or leather! Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Underneath several protective coatings , we use the highest quality natural oils that bond with the wood, bringing you a piece that is unique to and celebrates the existing characteristics of the grain.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-173.jpg",
        "alt": "Teddy Dining Chair - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "6f477a1b-64b9-44e7-929a-cee74c0674bc",
        "label": "Default Title",
        "priceCents": 69000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cdfb8842-4ac4-40e5-ade8-26ac3012d02a",
    "name": "Teddy Dining Chair - Camel",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://houseofleon.com/products/teddy-dining-chair-camel",
    "description": "The Camel Teddy Dining Chair is crafted from solid white oak with a rich brown finish and upholstered in camel-colored mohair boucle woven just outside of Ghent, Belgium. Its frame exudes a quiet confidence, sturdy yet graceful, with a subtle curve in the back legs that invites you to linger. The mohair boucle feels like a warm embrace—a nod to heritage, artistry, and undeniable luxury. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Underneath several protective coatings , we use the highest quality natural oils that bond with the wood, bringing you a piece that is unique to and celebrates the existing characteristics of the grain.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-174.jpg",
        "alt": "Teddy Dining Chair - Camel by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "42d8597a-9680-4fab-879b-47b392c8fce6",
        "label": "Default Title",
        "priceCents": 79000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "5de090e7-3ea1-45f4-990b-6e02486e552a",
    "name": "Teddy Dining Chair - Mocha",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-dining-chair-mocha",
    "description": "The Mocha Teddy Dining Chair is crafted from solid white oak with a rich brown finish and upholstered in mocha-colored mohair boucle from a family-run mill in Tuscany. Its frame exudes a quiet confidence, sturdy yet graceful, with a subtle curve in the back legs that invites you to linger. The mohair boucle feels like a warm embrace—a nod to heritage, artistry, and undeniable luxury. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Underneath several protective coatings , we use the highest quality natural oils that bond with the wood, bringing you a piece that is unique to and celebrates the existing characteristics of the grain.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-175.jpg",
        "alt": "Teddy Dining Chair - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "83ce5dea-693b-4715-bcb4-6f3123661f72",
        "label": "Default Title",
        "priceCents": 79000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "0d0718ab-9b92-4857-a8a5-3d9950bcb86f",
    "name": "Teddy Dining Chair - Natural",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-dining-chair-natural",
    "description": "The Teddy Dining Chair in Natural offers clean lines and natural beauty that seamlessly blend with any setting. A perfect combination of both form and function, this dining chair will fit into any space while still providing ultimate comfort for long dinners around the table with friends and family. The frame is made from solid ash wood with a curved white oak backrest. The white acrylic boucle fabric is perfect for dining areas as the material, unlike natural fibers, does not absorb any liquid or food spills. In regards to custom upholstery: The Teddy Series was designed to be easily re-upholstered. The seat can be easily unscrewed from the frame and re-upholstered by your local upholstery team or DIY with a favorite fabric or leather! Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Underneath several protective coatings , we use the highest quality natural oils that bond with the wood, bringing you a piece that is unique to and celebrates the existing characteristics of the grain.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-176.jpg",
        "alt": "Teddy Dining Chair - Natural by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "4861c292-c0d6-4497-865a-386e8b31b103",
        "label": "Default Title",
        "priceCents": 69000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cd245db0-c42d-44b0-8c6f-f8c8e12b401c",
    "name": "Teddy Dining Chair - Warm Oak",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-dining-chair-warm-oak",
    "description": "The Teddy Dining Chair offers clean lines and natural beauty that seamlessly blend with any setting. A perfect combination of both form and function, this boucle dining chair will fit into any space while still providing ultimate comfort for long dinners with friends and family around the table. The acrylic boucle fabric is perfect for dining areas as the material, unlike natural fibers, does not absorb any liquid or food spills and can be cleaned with water and dish soap if necessary. In regards to custom upholstery: The Teddy Series was designed to be easily re-upholstered. The seat can be easily unscrewed from the frame and re-upholstered by your local upholstery team or DIY with a favorite fabric or leather! Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Underneath several protective coatings , we use the highest quality natural oils that bond with the wood, bringing you a piece that is unique to and celebrates the existing characteristics of the grain.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-177.jpg",
        "alt": "Teddy Dining Chair - Warm Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "898620bc-62ae-49a6-8501-8711ccafa65b",
        "label": "Default Title",
        "priceCents": 69000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "9b66dbf6-ba5d-4be0-9ab4-31e1d92cc484",
    "name": "Teddy Sphere Pillow - Beige",
    "brand": "House of Leon",
    "productType": "Throw Pillows",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-sphere-pillow-beige",
    "description": "The Teddy Sphere Pillows add a playful and dynamic touch to any space. Made from 100% organic shearling wool, the pillows have an elevated feel to the alternative boucle options. Fabric: 100% wool shearling Pillows sold individually. Fill included.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-178.jpg",
        "alt": "Teddy Sphere Pillow - Beige by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "6b991b11-0648-48ea-95d4-6e4d6aa450dc",
        "label": "Large 10\"",
        "priceCents": 17000,
        "available": true
      },
      {
        "id": "e680ef70-081a-442f-b302-9c3eab81351f",
        "label": "Small 8\"",
        "priceCents": 15000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "cd2c7fd8-3318-41da-867c-e498b6c2cb97",
    "name": "Teddy Sphere Pillow - Black",
    "brand": "House of Leon",
    "productType": "Throw Pillows",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-sphere-pillow-black",
    "description": "The Teddy Sphere Pillows add a playful and dynamic touch to any space. Made from 100% organic shearling wool, the pillows have an elevated feel to the alternative boucle options. Fabric: 100% wool shearling Pillows sold individually. Fill included.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-179.jpg",
        "alt": "Teddy Sphere Pillow - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "9cc354c4-0d88-463b-82be-87949704bda2",
        "label": "Large 10\"",
        "priceCents": 17000,
        "available": true
      },
      {
        "id": "5caff9e3-5ac4-455c-bd7a-dd5c4383101e",
        "label": "Small 8\"",
        "priceCents": 15000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "1bbd0098-1370-4b81-8f21-1ab95a74c694",
    "name": "Teddy Sphere Pillow - Copper",
    "brand": "House of Leon",
    "productType": "Throw Pillows",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-sphere-pillow-copper",
    "description": "The Teddy Sphere Pillows add a playful and dynamic touch to any space. Made from 100% organic shearling wool, the pillows have an elevated feel to the alternative boucle options. Fabric: 100% wool shearling Pillows sold individually. Fill included.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-180.jpg",
        "alt": "Teddy Sphere Pillow - Copper by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "f77e90dc-bece-4e3f-bbc5-04212179b771",
        "label": "Large 10\"",
        "priceCents": 17000,
        "available": true
      },
      {
        "id": "a6ff6560-92c2-494c-96fc-12488e6a648d",
        "label": "Small 8\"",
        "priceCents": 15000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8e22332b-8b1c-4581-b0eb-bc05e51369d1",
    "name": "Teddy Sphere Pillow - Ivory",
    "brand": "House of Leon",
    "productType": "Throw Pillows",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-sphere-pillow-ivory",
    "description": "The Teddy Sphere Pillows add a playful and dynamic touch to any space. Made from 100% organic shearling wool, the pillows have an elevated feel to the alternative boucle options. Fabric: 100% wool shearling Pillows sold individually. Fill included.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-181.jpg",
        "alt": "Teddy Sphere Pillow - Ivory by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "cbe67856-736a-4e33-8595-2d1a15e73699",
        "label": "Large 10\"",
        "priceCents": 17000,
        "available": true
      },
      {
        "id": "64f0fc62-5cad-4c97-a665-0fc0814cbcca",
        "label": "Small 8\"",
        "priceCents": 15000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7c35af60-b9b7-4ef4-a12c-3835af9279ad",
    "name": "Teddy Sphere Pillow - Mushroom",
    "brand": "House of Leon",
    "productType": "Throw Pillows",
    "category": "Throw Pillow",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-sphere-pillow-mushroom",
    "description": "The Teddy Sphere Pillows add a playful and dynamic touch to any space. Made from 100% organic shearling wool, the pillows have an elevated feel to the alternative boucle options. Fabric: 100% wool shearling Pillows sold individually. Fill included.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-182.jpg",
        "alt": "Teddy Sphere Pillow - Mushroom by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "dacd1718-ce6e-40c0-8063-018eb8f1a21f",
        "label": "Large 10\"",
        "priceCents": 17000,
        "available": true
      },
      {
        "id": "f53df275-d622-4fb1-91d1-9078840f1ab6",
        "label": "Small 8\"",
        "priceCents": 15000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "0421ef35-1527-4a7e-bc0a-0c9b4873ec1b",
    "name": "Teddy Wood Dining Chair - Black",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-wood-dining-chair-black",
    "description": "The Teddy Dining Chair in Black offers clean lines and natural beauty that seamlessly blend with any setting. A perfect combination of both form and function, this dining chair will fit into any space while still providing ultimate comfort for long dinners with friend and family around the table. The frame is made from solid white oak with a cancave solid white oak seat. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Underneath several protective coatings , we use the highest quality natural oils that bond with the wood, bringing you a piece that is unique to and celebrates the existing characteristics of the grain.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-183.jpg",
        "alt": "Teddy Wood Dining Chair - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "30c00978-4b55-41bc-8ceb-95be52dd9886",
        "label": "Default Title",
        "priceCents": 69000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ab3ee2d8-a405-4958-8489-cd4780d94052",
    "name": "Teddy Wood Dining Chair - Mocha",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-wood-dining-chair-mocha",
    "description": "The Mocha Teddy Dining Chair is crafted from solid white oak with a rich brown finish. Its frame exudes a quiet confidence, sturdy yet graceful, with a subtle curve in the back legs that invites you to linger. Now offered in a solid wood seat in a concave structure for comfort and durability. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Underneath several protective coatings , we use the highest quality natural oils that bond with the wood, bringing you a piece that is unique to and celebrates the existing characteristics of the grain.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-184.jpg",
        "alt": "Teddy Wood Dining Chair - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "f36771f2-acb5-4330-a7b5-5446adc08706",
        "label": "Default Title",
        "priceCents": 69000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "24b502ad-4b60-455e-83d9-c8c226bc6131",
    "name": "Teddy Wood Dining Chair - Natural",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-wood-dining-chair-natural",
    "description": "The Teddy Dining Chair in Natural offers clean lines and natural beauty that seamlessly blend with any setting. A perfect combination of both form and function, this dining chair will fit into any space while still providing ultimate comfort for long dinners around the table with friends and family. The frame is made from solid ash wood with a curved white oak backrest and comfortable concave seat. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Underneath several protective coatings , we use the highest quality natural oils that bond with the wood, bringing you a piece that is unique to and celebrates the existing characteristics of the grain.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-185.jpg",
        "alt": "Teddy Wood Dining Chair - Natural by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "20f504d0-f873-4f2a-950e-4eb46ada5ff7",
        "label": "Default Title",
        "priceCents": 69000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "916c1f02-9c65-4ff4-9155-458204ba7b5f",
    "name": "Teddy Wood Dining Chair - Warm Oak",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Chairs",
    "category": "Dining Chair",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/teddy-wood-dining-chair-warm-oak",
    "description": "The Teddy Dining Chair offers clean lines and natural beauty that seamlessly blend with any setting. A perfect combination of both form and function, these all wood dining chairs fit into any space while still providing ultimate comfort for long dinners with friends and family around the table. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Underneath several protective coatings , we use the highest quality natural oils that bond with the wood, bringing you a piece that is unique to and celebrates the existing characteristics of the grain.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-186.jpg",
        "alt": "Teddy Wood Dining Chair - Warm Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "3344b450-3e38-4b6f-b7ea-79cd4c50d739",
        "label": "Default Title",
        "priceCents": 69000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "aabb3739-6d29-4a4c-8b65-a9496a9e020a",
    "name": "The Bacana Armchair in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Armchair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-armchair-in-cactus-leather",
    "description": "Bacana, slang for \"cool\" in Brazil, is a collection of laid back lounge chairs in generous proportions. The flat-pack design comes with a removable plush seat cushion that ties to the frame to hold its shape. The design was inspired by the wide plank, rich wood furniture of Brazilian mid century paired with exposed hardware a la Monk Chair by Afra and Tobia Scarpa. Made from FSC Maple, the exposed wood frame is stained in a warm Nutmeg finish. The cushions covers are replaceable and available in a selection of fabrics from our Recycled Velvet, Upcycled Poly, and 100% Hemp lines.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-187.png",
        "alt": "The Bacana Armchair in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "00fb6ed3-f64f-4339-96ed-efda5b094d32",
        "label": "Terra",
        "priceCents": 135500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "b7745558-4824-44de-a913-71704b3ff5ab",
    "name": "The Bacana Armchair in Hemp",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Armchair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-armchair-in-hemp",
    "description": "Bacana, slang for \"cool\" in Brazil, is a collection of laid back lounge chairs in generous proportions. The flat-pack design comes with a removable plush seat cushion that ties to the frame to hold its shape. The design was inspired by the wide plank, rich wood furniture of Brazilian mid century paired with exposed hardware a la Monk Chair by Afra and Tobia Scarpa. Made from FSC Maple, the exposed wood frame is stained in a warm Nutmeg finish. The cushions covers are replaceable and available in a selection of fabrics from our Recycled Velvet, Upcycled Poly, and 100% Hemp lines.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-188.png",
        "alt": "The Bacana Armchair in Hemp by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "a65d0792-166f-4ec2-9b4e-a2c334eeb060",
        "label": "Natural",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "059f898e-cfd0-42da-b59a-3f6b520771a5",
        "label": "Sand",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "72340a2d-37d5-40cb-84ea-d80176f88b39",
        "label": "Thistle",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "bd6c3762-91fd-4c99-abfd-384911128a26",
        "label": "Fir",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "3dad39a9-9bcd-49cd-9ddb-8519a0d619dc",
        "label": "Redwood",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "018f7a8c-8483-461f-b38a-410d75acfe20",
        "label": "Brick",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "a9102cb9-ca54-4b6d-a4d1-a7b89970bd58",
        "label": "Cobalt",
        "priceCents": 109500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "5d98f033-9645-4ee1-abea-14664afe9bd2",
    "name": "The Bacana Armchair in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Armchair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-armchair-in-recycled-velvet",
    "description": "Bacana, slang for \"cool\" in Brazil, is a collection of laid back lounge chairs in generous proportions. The flat-pack design comes with a removable plush seat cushion that ties to the frame to hold its shape. The design was inspired by the wide plank, rich wood furniture of Brazilian mid century paired with exposed hardware a la Monk Chair by Afra and Tobia Scarpa. Made from FSC Maple, the exposed wood frame is stained in a warm Nutmeg finish. The cushions covers are replaceable and available in a selection of fabrics from our Recycled Velvet, Upcycled Poly, and 100% Hemp lines.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-189.png",
        "alt": "The Bacana Armchair in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "9237b6f3-d2cf-4762-8add-0596d972dc7d",
        "label": "Moss",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "98dc22f0-0d98-4476-b21b-65a0e353cb6a",
        "label": "Mustard",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "792ac13c-cbd5-4fc9-b7c7-67fb29623fba",
        "label": "Indigo",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "ff16c977-04a1-4467-842a-f808a31ad2c2",
        "label": "Amber",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "6581c5c2-9114-4cac-b9a4-a3940452c72a",
        "label": "Chocolate",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "3f68d099-6b09-4a50-a2b5-067d363cd887",
        "label": "Seafoam",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "b3c69850-30a6-4805-882f-26747de7a7fa",
        "label": "Cornflower",
        "priceCents": 99500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "705e918e-c40e-4e79-90a6-d6291419f679",
    "name": "The Bacana Armchair in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Armchair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-armchair-in-upcycled-poly",
    "description": "Bacana, slang for \"cool\" in Brazil, is a collection of laid back lounge chairs in generous proportions. The flat-pack design comes with a removable plush seat cushion that ties to the frame to hold its shape. The design was inspired by the wide plank, rich wood furniture of Brazilian mid century paired with exposed hardware a la Monk Chair by Afra and Tobia Scarpa. Made from FSC Maple, the exposed wood frame is stained in a warm Nutmeg finish. The cushions covers are replaceable and available in a selection of fabrics from our Recycled Velvet, Upcycled Poly, and 100% Hemp lines.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-190.png",
        "alt": "The Bacana Armchair in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "90fb2013-4483-4c02-9896-96292c0a786b",
        "label": "Oat",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "d4988a6d-6f05-4c9a-83a8-589ead32458b",
        "label": "Farro",
        "priceCents": 99500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "69cfbc9a-843b-4337-996f-4695e02a1f19",
    "name": "The Bacana Lounge Chair in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Chaise Lounge",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-lounge-chair-in-cactus-leather",
    "description": "Bacana, slang for \"cool\" in Brazil, is a collection of laid back lounge chairs in generous proportions. The flat-pack design comes with a removable plush seat cushion that ties to the frame to hold its shape. The design was inspired by the wide plank, rich wood furniture of Brazilian mid century paired with exposed hardware a la Monk Chair by Afra and Tobia Scarpa. Made from FSC Maple, the exposed wood frame is stained in a warm Nutmeg finish. The cushions covers are replaceable and available in a selection of fabrics from our Recycled Velvet, Upcycled Poly, and 100% Hemp lines.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-191.png",
        "alt": "The Bacana Lounge Chair in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "241f2166-f4f7-405d-a641-cabb2573ab17",
        "label": "Terra",
        "priceCents": 129500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8c501c81-144c-4381-aadd-4f81fdafcb72",
    "name": "The Bacana Lounge Chair in Hemp",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Chaise Lounge",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-lounge-chair-in-hemp",
    "description": "Bacana, slang for \"cool\" in Brazil, is a collection of laid back lounge chairs in generous proportions. The flat-pack design comes with a removable plush seat cushion that ties to the frame to hold its shape. The design was inspired by the wide plank, rich wood furniture of Brazilian mid century paired with exposed hardware a la Monk Chair by Afra and Tobia Scarpa. Made from FSC Maple, the exposed wood frame is stained in a warm Nutmeg finish. The cushions covers are replaceable and available in a selection of fabrics from our Recycled Velvet, Upcycled Poly, and 100% Hemp lines.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-192.png",
        "alt": "The Bacana Lounge Chair in Hemp by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "e3e57c2f-556c-4aa9-8752-027124b34037",
        "label": "Natural",
        "priceCents": 102500,
        "available": true
      },
      {
        "id": "959af9af-788b-469c-b195-3be1d673a3e8",
        "label": "Sand",
        "priceCents": 102500,
        "available": true
      },
      {
        "id": "37ff1f6b-84e9-4907-862e-44e9420cdbee",
        "label": "Thistle",
        "priceCents": 102500,
        "available": true
      },
      {
        "id": "ec1e28ee-7971-4fc8-8040-e6869a086faf",
        "label": "Fir",
        "priceCents": 102500,
        "available": true
      },
      {
        "id": "ce6c29c0-ffb6-4e89-9a14-debfd4610989",
        "label": "Redwood",
        "priceCents": 102500,
        "available": true
      },
      {
        "id": "3a4f9fab-cb62-427c-a3a1-2b4d87c74efc",
        "label": "Brick",
        "priceCents": 102500,
        "available": true
      },
      {
        "id": "89e33fbd-16bc-4956-ad70-cf6b57f3255a",
        "label": "Cobalt",
        "priceCents": 102500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "48117660-74a2-40c9-aad9-fff86a854b65",
    "name": "The Bacana Lounge Chair in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Chaise Lounge",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-lounge-chair-in-recycled-velvet",
    "description": "Bacana, slang for \"cool\" in Brazil, is a collection of laid back lounge chairs in generous proportions. The flat-pack design comes with a removable plush seat cushion that ties to the frame to hold its shape. The design was inspired by the wide plank, rich wood furniture of Brazilian mid century paired with exposed hardware a la Monk Chair by Afra and Tobia Scarpa. Made from FSC Maple, the exposed wood frame is stained in a warm Nutmeg finish. The cushions covers are replaceable and available in a selection of fabrics from our Recycled Velvet, Upcycled Poly, and 100% Hemp lines.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-193.png",
        "alt": "The Bacana Lounge Chair in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "311c9057-7610-4d7a-8aa9-d505f97f0633",
        "label": "Moss",
        "priceCents": 95500,
        "available": true
      },
      {
        "id": "e034bf8e-da82-422d-854f-a2af0ec5416a",
        "label": "Indigo",
        "priceCents": 95500,
        "available": true
      },
      {
        "id": "bbafef2c-8605-4cae-88d7-cdbfaf167fbd",
        "label": "Mustard",
        "priceCents": 95500,
        "available": true
      },
      {
        "id": "3f4d458b-d8d6-435b-b6d4-c816a3da7ba0",
        "label": "Chocolate",
        "priceCents": 95500,
        "available": true
      },
      {
        "id": "b9a04d1b-61bf-4909-99f1-4827b0f246ce",
        "label": "Amber",
        "priceCents": 95500,
        "available": true
      },
      {
        "id": "1b4cb9f6-980c-41b1-8fd9-1ed0b3bc27cd",
        "label": "Seafoam",
        "priceCents": 95500,
        "available": true
      },
      {
        "id": "d6563a49-8311-4b61-a1c6-542d9fb78b58",
        "label": "Cornflower",
        "priceCents": 95500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "2c813df2-2221-4173-913d-b2d7a4b54c8a",
    "name": "The Bacana Lounge Chair in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Chaise Lounge",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-lounge-chair-in-upcycled-poly",
    "description": "Bacana, slang for \"cool\" in Brazil, is a collection of laid back lounge chairs in generous proportions. The flat-pack design comes with a removable plush seat cushion that ties to the frame to hold its shape. The design was inspired by the wide plank, rich wood furniture of Brazilian mid century paired with exposed hardware a la Monk Chair by Afra and Tobia Scarpa. Made from FSC Maple, the exposed wood frame is stained in a warm Nutmeg finish. The cushions covers are replaceable and available in a selection of fabrics from our Recycled Velvet, Upcycled Poly, and 100% Hemp lines.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-194.png",
        "alt": "The Bacana Lounge Chair in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "e77059c7-3649-4781-ad77-df56df4598af",
        "label": "Oat",
        "priceCents": 95500,
        "available": true
      },
      {
        "id": "39064646-78e6-4b67-a0e5-59b5c2c4f765",
        "label": "Farro",
        "priceCents": 95500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "dd32ecf2-3eb7-45ea-a12f-6f697db1e83c",
    "name": "The Bacana Loveseat in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-loveseat-in-cactus-leather",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-195.png",
        "alt": "The Bacana Loveseat in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "7acfa3d3-5c1d-4f1f-845a-06a5429d765a",
        "label": "Terra",
        "priceCents": 289500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f214d2bb-0e30-4945-bd23-cd5c2810f5a1",
    "name": "The Bacana Loveseat in Hemp",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-loveseat-in-hemp",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-196.png",
        "alt": "The Bacana Loveseat in Hemp by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "9f7e2466-4b48-4528-b8e7-9e0f278ec34d",
        "label": "Natural",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "492837f9-c592-4def-bfc8-212814e2b341",
        "label": "Sand",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "c0c3aeb7-aae8-42f8-8802-3f92f82a0b3c",
        "label": "Thistle",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "fb35984b-31eb-46a3-98c5-3b2c022a799e",
        "label": "Fir",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "d11ea708-de80-4302-8eb2-5aa2499c4bfd",
        "label": "Redwood",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "7c572cdc-136b-415d-b778-848125e800ce",
        "label": "Brick",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "3ab31ac8-9816-4657-be60-6160f400c023",
        "label": "Cobalt",
        "priceCents": 249500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "4240f50b-ec25-4113-a211-bddea03a5fc3",
    "name": "The Bacana Loveseat in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-loveseat-in-recycled-velvet",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-197.png",
        "alt": "The Bacana Loveseat in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "1f92ab03-d476-4905-96b2-5694878aa4de",
        "label": "Moss",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "b6c2aaab-421f-47bf-816c-7e5b46b7930d",
        "label": "Mustard",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "23360295-cf7d-4274-8f65-1ed924d3ffba",
        "label": "Indigo",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "ba3b8725-e171-44da-819e-337dec35f5a8",
        "label": "Seafoam",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "100cc319-de6c-445b-a0e1-16e33f8c1089",
        "label": "Chocolate",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "a41f82f1-a7c7-454d-8c85-eecbe5d5166a",
        "label": "Amber",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "0e91f935-2c06-4bb6-8875-bc6f240fef80",
        "label": "Cornflower",
        "priceCents": 239500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a5b8b184-b4e3-4e88-9b80-214ffa7d8ec4",
    "name": "The Bacana Loveseat in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-loveseat-in-upcycled-poly",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-198.png",
        "alt": "The Bacana Loveseat in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "e1054150-764b-4d0e-bc45-26f936c5e46b",
        "label": "Oat",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "a388e821-2d60-4193-aa90-6b8dad751ed9",
        "label": "Farro",
        "priceCents": 239500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "72390e9c-8f1d-4ca0-b63c-cb17dd0960cb",
    "name": "The Bacana Ottoman in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-ottoman-in-cactus-leather",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-199.png",
        "alt": "The Bacana Ottoman in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "2bfa6494-21a7-4dd8-98ef-2e516ef608c0",
        "label": "Terra",
        "priceCents": 82500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "935a2333-795a-412c-b79b-12d3e71def96",
    "name": "The Bacana Ottoman in Hemp",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-ottoman-in-hemp",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-200.png",
        "alt": "The Bacana Ottoman in Hemp by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "73f0ee9d-f400-49a3-8637-8c8367ce3c22",
        "label": "Natural",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "33d444eb-95e4-4bc7-bdbc-e866b8b3e279",
        "label": "Sand",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "9128ea56-f0eb-4e7d-805e-b4c2455ffe36",
        "label": "Thistle",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "4b3cb68c-25a2-43ed-a11c-419b145aec3c",
        "label": "Fir",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "5fbf544b-5a57-42e1-8266-43c9bbe2cc9a",
        "label": "Redwood",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "aa4c5408-64a0-49ea-bb79-da33555a6a9d",
        "label": "Brick",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "78f91b82-df6f-4d1d-be59-fa3bcc0fd444",
        "label": "Cobalt",
        "priceCents": 74500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8383826d-7aec-4452-a28c-cc7846429247",
    "name": "The Bacana Ottoman in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-ottoman-in-recycled-velvet",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-201.png",
        "alt": "The Bacana Ottoman in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "d69a1e97-9412-4dd7-bda3-7fbeab63dcd1",
        "label": "Moss",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "38628a56-5c04-44b5-a7b8-b85cfbc04609",
        "label": "Mustard",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "be6de3fa-7c17-4c27-b48c-d5fef8ea673c",
        "label": "Indigo",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "9120b507-202c-44c1-bd5a-1ba6784e4997",
        "label": "Seafoam",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "440fdfec-3963-4228-a3d4-6c645a621c71",
        "label": "Chocolate",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "84f82500-c6bd-441f-8c5b-07ab23632f20",
        "label": "Amber",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "22b1fee5-1354-40e9-a54c-30493cf9a736",
        "label": "Cornflower",
        "priceCents": 69500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "5292dc47-56c8-42fc-9fad-7ce28270098d",
    "name": "The Bacana Ottoman in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-ottoman-in-upcycled-poly",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-202.png",
        "alt": "The Bacana Ottoman in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "d871134a-792e-42b0-ad11-13c7cfee83a3",
        "label": "Oat",
        "priceCents": 69500,
        "available": true
      },
      {
        "id": "e2da3e86-771c-4ec4-acca-9e1e8b01d6e1",
        "label": "Farro",
        "priceCents": 69500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a93aa91e-9761-4787-a0df-8497580ba30e",
    "name": "The Bacana Sofa in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-sofa-in-cactus-leather",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-203.png",
        "alt": "The Bacana Sofa in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "8e3667d3-9634-4d3a-bec1-48b4b0d3f93f",
        "label": "Terra",
        "priceCents": 379500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "d79eda96-46ec-41e2-a766-4dfc94b23350",
    "name": "The Bacana Sofa in Hemp",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-sofa-in-hemp",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-204.png",
        "alt": "The Bacana Sofa in Hemp by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "566a78cd-9750-4c91-a9c7-8ab7a3542818",
        "label": "Natural",
        "priceCents": 344500,
        "available": true
      },
      {
        "id": "35a60748-3faa-4ff6-9334-1e98acb2277c",
        "label": "Sand",
        "priceCents": 344500,
        "available": true
      },
      {
        "id": "87658a76-9db4-47e4-bc70-ea1fa28348c9",
        "label": "Thistle",
        "priceCents": 344500,
        "available": true
      },
      {
        "id": "ec5073f9-d0e9-4a1e-af86-c9b7c56ba0ae",
        "label": "Fir",
        "priceCents": 344500,
        "available": true
      },
      {
        "id": "266e1483-fec0-4b51-a499-ff4e62c6f8bd",
        "label": "Redwood",
        "priceCents": 344500,
        "available": true
      },
      {
        "id": "b76fa95f-03ef-42c9-b09a-7adf42df8de1",
        "label": "Brick",
        "priceCents": 344500,
        "available": true
      },
      {
        "id": "5b20360f-33f5-43e6-b59b-6a21a88aefc3",
        "label": "Cobalt",
        "priceCents": 344500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "65f9953d-d814-4921-88ad-964787c99c4a",
    "name": "The Bacana Sofa in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-sofa-in-recycled-velvet",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-205.png",
        "alt": "The Bacana Sofa in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "359c1c09-d71f-4e31-a826-c75f04c0847d",
        "label": "Moss",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "851f3534-1aef-4bdf-90f5-e20e91c71c99",
        "label": "Mustard",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "c9d1314c-f346-4a70-8b94-346045d89bd9",
        "label": "Indigo",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "22ffff41-d003-433d-af6a-5c3cf90b08b2",
        "label": "Seafoam",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "10a6a5ea-e9f3-4fe7-9db4-196145e83715",
        "label": "Chocolate",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "8ade7581-d6ac-41a3-80f5-79ba29f15eb3",
        "label": "Amber",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "dfbdfa80-f202-446c-9e71-df0e4e108c63",
        "label": "Cornflower",
        "priceCents": 329500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "b9ab7046-96f2-47d5-818f-51f09d2d08db",
    "name": "The Bacana Sofa in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-bacana-sofa-in-upcycled-poly",
    "description": "Bacana, slang for “cool” in Brazil, is a laid-back seating collection with generous proportions and minimalist construction. Its easy-to-assemble frame and plush, removable cushions create a cozy, customizable feel. Inspired by Brazilian mid-century design and Afra &amp; Tobia Scarpa’s iconic Monk chair, the collection highlights material beauty with exposed hardware and fabric ties. Each piece features FSC‑certified solid maple frames, natural latex foam, and a choice of 100% recycled velvet, upcycled poly, cactus leather, or hemp fabrics—sustainably sourced to minimize environmental impact. All frame, finishing, and upholstery production takes place within a 10-mile radius in High Point, NC, supporting ethical production in the U.S. and reducing our carbon footprint.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-206.png",
        "alt": "The Bacana Sofa in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "5b468a9a-65d4-424e-afc5-c1611173e550",
        "label": "Oat",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "e4c622d3-ed9e-4384-8f91-53a39d9d71bb",
        "label": "Farro",
        "priceCents": 329500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "d6644da2-c096-4e5a-9cb2-d75d0e0c9d7f",
    "name": "The Eclipse Sleeper Chair in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sleeper Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-eclipse-sleeper-chair-in-hemp-blend",
    "description": "The Eclipse Sleeper Chair converts from chair to twin bed with a modern, space-saving design. Crafted with FSC-certified wood and non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-207.png",
        "alt": "The Eclipse Sleeper Chair in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "cd390481-d550-416c-a705-a42ea2428fd3",
        "label": "Thistle / Amber",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "e262b648-6485-4080-926a-5c39572fc4db",
        "label": "Thistle / Indigo",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "9320dd24-f795-40ff-895d-9780adf5a70e",
        "label": "Thistle",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "4a989b47-cb14-4c1f-a303-f6a056313f91",
        "label": "Fir",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "95e82dbd-017d-4739-af33-fff3d944d3af",
        "label": "Fir / Natural",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "618b70ae-ce05-4f16-8067-6ac6c3c70c6c",
        "label": "Fir / Thistle",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "43ee85bf-943d-44ae-be7e-114329bd840a",
        "label": "Yellow Clay",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "0be60df2-91c8-4fd1-81f2-921da6d8b96f",
        "label": "Yellow Clay / Mustard",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "01497d69-40fb-494c-97dd-7a86cc5de32d",
        "label": "Yellow Clay / Amber",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "9c85eed2-a9c5-4bcd-8f48-d3d3353018eb",
        "label": "Natural",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "f22014f7-03af-45b1-8721-470b80b92aea",
        "label": "Natural / Fir",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "8f76accc-e1c7-42c0-9720-197ee74455f4",
        "label": "Sand",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "1bce1d3d-52aa-4495-b6a4-bb497b564989",
        "label": "Sand / Indigo",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "197fecb2-2170-447e-97a5-89c31f9d01f9",
        "label": "Field",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "c953283f-9465-4915-b549-7e57b0294ed4",
        "label": "Cobalt",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "885bd605-b5e9-4a34-aac4-3c7f016aabb7",
        "label": "Redwood",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "3f316866-f634-470f-aad7-fc00014749ad",
        "label": "Brick / Natural",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "ba7a319f-c4af-449e-a303-18a1673b4a6e",
        "label": "Fog",
        "priceCents": 179500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3c928c69-a82a-4788-823c-f8bc11e7ad2d",
    "name": "The Eclipse Sleeper Chair in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sleeper Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-eclipse-sleeper-chair-in-recycled-velvet",
    "description": "The Eclipse Sleeper Chair converts from chair to twin bed with a modern, space-saving design. Crafted with FSC-certified wood and non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-208.png",
        "alt": "The Eclipse Sleeper Chair in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "9fc2bf55-3e68-4d18-9cfb-6c7b1fa56e7c",
        "label": "Amber",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "db4ad156-ab77-4249-ac1e-721b7abd35aa",
        "label": "Amber / Chocolate",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "a00d18e0-8822-4bca-ad41-20dee421ed99",
        "label": "Seafoam / Amber",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "61379d3e-3ebd-482a-8d8c-2f7827818079",
        "label": "Seafoam",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "e0d42f15-cdc4-4c0b-a259-711e9851aee5",
        "label": "Seafoam / Indigo",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "725b8457-828a-4e4d-937f-ab865d00baa2",
        "label": "Moss",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "c956297d-39e7-4b09-a689-8bed1a9aeeb6",
        "label": "Mustard",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "e1ff23e5-31e2-4f34-9ff9-0a3527620a12",
        "label": "Dusty Rose",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "e6720800-2d83-4336-8879-85dac7a3426d",
        "label": "Dusty Rose / Amber",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "ee3b617e-a236-4e7c-ba55-8440d7b1d3be",
        "label": "Indigo",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "b8357ab6-e6d5-4476-af2c-0e8c1f073df0",
        "label": "Indigo / Amber",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "b286bf47-50f0-4319-9a3b-2eb8ecfa1bb3",
        "label": "Cornflower / Amber",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "f9b74d35-0fcb-4dab-8c7d-d805d547d6aa",
        "label": "Cornflower / Chocolate",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "b47a2a44-0bad-43ef-bab3-d8d634a2f4b4",
        "label": "Cornflower",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "9b476f5f-1eb8-4a8c-937d-ebb0f53efc7b",
        "label": "Chocolate",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "e9d46d64-7036-43f5-b92c-326b29bb6aad",
        "label": "Chocolate / Amber",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "94aac20f-9641-449f-8061-9ad60d0f8dae",
        "label": "Ash",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "7b328dd1-878a-482c-ba69-af2b3de2cd21",
        "label": "Cashew",
        "priceCents": 167500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c757942d-4770-4cfb-b68d-6cbcad40b57b",
    "name": "The Eclipse Sleeper Chair in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Recliner",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-eclipse-sleeper-chair-in-upcycled-poly",
    "description": "The Eclipse Sleeper Chair converts from chair to twin bed with a modern, space-saving design. Crafted with FSC-certified wood and non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-209.png",
        "alt": "The Eclipse Sleeper Chair in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "824debdd-da6f-4440-8ce0-92defacc2bdb",
        "label": "Oat",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "e743541d-282f-434c-a956-bd5af0eb60a3",
        "label": "Moon",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "278fbf83-8755-4d4a-bec2-7f84de0143e9",
        "label": "Farro",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "509f4c29-2b97-4ed0-bb6b-607df8aed4e0",
        "label": "Midnight",
        "priceCents": 167500,
        "available": true
      },
      {
        "id": "0839cb47-785d-454f-a2cf-96f972247f0d",
        "label": "Shadow",
        "priceCents": 167500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "35baf579-1a87-4f85-93f6-c40155b99065",
    "name": "The Eclipse Sleeper Sofa in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-eclipse-sleeper-sofa-in-hemp-blend",
    "description": "The Eclipse Sleeper Sofa converts from sofa to queen bed with a modern, space-saving design. Crafted with FSC-certified wood and non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-210.png",
        "alt": "The Eclipse Sleeper Sofa in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "0a8d71b1-1b0e-4c69-afe6-c74a046102e7",
        "label": "Thistle",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "aa5cf3fb-6b54-4090-af19-0f6141ab5c71",
        "label": "Thistle / Indigo",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "225d96f9-3469-4e41-bb43-113addea192d",
        "label": "Thistle / Amber",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "5b976a68-791d-4632-adb3-a6f6010a6b15",
        "label": "Fir",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "d27ee4f2-7ba8-4d92-bd24-94bf0d64c2fc",
        "label": "Fir / Thistle",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "e0a1f6bc-aa5e-4d23-9059-2d0b07e13ea8",
        "label": "Fir / Natural",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "ca8a555c-46f2-45b6-afb1-9e6d4be8851c",
        "label": "Yellow Clay",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "c3c6aed4-55a3-4ff3-980c-541ff6b9699e",
        "label": "Yellow Clay / Mustard",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "801da06e-69df-4274-a897-51eaddbc4093",
        "label": "Yellow Clay / Amber",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "6612697f-7b24-4ed4-9110-f8488f2956ff",
        "label": "Natural",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "3064224e-599a-4c7b-b0d0-2f01a376acc6",
        "label": "Natural / Fir",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "8c1dc4fd-b57d-4203-bd85-f852f711b27d",
        "label": "Fog",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "a94f7de5-251c-4f17-b078-d5731fb15815",
        "label": "Sand",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "02715a60-c24a-458d-8c43-258d0de2b19c",
        "label": "Sand / Indigo",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "9159e13b-cbfe-41e1-a25c-9e3d074da088",
        "label": "Field",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "939530ef-2570-4466-8a9d-9724ac824e58",
        "label": "Redwood",
        "priceCents": 279500,
        "available": true
      },
      {
        "id": "2232db50-35fe-4750-9289-586f3f630324",
        "label": "Brick / Natural",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "932fc0af-34de-41be-abdc-cafbf35ee820",
        "label": "Cobalt",
        "priceCents": 289500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "796878ff-dcf2-4844-baf6-03c257f43a0b",
    "name": "The Eclipse Sleeper Sofa in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sleeper Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-eclipse-sleeper-sofa-in-recycled-velvet",
    "description": "The Eclipse Sleeper Sofa offers a modern design that converts from a sofa to a queen bed, ideal for space-saving living. Crafted with FSC-certified wood, non-toxic materials, and recycled velvet upholstery, it supports a more sustainable and healthier home.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-211.png",
        "alt": "The Eclipse Sleeper Sofa in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "fc30eae0-d9eb-4634-aa54-62e233c8a562",
        "label": "Amber",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "e69940fb-2903-4792-b5b9-ae3741db06f6",
        "label": "Amber / Chocolate",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "6ffca3e9-fba8-435f-84ef-e4c6e97879f2",
        "label": "Moss",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "eaff448a-c1a3-4618-b8ed-5aa86930fbe3",
        "label": "Indigo",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "989d8d9c-f7d9-44c2-95b9-93c2680a2040",
        "label": "Indigo / Amber",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "6bb997e4-bcad-4968-9fc6-f7bc6ebb95b9",
        "label": "Dusty Rose",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "b31944df-68f2-4bf3-8d2c-db50ef378c70",
        "label": "Dusty Rose / Amber",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "8dfcd5aa-2def-4c9c-b65d-de9ecf2a3ce7",
        "label": "Cashew",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "b986290d-e1f4-4a52-84fd-51ee16481af1",
        "label": "Cornflower",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "0e65d373-820b-4281-81ed-52c8497fe88e",
        "label": "Cornflower / Chocolate",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "4fb1b672-3a43-418b-a870-2260b0657f2b",
        "label": "Cornflower / Amber",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "04115453-7eff-4af2-99e9-7fc53be6df00",
        "label": "Seafoam",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "651dad4c-174a-4672-a0b4-e6183ed2272f",
        "label": "Seafoam / Amber",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "a06e6a64-7928-4920-a3d7-fab18da999b0",
        "label": "Seafoam / Indigo",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "1c063bfd-7146-4de0-9f7f-2df30c7a3b1c",
        "label": "Mustard",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "b75f04c5-4dbc-4d1e-bb4e-67f13d6197a7",
        "label": "Chocolate",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "7bccf181-d005-403b-b0ec-46dc3749af6a",
        "label": "Chocolate / Amber",
        "priceCents": 239500,
        "available": true
      },
      {
        "id": "861a2c8b-850c-40c9-9938-5431e3298d36",
        "label": "Ash",
        "priceCents": 239500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3f3d4de6-dc8d-4f98-a4d0-c153f28d6675",
    "name": "The Eclipse Sleeper Sofa in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-eclipse-sleeper-sofa-in-upcycled-poly",
    "description": "The Eclipse Sleeper Sofa converts from sofa to queen bed with a modern, space-saving design. Crafted with FSC-certified wood and non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-212.png",
        "alt": "The Eclipse Sleeper Sofa in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "f9d8e486-2664-4d8c-80c6-cf9072364b36",
        "label": "Oat",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "7829767a-541c-4d7e-b0f2-6cc60aae321d",
        "label": "Moon",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "bbec1617-07ec-4331-bced-271d0eba084b",
        "label": "Midnight",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "11c15604-7646-4504-9653-8642eaa41f19",
        "label": "Farro",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "f2d97889-a7bc-4b1b-a3a3-6945b55c3cc1",
        "label": "Shadow",
        "priceCents": 259500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "639fb420-89eb-45e0-8d1c-be20740f3393",
    "name": "The Elevate 86\" Sofa in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-86-sofa-in-cactus-leather",
    "description": "Now newly in an 86\" size, 10 inches shorter than our current 96\" size, redefine the elegance of your home with The Elevate Sofa. Crafted with a chic low profile and captivating curved arms, this sofa not only enhances your space but also offers a quiet retreat of comfort with its plush seating and supportive back. Enveloped in our luxe recycled velvet or woven poly fabric, this sofa epitomizes luxury living, designed to elevate every moment of your relaxation. Please note that this sofa cannot be converted into a sleeper.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-213.png",
        "alt": "The Elevate 86\" Sofa in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "5f670db0-6be1-4c9c-885e-41655035b356",
        "label": "Terra",
        "priceCents": 374500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "aadc2cf3-f954-4418-a372-f5863c2b8b0f",
    "name": "The Elevate 86\" Sofa in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-86-sofa-in-recycled-velvet",
    "description": "The Elevate Sofa is a modern, modular sofa designed to adapt to real life—beautifully. Crafted for comfort, durability, and flexibility, Elevate features clean lines, deep seating, and supportive cushions that make it perfect for everyday lounging or effortless entertaining. Its timeless silhouette elevates any living space while remaining versatile enough to grow and change with your home. Made with sustainably sourced materials, the Elevate Sofa reflects Sabai’s commitment to thoughtful design and responsible manufacturing. The modular design allows you to customize your layout, whether you’re furnishing a cozy apartment or a spacious living room. Each piece is easy to move, reconfigure, and maintain, making Elevate an ideal choice for modern living. Upholstered in durable, eco-friendly fabrics and made in the USA with a sturdy FSC-wood frame, the Elevate Sofa is designed to last—without sacrificing comfort or style. From movie nights to morning coffee, this is a sofa that works as hard as you relax.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-214.png",
        "alt": "The Elevate 86\" Sofa in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "0f4a013f-c6fd-41ba-83e3-50207cbf0f6b",
        "label": "Moss",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "a0a045ff-1f7c-427e-8ff2-6d49b85af307",
        "label": "Indigo",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "ba44670f-d8f4-430d-9647-d0981b770ddb",
        "label": "Seafoam",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "014b0a3c-21b2-4ac8-afba-1947bab59385",
        "label": "Dusty Rose",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "5db8e403-989d-4ced-86a0-8b89aa27077d",
        "label": "Mustard",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "dadf4dcb-cc9a-47bc-b7d3-34fd71794954",
        "label": "Chocolate",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "3091605d-ac15-4d22-a07e-e92aad2e1d89",
        "label": "Amber",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "00701128-1d1b-4d3b-b081-f9c8280517e4",
        "label": "Ash",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "58a0edaf-71be-4dbd-85ee-e2d2c4b075c3",
        "label": "Cashew",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "c95e5ff5-cdba-4dc5-8cbc-0a0663fad5d7",
        "label": "Cornflower",
        "priceCents": 269500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3dbd1900-4df1-46b8-9e4b-134587099b1a",
    "name": "The Elevate 86\" Sofa in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-86-sofa-in-upcycled-poly",
    "description": "The Elevate Sofa is a modern, modular sofa designed to adapt to real life—beautifully. Crafted for comfort, durability, and flexibility, Elevate features clean lines, deep seating, and supportive cushions that make it perfect for everyday lounging or effortless entertaining. Its timeless silhouette elevates any living space while remaining versatile enough to grow and change with your home. Made with sustainably sourced materials, the Elevate Sofa reflects Sabai’s commitment to thoughtful design and responsible manufacturing. The modular design allows you to customize your layout, whether you’re furnishing a cozy apartment or a spacious living room. Each piece is easy to move, reconfigure, and maintain, making Elevate an ideal choice for modern living. Upholstered in durable, eco-friendly fabrics and made in the USA with a sturdy FSC-wood frame, the Elevate Sofa is designed to last—without sacrificing comfort or style. From movie nights to morning coffee, this is a sofa that works as hard as you relax.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-215.png",
        "alt": "The Elevate 86\" Sofa in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "a7b49516-ecbb-4557-921c-de5d6373cd42",
        "label": "Oat",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "d08228aa-86bd-4eb6-bdc8-b1b3fc0c98bb",
        "label": "Moon",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "da934c19-0e9a-4d1d-8b26-aaa971e75c93",
        "label": "Farro",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "45564315-856e-4ab0-89f6-4433b3931755",
        "label": "Midnight",
        "priceCents": 269500,
        "available": true
      },
      {
        "id": "e70ec68d-9783-4a47-9e74-24cf62ccc1aa",
        "label": "Shadow",
        "priceCents": 269500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c3976a8e-141d-4fcd-a016-50772748b463",
    "name": "The Elevate 96\" Sofa in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-96-sofa-in-cactus-leather",
    "description": "The Elevate Sofa is a modern, modular sofa designed to adapt to real life—beautifully. Crafted for comfort, durability, and flexibility, Elevate features clean lines, deep seating, and supportive cushions that make it perfect for everyday lounging or effortless entertaining. Its timeless silhouette elevates any living space while remaining versatile enough to grow and change with your home. Made with sustainably sourced materials, the Elevate Sofa reflects Sabai’s commitment to thoughtful design and responsible manufacturing. The modular design allows you to customize your layout, whether you’re furnishing a cozy apartment or a spacious living room. Each piece is easy to move, reconfigure, and maintain, making Elevate an ideal choice for modern living. Upholstered in durable, eco-friendly fabrics and made in the USA with a sturdy FSC-wood frame, the Elevate Sofa is designed to last—without sacrificing comfort or style. From movie nights to morning coffee, this is a sofa that works as hard as you relax.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-216.png",
        "alt": "The Elevate 96\" Sofa in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "ed3c5f24-783f-4780-804e-04942a535aa0",
        "label": "Terra",
        "priceCents": 399500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "973b652f-e5ba-4929-96d3-669e84d0ef70",
    "name": "The Elevate 96\" Sofa in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-96-sofa-in-recycled-velvet",
    "description": "The Elevate 96\" Sofa is a modern modular couch crafted for comfort, durability, and adaptable living spaces. Made in the USA with a sturdy FSC-certified wood frame and eco-friendly recycled velvet upholstery, it offers deep seating and clean lines that suit both cozy apartments and spacious living rooms. Its modular design is easy to move and reconfigure, allowing you to customize your layout as your home and lifestyle change.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-217.png",
        "alt": "The Elevate 96\" Sofa in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "ea66eccb-47a4-4a71-813f-17e8609c6784",
        "label": "Moss",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "b525cdbb-fec0-4bba-9436-10adbe9b82b6",
        "label": "Indigo",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "934c35ac-a934-46bd-877b-ebf0bae36e3e",
        "label": "Seafoam",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "bc69cbed-ea72-4078-97e5-20edddfea812",
        "label": "Dusty Rose",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "e7759e6c-5eb7-4787-bc9f-453b8d8c8ccf",
        "label": "Mustard",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "bdd3ecfc-ed81-4d86-b4f3-c3f640e112d4",
        "label": "Chocolate",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "351d0e78-9a75-4ae8-921d-715d1306f02e",
        "label": "Amber",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "e72092da-3667-4fd5-88bf-428d16591d23",
        "label": "Ash",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "72449a47-56c2-46f2-8cbc-dfdee775aa45",
        "label": "Cashew",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "3533ad8d-d7e7-4607-986f-9b17fbaadc65",
        "label": "Cornflower",
        "priceCents": 289500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "dad53109-63b2-4135-90bf-e04d98a90d77",
    "name": "The Elevate 96\" Sofa in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-96-sofa-in-upcycled-poly",
    "description": "The Elevate Sofa is a modern, modular sofa designed to adapt to real life—beautifully. Crafted for comfort, durability, and flexibility, Elevate features clean lines, deep seating, and supportive cushions that make it perfect for everyday lounging or effortless entertaining. Its timeless silhouette elevates any living space while remaining versatile enough to grow and change with your home. Made with sustainably sourced materials, the Elevate Sofa reflects Sabai’s commitment to thoughtful design and responsible manufacturing. The modular design allows you to customize your layout, whether you’re furnishing a cozy apartment or a spacious living room. Each piece is easy to move, reconfigure, and maintain, making Elevate an ideal choice for modern living. Upholstered in durable, eco-friendly fabrics and made in the USA with a sturdy FSC-wood frame, the Elevate Sofa is designed to last—without sacrificing comfort or style. From movie nights to morning coffee, this is a sofa that works as hard as you relax.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-218.png",
        "alt": "The Elevate 96\" Sofa in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "07efcac3-8fe2-4eb5-90e1-7561cdc16110",
        "label": "Oat",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "157c5a22-dd0b-44ac-b10d-59571fc66837",
        "label": "Moon",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "a8393009-4b8f-4cfc-84a2-6bbbf2b0d706",
        "label": "Farro",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "eb5898e6-cb68-44de-9799-29046aa04a89",
        "label": "Midnight",
        "priceCents": 289500,
        "available": true
      },
      {
        "id": "8248a028-fa31-4977-ad9d-17f3b5121ec1",
        "label": "Shadow",
        "priceCents": 289500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "0cc6c873-c776-40a1-8fff-6576dcf3b75d",
    "name": "The Elevate Chair in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Accent Chair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-chair-in-cactus-leather",
    "description": "Meet The Elevate Chair, where elegance meets coziness. With its refined low profile and graceful curved arms, this chair adds sophistication to any room while providing a snug corner for your reading nook. Sink into its plush seating and supportive high back, creating a serene retreat for your relaxation moments.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-219.png",
        "alt": "The Elevate Chair in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "669142ec-e7f1-45f4-be08-7436c127b5c0",
        "label": "Terra",
        "priceCents": 159500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "00c4db3e-8c59-43f4-8ebe-2320a02b301e",
    "name": "The Elevate Chair in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Accent Chair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-chair-in-recycled-velvet",
    "description": "Meet The Elevate Chair, where elegance meets coziness. With its refined low profile and graceful curved arms, this chair adds sophistication to any room while providing a snug corner for your reading nook. Sink into its plush seating and supportive high back, creating a serene retreat for your relaxation moments.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-220.png",
        "alt": "The Elevate Chair in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "7104aa57-26f3-4382-9153-654d59173eec",
        "label": "Moss",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "e5d6a951-4200-4584-98c4-1a0539fc00d4",
        "label": "Indigo",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "be4e9fd8-8580-448e-827d-8eae594e9474",
        "label": "Seafoam",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "e1677305-caf2-439a-991c-7229fc2cfd30",
        "label": "Dusty Rose",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "473f4046-55d8-4405-af9a-cb2851f76519",
        "label": "Mustard",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "8f31d5c7-e766-4acc-a867-d7e0d46f27fc",
        "label": "Chocolate",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "8d37a39e-615d-44e9-9eb2-7e4453d49082",
        "label": "Amber",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "6a490863-123d-4e97-847b-546d1ae83084",
        "label": "Ash",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "17e7cdf9-9c4b-4ea7-9c31-086670ade4d6",
        "label": "Cashew",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "090cc252-dfee-4074-a424-6459bd8fe87b",
        "label": "Cornflower",
        "priceCents": 129500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "1cab0373-bd53-41bf-8f49-ca940b6e9c93",
    "name": "The Elevate Chair in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Accent Chair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-chair-in-upcycled-poly",
    "description": "Meet The Elevate Chair, where elegance meets coziness. With its refined low profile and graceful curved arms, this chair adds sophistication to any room while providing a snug corner for your reading nook. Sink into its plush seating and supportive high back, creating a serene retreat for your relaxation moments.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-221.png",
        "alt": "The Elevate Chair in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "2ed6c077-c362-40a6-9df5-aae05d456437",
        "label": "Oat",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "e9a83ec4-06af-47af-ab15-289d5ef8491b",
        "label": "Moon",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "cc00c47d-d263-46fe-ae55-0c87127e632c",
        "label": "Farro",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "03002386-98de-43be-8505-8b47087c23de",
        "label": "Midnight",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "17b48644-6a94-4113-aa92-5bbc6c110953",
        "label": "Shadow",
        "priceCents": 129500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "53ee2e8f-5bc3-4632-925e-3a2eb6de0ad6",
    "name": "The Elevate Daybed in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Daybed",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-daybed-in-recycled-velvet",
    "description": "Introducing our latest daybed - where style meets versatility and comfort. With its chic low profile and captivating curved arms, this piece adds a touch of elegance to any space. Whether it's the star of your guest bedroom or a stylish addition to your living room, it offers extra seating without overwhelming your space. Perfect for a quick office nap or hosting overnight guests, it creates a cozy retreat, blending functionality with relaxed sophistication.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-222.png",
        "alt": "The Elevate Daybed in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "fe629ea4-ecea-4b2c-a949-946ed2ea24c3",
        "label": "Moss",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "84b37a78-8a31-4538-aebd-84798750029f",
        "label": "Indigo",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "12b39adf-1eab-4bce-8873-913a15c2d759",
        "label": "Seafoam",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "c14dfe87-841f-4927-ac73-8c81c0faee12",
        "label": "Dusty Rose",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "adf9fe80-39f8-4ade-9b4d-50936c5902ab",
        "label": "Mustard",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "adbcfff8-ca35-4b21-9052-aee03d114199",
        "label": "Chocolate",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "270059f1-0682-4755-a78f-81d55011ea28",
        "label": "Amber",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "a0691947-8365-4868-a788-adeb78ed0d5d",
        "label": "Ash",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "c27ad512-4523-4535-9037-c4f0168a9712",
        "label": "Cashew",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "0a1fef63-1f90-4dad-9184-89896eaff51f",
        "label": "Cornflower",
        "priceCents": 179500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "28f42381-23e9-405c-ad94-fcb34be96bcd",
    "name": "The Elevate Daybed in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Daybed",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-daybed-in-upcycled-poly",
    "description": "Introducing our latest daybed - where style meets versatility and comfort. With its chic low profile and captivating curved arms, this piece adds a touch of elegance to any space. Whether it's the star of your guest bedroom or a stylish addition to your living room, it offers extra seating without overwhelming your space. Perfect for a quick office nap or hosting overnight guests, it creates a cozy retreat, blending functionality with relaxed sophistication.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-223.png",
        "alt": "The Elevate Daybed in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "817476ee-9242-4924-ad70-f6a724979146",
        "label": "Oat",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "896cc421-3a1b-44e9-bf88-1c6a7e5e5b87",
        "label": "Moon",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "1ad1798e-00ba-4b7e-a776-f305558976e9",
        "label": "Farro",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "9ab63c60-cd32-4c28-99b6-f838a5230db3",
        "label": "Midnight",
        "priceCents": 179500,
        "available": true
      },
      {
        "id": "e52dd387-2855-44de-a286-8203d7530504",
        "label": "Shadow",
        "priceCents": 179500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e44abdf0-e70b-494d-af06-7c92b6fc68bc",
    "name": "The Elevate Loveseat in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-loveseat-in-cactus-leather",
    "description": "The Elevate Loveseat is a modern, modular loveseat made in the USA with FSC-certified wood and PFAS-free, non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-224.png",
        "alt": "The Elevate Loveseat in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "e26a620e-be57-42f4-8e56-554590d77612",
        "label": "Terra",
        "priceCents": 299500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c276fbd4-da5c-4963-ad79-443c6185b0b7",
    "name": "The Elevate Loveseat in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-loveseat-in-recycled-velvet",
    "description": "The Elevate Loveseat is a modern, modular loveseat made in the USA with FSC-certified wood and PFAS-free, non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-225.png",
        "alt": "The Elevate Loveseat in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "a1171b27-bc10-4e92-b1aa-5010f720981e",
        "label": "Moss",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "dd7ef789-313d-4f88-821d-abe0f12e944a",
        "label": "Indigo",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "a195715a-f659-44d0-838e-fc67ea22d6bb",
        "label": "Seafoam",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "9549377a-c020-4374-8e2c-7e43f346471b",
        "label": "Dusty Rose",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "1e94be11-3354-46fd-beb7-22f1cdec60ce",
        "label": "Mustard",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "5d54d85b-cfaf-41e1-a983-cedf9441a16e",
        "label": "Chocolate",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "81cce967-3960-49ca-9315-2bfd1920c7f8",
        "label": "Amber",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "abd609bc-eed6-436c-8a08-b82ce4df02cd",
        "label": "Ash",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "dab5f245-0fc3-4d7a-b580-133b70b3da97",
        "label": "Cashew",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "d3b8b7a1-14ef-4f5b-b951-2e41848c18a3",
        "label": "Cornflower",
        "priceCents": 219500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "222d611b-2059-40ae-ba0c-af39c8a6f6ae",
    "name": "The Elevate Loveseat in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-loveseat-in-upcycled-poly",
    "description": "The Elevate Loveseat is a modern, modular loveseat made in the USA with FSC-certified wood and PFAS-free, non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-226.png",
        "alt": "The Elevate Loveseat in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "87ee4120-c448-46f3-a996-b71404bad3dc",
        "label": "Oat",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "babf06e5-be3b-493f-8ab5-e19ab9ffdf02",
        "label": "Moon",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "da126fcb-b8e0-47d7-9fbb-1d6874751a6c",
        "label": "Farro",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "bc145186-15c0-44ec-84bd-2c5ef551180c",
        "label": "Midnight",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "bd7006b5-aeb4-4dcd-b446-66a2c4a4fd4b",
        "label": "Shadow",
        "priceCents": 199500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "85e65565-a864-4cb6-a6d5-8e5f213abf9f",
    "name": "The Elevate Ottoman in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-ottoman-in-cactus-leather",
    "description": "Introducing: The Elevate Collection. Modern farmhouse meets comfort and style. With a low profile and curved arms, this sofa exudes sophistication and it's the perfect solution to elevate your space. Experience the perfect balance of comfort with its deep seat and high back. Meticulously crafted, The Elevate Collection blends the ease of the modern farmhouse vibe with the comfort you desire. Upgrade your space and create an inviting sanctuary with the Elevate Line. Elevate your living experience with this versatile and timeless addition to your home.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-227.png",
        "alt": "The Elevate Ottoman in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "74691e5d-c3ce-4e0f-bf54-060e86e2eb6b",
        "label": "Terra",
        "priceCents": 74500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "23019e23-ff2d-4537-9296-895a3be0b784",
    "name": "The Elevate Ottoman in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-ottoman-in-recycled-velvet",
    "description": "Introducing: The Elevate Collection. Modern farmhouse meets comfort and style. With a low profile and curved arms, this sofa exudes sophistication and it's the perfect solution to elevate your space. Experience the perfect balance of comfort with its deep seat and high back. Meticulously crafted, The Elevate Collection blends the ease of the modern farmhouse vibe with the comfort you desire. Upgrade your space and create an inviting sanctuary with the Elevate Line. Elevate your living experience with this versatile and timeless addition to your home.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-228.png",
        "alt": "The Elevate Ottoman in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "5c3a3df7-e664-4f1c-8c11-bf3616944e65",
        "label": "Moss",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "5523ab26-6ec8-4321-b9ce-8d28af38fffb",
        "label": "Indigo",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "3f4385d4-c6e2-4bff-b3eb-ccbed3f6d939",
        "label": "Ash",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "2f6dfebb-e002-4bee-9736-bfcc42a5c974",
        "label": "Seafoam",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "742e325d-f21f-449e-8e1b-54b9bc8363fc",
        "label": "Dusty Rose",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "6a8140d3-5411-4125-8709-d4f66d3d47ef",
        "label": "Mustard",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "edf8052e-5d1e-4f85-86de-be7a9bb3b54c",
        "label": "Chocolate",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "4fd883f9-d2ef-4dc5-ba4a-9e5bdeccd975",
        "label": "Amber",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "f147d6d4-0744-475d-b96a-a6940436d7f6",
        "label": "Cashew",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "993bcca3-efce-4bf5-bd59-8eba436c88ee",
        "label": "Cornflower",
        "priceCents": 52500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "0c5067fd-9ecf-4260-8229-c188a488d053",
    "name": "The Elevate Ottoman in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-ottoman-in-upcycled-poly",
    "description": "Introducing: The Elevate Collection. Modern farmhouse meets comfort and style. With a low profile and curved arms, this sofa exudes sophistication and it's the perfect solution to elevate your space. Experience the perfect balance of comfort with its deep seat and high back. Meticulously crafted, The Elevate Collection blends the ease of the modern farmhouse vibe with the comfort you desire. Upgrade your space and create an inviting sanctuary with the Elevate Line. Elevate your living experience with this versatile and timeless addition to your home.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-229.png",
        "alt": "The Elevate Ottoman in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "f4abb649-6813-4f2a-8b78-16d90e043558",
        "label": "Oat",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "2dc90895-81b2-4a65-8713-c373d3362c41",
        "label": "Moon",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "6dba6cba-67fa-450c-9090-c2886a1ef2c3",
        "label": "Farro",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "9ba48ce5-f40a-46f9-bdf7-ee83df5dc816",
        "label": "Midnight",
        "priceCents": 52500,
        "available": true
      },
      {
        "id": "b9dd4b6c-81d6-449c-a026-af8dc52178b9",
        "label": "Shadow",
        "priceCents": 52500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "b342c930-f404-48b0-a032-cedccccf587f",
    "name": "The Elevate Sectional in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-sectional-in-cactus-leather",
    "description": "The Elevate Sectional is a modern, modular sectional with a reversible chaise, designed to adapt to real life—beautifully. Crafted for comfort, durability, and flexibility, Elevate features clean lines, deep seating, and supportive cushions that make it perfect for everyday lounging or effortless entertaining. Its timeless silhouette elevates any living space while remaining versatile enough to grow and change with your home. Made with sustainably sourced materials, the Elevate Sectional reflects Sabai’s commitment to thoughtful design and responsible manufacturing. Its modular design allows you to customize your layout, whether you’re furnishing a cozy apartment or a spacious living room. Each piece is easy to move, reconfigure, and maintain, making Elevate an ideal choice for modern living. Upholstered in durable, eco-friendly fabrics and built in the USA with a sturdy FSC-certified wood frame, the Elevate Sectional is designed to last—without sacrificing comfort or style. From movie nights to hosting friends, this is a sectional that works as hard as you relax.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-230.png",
        "alt": "The Elevate Sectional in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "f61d6e1b-7371-49c0-8f3c-acf633716327",
        "label": "Terra",
        "priceCents": 449500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "6f91c0db-53fb-41b8-8ad2-05f4f823d156",
    "name": "The Elevate Sectional in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sectional Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-sectional-in-recycled-velvet",
    "description": "The Elevate Sectional is a modern, modular sectional with a reversible chaise, designed to adapt to real life—beautifully. Crafted for comfort, durability, and flexibility, Elevate features clean lines, deep seating, and supportive cushions that make it perfect for everyday lounging or effortless entertaining. Its timeless silhouette elevates any living space while remaining versatile enough to grow and change with your home. Made with sustainably sourced materials, the Elevate Sectional reflects Sabai’s commitment to thoughtful design and responsible manufacturing. Its modular design allows you to customize your layout, whether you’re furnishing a cozy apartment or a spacious living room. Each piece is easy to move, reconfigure, and maintain, making Elevate an ideal choice for modern living. Upholstered in durable, eco-friendly fabrics and built in the USA with a sturdy FSC-certified wood frame, the Elevate Sectional is designed to last—without sacrificing comfort or style. From movie nights to hosting friends, this is a sectional that works as hard as you relax.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-231.png",
        "alt": "The Elevate Sectional in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "2557c093-bd04-4165-8401-e2c4c47604e1",
        "label": "Moss",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "09d26717-e167-44e8-8c8d-43e7ede2a768",
        "label": "Indigo",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "a9efe0de-f8a6-4253-b569-795995d9f2a2",
        "label": "Seafoam",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "7e677e10-d9c8-4433-8683-d77b29b630d8",
        "label": "Dusty Rose",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "1865199d-669b-4598-ac9c-8a8d409310ba",
        "label": "Mustard",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "16001b4c-fdc1-4cc2-93b8-734f110f6418",
        "label": "Chocolate",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "2d3dcd20-e840-4f80-815e-0c647525b2bb",
        "label": "Amber",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "086bb5c2-fa2c-420b-9f7a-3a435b0a06a3",
        "label": "Ash",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "0b4c264b-e8ac-4235-863a-965b2d3b6858",
        "label": "Cashew",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "d299ebbe-447b-44d7-b46e-e47374f41b16",
        "label": "Cornflower",
        "priceCents": 329500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "ac66cde7-d9c9-4ccf-8ac6-d5580e070403",
    "name": "The Elevate Sectional in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sectional Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-elevate-sectional-in-upcycled-poly",
    "description": "The Elevate Sectional is a modern, modular sectional with a reversible chaise, designed to adapt to real life—beautifully. Crafted for comfort, durability, and flexibility, Elevate features clean lines, deep seating, and supportive cushions that make it perfect for everyday lounging or effortless entertaining. Its timeless silhouette elevates any living space while remaining versatile enough to grow and change with your home. Made with sustainably sourced materials, the Elevate Sectional reflects Sabai’s commitment to thoughtful design and responsible manufacturing. Its modular design allows you to customize your layout, whether you’re furnishing a cozy apartment or a spacious living room. Each piece is easy to move, reconfigure, and maintain, making Elevate an ideal choice for modern living. Upholstered in durable, eco-friendly fabrics and built in the USA with a sturdy FSC-certified wood frame, the Elevate Sectional is designed to last—without sacrificing comfort or style. From movie nights to hosting friends, this is a sectional that works as hard as you relax.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-232.png",
        "alt": "The Elevate Sectional in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "af233096-42f4-4e15-b456-44a8f28617e7",
        "label": "Oat",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "a6ada739-4c75-415f-8e54-840b47ad530d",
        "label": "Moon",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "fdf77a48-6269-4238-b1f5-0ea2b75bc524",
        "label": "Farro",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "c69ecf18-9572-44d5-9254-cdc3cd536511",
        "label": "Midnight",
        "priceCents": 329500,
        "available": true
      },
      {
        "id": "34b97270-67e5-4235-95e6-0407e16dbdb8",
        "label": "Shadow",
        "priceCents": 329500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c545ab2b-40b1-47df-b56b-490f68508cd3",
    "name": "The Essential Chair in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "chairs",
    "category": "Chair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-chair-in-recycled-velvet",
    "description": "A sleek silhouette, sloped arms and plush pillows make for a timeless yet indulgent setup. Designed with sustainability and relaxation in mind - our chair has plenty of room for curling up with a book or beverage in hand.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-233.png",
        "alt": "The Essential Chair in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "27766027-b35b-42a3-ad5e-bae3635c5d1f",
        "label": "Indigo / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "2babf249-79a6-4fa8-8c06-3def0b2471bc",
        "label": "Indigo / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "b06fc7da-a7e9-4f55-b91a-8ea5c9e25e4f",
        "label": "Moss / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "2bedadee-5bcf-40db-9e22-80496bc292ba",
        "label": "Moss / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "7a12761c-611a-475c-9b56-eedd9c24cf72",
        "label": "Mustard / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "afe14b58-19d2-4034-a86b-3a661d49c3fd",
        "label": "Mustard / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "8ee02b6c-f00f-4045-a7c9-86ad6e5a7319",
        "label": "Seafoam / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "89cdb5bc-69fc-40b6-9cb1-e146802e3875",
        "label": "Seafoam / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "fe1daff8-bcf7-4323-a43a-f9e07e6fc865",
        "label": "Dusty Rose / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "08a2e982-99e9-4c9f-9eb4-479e807a782e",
        "label": "Dusty Rose / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "7bd115aa-6601-436b-b7ff-dede2b107fda",
        "label": "Amber / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "f359cef4-8d59-4e1a-bea5-622084639b10",
        "label": "Amber / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "80d2bd15-41a3-4252-aed3-5b81e78c2015",
        "label": "Ash / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "3dc5baa6-6b6e-48aa-a80a-429eb6c2e659",
        "label": "Ash / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "f3f9d34b-26ca-4df7-af72-87e1b812d172",
        "label": "Chocolate / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "dce06bca-a068-4f11-a201-80d6aa23d6b3",
        "label": "Chocolate / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "f9493159-fc6d-48c1-8b3e-f0a9131cb21f",
        "label": "Cashew / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "87470546-42b1-4455-8a1a-13daa5eaef7f",
        "label": "Cashew / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "9627cefc-bae9-49e9-9c57-8a0024eb0b74",
        "label": "Cornflower / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "77beb3cd-a1b6-494a-9059-1c9980391d5a",
        "label": "Cornflower / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "573ebd3c-e64a-4928-8c4f-b0f053f0c39e",
    "name": "The Essential Chair in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "chairs",
    "category": "Chair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-chair-in-upcycled-poly",
    "description": "A sleek silhouette, sloped arms and plush pillows make for a timeless yet indulgent setup. Designed with sustainability and relaxation in mind - our chair has plenty of room for curling up with a book or beverage in hand.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-234.png",
        "alt": "The Essential Chair in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "9c4fc76b-b2bc-4c7f-b05a-8f63c07ecd66",
        "label": "Oat / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "91358008-b438-488c-bcc4-93cc80d6a4f8",
        "label": "Oat / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "5963dcf3-7672-4d30-b62c-3edaf8aa11a6",
        "label": "Moon / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "3beaed48-2167-487d-85fb-aafa0cd7ea60",
        "label": "Moon / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "09a7063c-727a-4a53-9fc6-0c66737eb6c0",
        "label": "Midnight / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "7eeb7992-a2d7-4712-b74b-d6812f8ca6e4",
        "label": "Midnight / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "9a02cbeb-9c76-4435-88fa-4d6cdec6a20a",
        "label": "Farro / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "a60534b5-bdcb-44d3-8019-bc13793f5372",
        "label": "Farro / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "9503db26-6c7a-4302-bf40-e84ed24cf33c",
        "label": "Shadow / Natural Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "735edce3-9a0b-471e-befc-d689d96777bd",
        "label": "Shadow / Dark Brown Legs",
        "priceCents": 74500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "0a270413-01a6-4db8-a0cc-e54cb34d637f",
    "name": "The Essential Club Chair in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "chairs",
    "category": "Chair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-club-chair-in-recycled-velvet",
    "description": "With the wide arms and design of our Essential Sofa but made for a party of 1 - be comfortably enveloped in our generously sized Club Chair. Pairs beautifully with our Semi Side Table, for the ultimate sustainable reading nook.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-235.png",
        "alt": "The Essential Club Chair in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "030eac2b-3c11-4719-80f6-b403fb170076",
        "label": "Indigo / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "246946d9-0bde-4a9c-81f7-082881910a0a",
        "label": "Indigo / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "4fe9d1de-51b6-4887-aadc-0d8a6ca76edc",
        "label": "Indigo / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "6c1e24b5-c6fb-44e2-985b-a6447452a5b8",
        "label": "Indigo / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "e62549ec-0df5-4347-ab3f-29ae3de21717",
        "label": "Moss / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "9f910e6a-30c4-4606-ab00-d293ad994ba0",
        "label": "Moss / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "e84d3aa3-dfd3-4823-a310-3a1db7ef5b52",
        "label": "Moss / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "ba7d929f-bbb2-4828-a382-e64464cf2d19",
        "label": "Moss / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "41610f8d-3d72-4836-b110-88a258488af3",
        "label": "Mustard / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "f9c651e9-68a3-415f-94bf-5db37727570a",
        "label": "Mustard / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "ac66b61c-3d06-4b31-bbec-7ef44ae12442",
        "label": "Mustard / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "8c99a249-2f79-47fd-944a-ee2e1f6f18de",
        "label": "Mustard / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "0d7b7c79-3048-4192-8c85-39164ade8031",
        "label": "Seafoam / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "fb969bd5-74b4-4c4b-bdde-f2ad40295204",
        "label": "Seafoam / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "70b14bdc-7ffc-4b22-ad22-d780fe49b449",
        "label": "Seafoam / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "5cd7f03e-9e2f-4b6a-8ed7-67e7b373c3fc",
        "label": "Seafoam / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "57403e43-bdcf-4416-be56-f4130731662a",
        "label": "Dusty Rose / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "3f3c399e-0202-46c2-9c98-8e1c0d8f3e01",
        "label": "Dusty Rose / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "a059c56e-5c6c-4711-af52-9577bf677044",
        "label": "Dusty Rose / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "3b9c0abf-e26d-4f7b-a30e-62bf5f602bd4",
        "label": "Dusty Rose / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "045cf6a4-89b0-4ddb-a409-32dc4c2d5e2d",
        "label": "Amber / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "936b6ded-ad2f-4535-af66-f29f4a2d72e8",
        "label": "Amber / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "b3b26e25-2575-4d04-a023-4d2f819a2630",
        "label": "Amber / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "c6c6eaab-6da3-4218-9e3d-40080362ce82",
        "label": "Amber / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "5ff10050-c747-4d75-a3c6-ce23a064b55a",
        "label": "Ash / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "7a4f81e6-db57-4b85-aff8-4916d6dcda8b",
        "label": "Ash / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "11e9c92c-03b1-4cbb-a874-e1ae50ec4eea",
        "label": "Ash / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "d301d96a-38cb-45f4-b70f-336fdf57d0db",
        "label": "Ash / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "63a5b425-abc1-4027-a727-ed50ee9cfaec",
        "label": "Chocolate / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "a36d227e-993c-476a-83ed-3b82f1d503cd",
        "label": "Chocolate / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "785c1520-fd1f-48b6-91e5-88ed5ffb1081",
        "label": "Chocolate / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "f98528d8-2fd7-4082-b1bc-82357389bb9f",
        "label": "Chocolate / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "df383b90-231a-4bd8-af78-9b5fc5ad1ae9",
        "label": "Cashew / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "0667ed0b-3eb8-4a76-b88b-e9f406c561c5",
        "label": "Cashew / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "df9d7786-e9b5-41fe-a721-d940dab44547",
        "label": "Cashew / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "1158b753-fa1b-44bc-80e5-c0b6e6bad762",
        "label": "Cashew / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "c8791e39-2e9c-448a-b92a-32d50cb2ebdf",
        "label": "Cornflower / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "543cbe0b-62a2-410c-ae3a-bda6171fc085",
        "label": "Cornflower / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "9e945a35-b006-478d-b79e-650ba5b94446",
        "label": "Cornflower / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "5037f124-fb69-4469-94c4-00fc34fc2db0",
        "label": "Cornflower / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "4c751630-39b5-46b7-94a6-4ce5dfe12dbe",
    "name": "The Essential Club Chair in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "chairs",
    "category": "Chair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-club-chair-in-upcycled-poly",
    "description": "With the wide arms and design of our Essential Sofa but made for a party of 1 - be comfortably enveloped in our generously sized Club Chair. Pairs beautifully with our Semi Side Table for the ultimate sustainable reading nook.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-236.png",
        "alt": "The Essential Club Chair in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "2702b7fd-d359-422e-bbed-a15777ef6716",
        "label": "Oat / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "44e3b0a3-45d2-44f8-abc5-5ce80d3cea7c",
        "label": "Oat / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "51e11da5-05c2-402e-9c56-a95c6bae7bd0",
        "label": "Oat / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "194be535-730d-4ff6-ade6-b6845500db18",
        "label": "Moon / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "827a8a22-adf3-416e-b07b-d1a7babce8f4",
        "label": "Moon / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "e7e3508a-a292-4b66-bb94-8e8ca4f70856",
        "label": "Moon / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "2edef88a-55d5-4b55-bb95-e0e6ed49b174",
        "label": "Midnight / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "b93a510d-db07-4da1-b5f7-a0402066a8d5",
        "label": "Midnight / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "edce1baa-00d9-439d-ad18-4e5e01418265",
        "label": "Midnight / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "dda245d6-edba-477c-81ca-278ee584f44f",
        "label": "Farro / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "1882a652-255c-49f8-8224-4d86ce132955",
        "label": "Farro / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "d3ea0342-fd75-4ae3-8b32-e2d053550fa4",
        "label": "Farro / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "d91b5247-b3cd-4a75-8d5d-c250ec1f8c88",
        "label": "Shadow / Natural Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "1017b2b1-15c9-41fc-931b-d06f73f24d7f",
        "label": "Shadow / Dark Brown Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "9f622c2d-e12b-4cb1-b144-1f687ed006a1",
        "label": "Shadow / Metal Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "68ba2ecb-3366-4ac9-aecc-75e827e9ca28",
        "label": "Oat / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "3277146d-88fc-4ef3-87fc-f1dba7d7de33",
        "label": "Moon / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "7e76ecb8-e081-4dfd-92b4-0b92b46634b9",
        "label": "Midnight / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "05be8b7b-bfe8-4e8a-bbb1-26ce61336826",
        "label": "Farro / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      },
      {
        "id": "2b87af9d-f304-446d-b277-6ab0934818cf",
        "label": "Shadow / Cylinder Legs",
        "priceCents": 89500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "eb29f85f-26de-4876-8fa5-9d6685d38253",
    "name": "The Essential Corner Sectional (5 Seat) in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-corner-sectional-5-seat-in-hemp-blend",
    "description": "The Essential Corner Sectional is a modern sectional with a reversible chaise, PFAS-free fabrics, and non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-237.png",
        "alt": "The Essential Corner Sectional (5 Seat) in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "4cfc26d3-64f7-41a4-971b-433110cb7430",
        "label": "Natural / Natural Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "a508296f-6b33-4319-ae01-1f9417a40112",
        "label": "Natural / Natural Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "ac277ca0-9e16-465d-a8e1-78739aff7e48",
        "label": "Natural / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "7e97ecbf-6aee-4c58-8e49-5ec8940e7e72",
        "label": "Natural / Dark Brown Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "fd1f8989-efa5-4db4-bca0-ed7aaeef0e95",
        "label": "Natural / Metal Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "fe16aa75-b9a5-4b01-aa84-adf328732e2f",
        "label": "Natural / Metal Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "002310b2-ce12-4b88-86b8-a99a8db68a72",
        "label": "Natural / Cylinder Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "92215fd9-4c50-4b6f-a218-0f76655eae5f",
        "label": "Natural / Cylinder Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "4bfe9c9f-abf2-4bac-b43a-f0bffbbf729c",
        "label": "Sand / Natural Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "7b54d266-f584-4adc-9252-f187da444595",
        "label": "Sand / Natural Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "c639f472-de38-4990-b993-78964d5a5d66",
        "label": "Sand / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "a2aee5cc-136c-43fe-99c2-49c39cd7af6e",
        "label": "Sand / Dark Brown Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "00460e5a-e3b1-4123-bf27-e3ce6a1da969",
        "label": "Sand / Metal Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "3aaa1512-ef39-429f-8254-280a774ec343",
        "label": "Sand / Metal Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "17890180-6d49-4828-bc4a-bf216e6e1b2c",
        "label": "Sand / Cylinder Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "91ab76b9-a5a4-40a9-ad11-f74459d9a639",
        "label": "Sand / Cylinder Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "036977c6-f945-42f3-a592-99c66d251c42",
        "label": "Fir / Natural Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "3e5561f1-ceb6-48a2-b262-c1d2e12526a3",
        "label": "Fir / Natural Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "ffcea4aa-b658-4df2-9904-ceaca3f28573",
        "label": "Fir / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "b29709b1-da10-4816-9f25-a6131a4536ac",
        "label": "Fir / Dark Brown Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "ea9db7ad-753f-49cd-b007-c33476db2aa7",
        "label": "Fir / Metal Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "bba921b7-3802-4832-bc30-14d567d081e6",
        "label": "Fir / Metal Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "8ced17d3-8a30-4764-acba-78fd3f8df0fb",
        "label": "Fir / Cylinder Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "a3f4b8fe-3311-4f24-9f86-8fb260b1e87b",
        "label": "Fir / Cylinder Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "587eb592-0d55-44fc-b4ac-bedae3160a96",
        "label": "Thistle / Natural Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "292fe81a-4eae-4322-9b88-9e4e33e53b15",
        "label": "Thistle / Natural Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "3bc5ad77-1aec-4b1b-8164-64fa8dc01280",
        "label": "Thistle / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "670342ab-2f75-4712-aba4-3bfd7ecf82ff",
        "label": "Thistle / Dark Brown Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "51f86a9b-6d12-4c22-b419-099ed98161be",
        "label": "Thistle / Metal Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "f2a89322-51b7-4cc8-b3a0-d13c81d0d11c",
        "label": "Thistle / Metal Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "c68f604b-e932-4097-a005-0c50c7a258df",
        "label": "Thistle / Cylinder Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "c0442f80-68cb-4f68-8f05-0c7c8052366e",
        "label": "Thistle / Cylinder Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "350ec497-23bd-4306-b4f1-ee706fad42cd",
        "label": "Fog / Natural Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "7cbb7bae-ec1c-4ffe-bcf4-bfcc4a90c38d",
        "label": "Fog / Natural Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "235ddc3d-7fdc-47ce-8c51-c87592b9ffa7",
        "label": "Fog / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "2e9f5682-01f1-4264-9975-11f4a9e395da",
        "label": "Fog / Dark Brown Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "c0fa10aa-04a9-48b8-b0ec-f7aa4f68f371",
        "label": "Fog / Metal Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "7bf70b63-ff16-49ec-9e43-69db94d02575",
        "label": "Fog / Metal Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "6bd09fe2-bd18-40cb-bad5-5505f0e62afa",
        "label": "Fog / Cylinder Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "00ba04ad-c388-42aa-bdc9-3023aa6899ad",
        "label": "Fog / Cylinder Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "6ae25c44-85a3-4e17-96a7-76283849dacb",
        "label": "Redwood / Natural Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "df3d1fea-9290-4f8f-8190-1e5672b918f7",
        "label": "Redwood / Natural Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "7c9b19e8-5415-4d60-9257-c811f496bca3",
        "label": "Redwood / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "6b3da26a-b2b0-4ac6-803d-19b082ce1aba",
        "label": "Redwood / Dark Brown Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "7b8f099d-b406-4dde-9124-b016f02fccfb",
        "label": "Redwood / Metal Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "e728b6d3-9510-4263-8fd5-8461a90695ab",
        "label": "Redwood / Metal Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "bd7b287d-eee3-46b0-bfef-053a0380ed9d",
        "label": "Redwood / Cylinder Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "8349c749-a862-419e-8f6d-249e8a7f1fe9",
        "label": "Redwood / Cylinder Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "c210346f-1229-4f80-83af-dad8eec637a1",
        "label": "Brick / Natural Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "7dd1fd0e-e08f-4537-9d79-252853a90399",
        "label": "Brick / Natural Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "06addda5-5846-4213-a279-b49af5969263",
        "label": "Brick / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "cfc07aae-566c-44ef-ba7b-13cafa9a2450",
        "label": "Brick / Dark Brown Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "10348f6e-1492-4dbc-991a-3ee806d80307",
        "label": "Brick / Metal Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "7f5e910b-644f-491d-8a30-fd6810ed9815",
        "label": "Brick / Metal Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "c15fba17-cf00-46c3-98bb-d835f219de97",
        "label": "Brick / Cylinder Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "1df8104c-4615-4f5b-9e55-ffb4b4d70a12",
        "label": "Brick / Cylinder Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "e11c1dcd-39a9-4b74-95f6-d017bf8ca6e8",
        "label": "Cobalt / Natural Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "7c95ff5c-202f-4974-afcf-196a64b6b3e1",
        "label": "Cobalt / Natural Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "caec0204-5906-4be6-a803-5dbce541d2fb",
        "label": "Cobalt / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "dc7f8dc5-cfd0-454c-a936-1e65e5b6ec4f",
        "label": "Cobalt / Dark Brown Legs / Individual Cushions",
        "priceCents": 399500,
        "available": true
      },
      {
        "id": "54c8be30-4877-48e3-b4dd-ac46ba3cfe93",
        "label": "Cobalt / Metal Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "6f033271-1b79-497c-ad3a-1381beadf416",
        "label": "Cobalt / Metal Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "a6b0e3b8-4b5c-4618-84f7-deb199312b27",
        "label": "Cobalt / Cylinder Legs / Loveseat Cushions",
        "priceCents": 409500,
        "available": true
      },
      {
        "id": "2565f4a2-2852-494a-a01b-543237dac29a",
        "label": "Cobalt / Cylinder Legs / Individual Cushions",
        "priceCents": 409500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "da856076-b779-42e3-98ea-af3f5835eb0d",
    "name": "The Essential Corner Sectional (5 Seat) in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-corner-sectional-5-seat-in-recycled-velvet",
    "description": "The Essential Corner Sectional is a modern sectional with a reversible chaise, PFAS-free fabrics, and non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-238.png",
        "alt": "The Essential Corner Sectional (5 Seat) in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "6908c7b5-4176-4c53-bb78-c26408f15f95",
        "label": "Indigo / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "9ed215c0-215f-4f1c-ad0c-6f746fd3f528",
        "label": "Indigo / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "85ca13af-26b0-4388-8178-6491ffaa0cbf",
        "label": "Indigo / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "0ef180fa-8b6f-4103-bd57-373abab91e32",
        "label": "Indigo / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "681ca336-bb0a-4dd3-a14d-64c723a711f0",
        "label": "Indigo / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "7d1ecddd-2c3d-47d8-a702-ff793bdd1c60",
        "label": "Indigo / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "4a1ae825-072c-4ad8-b43a-7bb4275ec014",
        "label": "Indigo / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "bf3c653e-26a9-4e7f-8240-b5e39d5dfc69",
        "label": "Indigo / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "1ab35597-6591-4208-b1e5-adae0118f9d4",
        "label": "Moss / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "9bae51a3-1405-4b84-ae2e-ee9893f0906a",
        "label": "Moss / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "112c826a-2f2a-4c0a-9837-38bada5a1676",
        "label": "Moss / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "328f4a5a-558b-48ba-bbdf-cdb3b2566cd2",
        "label": "Moss / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "9bfe46f5-11f3-4da7-9062-67a3a57f83e1",
        "label": "Moss / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "eb9a0b96-61e3-4120-a287-61ca8e555c15",
        "label": "Moss / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "29e67861-9bc2-4eb1-87b0-f3deff0184ff",
        "label": "Moss / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "d0807951-d0f9-44c4-a7c1-8b25b45afd66",
        "label": "Moss / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "7575ca5b-f932-4bee-952f-4cfa15266c75",
        "label": "Mustard / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "164b04ab-5676-487c-a37a-128d8205eb4a",
        "label": "Mustard / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "45e85db8-22f1-4d65-80c2-c7accaee770d",
        "label": "Mustard / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "d95118de-082e-4ad6-9d66-6f28ff29dc0b",
        "label": "Mustard / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "736d08c1-3f5d-4602-85f8-83fc93368350",
        "label": "Mustard / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "9d84bdda-f86d-4cef-8bd2-53fc7a2ba43a",
        "label": "Mustard / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "3eb75a66-cbfc-4cd5-98e1-9a9ab156d962",
        "label": "Mustard / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "4b4254da-4619-4dba-a8d1-933f87e1d202",
        "label": "Mustard / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "7f0c531d-f2a6-4912-ba40-e3263d1dd08e",
        "label": "Seafoam / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "fc8772e7-4fda-4342-b944-b4e9ec233f1e",
        "label": "Seafoam / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "85b09cee-e27c-433b-9390-65ad3800c6b8",
        "label": "Seafoam / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "8f7a4abb-1d2f-4df6-890a-a35bed287e5b",
        "label": "Seafoam / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "25d3ab16-9f1c-4351-8a34-25e911a10968",
        "label": "Seafoam / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "dae1cdc7-6ec3-4a2a-91ad-4ffc25b05b5e",
        "label": "Seafoam / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "5db6dad9-0c5c-4236-ba09-c183e0ab00b9",
        "label": "Seafoam / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "d23cd9a5-1aa1-41e7-abdf-c8d779413786",
        "label": "Seafoam / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "d9c8d9ac-4e6b-45ed-8a93-1ff79caacba4",
        "label": "Dusty Rose / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "83e3dabc-de80-4a02-b7cc-032a550f9563",
        "label": "Dusty Rose / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "c1b6b7df-55de-4911-b8ed-52cf42e6b35a",
        "label": "Dusty Rose / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "9b331e96-c010-4817-847b-dd32629dcde7",
        "label": "Dusty Rose / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "1383cd60-dc36-40a2-bff4-6f9d170adbe4",
        "label": "Dusty Rose / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "0ad5bb94-0de4-4f48-aafe-bcef62eb4139",
        "label": "Dusty Rose / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "29ccde9f-420f-4c5c-a60c-e221c985b56c",
        "label": "Dusty Rose / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "5038f67e-21d1-495d-9c6d-28b801b36cda",
        "label": "Dusty Rose / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "17b0e736-862a-4563-a6a8-ec228f6c4918",
        "label": "Amber / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "74cd38ea-7529-4007-9846-7a85fddebb5f",
        "label": "Amber / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "06873e86-3d04-4975-a8d1-2c75f542f1cf",
        "label": "Amber / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "ee4e8f76-6235-439e-9f70-8ad47072dd38",
        "label": "Amber / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "fc1f0aa8-90e6-46d7-a205-1b3f0976a007",
        "label": "Amber / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "528aece2-125f-4c71-ade0-aff5f3dfb841",
        "label": "Amber / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "206455e1-76ce-4eb5-aa9c-5bb595e63db5",
        "label": "Amber / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "f41b5d34-10fa-4c06-b7fe-5f5cbf310885",
        "label": "Amber / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "f9e61d5d-67fa-4e0d-943e-af2222125069",
        "label": "Ash / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "66761bfb-89f4-4be2-98b5-a4b4720e0247",
        "label": "Ash / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "c86ee9a7-f4b5-4bba-bc82-c897520facab",
        "label": "Ash / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "94eaff55-c223-45c8-a5dc-f094159d595a",
        "label": "Ash / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "d244017b-71f3-4163-80d4-60ac22417eba",
        "label": "Ash / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "50600536-a03a-4b79-9d73-1e7664c6b859",
        "label": "Ash / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "4019e05a-a9fd-4660-a9d2-8ab65c72bd85",
        "label": "Ash / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "f7d2866e-d1f3-46b4-ac0a-3787b4d2f3a5",
        "label": "Ash / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "039f820e-d19d-4bc0-b99f-d48938548bd3",
        "label": "Chocolate / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "9b4cda5c-0cdd-407c-908b-f148e5199290",
        "label": "Chocolate / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "1dd820ee-c336-44b4-b8aa-b5396e26d175",
        "label": "Chocolate / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "eccaf3fb-2308-4200-bd35-a04f8af7f276",
        "label": "Chocolate / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "623b8c82-d053-44fd-9e86-932e945eda0f",
        "label": "Chocolate / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "ace43800-84e3-475d-a19e-28efb893ce13",
        "label": "Chocolate / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "95f489f8-aeaf-4a47-ba45-b2c4418ed077",
        "label": "Chocolate / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "72687907-9c82-4e74-9048-8b79d25e1dfe",
        "label": "Chocolate / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "1ae0318e-6788-42df-8dfa-212e531f7e5d",
        "label": "Cashew / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "d32c7e9a-af53-4cfd-822a-b24a980cef80",
        "label": "Cashew / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "9f586221-eb07-4926-b404-888ad424d884",
        "label": "Cashew / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "4a6a97d7-30f5-475f-9e35-50d48a9a59c0",
        "label": "Cashew / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "b46395d2-3215-48f5-a267-ba11d8adb8b5",
        "label": "Cashew / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "d2b3dbdb-7ee2-4043-b019-35417c810359",
        "label": "Cashew / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "9eeff97e-17bd-4fa5-b87b-ce17b229bea8",
        "label": "Cashew / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "60388391-de97-4bbb-8081-14fc08cc6a7a",
        "label": "Cashew / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "cb4237ba-bda6-487c-ba08-6e77274763e3",
        "label": "Cornflower / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "980cdd6a-f91b-4cd9-b451-9b907f107741",
        "label": "Cornflower / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "8f8333c0-4685-4bfe-9e0e-a1e65e0ef14a",
        "label": "Cornflower / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "b5ac5b5a-1a63-4462-847d-4e2be9f397f3",
        "label": "Cornflower / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "2684af2d-c7c5-499a-a430-8cdb86b1f8f3",
        "label": "Cornflower / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "b2f4a9f1-690f-4be4-acb7-8495d2611fa5",
        "label": "Cornflower / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "9e8674a7-8ee3-4ea3-854c-bd55808d7f51",
        "label": "Cornflower / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "849511f9-cefe-4e9d-af73-1c4cf1b54287",
        "label": "Cornflower / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "599114a1-1db3-4e97-9f30-1ee79776a71c",
    "name": "The Essential Corner Sectional (5 Seat) in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sectional Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-corner-sectional-5-seat-in-upcycled-poly",
    "description": "The Essential Corner Sectional is a modern sectional with a reversible chaise, PFAS-free fabrics, and non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-239.png",
        "alt": "The Essential Corner Sectional (5 Seat) in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "99eb826e-4206-4754-a5a2-2f709820dcd8",
        "label": "Oat / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "d21ea8ad-7f58-4bb5-abc2-5cb7f5bc43d5",
        "label": "Oat / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "390d45b0-b2ec-4484-ad7c-5bf3463552f9",
        "label": "Oat / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "8fbafe1f-7946-4a71-84d6-eb182d7763e3",
        "label": "Oat / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "001f8229-cf60-4573-a94a-30acd08b8a40",
        "label": "Oat / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "5fab47eb-4288-4a28-b431-21c8c32c9166",
        "label": "Oat / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "b367731e-1fa9-4ac2-a3fa-f48d0090bd1a",
        "label": "Moon / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "f43263ac-37ac-4225-abc4-782a4b2a937c",
        "label": "Moon / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "46d96896-7149-45b9-bdce-146786ea1755",
        "label": "Moon / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "0375418a-6809-4655-9740-bc3f8510e18b",
        "label": "Moon / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "dc6cc65d-3b75-421e-9748-f65e2d319cae",
        "label": "Moon / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "81a02608-41ea-419a-8742-9808513e701b",
        "label": "Moon / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "f3aacfa8-9a53-4233-9e08-cb208344e169",
        "label": "Midnight / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "efb0f160-1b89-4d91-afd4-b8089ce702e2",
        "label": "Midnight / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "c0583a66-beea-4f8d-9c0d-55264839c00a",
        "label": "Midnight / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "add03a0a-cd1a-435a-b911-b4f8754b8d34",
        "label": "Midnight / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "8c5a9819-ba92-4bcc-9c0a-ecb32ef8ff89",
        "label": "Midnight / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "71c0904a-980b-4269-a1a5-aa0289e9b806",
        "label": "Midnight / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "c14d5ef9-87d3-48bd-bbe3-dd5f7fb427ef",
        "label": "Farro / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "5d30a01c-7042-4a38-a384-812b7999d1f6",
        "label": "Farro / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "72e37357-2ba0-4454-89a3-a6060e814983",
        "label": "Farro / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "335af81e-14f9-431c-b264-497070b4f4c7",
        "label": "Farro / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "86caa8ff-f834-4943-9628-f89aaf2e2dd3",
        "label": "Farro / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "f648e406-703f-40d4-ba0f-a0e8bfa32f09",
        "label": "Farro / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "224771d7-8909-437d-bf6c-53765a10591c",
        "label": "Shadow / Natural Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "e876d747-3e4b-442b-a2a4-b5f84331f8d1",
        "label": "Shadow / Natural Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "979d6d41-5d07-40ec-9bdc-ea090a3e87fd",
        "label": "Shadow / Dark Brown Legs / Loveseat Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "edce4e00-5847-4ba9-9f3f-f8f7d115e9c8",
        "label": "Shadow / Dark Brown Legs / Individual Cushions",
        "priceCents": 319500,
        "available": true
      },
      {
        "id": "d1b03fd8-21c9-4596-af12-7b9e5cd3a53d",
        "label": "Shadow / Metal Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "b11bb9bf-197d-4809-8885-3e3aca3a3829",
        "label": "Shadow / Metal Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "bd31073b-6f25-4a5f-ae6a-8b6c400e255b",
        "label": "Oat / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "ea619db3-1f1f-49d9-aea4-11ac553b9770",
        "label": "Oat / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "6ff472c9-f1de-4092-9348-f4a68c3ae4a5",
        "label": "Moon / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "2cba8ada-132d-4806-b83c-5d8d142ed9a3",
        "label": "Moon / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "12323711-62fc-4e2a-9fe1-414a73f17a49",
        "label": "Midnight / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "257f95fd-819a-4c95-9fd4-a11295fd5d53",
        "label": "Midnight / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "7f8fef07-5abe-475b-b6df-4fa77e1adf72",
        "label": "Farro / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "574910b6-c2ea-47e0-a964-2ccddb42397a",
        "label": "Farro / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "5a01da5a-3232-4023-901d-023efc084448",
        "label": "Shadow / Cylinder Legs / Loveseat Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "193fca94-06ba-4fe9-bce1-bc5612a4c738",
        "label": "Shadow / Cylinder Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "27a2a1ec-6de3-486a-ae9d-bc0f0f867417",
    "name": "The Essential Corner Sectional (6 Seat) in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-corner-sectional-6-seat-in-hemp-blend",
    "description": "The Essential Corner Sectional is a modern sectional with a reversible chaise, PFAS-free fabrics, and non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-240.png",
        "alt": "The Essential Corner Sectional (6 Seat) in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "1ef9c965-1042-4bcf-ac11-c3ee679b56b4",
        "label": "Natural / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "4cf9f9e2-b0df-4ba1-aaef-93237be1ad55",
        "label": "Natural / Natural Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "aecb43a8-5f46-4a20-99e7-199d6b7c3b79",
        "label": "Natural / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "b7d9e9da-0c20-49f1-ae8b-3e41bde8e9f6",
        "label": "Natural / Dark Brown Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "a21118e3-bdb5-4940-8478-6e36a9771a22",
        "label": "Natural / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "e07c5e74-2353-4802-8f34-1a46af1d4de3",
        "label": "Natural / Metal Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "bfd41cd1-fa70-48aa-90bb-a54e95f2e3fe",
        "label": "Natural / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "458c7c3e-c98b-49b3-a07a-fddec52b12cb",
        "label": "Natural / Cylinder Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "f474cea4-3465-423b-be30-a72ab8bc077e",
        "label": "Sand / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "ff2ca9d4-d357-451b-8aac-1ef600b0a726",
        "label": "Sand / Natural Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "16d89164-27e7-49cc-9117-e1d447385237",
        "label": "Sand / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "6fd111ca-c4d6-4731-8f4c-cb7c20ebc9ca",
        "label": "Sand / Dark Brown Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "4844b173-05fe-4f06-95e9-6658c93576ff",
        "label": "Sand / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "1bfd33f0-203b-4749-a6a8-242e3b0b68c7",
        "label": "Sand / Metal Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "bd7254ce-bbca-46b5-b8d3-a4510c822fd8",
        "label": "Sand / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "e63bdd6f-9a6a-48d3-ad5e-18c7d3b308c6",
        "label": "Sand / Cylinder Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "d6da1a62-5947-48fa-a524-82d42984d034",
        "label": "Fir / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "e08ef394-a5de-4ecc-ac55-97a3ccb14b7b",
        "label": "Fir / Natural Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "c5752ec2-69c6-4329-8094-815778f8fcd5",
        "label": "Fir / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "e63d32d2-3bae-45a9-8d7d-af0ea60c0de6",
        "label": "Fir / Dark Brown Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "80ce61a3-cedb-4ca3-afd4-09c2a51fe0a9",
        "label": "Fir / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "c7b3de2e-173d-482e-887f-5add9006ee54",
        "label": "Fir / Metal Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "6d616595-ff26-4e4c-b324-aaabe37d0cee",
        "label": "Fir / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "02d57b4c-0e7f-46cb-a080-6d88ac20e5ce",
        "label": "Fir / Cylinder Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "508845cd-7d07-4193-9d97-a51954247280",
        "label": "Thistle / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "1d175105-e1a6-4e03-80ff-dbf707152617",
        "label": "Thistle / Natural Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "a86d6a84-e44d-4cc8-ab9c-ce977a4ac622",
        "label": "Thistle / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "c076ea03-2a3c-4d6e-8030-4c2e74f67bd8",
        "label": "Thistle / Dark Brown Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "a0aa7dac-834c-4bd9-918a-9676ed1669e1",
        "label": "Thistle / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "cc87feef-704a-41c2-a4eb-4282eee81610",
        "label": "Thistle / Metal Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "9cc7bab4-5e92-4469-b744-80020abdc55e",
        "label": "Thistle / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "a86df9f0-6b1b-44cf-985d-b08fc09ff90b",
        "label": "Thistle / Cylinder Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "2ef5a039-cdab-4a2f-b56d-9f5805bfce16",
        "label": "Fog / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "32333c4a-830b-4a5a-be5f-47d3c7068c22",
        "label": "Fog / Natural Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "ebfc4fa7-5a3b-4182-a6cc-aafdeff73172",
        "label": "Fog / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "eab44273-db8b-41d1-935b-f67dea03ad7d",
        "label": "Fog / Dark Brown Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "c75a3327-b6b7-47f9-9787-dcea67d5bf18",
        "label": "Fog / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "6bdaf71d-47b0-4171-bcac-1098c445d6d2",
        "label": "Fog / Metal Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "068ea31a-8449-4c68-a131-9f200c06e907",
        "label": "Fog / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "3fba12ac-6585-4977-b3f7-fc06c4352b79",
        "label": "Fog / Cylinder Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "3e639a99-c7e8-4c39-b561-47dabbef9ad3",
        "label": "Redwood / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "4c80e190-4adc-42de-8689-407a8b8627e6",
        "label": "Redwood / Natural Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "d316d07b-248c-4aa6-ab02-ed737127ec02",
        "label": "Redwood / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "96def6a6-978e-4f3b-98fc-6b084c67080f",
        "label": "Redwood / Dark Brown Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "fb9a9105-b6fa-44ed-ac2f-cf9c1578388b",
        "label": "Redwood / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "e1344d56-cf56-4dea-8a96-c6cfbb357425",
        "label": "Redwood / Metal Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "836f89d3-8c16-4fb9-808b-404b3639ffaf",
        "label": "Redwood / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "8e2f4f8c-ef9b-422e-bdfc-37a3368c72ac",
        "label": "Redwood / Cylinder Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "be455593-ad9a-42fe-86ff-d2eae1625be6",
        "label": "Brick / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "806dae10-6d43-42b9-8477-47c84986726d",
        "label": "Brick / Natural Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "c1853440-ec2b-4c3e-a007-f1fbaa59b806",
        "label": "Brick / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "a1dfa82d-10f6-4f72-bef5-0a0681f0adb8",
        "label": "Brick / Dark Brown Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "37399915-634a-4bea-a2cb-77778a063d3e",
        "label": "Brick / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "e584536d-b5be-4ec2-a150-9389e8ba97d3",
        "label": "Brick / Metal Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "99f18fb3-6ea5-4025-8ab8-44534f32fa3f",
        "label": "Brick / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "6793cd24-ca19-432f-a41e-c6b0f4f68c62",
        "label": "Brick / Cylinder Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "df948b78-e933-42da-839b-7fa5ac0f76e4",
        "label": "Cobalt / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "da87c465-8011-41eb-b4fa-a523d15db568",
        "label": "Cobalt / Natural Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "2d060b56-b836-4d23-8543-869a8772cda0",
        "label": "Cobalt / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "f7dd042d-61cf-4e1d-b73d-da801e740ddb",
        "label": "Cobalt / Dark Brown Legs / Individual Cushions",
        "priceCents": 439500,
        "available": true
      },
      {
        "id": "eacdc7ac-0b98-44b0-ace9-f308c58fc128",
        "label": "Cobalt / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "a9440da2-2698-435f-94d8-a82e8da4b702",
        "label": "Cobalt / Metal Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "97bf2b72-e830-44e2-a83d-d7769ca4d6cb",
        "label": "Cobalt / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 449500,
        "available": true
      },
      {
        "id": "dac13bfb-160b-4bf8-92d7-5b84c353a304",
        "label": "Cobalt / Cylinder Legs / Individual Cushions",
        "priceCents": 449500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "86f9295b-d28d-4bd2-acaa-ac301dca145c",
    "name": "The Essential Corner Sectional (6 Seat) in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-corner-sectional-6-seat-in-recycled-velvet",
    "description": "The Essential Corner Sectional is a modern sectional with a reversible chaise, PFAS-free fabrics, and non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-241.png",
        "alt": "The Essential Corner Sectional (6 Seat) in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "5b8779f1-76d1-4df9-b387-011274ed336f",
        "label": "Indigo / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "9e15327e-40b5-488f-a7e5-ae4513ca579a",
        "label": "Indigo / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "219eb911-0a27-4c05-932d-bdad2f239011",
        "label": "Indigo / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "666e4033-71ca-4fa6-ba96-9db6a17aa8e1",
        "label": "Indigo / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "76f01be3-eda2-46d2-b536-19e7af846f6d",
        "label": "Indigo / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "bcb614e9-3406-4d96-b9c9-c295846d815a",
        "label": "Indigo / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "4568cdc7-7b5c-41c6-bcc8-643982b0d7bc",
        "label": "Indigo / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "0014c593-e4ed-4da6-959b-cedcd6adfb15",
        "label": "Indigo / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "25a90601-1c26-4a67-93b1-f1fdf6c2b020",
        "label": "Moss / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "d5c11689-8ba7-45fe-a6e4-ed3aa3493292",
        "label": "Moss / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "7f49f029-e138-4c24-b699-b16bb1095cb0",
        "label": "Moss / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "8a5b79f6-99a1-464d-b22c-734032574ebe",
        "label": "Moss / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "78597af2-cfb3-43c9-8a4f-1eb8e5df50cb",
        "label": "Moss / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "081f30ad-2b72-4d0e-835c-2726c1573cc7",
        "label": "Moss / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "9262a46c-2982-4a7b-80d0-fc02b0a659ce",
        "label": "Moss / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "2bfa8147-8537-4110-9b18-d298a9391240",
        "label": "Moss / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "f85e546d-11e2-4a05-9f7d-24b11456be2f",
        "label": "Mustard / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "d2b22f4d-434e-4884-b1de-57ff43ffc1d8",
        "label": "Mustard / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "de9cf8b1-44ad-4e01-8df9-41a2481cc6cf",
        "label": "Mustard / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "8216975a-8ab4-487b-9bec-ebff1b8763cd",
        "label": "Mustard / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "4a35258a-31dc-4cc6-97f9-e4ffb5167aac",
        "label": "Mustard / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "6fe42322-4b63-482e-aac8-f5c5542990c5",
        "label": "Mustard / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "911e40e9-8dce-497f-ba29-6a10e80a9452",
        "label": "Mustard / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "7b03b411-99d6-4547-abd7-fb508a1db057",
        "label": "Mustard / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "7f9166b8-e989-4159-931a-2ba5df4736ee",
        "label": "Seafoam / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "d9057334-ece3-438e-b4c8-2b43ce31106b",
        "label": "Seafoam / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "607dc210-c58f-4992-92db-64a5362cb2b7",
        "label": "Seafoam / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "f249490b-3fbb-4e2e-bc98-280eca334d5e",
        "label": "Seafoam / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "29d0b041-724c-43ee-84e7-49b1d242bf2f",
        "label": "Seafoam / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "f80e0d36-09ea-40d3-b224-93d9027f24f0",
        "label": "Seafoam / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "763671c8-cd83-40a5-8d44-e84a6f7d0c6a",
        "label": "Seafoam / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "0acd9819-a2e9-4a23-8273-197ce1ae6932",
        "label": "Seafoam / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "46bff7f9-e6cc-46d1-975c-e7cdd99524a2",
        "label": "Dusty Rose / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "30fe9f1f-8d67-43e4-b556-2335976876c9",
        "label": "Dusty Rose / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "2739cadd-ff19-4148-9d22-c99a57191794",
        "label": "Dusty Rose / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "866ae5dc-fab1-4076-ae9d-452e8005b43d",
        "label": "Dusty Rose / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "b88a9c45-c929-4607-bf39-773f5abf74d5",
        "label": "Dusty Rose / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "b902f2a1-9d2c-4ba5-bbb8-a186156b5337",
        "label": "Dusty Rose / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "9750c649-58b7-4512-85a3-3e30e62d8d4e",
        "label": "Dusty Rose / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "04375fec-0615-4e06-8870-0068a02b50ad",
        "label": "Dusty Rose / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "efb56b94-64e5-4928-b929-63b3c7654ad3",
        "label": "Amber / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "18e85354-6749-4219-b80a-6aa0a9220362",
        "label": "Amber / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "4d9053c0-f8a3-4b66-8993-484e59f672f8",
        "label": "Amber / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "a7db6a27-2d66-454e-b8f0-d9cddacf31fb",
        "label": "Amber / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "2d8eb30d-b10f-4501-bd28-15f329364072",
        "label": "Amber / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "3a13ca40-04ba-4658-8371-41d1d8add2bf",
        "label": "Amber / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "0aa321b0-7081-47c8-a6b4-21e07b2e2e69",
        "label": "Amber / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "350b9986-7fc1-466d-9579-e7d99166c8a3",
        "label": "Amber / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "c7ff420d-43f8-4088-9798-ed48d0613162",
        "label": "Ash / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "dfc2d531-211f-4771-a749-9bfc57ff18b7",
        "label": "Ash / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "5ecd98aa-e5eb-44c6-9487-09b2144c3d5b",
        "label": "Ash / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "620b332e-8e62-4ab6-acc5-230a3a4596ed",
        "label": "Ash / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "56b16f40-479f-403e-9257-472f57bad3ee",
        "label": "Ash / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "74e481d4-f137-4e7b-a707-8979d048c7eb",
        "label": "Ash / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "67930be6-8da2-4104-a6be-184d94f90540",
        "label": "Ash / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "10fe704d-0baa-4a83-9828-f833b6289dec",
        "label": "Ash / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "e4cd0aac-bf83-4e9b-b94d-89e396b2d0b9",
        "label": "Chocolate / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "95690a5d-ca01-401c-b7e4-8ab56f5f7dc5",
        "label": "Chocolate / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "4f907e72-7e94-4c6f-9fa1-185f3f921356",
        "label": "Chocolate / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "c7eedb58-d43d-4f56-8bcd-86b3daa24309",
        "label": "Chocolate / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "3c79097f-9936-44a9-b8dc-06a2d007ef18",
        "label": "Chocolate / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "5281b1c4-c42b-47a0-89fc-ede354aac379",
        "label": "Chocolate / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "4e184ec8-836f-4c1f-bbc3-061cc7a8bbb7",
        "label": "Chocolate / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "e5d0dc78-cd8f-40e0-a482-b5f422023782",
        "label": "Chocolate / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "ca025324-8574-473b-8a3e-913d089cb1bc",
        "label": "Cashew / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "4e9593cb-b167-479f-8812-1d7177bb40a9",
        "label": "Cashew / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "4a01fd81-170e-4909-90fe-2eb1b348152d",
        "label": "Cashew / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "f7a28830-fb25-47a2-905d-d3dabe6ff527",
        "label": "Cashew / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "a7701326-4de2-47a9-8460-fb866b009123",
        "label": "Cashew / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "05d91053-5ed8-4898-8e3b-88befb72fe29",
        "label": "Cashew / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "66a55b0a-b3c0-4367-b79f-21f10dfc18e6",
        "label": "Cashew / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "1ae0e178-9e73-4452-821a-a1a09e7df755",
        "label": "Cashew / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "ff753240-67de-419a-bd91-ddcaa007224b",
        "label": "Cornflower / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "9b7508fe-3568-4614-a099-e98a19eceb85",
        "label": "Cornflower / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "c8a5f5db-9471-4d55-aa9c-2c9d1e6b63db",
        "label": "Cornflower / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "dd8fe668-f495-41f1-b3e9-9913843b5cfd",
        "label": "Cornflower / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "1299c727-f547-4938-af9a-1d034be3e9d2",
        "label": "Cornflower / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "66f9059f-1f9f-4dc5-bfb6-02ed79e86e94",
        "label": "Cornflower / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "58f46534-96cc-4531-a7e8-55689105b7e9",
        "label": "Cornflower / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "4b97439b-f407-44ea-959a-41f00c0beed8",
        "label": "Cornflower / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3a9ee985-9535-445b-abbf-1b314c8222d2",
    "name": "The Essential Corner Sectional (6 Seat) in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-corner-sectional-6-seat-in-upcycled-poly",
    "description": "The Essential Corner Sectional is a modern sectional with a reversible chaise, PFAS-free fabrics, and non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-242.png",
        "alt": "The Essential Corner Sectional (6 Seat) in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "932ea3f4-a4ca-4cdc-8318-b1cf3a3547f5",
        "label": "Oat / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "7cb66c9d-c854-4237-9040-8eae2ff626f1",
        "label": "Oat / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "5197414c-bc04-4b8c-ba24-0e69f1dfd799",
        "label": "Oat / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "8c1b97d0-3b62-4997-a984-e3e91581e3b4",
        "label": "Oat / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "3508c3b7-b197-4ad3-b374-13a5a184cb0c",
        "label": "Oat / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "491c3837-4dab-4d5e-be47-b74cb2462540",
        "label": "Oat / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "452c2f75-efb6-45ad-a242-4f4c1291da86",
        "label": "Moon / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "ce3d1414-09e6-41d4-ae42-8d7dadbc0244",
        "label": "Moon / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "0989d62a-b578-45b5-9ac7-6ac465a88153",
        "label": "Moon / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "d1466f40-32dd-47b8-ae16-6c1231d71a1c",
        "label": "Moon / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "4494e2e0-766c-4656-98b3-11b7e9d83516",
        "label": "Moon / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "9dbee5c7-f566-46f8-b967-dff8ff9db476",
        "label": "Moon / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "72cfeddb-fc6f-468b-9e12-a0b165318653",
        "label": "Midnight / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "1cf233b8-ab18-48f4-9719-eb0e0a5cf413",
        "label": "Midnight / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "05154642-bc24-40d5-b8c4-5bd55dc2a244",
        "label": "Midnight / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "cd35f89d-15cd-4df4-98c3-806fcdd36535",
        "label": "Midnight / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "1ce7091f-0ff4-4e7d-891f-d26a6ae963d4",
        "label": "Midnight / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "5de30d8e-c59c-4232-810c-72b17f5e32cf",
        "label": "Midnight / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "09e2d668-7b3a-4e5a-83fd-9f614eedf771",
        "label": "Farro / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "36a01719-91fd-4571-bd36-349f0f4601bc",
        "label": "Farro / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "a3d41c51-763b-4823-8294-759973d0587c",
        "label": "Farro / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "20a88582-5750-4495-9e49-9e87010974a0",
        "label": "Farro / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "d8993db1-2607-4b3a-9b4e-5fe8b0a85693",
        "label": "Farro / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "cf7f2c3b-f8f2-4eb8-9f90-2f8c0bbae1cc",
        "label": "Farro / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "f2758052-f652-4ba3-aa43-f525feb4b6e3",
        "label": "Shadow / Natural Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "646f41ba-7bf0-4d8a-9967-56a50c1f69d4",
        "label": "Shadow / Natural Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "cd65357e-b0a0-4746-8f05-cd6862cb7aa0",
        "label": "Shadow / Dark Brown Legs / Loveseat & Bench Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "a28bd051-271b-4599-94ed-4eca9def46b8",
        "label": "Shadow / Dark Brown Legs / Individual Cushions",
        "priceCents": 339500,
        "available": true
      },
      {
        "id": "44097c42-5b6f-4086-b8b3-1099efbfc63f",
        "label": "Shadow / Metal Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "440dd4aa-2113-480e-a35c-bff074755f49",
        "label": "Shadow / Metal Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "6d4e95ab-673e-4382-99c3-e795f8fc0829",
        "label": "Oat / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "1a9d89c5-3893-45a7-bdfe-8b7d76dd7e4e",
        "label": "Oat / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "fb6ac4d9-f58b-4b35-a389-3fa6aae223fc",
        "label": "Moon / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "9e17e8d1-8f48-412e-87bd-ee00c96413ff",
        "label": "Moon / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "1b49fb0c-42bf-402f-bf10-28d6177d3dd6",
        "label": "Midnight / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "3a52ac31-dd6e-4f79-a134-92126c4ab367",
        "label": "Midnight / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "8edfe4fe-82f5-4681-bea6-8ac0f8be334e",
        "label": "Farro / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "59cca8da-947a-4693-ae2f-3eb75134f0aa",
        "label": "Farro / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "f5b9f3f3-bc27-48fc-acc2-566eb68eb083",
        "label": "Shadow / Cylinder Legs / Loveseat & Bench Cushions",
        "priceCents": 359500,
        "available": true
      },
      {
        "id": "bdea1d54-81fd-4ba0-a755-b4676c5cf9fa",
        "label": "Shadow / Cylinder Legs / Individual Cushions",
        "priceCents": 359500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "5f0154f6-45ca-4568-b47c-70b243354963",
    "name": "The Essential Corner Sectional (7 Seat) in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sectional Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-corner-sectional-7-seat-in-recycled-velvet",
    "description": "The Essential Corner Sectional is a modern sectional with a reversible chaise, PFAS-free fabrics, and non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-243.png",
        "alt": "The Essential Corner Sectional (7 Seat) in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "99e6f27e-2e1e-4238-b197-4d422d36203a",
        "label": "Indigo / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "399bc337-5a99-4e7d-a1e9-d31d512d0501",
        "label": "Indigo / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "72d6f7e0-9351-40c3-be78-5dc5dbf77945",
        "label": "Indigo / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "433616a8-dfff-4692-8a46-d10c75acdf6c",
        "label": "Indigo / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "ee31f927-78fe-441a-9db9-1e5c18a6226c",
        "label": "Indigo / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "d94ab93d-0a29-404e-ab04-691cf40637d0",
        "label": "Indigo / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "049fbf49-4d9b-4663-92ad-123bf2e898dd",
        "label": "Indigo / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "5d97845d-1451-4578-b52e-1ebd88cc717a",
        "label": "Indigo / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "734f2c28-fcfc-47f4-b342-061f8dde341d",
        "label": "Moss / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "078e036d-eea7-46d2-860e-7f9a7754ea93",
        "label": "Moss / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "3874aec9-fed9-4394-b11e-09be4ddeb032",
        "label": "Moss / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "d27bd4ac-6860-49d8-baa9-78d9cb1fc8ce",
        "label": "Moss / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "5b7f202d-f86f-4a4f-9c2c-0861f44f845d",
        "label": "Moss / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "2e9cb8a3-2e65-44b5-93b7-af31f459f33e",
        "label": "Moss / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "e00416e5-5950-4a43-9c10-12c54b089deb",
        "label": "Moss / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "c23eb579-f7af-45ff-b76a-31e8501b09ff",
        "label": "Moss / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "7af86832-fc64-4e8e-9aeb-7314c5552b2c",
        "label": "Mustard / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "10f1a3c1-2048-4dc5-b708-9c6acee45b3d",
        "label": "Mustard / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "b3043895-a7c7-40b2-8869-d957d721f110",
        "label": "Mustard / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "80055c29-0063-4720-9334-b525051882b1",
        "label": "Mustard / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "52a8f419-526c-495a-9a9e-7da475f1b9bc",
        "label": "Mustard / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "4c4ad0b2-482e-4846-8e5e-52c7ce93b472",
        "label": "Mustard / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "e6f11271-7e9f-4da0-b9ae-036b2b987190",
        "label": "Mustard / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "7009397b-aa98-4ede-aa39-c08ed0753c51",
        "label": "Mustard / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "0342b7bd-ba07-4ce1-92e1-a69bdfd5fc6d",
        "label": "Seafoam / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "12b0703e-ca25-4bf0-896e-5562ed32b092",
        "label": "Seafoam / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "f4d87d31-5895-446f-bae4-05ae5c89184a",
        "label": "Seafoam / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "c1ba00bf-5ae5-473c-9746-ab56acbcd82c",
        "label": "Seafoam / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "93c0f496-2d28-4155-8a75-c26280533d75",
        "label": "Seafoam / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "d68c1f28-4b44-47ee-a816-015eb971e919",
        "label": "Seafoam / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "b0e860a1-be36-4312-a250-9cfae10a5a24",
        "label": "Seafoam / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "1b8aef59-4193-4307-9e89-0955bd42a914",
        "label": "Seafoam / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "e644532d-0d63-4437-9db5-2eea7ff4a6ad",
        "label": "Dusty Rose / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "d2a2f750-5131-4571-91e9-c82dd7daa471",
        "label": "Dusty Rose / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "65c68003-c419-4654-901d-97d4cdac1a4d",
        "label": "Dusty Rose / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "fc8375f9-44f8-428e-84a8-dc8cbd649f79",
        "label": "Dusty Rose / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "c252eb6a-e9d3-42b9-9192-de0ecd2d418c",
        "label": "Dusty Rose / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "a7a4d38d-e7e2-4f14-9714-757be4ba75ef",
        "label": "Dusty Rose / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "e3521753-f52c-4c68-96c0-35a690389148",
        "label": "Dusty Rose / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "6e6857fc-9dd2-41c9-bc84-efc59a5dc93d",
        "label": "Dusty Rose / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "f4d11167-e7b7-4c93-bf35-4eabf5544ada",
        "label": "Amber / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "b7b6b057-0c1b-4a62-b49b-977f3257b7f0",
        "label": "Amber / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "7a214ebb-2702-4d62-b3c8-a69f96f71346",
        "label": "Amber / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "5033955c-d588-452b-addf-0a53fe6bf3b8",
        "label": "Amber / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "85c14839-84ba-440c-b191-f9c7c2cf937e",
        "label": "Amber / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "f49b2f07-8c1a-4df7-9a54-2238f6db912a",
        "label": "Amber / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "db5a2c46-50fa-4408-bd0e-48403963bec3",
        "label": "Amber / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "6bc88560-7055-45b9-a528-ca205ac4cdb8",
        "label": "Amber / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "916786ef-86c2-4cf5-86b8-4d41b24cea53",
        "label": "Ash / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "5952981b-668a-40cf-85d9-d29918f1cd4c",
        "label": "Ash / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "d892502a-e33a-42a2-98f3-9e6ea50105a8",
        "label": "Ash / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "e97f5e98-db1c-47c9-960c-cba69448a822",
        "label": "Ash / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "4e77e72b-4555-49ca-9f41-c782ff91498b",
        "label": "Ash / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "ef28868c-fe6d-46a4-ae51-7de3d4d09aa6",
        "label": "Ash / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "a66d5d1f-422e-42c2-bbb7-8733bfbf929c",
        "label": "Ash / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "51b23864-0942-461f-9efe-b18ad9e44285",
        "label": "Ash / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "6aa70742-57c8-4c44-97a6-d9369aa8cc6f",
        "label": "Chocolate / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "fdc6c2e7-3fb9-4ece-9826-60e55c9190d4",
        "label": "Chocolate / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "5139de95-f252-495f-83ff-0cb767ecfb21",
        "label": "Chocolate / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "d8840df8-b70b-4d4f-b4d5-3b7d178355a5",
        "label": "Chocolate / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "e95fc63e-84e1-4507-a20f-b630c0187eff",
        "label": "Chocolate / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "107fd6c5-526a-4d64-bcfa-95d148bbec5f",
        "label": "Chocolate / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "5c0ffc26-04d9-48d2-907d-a9746daf4c42",
        "label": "Chocolate / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "c5630a84-9e5e-424e-8892-c6d8011649f6",
        "label": "Chocolate / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "44f7d120-415b-4628-b191-a606ab77ad1d",
        "label": "Cashew / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "c141a429-bf50-4a49-8a2b-5193f37e1b24",
        "label": "Cashew / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "3e3aee92-d889-4f96-b500-cd723600ad60",
        "label": "Cashew / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "c029c65d-ab39-4289-9ac5-34d03b14a24d",
        "label": "Cashew / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "2432b2c0-bb78-4cc3-b2e2-cbd37d4b1388",
        "label": "Cashew / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "f55ffb74-c3bd-48c1-bba9-c6c3a5f78008",
        "label": "Cashew / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "570279c5-2bc6-4953-8ae0-ff6b52162afa",
        "label": "Cashew / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "62e78d15-8172-4347-be36-73db6bc8acec",
        "label": "Cashew / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "aab35d0b-5bf1-4c24-b357-faa31898a074",
        "label": "Cornflower / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "4a7fe345-a251-49fa-985b-16c5cbbd590c",
        "label": "Cornflower / Natural Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "9d912e78-d51c-4a09-aedd-f8f9707e42e8",
        "label": "Cornflower / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "d6db5fa1-8da3-4fed-b9c7-98fecb653c38",
        "label": "Cornflower / Dark Brown Legs / Individual Cushion Sofa",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "adf6fd8d-9dff-433f-8038-f8bb375a6f17",
        "label": "Cornflower / Metal Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "598f540f-2868-490e-9cd1-e56a606828ae",
        "label": "Cornflower / Metal Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "c3ab1ee0-9be3-4bfa-b63a-3ecb1219447a",
        "label": "Cornflower / Cylinder Legs / Bench Cushions",
        "priceCents": 389500,
        "available": true
      },
      {
        "id": "84a5958b-ce43-4d95-8bb8-f88d769db320",
        "label": "Cornflower / Cylinder Legs / Individual Cushion Sofa",
        "priceCents": 389500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "afb48034-8142-43fd-9f91-9c58290a89aa",
    "name": "The Essential Corner Sectional (7 Seat) in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sectional Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-corner-sectional-7-seat-in-upcycled-poly",
    "description": "The Essential Corner Sectional is a modern sectional with a reversible chaise, PFAS-free fabrics, and non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-244.png",
        "alt": "The Essential Corner Sectional (7 Seat) in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "08551e11-1af0-48e0-b2ad-618049980fc6",
        "label": "Oat / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "f75c2189-3a3e-48d1-8526-29f8a2dab8b5",
        "label": "Oat / Natural Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "5d651501-25b0-4c6f-a050-049f3ef17f61",
        "label": "Oat / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "bd40268b-87cb-4268-ae26-b42bbce419bd",
        "label": "Oat / Dark Brown Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "9d8cebf3-563d-4276-9e1c-b123badf3553",
        "label": "Oat / Metal Legs / Bench Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "fe0eda56-fb30-4937-96b8-6d36d42a7de0",
        "label": "Oat / Metal Legs / Individual Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "4a7b8311-9f46-466e-9aee-2822fef76c4b",
        "label": "Moon / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "5926af1f-e9f8-468a-9f1c-c1cfdd37df6f",
        "label": "Moon / Natural Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "cc20aec9-1756-411b-83a2-dd11fd3ec4a1",
        "label": "Moon / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "2a67879c-1a3a-47eb-98bd-2c6a3cd78d7c",
        "label": "Moon / Dark Brown Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "ec0dfee9-35ca-44ad-8195-1a2bf6113428",
        "label": "Moon / Metal Legs / Bench Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "58008e15-b1d3-4e6a-9177-0521347564d0",
        "label": "Moon / Metal Legs / Individual Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "66e111bd-ddf0-457a-8215-488b3d9a49a9",
        "label": "Midnight / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "35070b15-8986-4eee-a6c4-ab0e2b7c96a6",
        "label": "Midnight / Natural Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "e5f9fcdc-fea1-4fad-8fc4-b2937efb4d54",
        "label": "Midnight / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "ec96188b-f1c4-461f-a57e-ec647cae0e63",
        "label": "Midnight / Dark Brown Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "ecc03062-26b6-44f5-959b-223bc3bbc4fd",
        "label": "Midnight / Metal Legs / Bench Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "4afdfd50-b983-42ee-80d2-4fad8cdeac0a",
        "label": "Midnight / Metal Legs / Individual Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "b2151beb-625a-49df-b784-99dfaa7e7356",
        "label": "Farro / Natural Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "5da500be-6129-4f00-8e56-cec7bbbb65aa",
        "label": "Farro / Natural Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "c2f68bb1-b3de-4b1e-9bab-85145bb3850f",
        "label": "Farro / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "3b751afb-c64e-4ff4-a92e-a713ec192338",
        "label": "Farro / Dark Brown Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "a20fc262-3132-477b-a58f-79f0b4ac168d",
        "label": "Farro / Metal Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "5b8c9c07-ed22-4d77-ab1e-1d0f460834b7",
        "label": "Farro / Metal Legs / Individual Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "84ceb773-c919-410a-98a5-7da2d83e9936",
        "label": "Shadow / Natural Legs / Bench Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "a8d93236-7996-42dd-9ff7-8e30a01e1508",
        "label": "Shadow / Natural Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "b7dd5f6c-fc58-4184-8ffd-89691cfb33d1",
        "label": "Shadow / Dark Brown Legs / Bench Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "1099cca0-4b64-4c4e-b7f6-42ae531af1b9",
        "label": "Shadow / Dark Brown Legs / Individual Cushions",
        "priceCents": 369500,
        "available": true
      },
      {
        "id": "dd51a4da-0cb7-43f1-870b-fc69e4cf0c5b",
        "label": "Shadow / Metal Legs / Bench Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "0b47ab13-750d-4589-a54f-74161bcba38b",
        "label": "Shadow / Metal Legs / Individual Cushions",
        "priceCents": 388500,
        "available": true
      },
      {
        "id": "373c221a-1746-4483-9346-b17f5f14ab6d",
        "label": "Oat / Cylinder Legs / Bench Cushions",
        "priceCents": 379500,
        "available": true
      },
      {
        "id": "0d11dd7c-0fdc-4b6f-9d4d-1aee606faef3",
        "label": "Oat / Cylinder Legs / Individual Cushions",
        "priceCents": 379500,
        "available": true
      },
      {
        "id": "004ee1f9-df7c-4524-8436-d4c4e9ef2774",
        "label": "Moon / Cylinder Legs / Bench Cushions",
        "priceCents": 379500,
        "available": true
      },
      {
        "id": "c9ecdf25-e245-4613-a6c3-dd4e5b79591f",
        "label": "Moon / Cylinder Legs / Individual Cushions",
        "priceCents": 379500,
        "available": true
      },
      {
        "id": "3dd76f93-096c-4331-be88-e74562dba2ef",
        "label": "Midnight / Cylinder Legs / Bench Cushions",
        "priceCents": 379500,
        "available": true
      },
      {
        "id": "d869e632-a2fa-4516-88d7-98461fb0ea04",
        "label": "Midnight / Cylinder Legs / Individual Cushions",
        "priceCents": 379500,
        "available": true
      },
      {
        "id": "e0cecfc9-989b-4a06-8f74-4bb1e709c8f4",
        "label": "Farro / Cylinder Legs / Bench Cushions",
        "priceCents": 379500,
        "available": true
      },
      {
        "id": "3ca2abe9-0a5c-4923-88f7-fbb5f0087a10",
        "label": "Farro / Cylinder Legs / Individual Cushions",
        "priceCents": 379500,
        "available": true
      },
      {
        "id": "b5ab0ba5-8f11-41b5-84f6-9863dbd16a69",
        "label": "Shadow / Cylinder Legs / Bench Cushions",
        "priceCents": 379500,
        "available": true
      },
      {
        "id": "f2229e4b-97ba-4e13-9ad3-e6fa0520522e",
        "label": "Shadow / Cylinder Legs / Individual Cushions",
        "priceCents": 379500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "2cd92182-dda0-4f91-927e-6e182932d935",
    "name": "The Essential Loveseat in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-loveseat-in-recycled-velvet",
    "description": "A modern, modular loveseat made in the USA with FSC-certified wood and PFAS-free, non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-245.png",
        "alt": "The Essential Loveseat in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "818e3964-da60-461f-a5cd-0d23dfd49d1a",
        "label": "Indigo / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "604b2021-9edb-4d59-82e1-9f5193625851",
        "label": "Indigo / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "2e94f887-a084-453f-9ea2-da64336774ce",
        "label": "Indigo / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "46c5fca5-cfb1-407b-a035-2992048973e2",
        "label": "Indigo / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "02b7ea9a-cce3-4250-8dc2-2592290b0e96",
        "label": "Moss / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "e85c93a4-c2b4-487d-bc92-a08769097d15",
        "label": "Moss / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "dd743790-9c05-4db7-b2fa-0a6ba3f1b07d",
        "label": "Moss / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "a08ddefe-04d9-4c85-a1a2-ab900011314f",
        "label": "Moss / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "a8d45211-5e4f-46fd-8ace-d915a51e74f6",
        "label": "Mustard / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "c0b4397c-01df-4cf2-a90f-2b1524d2214b",
        "label": "Mustard / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "de9c3a46-f529-4557-87b8-ead87a00e4f6",
        "label": "Mustard / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "60de466b-159b-421a-8903-8f1efa680d2b",
        "label": "Mustard / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "7239b8a8-c99d-4bec-b4af-0c2e8c5bb472",
        "label": "Seafoam / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "61da635d-b615-4257-9f37-1c1f61e548c0",
        "label": "Seafoam / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "e96cbfd1-3d08-47ae-b2f0-83728c257027",
        "label": "Seafoam / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "86a57725-15e8-4878-8b1b-55169a9bd3f2",
        "label": "Seafoam / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "0facd962-83b8-4515-a470-6f28cbd32f06",
        "label": "Dusty Rose / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "57ba58bc-816e-4dae-bc80-6a498809367c",
        "label": "Dusty Rose / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "b17c8f24-0e92-47c4-8cb5-bb851d4ff181",
        "label": "Dusty Rose / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "801d50b9-155e-40b5-87e5-619284026a9c",
        "label": "Dusty Rose / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "5230fd8e-6da8-4d38-a704-1df9a5f37fed",
        "label": "Amber / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "e2f07d0e-b891-420b-a27a-f25a7c2b295e",
        "label": "Amber / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "8a1a49c0-24ac-4c81-9395-a80baa90596e",
        "label": "Amber / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "f15997a2-47ce-420b-b129-c37338b91877",
        "label": "Amber / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "d748a508-17d4-41e1-b05e-78830b561554",
        "label": "Ash / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "5b02816e-edb5-479b-a144-e91896a850ff",
        "label": "Ash / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "b12cb0f8-5d06-407c-9d31-5213e242da38",
        "label": "Ash / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "be454425-1bf6-454a-8fe0-976f05d82313",
        "label": "Ash / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "27e5cf7e-7d88-49a5-ac1e-1a3b03b3db61",
        "label": "Chocolate / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "4f439dd2-08ad-4b00-a150-4cbef81ed2af",
        "label": "Chocolate / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "7ae77c9f-62fa-4914-a2e0-b4a787fa9a70",
        "label": "Chocolate / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "40a97b5e-44b0-40be-84c0-15bebdf304d4",
        "label": "Chocolate / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "2506a099-3d29-45f8-b0b6-b96dfaeed7dd",
        "label": "Cashew / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "20fae49c-750e-44d5-b525-5c9f4cc3c276",
        "label": "Cashew / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "de1b9fed-0602-437c-9141-ce28c7f65131",
        "label": "Cashew / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "06dce93a-f8a3-4821-b235-7f5dd9015026",
        "label": "Cashew / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "ad28ae7d-ea64-420f-948b-9ea058f0eb93",
        "label": "Cornflower / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "1c06ab77-fe92-40ea-b008-4f7a250d1ad1",
        "label": "Cornflower / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "9047f590-7644-4093-b533-ef0e3730cdaa",
        "label": "Cornflower / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "31cdd5ad-21e3-4e7d-b4c7-92b607f1a7ce",
        "label": "Cornflower / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "c9e4633d-2d49-4169-973b-064a219f5c1e",
    "name": "The Essential Loveseat in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-loveseat-in-upcycled-poly",
    "description": "A modern, modular loveseat made in the USA with FSC-certified wood and PFAS-free, non-toxic materials for everyday comfort.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-246.png",
        "alt": "The Essential Loveseat in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "9f7f1348-d7e6-4856-bd28-d68b0ea0f513",
        "label": "Oat / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "9ca1d1f4-2b45-48de-ae62-829f8aa10c89",
        "label": "Oat / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "9466c72f-6a91-437c-b7e0-f2efb513af58",
        "label": "Oat / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "2befe9b9-4ef6-44f9-8525-9d98b5b25a54",
        "label": "Moon / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "3e971d68-a5a9-4042-b0f3-a3c91e803903",
        "label": "Moon / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "7a5c4299-2a66-40de-acc1-5c3393db622b",
        "label": "Moon / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "d825e442-60e6-420f-9ba7-a1a3c29bbf9f",
        "label": "Midnight / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "f2b77c9e-794d-42ef-9488-b1deb1d3f2e3",
        "label": "Midnight / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "40cc8bd6-c698-47f1-aa83-e93649da3d6c",
        "label": "Midnight / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "5a9a6192-8e34-44af-bf22-d82c858fc8ea",
        "label": "Farro / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "c0fc4d17-0e5f-42d4-a002-1759ffa2053c",
        "label": "Farro / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "107c8309-7247-4241-a20a-94bacbb8cdc4",
        "label": "Farro / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "f4b99235-7aaa-4d9a-bf3e-41208e4986ab",
        "label": "Shadow / Natural Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "57a38c68-7785-4a23-b4f9-f588a32d5f16",
        "label": "Shadow / Dark Brown Legs",
        "priceCents": 129500,
        "available": true
      },
      {
        "id": "b9e7d6ea-3445-460a-8821-3cc06a9850a4",
        "label": "Shadow / Metal Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "9126cbb6-4b51-49f7-b2d2-3fb3e545a763",
        "label": "Oat / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "5783756d-0053-46f7-9f31-9a5047fb653d",
        "label": "Moon / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "143df390-f38a-400d-b79c-ca63b127ee15",
        "label": "Midnight / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "8eb56f61-e913-4222-a1f6-46540ae2aec5",
        "label": "Farro / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      },
      {
        "id": "d5d6067c-705a-4dbd-9dc5-46bbd7c4e94b",
        "label": "Shadow / Cylinder Legs",
        "priceCents": 137500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "58512be9-8695-4633-ab01-a64a32d8b27e",
    "name": "The Essential Loveseat Sectional in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Sectional Sofa Units",
    "category": "Sectional Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-loveseat-sectional-in-recycled-velvet",
    "description": "All the benefits of our Loveseat but with the ability to put your feet up! This is the perfect option for those who prefer the look of our Sectional but are working with a smaller space. Convertible chaise extension can be set up on either side.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-247.png",
        "alt": "The Essential Loveseat Sectional in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "21696153-213d-4a7d-8729-1ac12c8531a8",
        "label": "Indigo / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "9dc6742e-33b7-437e-9596-769da3a6ab46",
        "label": "Indigo / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "6a66c337-45dc-4270-af8e-7ef86f22a15a",
        "label": "Indigo / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "e54ce49d-8a9f-4c66-9b2e-bb3b98ea8302",
        "label": "Indigo / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "7e1e0bb0-ff93-4e7f-bfd1-a074503fe05b",
        "label": "Moss / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "e48ecfd0-ae9e-422d-8739-1e7db8db7b9d",
        "label": "Moss / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "dcae1d8a-74c6-4b8a-955c-cb55e7057a39",
        "label": "Moss / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "44af8a46-c383-4e3b-8397-384db788dffc",
        "label": "Moss / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "e508ade5-b86e-40d1-a01c-7f5b015f7396",
        "label": "Mustard / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "cfd63fdf-9ac6-4229-950f-c4279632c014",
        "label": "Mustard / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "922a44cd-80ee-41d8-971a-0f7b29a2e59f",
        "label": "Mustard / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "15f2cf0e-6cc8-42af-b519-296edccec22a",
        "label": "Mustard / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "fff2e86e-fca9-40d3-b434-26ab76efa7bd",
        "label": "Seafoam / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "eb3c74ab-bada-4622-aded-a8b7499220db",
        "label": "Seafoam / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "1660773c-bba2-4026-a0ae-0f0fda7e9ab9",
        "label": "Seafoam / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "78527fea-7ff3-42d3-b854-487541c404b2",
        "label": "Seafoam / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "7956e418-f2b4-47cf-9ccf-212e70887002",
        "label": "Dusty Rose / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "c1da46f9-2460-4f15-8520-571c5efba85c",
        "label": "Dusty Rose / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "ef9bb911-406a-4b4b-a9a6-e48a2dc30ea2",
        "label": "Dusty Rose / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "e6d7b840-1e88-4a68-98e9-04e5660933a4",
        "label": "Dusty Rose / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "8d63d881-8016-4788-b8a6-2b65063e02b4",
        "label": "Amber / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "213432c8-7676-490a-8583-50d66dcd5719",
        "label": "Amber / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "4cf86e0a-4bb6-4a36-a1b5-4b9085802320",
        "label": "Amber / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "d50fc1b5-0353-4989-b6f1-7b9939004e3c",
        "label": "Amber / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "15fa1d96-e61c-468e-9e35-4d63d1d45289",
        "label": "Ash / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "18f17c52-8264-41d1-9cd0-809f09b479dc",
        "label": "Ash / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "686d8c86-d87e-4d59-afe9-bc3e2a0ab9eb",
        "label": "Ash / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "4de012c1-5d55-46a6-8ff3-f0989699bf13",
        "label": "Ash / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "98ab106f-d867-45af-88e1-6fda4e49500e",
        "label": "Chocolate / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "23fb2505-8aef-4fc6-a2bb-52009a2af807",
        "label": "Chocolate / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "cf2e82b6-e9a2-47a3-83a0-4def9a3e44c0",
        "label": "Chocolate / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "63e50bc9-8baf-4933-a26a-ddffc7e68767",
        "label": "Chocolate / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "eedbf5c8-c756-4866-bb2a-955e77d00736",
        "label": "Cashew / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "5b5c7aea-1961-4061-ba92-81f3af120315",
        "label": "Cashew / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "ad9513cb-43dd-4e1f-b858-01818b4b6c50",
        "label": "Cashew / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "60ee7aeb-66f5-4971-96dd-81d5aeae7465",
        "label": "Cashew / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "0fa85b10-641f-4dea-9904-3e8e4a436fab",
        "label": "Cornflower / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "92c6dd8a-86a1-4b1c-b33d-772f6350be4a",
        "label": "Cornflower / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "f5c3d9f5-a59a-4ada-be11-315deff641f7",
        "label": "Cornflower / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "43f84e28-b632-4b8e-b866-489c44b3ccee",
        "label": "Cornflower / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "be58b8aa-1225-437f-a389-ce6b52a9c49a",
    "name": "The Essential Loveseat Sectional in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Sectional Sofa Units",
    "category": "Sectional Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-loveseat-sectional-in-upcycled-poly",
    "description": "All the benefits of our Loveseat but with the ability to put your feet up! This is the perfect option for those who prefer the look of our Sectional but are working with a smaller space. Convertible chaise extension can be set up on either side.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-248.png",
        "alt": "The Essential Loveseat Sectional in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "db01677a-e6fb-42c2-a956-3e827a0c6ff1",
        "label": "Oat / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "0f66c985-1eb6-4462-80c5-4fff2fc1455e",
        "label": "Oat / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "51651f7a-bd8c-443a-bc4a-4ce6ea667fc7",
        "label": "Oat / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "c666b856-61cf-4b27-bf73-681b3c134914",
        "label": "Moon / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "38448579-34da-4b1a-a441-2008ff909d28",
        "label": "Moon / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "e9161127-6b92-471f-aae3-62695726891e",
        "label": "Moon / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "92847fa6-9b6e-4cf2-b639-8aba5662d8f1",
        "label": "Midnight / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "3ecade1e-4fb6-4c4c-93bc-7ac525e6f911",
        "label": "Midnight / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "3b7ef281-014b-4d16-a7d2-bdef91b14d98",
        "label": "Midnight / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "0164947b-e0e8-4b96-824c-ae477ee52e25",
        "label": "Farro / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "f0dcd286-c178-4a76-b344-8d8fc11c694c",
        "label": "Farro / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "318582d5-e959-47ff-b4d0-e11a71cb6537",
        "label": "Farro / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "b9505c52-fc7a-4580-924e-d50b32ff153c",
        "label": "Shadow / Natural Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "c2f3599a-c31e-4f60-8d91-2094529665c1",
        "label": "Shadow / Dark Brown Legs",
        "priceCents": 174500,
        "available": true
      },
      {
        "id": "a39db473-df0f-4351-aec6-1754f5093ad4",
        "label": "Shadow / Metal Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "606782a8-d687-4b0b-970a-6a7a86f5ee63",
        "label": "Oat / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "6aa3c19b-fc44-4353-aa53-42a666ff4629",
        "label": "Moon / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "459db77f-cc0d-4a2f-9daa-b630d2edf68e",
        "label": "Midnight / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "633ddd5f-0aca-409b-8f08-06d88cfc9834",
        "label": "Farro / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "23e97677-3040-4b56-91bb-f3d954af9ed9",
        "label": "Shadow / Cylinder Legs",
        "priceCents": 184500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e9987a80-2e77-42ba-9d4f-4a634724b188",
    "name": "The Essential Ottoman in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Ottomans",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-ottoman-in-recycled-velvet",
    "description": "Use it as a coffee table or extra seating. Slide it up to your sofa for instant chaise lounge status. Pairs perfectly with our Essential Sofa or Loveseat and adds flexible functionality to any space.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-249.png",
        "alt": "The Essential Ottoman in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "9b058b2e-7717-46a9-b527-8d8648e5d178",
        "label": "Indigo / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "30addfd5-0766-484c-ac1c-04d8be30d38b",
        "label": "Indigo / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "820ae15e-0b21-4083-bbe2-da206981f962",
        "label": "Indigo / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "2a0d225c-5214-453f-9562-496fc86e534c",
        "label": "Indigo / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "b11f3d90-dad7-4863-9725-db1dd20552f6",
        "label": "Moss / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "272a9f96-a213-49bd-a797-fcf56a1d016c",
        "label": "Moss / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "cf275fb2-3a0a-4b42-b3c1-5370afca9a88",
        "label": "Moss / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "9028fbfe-14a7-4568-b433-0a521e644882",
        "label": "Moss / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "8df9540a-20b2-44f8-9e35-2e5fc2d9586c",
        "label": "Mustard / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "45e297e4-da2c-47d6-a48d-1ff43b75e550",
        "label": "Mustard / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "701fcdcb-e587-4aef-aea4-9ccbe56ebcc2",
        "label": "Mustard / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "70894976-b758-4ca4-8bff-f934cd47b8aa",
        "label": "Mustard / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "a798eac9-544f-4db0-9f75-5d889c876343",
        "label": "Seafoam / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "4e31265c-84f8-4f88-b9eb-07cd4728eda0",
        "label": "Seafoam / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "6920de4c-456a-4440-8fdb-ed4f2d830186",
        "label": "Seafoam / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "1ac943b0-3de3-4913-a8c5-4a1a9cd87feb",
        "label": "Seafoam / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "a7b050fc-ddb0-4bf2-8206-1ce59f16a39b",
        "label": "Dusty Rose / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "fdc25419-49f0-49cf-bace-4ac8ca279860",
        "label": "Dusty Rose / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "005e6a57-d1c1-46cb-8501-55723d45577a",
        "label": "Dusty Rose / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "4fe19925-7390-4e56-9ec4-5ba8f556ba31",
        "label": "Dusty Rose / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "a6ef0e54-679c-49ff-b3f2-a9e1ba5c21ef",
        "label": "Amber / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "ed0c2887-8fd6-4d70-9044-2e92172e9992",
        "label": "Amber / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "f29e238a-2436-4e6b-af7b-333b891c2de7",
        "label": "Amber / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "eaa1e634-aec9-4282-9665-71493e561d1f",
        "label": "Amber / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "814d0759-8714-439d-8c08-fa15ee40c786",
        "label": "Ash / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "fcb9bf39-5970-4e49-ac96-273e1fe9d9a1",
        "label": "Ash / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "06215ab9-cdd8-41eb-9456-74b4f939f0aa",
        "label": "Ash / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "265bc185-5c5c-4b7a-927a-34aac7ad5da5",
        "label": "Ash / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "1e0c2eeb-85f4-49a2-8d4b-2820a984c67a",
        "label": "Chocolate / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "1a2fe31c-1a7f-44f4-978e-f81d965317fa",
        "label": "Chocolate / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "42d372f6-566f-4ba2-a764-78efee1e8fe8",
        "label": "Chocolate / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "c39fc99c-48ce-439e-9886-c55ff106295e",
        "label": "Chocolate / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "af1b70f1-7725-4dd6-90c7-06c4ea5a2aee",
        "label": "Cashew / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "c3fb0473-6286-41ef-b5a7-0726d9bd3b18",
        "label": "Cashew / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "ceb23da7-9df1-4711-853d-b2148c1910f2",
        "label": "Cashew / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "e54978cf-54bc-409a-9456-649eb23ff88a",
        "label": "Cashew / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "7e35b480-00e4-48ef-8f1c-2535051d991d",
        "label": "Cornflower / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "3252447b-89bd-4197-a4f7-654b2aa7c7fa",
        "label": "Cornflower / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "9e1874bd-6e68-4a9e-90fb-0a34faf7a836",
        "label": "Cornflower / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "eab472e9-a35e-46bd-ae18-9268fb1ba9cf",
        "label": "Cornflower / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8f66764e-9598-455e-9a00-af4e19f66319",
    "name": "The Essential Ottoman in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Ottomans",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-ottoman-in-upcycled-poly",
    "description": "Use it as a coffee table or extra seating. Slide it up to your sofa for instant chaise lounge status. Pairs perfectly with our Essential Sofa or Loveseat and adds flexible functionality to any space.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-250.png",
        "alt": "The Essential Ottoman in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "2918bb2c-674e-44c1-b558-c1c307fe3e56",
        "label": "Oat / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "7d4b482f-d71b-49dd-8ea4-36051bbc3484",
        "label": "Oat / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "0d9aeee1-41db-484e-8e8d-6dac0db4163f",
        "label": "Oat / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "7e2d44bb-070f-433e-a649-f6923f3f50ea",
        "label": "Moon / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "a2a495b4-fb8c-41d8-b0e8-ff1aa67b6553",
        "label": "Moon / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "38502c8f-d260-4ae4-a591-ef99924905ed",
        "label": "Moon / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "c146a437-270a-4607-825b-c8b8070b8d1f",
        "label": "Midnight / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "4bfef3d8-a66d-4bd3-9176-2d638126ffef",
        "label": "Midnight / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "9e43a6e8-40bf-42b5-bc73-8b9238e6efb2",
        "label": "Midnight / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "5e8b9ee7-3951-4ec0-9a4c-4b9691d80f2e",
        "label": "Farro / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "c7699e88-5a34-4add-b53e-78b82265859d",
        "label": "Farro / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "41a1a690-3f4b-4e6e-9db9-c84a8b3e806c",
        "label": "Farro / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "79310531-d1ba-460a-900f-a50768cb3c93",
        "label": "Shadow / Natural Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "c84474a4-c68a-40b9-bd0d-66c4548d0607",
        "label": "Shadow / Dark Brown Legs",
        "priceCents": 39500,
        "available": true
      },
      {
        "id": "cab1d3c4-958a-405d-bca7-11c680e1f004",
        "label": "Shadow / Metal Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "3060258e-fb9d-4a26-90de-4796fceca5a7",
        "label": "Oat / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "12d8a822-80b0-47b1-b034-57eff203fb39",
        "label": "Moon / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "f795f968-e83c-4ed3-9a06-4617f8351246",
        "label": "Midnight / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "a34afce3-b09e-4b1f-86b1-02550758241a",
        "label": "Farro / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      },
      {
        "id": "6513bbe6-5bae-4610-ae02-e3bce6cddd02",
        "label": "Shadow / Cylinder Legs",
        "priceCents": 47500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "8268d9a7-d04d-4b0c-bbed-4ac1807350aa",
    "name": "The Essential Sectional in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sectional Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-sectional-in-recycled-velvet",
    "description": "The Essential Sectional is a modern sectional with a reversible chaise, designed for everyday living. With clean lines, comfortable proportions, and an inviting feel, Essential brings effortless style and flexibility to any living space. Whether you’re stretching out for a movie night or gathering with friends, this sectional adapts easily to your home and lifestyle. Made with sustainably sourced, non-toxic materials, the Essential Sectional reflects Sabai’s commitment to thoughtful design and responsible manufacturing. Its versatile, modular layout allows you to customize your setup—making it an ideal choice for both small apartments and spacious living rooms. Upholstered in durable, PFAS-free, eco-friendly fabrics and built in the USA with a sturdy FSC-certified wood frame, the Essential Sectional is designed to last—without compromising comfort, safety, or style. Supportive cushions maintain their shape over time, delivering lasting comfort you can feel good about. Simple, comfortable, and consciously made—the Essential Sectional is everything you need for modern, everyday living.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-251.png",
        "alt": "The Essential Sectional in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "7291fbe7-1975-49ad-aa79-b586ac9369de",
        "label": "Indigo / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "dbfa2d25-b178-44f1-bd15-c72b51d9abf5",
        "label": "Indigo / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "8e6902b4-a8a9-4971-93e2-9d855fbd9bb4",
        "label": "Indigo / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "902ea77c-3c22-4133-b743-600a2e1dcb88",
        "label": "Indigo / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "08459296-bd7b-4db7-935a-68215092e4cc",
        "label": "Moss / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "a920807e-6411-43a1-8613-29d1da5118fd",
        "label": "Moss / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "ee81785f-ca69-4b8c-8161-45702f2449c2",
        "label": "Moss / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "e997f4e8-9aed-4f0e-82fd-06c6652ea094",
        "label": "Moss / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "c548349a-fc5d-4e5a-aeca-90799367a4de",
        "label": "Mustard / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "f4831feb-e496-4015-973e-812259f229ec",
        "label": "Mustard / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "ecded740-4503-404a-b0fb-d97f6be4f05a",
        "label": "Mustard / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "a6c3dbeb-d560-43af-bde9-641f7cf938ac",
        "label": "Mustard / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "9b189b3f-31fd-483d-af82-25f5817a126a",
        "label": "Seafoam / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "65ffe4a1-6674-4531-bccf-45d8141fbc2d",
        "label": "Seafoam / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "5eb6ad5c-d671-4d2f-8dba-35a51e20a329",
        "label": "Seafoam / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "7c7ee5d8-7fb1-4cc9-b417-6d94a691b50d",
        "label": "Seafoam / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "d56490e3-b9b7-4b97-80a1-eb22d7fc7a59",
        "label": "Dusty Rose / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "c5eb29fa-878c-4ec3-8813-43acbd971890",
        "label": "Dusty Rose / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "f8f718be-a7a8-43ca-9135-1ec31f36badf",
        "label": "Dusty Rose / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "c80f25f8-4a54-44ea-9566-b27369132879",
        "label": "Dusty Rose / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "b8493957-5f12-4b35-a195-766baa208966",
        "label": "Amber / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "2ef58260-b617-4e90-9c1b-d3abd003fc10",
        "label": "Amber / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "802252ae-601a-4e10-967b-c14e9885e912",
        "label": "Amber / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "a1a5f24f-579b-46a7-9c91-15d722649593",
        "label": "Amber / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "5fdd780d-5b5d-45d7-8b59-17fb6a8c3a58",
        "label": "Ash / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "2c36170f-ab24-4c6a-8de6-6578e021359d",
        "label": "Ash / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "731aeb0d-0fc1-4ebb-8f07-adec6a184145",
        "label": "Ash / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "25650ad9-8448-4ed5-953e-acdec230d10c",
        "label": "Ash / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "29245a3f-5498-4775-b056-f6517d473cce",
        "label": "Chocolate / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "f54eb9ef-c3e0-4ad6-8077-0c72ee60911c",
        "label": "Chocolate / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "f57c6a6a-ad06-40b9-8565-489ec70211b2",
        "label": "Chocolate / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "4c3623fa-0d49-403b-8674-aad327b8341f",
        "label": "Chocolate / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "fcbe4adc-1fd8-4659-8601-c2a869b6714b",
        "label": "Cashew / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "5490ba77-aff4-44c4-ab63-840e7fb12659",
        "label": "Cashew / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "68933a8d-98bc-4192-bdd9-ea68dfe71b45",
        "label": "Cashew / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "0d27bd91-9f2d-4be9-9d36-63d1ac2d4c3e",
        "label": "Cashew / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "dacc8d47-d16f-4a03-9696-fa7cd554e739",
        "label": "Cornflower / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "3beefa6f-f69d-4163-a4c5-eb568ae177fc",
        "label": "Cornflower / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "0c3c4c0d-1799-4c8d-8379-9f37e652e8ff",
        "label": "Cornflower / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "102aa06c-d328-4ea9-bc45-9b683d42da60",
        "label": "Cornflower / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a3b4e791-5998-490b-8988-f25fae1630be",
    "name": "The Essential Sectional in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Sectional Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-sectional-in-upcycled-poly",
    "description": "The Essential Sectional is a modern sectional with a reversible chaise , designed for everyday living. With clean lines, comfortable proportions, and an inviting feel, Essential brings effortless style and flexibility to any living space. Whether you’re stretching out for a movie night or gathering with friends, this sectional adapts easily to your home and lifestyle. Made with sustainably sourced, non-toxic materials , the Essential Sectional reflects Sabai’s commitment to thoughtful design and responsible manufacturing. Its versatile, modular layout allows you to customize your setup—making it an ideal choice for both small apartments and spacious living rooms. Upholstered in durable, PFAS-free, eco-friendly fabrics and built in the USA with a sturdy FSC-certified wood frame , the Essential Sectional is designed to last—without compromising comfort, safety, or style. Supportive cushions maintain their shape over time, delivering lasting comfort you can feel good about. Simple, comfortable, and consciously made—the Essential Sectional is everything you need for modern, everyday living.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-252.png",
        "alt": "The Essential Sectional in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "e537f378-7e62-4b5c-8c92-c9d05b5e281d",
        "label": "Oat / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "8cb39c18-4412-40f7-ac1b-779825b342f9",
        "label": "Oat / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "b717a451-4a14-41cd-bb10-c75c209de953",
        "label": "Oat / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "460138b7-98d0-42d7-a29a-3616fc89d1f8",
        "label": "Moon / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "4fa5eaf1-6d6f-4c3a-b4be-c84de2d4f138",
        "label": "Moon / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "a9678e1b-10bc-4609-97ed-9d5420b61b2a",
        "label": "Moon / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "b1542434-495e-47dc-bfc3-b51d354973a8",
        "label": "Midnight / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "94b9f900-fdd9-4d6d-aa02-cf6760732f1c",
        "label": "Midnight / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "9e20c1d8-fb99-4686-a5a1-e543c4a750a5",
        "label": "Midnight / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "8e576789-0731-432d-afb3-097bd1bc29b2",
        "label": "Farro / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "c1945475-1f14-4767-8814-d2601ddf55d0",
        "label": "Farro / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "e19ba273-4132-4457-8841-c1aac4f29696",
        "label": "Farro / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "a1fe8712-f2ee-4315-9deb-109202823538",
        "label": "Shadow / Natural Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "9760c714-0dd4-480e-b36c-7a2ccff45690",
        "label": "Shadow / Dark Brown Legs",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "3bf98bf4-ebe8-4389-a2c3-7859d69152c0",
        "label": "Shadow / Metal Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "64fe54b7-6ffb-4508-8902-42b03840eb51",
        "label": "Oat / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "c8deabac-e249-4719-b37a-c3ec8cacb3b1",
        "label": "Moon / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "5ffd7ced-f45d-4513-bc24-5f6987917561",
        "label": "Midnight / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "d911f188-57dc-4534-bad1-23717f37ce41",
        "label": "Farro / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "54fb9579-4bb5-433a-b22c-c08741314495",
        "label": "Shadow / Cylinder Legs",
        "priceCents": 219500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3d35452c-45f6-4f9c-b658-fa7c4b392439",
    "name": "The Essential Sofa in Cactus Leather",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-sofa-in-cactus-leather",
    "description": "The Essential Sofa is a modern sofa designed for everyday living. With its clean lines, balanced proportions, and inviting comfort, Essential brings effortless style to any space—without overcomplicating your home. It’s the sofa you reach for day after day, whether you’re unwinding solo or hosting friends. Crafted with sustainably sourced materials, the Essential Sofa reflects Sabai’s commitment to thoughtful design and responsible manufacturing. Its streamlined silhouette fits seamlessly into both small apartments and larger living rooms, making it a versatile choice for a wide range of spaces and lifestyles. Upholstered in durable, eco-friendly fabrics and built in the USA with a sturdy FSC-certified wood frame, the Essential Sofa is made to last. Supportive cushions provide lasting comfort while maintaining their shape over time, so your sofa looks and feels great for years to come. Simple, comfortable, and consciously made—the Essential Sofa is everything you need, and nothing you don’t.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-253.png",
        "alt": "The Essential Sofa in Cactus Leather by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "5576a5c1-dafe-48e5-aa37-8775488e0f88",
        "label": "Terra / Natural Legs / Bench Cushion",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "ffa7eb37-5142-4b90-9852-ffd1a407a095",
        "label": "Terra / Natural Legs / Individual Cushions",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "2970050d-8994-4ebc-9a11-8918afc293a1",
        "label": "Terra / Dark Brown Legs / Bench Cushion",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "2cb2dcd1-6cd4-4b61-9716-abf88600cff0",
        "label": "Terra / Dark Brown Legs / Individual Cushions",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "c92fe699-8c05-4af4-8314-f343101e0331",
        "label": "Terra / Metal Legs / Bench Cushion",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "458af1ae-d394-4732-b80b-c2ac2de9f9b3",
        "label": "Terra / Metal Legs / Individual Cushions",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "4912e724-6688-4469-8dce-5dad50ebcf61",
        "label": "Terra / Cylinder Legs / Bench Cushion",
        "priceCents": 259500,
        "available": true
      },
      {
        "id": "790b5cef-d1fd-4f14-bb1c-df33e83d24d7",
        "label": "Terra / Cylinder Legs / Individual Cushions",
        "priceCents": 259500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "6051bd06-3f8b-4d53-89de-d481fb60d51b",
    "name": "The Essential Sofa in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-sofa-in-hemp-blend",
    "description": "The Essential Sofa in 100% natural fabric offers everyday comfort with a modern, sustainable design. Crafted with FSC-certified wood and non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-254.png",
        "alt": "The Essential Sofa in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "abdf96f6-b74d-423f-89ff-06e0df12b5a4",
        "label": "Natural / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "6b8fc007-4280-4c14-a120-395928afd886",
        "label": "Natural / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "cf232943-5485-4838-8ca2-e09c2df92e86",
        "label": "Natural / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "8c203b10-81af-4337-9c68-d1a67cdced3d",
        "label": "Natural / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "9022e86f-b17f-4c68-ba5e-78facbdcd3a7",
        "label": "Natural / Metal Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "b700db9e-fe64-4aca-8115-1c04db7bd351",
        "label": "Natural / Metal Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "b537867e-4e8b-4cd1-8333-26b9b541576b",
        "label": "Natural / Cylinder Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "f0fb2ac9-b0e5-4ef5-9e9c-824a301d1422",
        "label": "Natural / Cylinder Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "c22eaa92-f3ac-4480-b01d-158276feaaf9",
        "label": "Sand / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "576cca12-8154-4d25-90d1-8ada0db7f1e4",
        "label": "Sand / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "da1dd5db-b044-4a08-8f47-00714372fc41",
        "label": "Sand / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "46c76822-b127-4717-84a5-f17a01df95cf",
        "label": "Sand / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "41a40c61-e3d7-4565-b7b8-41fa781b2bc6",
        "label": "Sand / Metal Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "444a73ce-ae57-430f-95eb-145c1139c56b",
        "label": "Sand / Metal Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "be4f187e-2aaa-4c8c-ba10-18fd3d86db9f",
        "label": "Sand / Cylinder Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "f5420f67-eafa-4fbb-9a4c-e760a39eb2ac",
        "label": "Sand / Cylinder Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "a3bc3079-59d9-4add-8be1-2f6bd7d0dcf6",
        "label": "Fir / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "993598f7-f25a-4e28-8ac9-8b0b53da7178",
        "label": "Fir / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "6df114e7-bd4a-49c8-b86e-1b1b8c66ede5",
        "label": "Fir / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "3b20f862-ded7-4850-a6f7-7a59d457c991",
        "label": "Fir / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "0c34f3c7-7f38-49d8-ad30-bbb5ed971b46",
        "label": "Fir / Metal Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "d1bf4f73-90d4-4d7d-ba39-e5a572be96a0",
        "label": "Fir / Metal Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "2e3cffb3-e7f0-421a-b1ed-6a0872b30d9e",
        "label": "Fir / Cylinder Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "97c3c930-4444-487b-97c7-4a73e6011b79",
        "label": "Fir / Cylinder Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "787eddd0-8e2c-42d3-8541-e78f120f2e80",
        "label": "Thistle / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "044e1f39-d7a7-4814-a241-2134dd28a01d",
        "label": "Thistle / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "c75d7fc4-88ff-4a40-b7ac-681125619b17",
        "label": "Thistle / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "1e93386e-d0de-4689-a01f-269b07e12287",
        "label": "Thistle / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "4e9960ea-21df-4ad2-86a2-61a90751e6de",
        "label": "Thistle / Metal Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "b8ba4df9-bd58-4105-ab4a-95a08ab59bc9",
        "label": "Thistle / Metal Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "13b96158-841a-4f43-bccf-6bfa02e02d39",
        "label": "Thistle / Cylinder Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "627143aa-f3cb-44e6-aeb7-9c8a55dbe0eb",
        "label": "Thistle / Cylinder Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "542bb82b-bf0d-4c7f-be1d-f0a853dadd74",
        "label": "Fog / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "fba35776-9dc3-4026-89e9-ef0ceb58e070",
        "label": "Fog / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "bb1a5974-dead-4840-9a9c-6bc25813f968",
        "label": "Fog / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "1288d688-b191-404c-8b63-e7ba20f121aa",
        "label": "Fog / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "610a8a4a-224e-4571-99a4-e6c7ce85164c",
        "label": "Fog / Metal Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "3cca78e9-fe0d-4253-991b-df5a1a9eadb4",
        "label": "Fog / Metal Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "c91ce9dd-01ba-42da-96ee-a78f20c67a81",
        "label": "Fog / Cylinder Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "854f5792-bbfd-45be-ba2e-ad7cc9a21c4d",
        "label": "Fog / Cylinder Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "f7f1c6c3-fdcb-4248-ad8c-cc2906fc01ef",
        "label": "Field / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "82f8e3c9-5a13-4c22-a637-c693ecd3f8ea",
        "label": "Field / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "1974597c-e9d1-4a85-8884-01ad241f65e4",
        "label": "Field / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "751e0afa-e6ee-4f63-8f66-5167e0e33920",
        "label": "Field / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "0910e980-bc4d-4c2f-957e-9e07d3d21573",
        "label": "Field / Metal Legs / Bench Cushion",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "fed867ba-e0aa-4e61-affb-c6baf22c6552",
        "label": "Field / Metal Legs / Individual Cushions",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "a1f5689a-c05f-4068-810a-c687855ce5b6",
        "label": "Field / Cylinder Legs / Bench Cushion",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "90222bfe-0558-45ed-86f1-b6c79574a8f7",
        "label": "Field / Cylinder Legs / Individual Cushions",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "15ac11c9-4034-45e0-bb1b-7e470fccee9c",
        "label": "Yellow Clay / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "18a18157-06d2-48cc-b474-24d3b7df7833",
        "label": "Yellow Clay / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "eaf50a4b-77fc-49ce-bb44-66ed5a30eb70",
        "label": "Yellow Clay / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "a14ab7f4-773f-4a66-9d91-b8f32cb79fb7",
        "label": "Yellow Clay / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "a22ff0af-3298-4ace-930f-a8e16236cc8b",
        "label": "Yellow Clay / Metal Legs / Bench Cushion",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "4671eef3-f701-42c9-a71d-b86d190449e7",
        "label": "Yellow Clay / Metal Legs / Individual Cushions",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "150f9394-7384-4a15-8cf3-ba666f10447d",
        "label": "Yellow Clay / Cylinder Legs / Bench Cushion",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "968669f4-c2e8-4f3b-a9c5-6df8326bcf46",
        "label": "Yellow Clay / Cylinder Legs / Individual Cushions",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "15336b91-36cb-4dd9-87c4-e7875b8e8659",
        "label": "Redwood / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "5fceea65-c4d6-473c-be59-202c691aa987",
        "label": "Redwood / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "b8a69ef6-83d8-4695-9da4-6cdae929c8a6",
        "label": "Redwood / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "0027514e-0ee1-4732-8302-4aadc604354e",
        "label": "Redwood / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "aeea3f01-6b05-4ac6-8708-b353ce81841a",
        "label": "Redwood / Metal Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "25b4176e-10ac-474f-851e-eff5c8b8f190",
        "label": "Redwood / Metal Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "f2701d92-5137-429d-835f-586f4f78c121",
        "label": "Redwood / Cylinder Legs / Bench Cushion",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "4cea0eca-ff0a-4aa0-9e65-5e83c1690967",
        "label": "Redwood / Cylinder Legs / Individual Cushions",
        "priceCents": 209500,
        "available": true
      },
      {
        "id": "1727ccb3-3d44-4717-b9a7-7ea95fd5a534",
        "label": "Brick / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "d87dc787-5154-414d-858a-4c7d3d1e11a7",
        "label": "Brick / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "e804722f-4c60-4a7b-b090-d5e842e48cee",
        "label": "Brick / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "1b263eed-d333-4a6c-a431-d28ca28e8832",
        "label": "Brick / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "54df176d-9971-4384-8f92-a2fd4142b33d",
        "label": "Brick / Metal Legs / Bench Cushion",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "4d5267de-71b7-411b-b513-a968e37f7238",
        "label": "Brick / Metal Legs / Individual Cushions",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "b1596072-b094-4ebb-801d-55c9128f8996",
        "label": "Brick / Cylinder Legs / Bench Cushion",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "eab13cca-7c13-4c3d-879a-89799f63c0d4",
        "label": "Brick / Cylinder Legs / Individual Cushions",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "d66203b3-ba6e-43ec-88ed-fe67ddb0b653",
        "label": "Cobalt / Natural Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "edcfb678-2454-4c08-87f0-b49bac6845c4",
        "label": "Cobalt / Natural Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "83f3b2c9-81c6-4f05-948b-dfb55a66a4c0",
        "label": "Cobalt / Dark Brown Legs / Bench Cushion",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "be90ec08-6a45-48fe-813d-b8a3eacae6e8",
        "label": "Cobalt / Dark Brown Legs / Individual Cushions",
        "priceCents": 197500,
        "available": true
      },
      {
        "id": "1ac647e3-a872-4b06-bb7f-1a4037513c8f",
        "label": "Cobalt / Metal Legs / Bench Cushion",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "cabaa88d-823d-4ae2-ae79-3870c3b4d7e6",
        "label": "Cobalt / Metal Legs / Individual Cushions",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "37441695-5c7b-4a4b-9704-894e0b294a26",
        "label": "Cobalt / Cylinder Legs / Bench Cushion",
        "priceCents": 219500,
        "available": true
      },
      {
        "id": "0b085034-32a1-48d1-ba63-b4a15b67b68e",
        "label": "Cobalt / Cylinder Legs / Individual Cushions",
        "priceCents": 219500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "39a7f0ab-394c-4cff-9708-afb667910a62",
    "name": "The Essential Sofa in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-sofa-in-recycled-velvet",
    "description": "The Essential Sofa is a modern, sustainable sofa designed for everyday comfort. Crafted with FSC-certified wood and durable, non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-255.png",
        "alt": "The Essential Sofa in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "864a3305-b373-49a4-ba5e-722478b88bf6",
        "label": "Indigo / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "29a06912-6aa8-4c5d-993c-c3d828d73757",
        "label": "Indigo / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "dc3932db-4224-4337-a26d-1cb9118bfc5f",
        "label": "Indigo / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "b1b4e483-4606-4a54-8d87-fb34056a04ed",
        "label": "Indigo / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "9b568aff-f758-4c9d-908a-a3ba79d86537",
        "label": "Indigo / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "b979a22b-3a66-409a-96c1-008ad806f2ba",
        "label": "Indigo / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "758011e6-3c82-46aa-9fd0-ea83f752fc2a",
        "label": "Indigo / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "21244e5a-5fd3-45e5-a297-7422546a136b",
        "label": "Indigo / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "9d027517-44d1-4f31-a197-31e8d0f8a17a",
        "label": "Moss / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "b0afd63d-9e23-4b23-b384-1f9cc1ca54fb",
        "label": "Moss / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "6db9affd-af80-49a5-905e-f56aec9dfa4c",
        "label": "Moss / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "e6b86a8a-eea3-4231-9eb5-46ec121f8e32",
        "label": "Moss / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "e91bdb42-ba44-4909-8996-7b440c17372f",
        "label": "Moss / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "4ad4e54b-c90c-41b6-907b-026b9f44b028",
        "label": "Moss / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "e29476aa-d85a-4225-a46a-7ed552b0ce58",
        "label": "Moss / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "a9a476d0-8793-46a0-9ac3-bc6577362a6f",
        "label": "Moss / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "3decdd2f-3378-4a7f-9b27-4ea9a7277586",
        "label": "Mustard / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "b4f46692-0ebb-473f-a1e3-9121cca08f75",
        "label": "Mustard / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "96222f5a-522c-4575-acef-ab91d6e5c257",
        "label": "Mustard / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "45ef3e3b-b4a8-4f0c-9104-44a2fab4def2",
        "label": "Mustard / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "f4513fcb-0ee8-4ff2-bd9d-ef51853bf26a",
        "label": "Mustard / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "fb5dfc39-7953-4adb-a2b0-847899c7c90a",
        "label": "Mustard / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "1757f381-6e3f-487a-a32c-d76a6d32d84f",
        "label": "Mustard / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "d2b2abaa-9f23-4595-8a51-e83163e57137",
        "label": "Mustard / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "d0d01498-b383-4c33-9343-2dae5bdb6cfb",
        "label": "Seafoam / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "4eb4b02f-280c-4f7d-903c-082d80feeaf9",
        "label": "Seafoam / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "8b02a8fc-d1c8-4c7e-b148-231167bb7bba",
        "label": "Seafoam / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "f826cddc-7847-46dd-af3d-f848d5733d4a",
        "label": "Seafoam / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "3065dacb-37fa-4c23-92e4-be50edde883d",
        "label": "Seafoam / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "ac686bd8-8b33-43c8-a743-149fb8ace048",
        "label": "Seafoam / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "65e39c7c-e03d-4522-872e-29cd6c8bd33d",
        "label": "Seafoam / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "3c2e5e08-06f8-4353-8acd-e346576038dd",
        "label": "Seafoam / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "547d6eef-2a82-4f92-a840-a33cbbb2815a",
        "label": "Dusty Rose / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "ade2945e-e150-4ce9-84f6-8198267b2bac",
        "label": "Dusty Rose / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "b194b7b7-c3df-4627-a23a-e9f49491eb89",
        "label": "Dusty Rose / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "ab39b243-8f67-41b5-b958-32f6aaec95ce",
        "label": "Dusty Rose / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "8a2581fa-3913-439e-9e40-afeac11788a5",
        "label": "Dusty Rose / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "6ff39ca8-dc3c-47be-9d92-09f3882aacf6",
        "label": "Dusty Rose / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "4c4d678a-207c-4767-a39a-6a44b0305dd7",
        "label": "Dusty Rose / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "799cf3ac-5d8e-45ed-bfd7-2ac76b8dc042",
        "label": "Dusty Rose / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "aab068d7-5f5f-4cde-95d6-82a568cd235a",
        "label": "Amber / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "d9170a47-2298-459a-bf41-7e47f614e567",
        "label": "Amber / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "012d71f4-7600-494a-b70f-a7dab9e2bbe6",
        "label": "Amber / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "ab88eb86-3a14-418d-82d3-a80bbe6e9e54",
        "label": "Amber / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "20b6079b-b388-4207-8644-762846513847",
        "label": "Amber / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "b4538ee7-11f5-462a-a293-b85540d3e418",
        "label": "Amber / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "faf23f35-4328-410a-afa6-4b1191b93a54",
        "label": "Amber / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "92a8e3ae-e864-4acf-b418-41e23dbc4a67",
        "label": "Amber / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "c792353c-3190-4f1d-bfbb-d537dc96d345",
        "label": "Ash / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "b55e0135-c7a9-4309-afab-bcee69ae0915",
        "label": "Ash / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "4b206db1-9333-49c1-a211-f9b9db91e428",
        "label": "Ash / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "1d941a56-7129-4b9f-a3e1-994b95350009",
        "label": "Ash / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "21d2dba6-d9f6-47b3-9b48-c3c98defc45f",
        "label": "Ash / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "b5bbfa65-82ba-47dd-9035-c66c1ff53ac3",
        "label": "Ash / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "2257fb3d-8fc0-4892-bc4a-320d541cd2cf",
        "label": "Ash / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "8accce35-e66b-4221-b9b2-0e319527fc89",
        "label": "Ash / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "0a1b7100-e326-4baf-8a9d-72060b543cdc",
        "label": "Chocolate / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "9eb9d0e6-5f0c-4016-9767-9b3ed5005807",
        "label": "Chocolate / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "b1b63fa0-72d4-4c4b-9ae1-4b1da1266b27",
        "label": "Chocolate / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "ff6a2ff6-cc7c-416d-904d-67ffb0084938",
        "label": "Chocolate / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "4f77e6bd-70fe-4199-b15c-3d091c83d7f0",
        "label": "Chocolate / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "20252f56-50ea-468c-a1eb-8624f7b73cef",
        "label": "Chocolate / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "9355fd1c-6ef8-4c45-a9a8-2a8318fae901",
        "label": "Chocolate / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "df63d694-ea55-48e6-8063-d8e2bda0e101",
        "label": "Chocolate / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "1fe082cc-1e81-4a36-8e2a-53ad24e85a71",
        "label": "Cashew / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "cba2955d-1771-46a2-8c79-ae1af9bebd6e",
        "label": "Cashew / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "5e9a3578-8bee-40f6-ac29-5855f770e928",
        "label": "Cashew / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "6bd8ad4c-69e4-4e60-8b4b-789d41f807fc",
        "label": "Cashew / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "f60848b1-e1eb-405d-bdd6-a1b1de9b52ab",
        "label": "Cashew / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "3c12f3d0-2d45-4f24-a897-b46dd47b8e9f",
        "label": "Cashew / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "37059de7-7724-401c-ae45-1564a0383393",
        "label": "Cashew / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "600df027-1399-4753-98e6-0d97bd5de453",
        "label": "Cashew / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "65a2bfe1-d18d-4467-b27e-dff836e2caae",
        "label": "Cornflower / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "4b5c9733-78fd-424f-a46e-eaccda5ff30c",
        "label": "Cornflower / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "2b3519ed-31d1-42aa-9672-397de02ff06e",
        "label": "Cornflower / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "a454a803-41a3-462f-83e5-d87ca611911c",
        "label": "Cornflower / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "f64e6720-49f4-415d-8f72-751ecaa06ef3",
        "label": "Cornflower / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "4edc46b9-4e35-443d-8976-a736b1d9b7c0",
        "label": "Cornflower / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "6e667f20-6846-4c48-afcf-9a72c7529bc5",
        "label": "Cornflower / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "400e5e7f-fce6-4703-8879-f29f7c14cd8a",
        "label": "Cornflower / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "07880aeb-af65-408f-bef9-68c34ce069fe",
    "name": "The Essential Sofa in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Sofa",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-sofa-in-upcycled-poly",
    "description": "The Essential Sofa is a modern, sustainable sofa designed for everyday comfort. Crafted with FSC-certified wood and durable, non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-256.png",
        "alt": "The Essential Sofa in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "6beb8f2f-76c9-45c8-989b-8cfae602653e",
        "label": "Oat / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "7013902f-9b4c-4dda-8d53-4044d0b860a2",
        "label": "Oat / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "75b8a896-95f4-431b-8a30-886193eb5015",
        "label": "Oat / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "824ceff7-17c8-42d6-acc9-8c1e8b854163",
        "label": "Oat / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "e3dcb393-fb87-46bd-b370-91f2dc3e88b3",
        "label": "Oat / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "51ed27de-b95a-4289-9d78-70e17595e48e",
        "label": "Oat / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "eb9652b0-cb12-4f2f-a1f6-61e073383aff",
        "label": "Moon / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "4f7d8091-7a67-4449-8b22-fdc1e7335bbc",
        "label": "Moon / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "54362e01-21f9-4ba0-9272-169239af6810",
        "label": "Moon / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "550e0407-1a2f-425d-9dec-2eb9d4631f7f",
        "label": "Moon / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "ed5fbd82-8b4f-42b2-93c7-e850803273e8",
        "label": "Moon / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "7d3a11b5-35ee-482f-b4fb-6972ea562c24",
        "label": "Moon / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "171e9c62-daf5-4a6c-8556-0c933f216d58",
        "label": "Midnight / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "84144fda-f7d8-4a3d-b81c-26ea4c144532",
        "label": "Midnight / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "6c20644b-0782-4902-8790-f3af60758e3b",
        "label": "Midnight / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "feaf98e9-5147-4e76-b33c-89308ec84f3c",
        "label": "Midnight / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "bceab0e4-e781-4f90-9a17-767f32c734f1",
        "label": "Midnight / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "e0cd73dc-16d5-42ae-9967-78d469e32669",
        "label": "Midnight / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "73b38a9d-9549-43bf-a0d5-a560ff007f8b",
        "label": "Farro / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "ad3cf34c-ed7a-4de2-9ba8-2845eb30cadf",
        "label": "Farro / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "21d585e7-330e-4291-89d5-c9cdd8da08fc",
        "label": "Farro / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "e3d15500-2cda-479a-8364-c9bb5436ac51",
        "label": "Farro / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "5ce3a8ed-95dd-4bcb-b811-910380478f33",
        "label": "Farro / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "42093c10-e5b0-49d7-bfe4-835bb067ee55",
        "label": "Farro / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "222f5e49-061a-4266-9c86-ec3413a3c0fd",
        "label": "Shadow / Natural Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "b8b129da-a7e5-4be0-bbbe-e07a08c65265",
        "label": "Shadow / Natural Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "34c482dc-932c-4f88-b708-b4f825371dd7",
        "label": "Shadow / Dark Brown Legs / Bench Cushion",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "8fab9d0b-96bf-4d54-b296-a90df8480bbb",
        "label": "Shadow / Dark Brown Legs / Individual Cushions",
        "priceCents": 159500,
        "available": true
      },
      {
        "id": "e8e1d84f-72f1-40d2-8699-1b0d75eecc0c",
        "label": "Shadow / Metal Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "8c79691a-619d-441e-b48d-889368e8515a",
        "label": "Shadow / Metal Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "beae7183-bc3a-4aeb-aa20-eb42335c1c1d",
        "label": "Oat / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "9b441b84-a9b2-464e-9b25-c90b03069440",
        "label": "Oat / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "3d7c72b1-76eb-4e6c-bd44-3d02aa4888bf",
        "label": "Moon / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "f308c8df-ec38-4cc7-9111-d9c4f3342a09",
        "label": "Moon / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "29652235-2a88-49d4-9b20-cf81117bf462",
        "label": "Midnight / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "6d76fc00-7451-4901-ba6e-75d68ab1b16c",
        "label": "Midnight / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "c279a50c-67a9-4967-a60f-7fc79aa1ec73",
        "label": "Farro / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "e347f86e-4e9f-472d-8f51-4a3ded333ea3",
        "label": "Farro / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "af8b37c8-fbd8-4b8b-acea-b9d42fc35053",
        "label": "Shadow / Cylinder Legs / Bench Cushion",
        "priceCents": 169500,
        "available": true
      },
      {
        "id": "803d57e6-151c-47b2-a6f8-0bda9973188b",
        "label": "Shadow / Cylinder Legs / Individual Cushions",
        "priceCents": 169500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "6fe263b4-42ba-40ca-b235-afb426e076a9",
    "name": "The Essential Storage Bench in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Storage Bench",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-storage-bench-in-hemp-blend",
    "description": "Introducing our Essential Storage Bench: a versatile solution that seamlessly merges style with sustainable storage innovation. Luxuriously wrapped in Cocolok for comfort and fortified with Natural Muslin for durability, this bench offers both sophisticated aesthetics and practical storage solutions. With compatibility with all ESL leg options (including our all new cylinder legs) and glue-free upholstery, it's a chic and eco-conscious addition to any space. Experience the perfect harmony of functionality and sustainability.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-257.png",
        "alt": "The Essential Storage Bench in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "404132e3-888d-43c3-9cd6-14b9ed416199",
        "label": "Natural / Natural Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "a8a4e5d2-bffe-4d75-8d4a-1e0f4e839f18",
        "label": "Natural / Dark Brown Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "89c8372f-22b5-4112-80ed-04a7429762d1",
        "label": "Natural / Metal Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "9af87304-574f-436a-9f16-a67374c2f114",
        "label": "Natural / Cylinder Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "10c45e1a-0885-4458-9661-358ddb4ee30e",
        "label": "Sand / Natural Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "316df6bd-bc49-45f1-b859-ad7a420847d7",
        "label": "Sand / Dark Brown Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "593a6156-b0fc-41e3-99f8-73c35657fd80",
        "label": "Sand / Metal Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "4d073d5d-995b-46b5-b297-a2762aaf3b61",
        "label": "Sand / Cylinder Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "40405494-f9fa-4765-9cb6-16d33839b63e",
        "label": "Fir / Natural Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "f68b5179-72d0-4550-bd90-a768cc734336",
        "label": "Fir / Dark Brown Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "503e66df-8d2e-45bf-9730-2636f1594ffa",
        "label": "Fir / Metal Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "544c71b7-526b-434d-961a-037f3be51dd5",
        "label": "Fir / Cylinder Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "6630e7d4-f3e6-4547-b590-2984ad4b0866",
        "label": "Thistle / Natural Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "188f1f01-06b0-4d42-9c6d-aa951cfe6dcf",
        "label": "Thistle / Dark Brown Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "b56739c2-b6da-45bc-aa96-c745d1661bff",
        "label": "Thistle / Metal Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "8b4d8f08-55a9-4e1c-8813-d82eb3db5f46",
        "label": "Thistle / Cylinder Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "874b526f-23ab-4a24-bd48-360b0bbbc99c",
        "label": "Fog / Natural Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "1e603dcb-ccd3-4a31-9739-307825f10e4c",
        "label": "Fog / Dark Brown Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "3c3b5f25-55c5-4377-ba1a-90659d86235a",
        "label": "Fog / Metal Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "10555d65-3870-45c2-ad9e-5d0fe4f9635e",
        "label": "Fog / Cylinder Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "fb5f9d2f-19f3-4c4d-97ed-0fa6feb0595a",
        "label": "Redwood / Natural Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "59bc8cb6-a60d-4f6a-95d1-663c2d6bde95",
        "label": "Redwood / Dark Brown Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "3419708e-29e3-4104-a0af-410c2bc0530c",
        "label": "Redwood / Metal Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "16f45d2a-17fb-4e25-9a09-b5cec7f0e32f",
        "label": "Redwood / Cylinder Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "c4797894-8090-4192-87ac-4619a4052159",
        "label": "Brick / Natural Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "348643c7-c7d3-44e9-93d4-fdba8c35c46b",
        "label": "Brick / Dark Brown Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "644f429c-1795-4426-af16-9b57af322ecb",
        "label": "Brick / Metal Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "5bcfe617-45d2-44ba-bae4-4f9fdeb49894",
        "label": "Brick / Cylinder Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "d0511d46-76e8-457c-b510-4a7bf19cc7c6",
        "label": "Cobalt / Natural Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "558be5a2-6d90-443d-ba56-f3ffdb579048",
        "label": "Cobalt / Dark Brown Legs",
        "priceCents": 72500,
        "available": true
      },
      {
        "id": "858d79ea-696e-4ddd-9d42-7a5d086a831b",
        "label": "Cobalt / Metal Legs",
        "priceCents": 79500,
        "available": true
      },
      {
        "id": "eff334d2-07a2-4a70-a6c6-7b4297b71378",
        "label": "Cobalt / Cylinder Legs",
        "priceCents": 79500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "6e230cb6-43d1-4211-b23e-fe41f5dbd6f7",
    "name": "The Essential Storage Bench in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Storage Bench",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-storage-bench-in-recycled-velvet",
    "description": "Introducing our Essential Storage Bench: a versatile solution that seamlessly merges style with sustainable storage innovation. Luxuriously wrapped in Cocolok for comfort and fortified with Natural Muslin for durability, this bench offers both sophisticated aesthetics and practical storage solutions. With compatibility with ESL leg options and glue-free upholstery, it's a chic and eco-conscious addition to any space. Experience the perfect harmony of functionality and sustainability.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-258.png",
        "alt": "The Essential Storage Bench in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "ad9f3260-67d3-4fce-a353-0e474a77d4ed",
        "label": "Moss / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "2ede0c00-f334-4f12-97a1-2d76991efe01",
        "label": "Moss / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "929d379a-f008-4e3e-b7d0-782a04130c34",
        "label": "Moss / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "b4968a85-e509-4e2c-9c6f-96c3edffa4e8",
        "label": "Moss / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "95729013-8b71-4594-bcf4-d017d905feb1",
        "label": "Mustard / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "ad88bfa1-b375-4bf2-8de8-1add5596b9a4",
        "label": "Mustard / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "325b933b-c6f8-45cc-9b1a-228be2ad8d51",
        "label": "Mustard / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "7dd81e00-2b9e-4ccc-a837-97e356cd5eee",
        "label": "Mustard / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "a3658e95-a459-4106-befd-ae9819f6a147",
        "label": "Indigo / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "3063180e-3912-4c6c-92a4-1f6334068ab1",
        "label": "Indigo / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "9e5a8158-98fe-4deb-8d06-dd7a2d4fe7e9",
        "label": "Indigo / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "ea064841-1cd0-4d00-b3e1-11d3a9b28d46",
        "label": "Indigo / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "48febf23-d3df-4ef2-a3b4-ec5a4eb9df1b",
        "label": "Dusty Rose / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "b7ddd60e-f29c-4152-b637-41972d75ec97",
        "label": "Dusty Rose / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "695a7f5e-5cb7-4481-8120-9f327ef3534b",
        "label": "Dusty Rose / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "c9805983-f9d0-4cfd-b5ac-3e3791657774",
        "label": "Dusty Rose / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "26a013b0-a0a8-4fbc-9974-c9ee50107c54",
        "label": "Seafoam / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "d8d9be68-5f60-43a8-8644-a6a09fbb18f9",
        "label": "Seafoam / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "bc70620f-d2c8-4526-98c2-7b76074f7951",
        "label": "Seafoam / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "b996e76f-df70-4553-98bb-68769b85fa3a",
        "label": "Seafoam / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "f52431d7-7ba6-44e8-a7f8-57d87fe5dc66",
        "label": "Amber / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "791df843-27e4-453a-8b67-31eed5782c91",
        "label": "Amber / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "c2f3aa72-0fcc-470b-abd5-e296b9c7a026",
        "label": "Amber / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "ae0f2274-058f-4327-9ad8-77055b3cc0d6",
        "label": "Amber / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "d3bf0572-4ba9-45fb-9b43-ce81d12104ff",
        "label": "Ash / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "cb49fed0-3d2a-40d2-8514-689e839afebc",
        "label": "Ash / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "be92c627-37b1-42d4-9b74-8a1884633572",
        "label": "Ash / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "d0e3c69d-ac9a-4c61-903f-4a9cd9578020",
        "label": "Ash / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "941e06a7-adaf-4ccd-9dd8-20a270e0b7d9",
        "label": "Chocolate / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "7f655dbb-d8f1-452b-be5f-75430cd25bb6",
        "label": "Chocolate / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "d2da060b-7e02-4aec-b78c-5ed9c49db44f",
        "label": "Chocolate / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "6af7ac06-bb8c-4652-9ca6-ec2df7ff5671",
        "label": "Chocolate / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "863dcdd7-9f36-411c-83fd-641e06b798c8",
        "label": "Cashew / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "0e4087db-9d3f-4cff-aacf-1afe4ed24317",
        "label": "Cashew / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "e8634a51-773e-49d8-8808-b512651250c2",
        "label": "Cashew / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "8dfefae5-0ebf-45b9-b556-714e14f6ab24",
        "label": "Cashew / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "c0983af2-f984-4d62-91cc-128028567205",
        "label": "Cornflower / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "12d22f39-99ac-44ca-a732-ac98769668d4",
        "label": "Cornflower / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "14061799-40de-4c6c-afbe-921a034cb5cc",
        "label": "Cornflower / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "cf8ece9e-031e-458e-b363-e78c0e7b2f43",
        "label": "Cornflower / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f95b2b83-fdb7-40d7-82a4-d4733ba9823e",
    "name": "The Essential Storage Bench in Upcycled Poly",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Storage Bench",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-essential-storage-bench-in-upcycled-poly",
    "description": "Introducing our Essential Storage Bench: a versatile solution that seamlessly merges style with sustainable storage innovation. Luxuriously wrapped in Cocolok for comfort and fortified with Natural Muslin for durability, this bench offers both sophisticated aesthetics and practical storage solutions. With compatibility with ESL leg options and glue-free upholstery, it's a chic and eco-conscious addition to any space. Experience the perfect harmony of functionality and sustainability.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-259.png",
        "alt": "The Essential Storage Bench in Upcycled Poly by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "fed46101-f6e6-47b2-b254-92b780c8ff23",
        "label": "Oat / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "0bf79046-9c1e-47cd-b114-6e55449cd782",
        "label": "Oat / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "9f252004-e4b5-4da9-89d8-5e18dc0d2817",
        "label": "Oat / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "bdc20525-3713-467d-93fa-2a06a19ddc19",
        "label": "Oat / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "9edbd590-bcff-4db4-b866-c8d2149fc3dd",
        "label": "Moon / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "1b620ddd-134a-4c3c-a5a7-0b5ac7711ddd",
        "label": "Moon / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "4caa924d-2b14-4918-bfda-ba1b9b2c22e7",
        "label": "Moon / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "467f97d0-6bf0-434a-8302-6513bdab87c9",
        "label": "Moon / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "91bf3134-9aec-4689-9acd-b89324c60143",
        "label": "Farro / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "8132ba2b-6fa1-4c88-9d3c-80215d69fa49",
        "label": "Farro / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "e6ea02bb-d99f-4dde-8423-2c8a305e915f",
        "label": "Farro / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "f00c7ed9-829a-49da-8598-39a8fa115733",
        "label": "Farro / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "95a39df4-fbe0-4182-9e2f-38394161916f",
        "label": "Midnight / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "6bafc294-2f09-4923-8270-7b95b024c719",
        "label": "Midnight / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "8835c4dd-426e-409c-8682-aca0f7f48885",
        "label": "Midnight / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "3bd312c8-2b6c-4beb-8c25-3594adb61c7c",
        "label": "Midnight / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "cd5ef767-1d39-471c-8bf2-df0546fe7b63",
        "label": "Shadow / Natural Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "c7106120-e07e-4b2e-bb61-da264fae92a5",
        "label": "Shadow / Dark Brown Legs",
        "priceCents": 64500,
        "available": true
      },
      {
        "id": "a12ccd76-c947-4691-9d01-f9e40cde443a",
        "label": "Shadow / Metal Legs",
        "priceCents": 74500,
        "available": true
      },
      {
        "id": "d02ef82a-5612-477a-8125-522eb81cf6a4",
        "label": "Shadow / Cylinder Legs",
        "priceCents": 74500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "63f622b1-25f4-4838-83ce-adbac73fe436",
    "name": "The Evergreen Chair in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "chairs",
    "category": "Chair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-chair-in-hemp-blend",
    "description": "The Evergreen Chair is a high-back, supportive and comfortable slipcovered chair made in the USA with FSC-certified wood and PFAS-free, non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-260.png",
        "alt": "The Evergreen Chair in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "09a96588-58f3-4ab5-b4a5-b9a261c64f7f",
        "label": "Natural",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "dff3a02a-f9e4-4d3a-97a4-ccdd9ed471f2",
        "label": "Sand",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "576e6eca-15c3-48fa-94e0-c2f0d9cad997",
        "label": "Fir",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "349c8de6-98e5-4656-a738-df0f77e9ad5d",
        "label": "Thistle",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "82a7a730-d16c-4e66-8a71-a4906f00c48f",
        "label": "Fog",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "04b8b99f-a6cf-4df1-bd93-5f9edeb2f610",
        "label": "Field",
        "priceCents": 109500,
        "available": true
      },
      {
        "id": "6956e94f-77ab-43f1-8fbd-d69fe8281169",
        "label": "Yellow Clay",
        "priceCents": 109500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e7c30b64-75e6-4d38-95b3-6652d3b73421",
    "name": "The Evergreen Chair in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "chairs",
    "category": "Chair",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-chair-in-recycled-velvet",
    "description": "The Evergreen Chair is a high-back, supportive and comfortable slipcovered chair made in the USA with FSC-certified wood and PFAS-free, non-toxic materials.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-261.png",
        "alt": "The Evergreen Chair in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "b4bcec02-92f4-4d97-8131-cf3b748644e2",
        "label": "Moss",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "b9b5cde3-e47e-4d0f-98d8-dd2b3986d1db",
        "label": "Indigo",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "4ae69bba-a429-4066-a21a-1bf90ddd70ec",
        "label": "Seafoam",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "12ed3563-6328-4651-a91c-c07dfd1e4a4b",
        "label": "Dusty Rose",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "72820296-26f5-4f6b-b5df-998f982291d8",
        "label": "Mustard",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "b8ab9ba5-2ca0-48f9-a391-c8a21c8f89d5",
        "label": "Chocolate",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "a0054b65-8b8b-4278-af66-99c97fd8cb02",
        "label": "Amber",
        "priceCents": 99500,
        "available": true
      },
      {
        "id": "cd0cd01e-6241-40d2-a4f5-304f131a2c74",
        "label": "Ash",
        "priceCents": 99500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "667bd48f-91af-41cd-be24-e69f5ef156f3",
    "name": "The Evergreen Loveseat in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-loveseat-in-hemp-blend",
    "description": "Introducing The Evergreen Collection: Timeless elegance meets planet-positive innovation. Our sloped arm, slipcovered, modular, repairable sofa exudes quiet luxury while embodying the latest standards in sustainable design. Crafted with non-toxic and natural materials, it offers classic style updated for a greener future. Innovations include hemp upholstery, known for its durability and eco-friendliness, and cocolok, derived from coconut fiber. With a focus on longevity, this sofa is modular and repairable, reducing waste and extending its lifespan. Upgrade your living space with The Evergreen Collection and embrace a sofa that combines timeless beauty with environmentally conscious craftsmanship. Experience luxury with a conscience.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-262.png",
        "alt": "The Evergreen Loveseat in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "8bc4e3c2-c781-4898-b0fb-670b35b4359e",
        "label": "Natural",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "507d70eb-27ed-48bd-912b-3da1a2476340",
        "label": "Sand",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "07ffedc5-4000-4c35-8f39-03dffac05fda",
        "label": "Fir",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "166f6f8a-46ff-47d1-a488-79245e25299a",
        "label": "Thistle",
        "priceCents": 199500,
        "available": true
      },
      {
        "id": "86fe681b-11a4-4448-8103-52a1a2514b9b",
        "label": "Fog",
        "priceCents": 199500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "60ab260f-b17e-4d8a-824c-d236b2e0b903",
    "name": "The Evergreen Loveseat in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Loveseat",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-loveseat-in-recycled-velvet",
    "description": "Introducing The Evergreen Collection: Timeless elegance meets planet-positive innovation. Our sloped arm, slipcovered, modular, repairable sofa exudes quiet luxury while embodying the latest standards in sustainable design. Crafted with non-toxic and natural materials, it offers classic style updated for a greener future. Innovations include hemp upholstery, known for its durability and eco-friendliness, and cocolok, derived from coconut fiber. With a focus on longevity, this sofa is modular and repairable, reducing waste and extending its lifespan. Upgrade your living space with The Evergreen Collection and embrace a sofa that combines timeless beauty with environmentally conscious craftsmanship. Experience luxury with a conscience.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-263.png",
        "alt": "The Evergreen Loveseat in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "74efbb77-5335-4e67-97f0-5a1f8856b170",
        "label": "Moss",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "e11260ac-0de6-433d-aac2-3ae73258f740",
        "label": "Indigo",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "0ef04b3b-0851-4ef0-b908-273a46efaae0",
        "label": "Seafoam",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "20b5835e-387a-48fd-955d-3d9c8c6c99a1",
        "label": "Dusty Rose",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "2b9b8d96-3d39-47a1-b598-3084eb61fec2",
        "label": "Mustard",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "92c82bb7-0c7a-404a-bc9f-f0fbae72a5f2",
        "label": "Chocolate",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "07f2e221-eb51-49cf-819b-45f19540ab92",
        "label": "Amber",
        "priceCents": 184500,
        "available": true
      },
      {
        "id": "5c222158-673c-4b1c-9929-b0d8495a47c0",
        "label": "Ash",
        "priceCents": 184500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "5fdea621-727a-40e1-8cc7-e79e8f06dfb6",
    "name": "The Evergreen Ottoman in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-ottoman-in-hemp-blend",
    "description": "Introducing The Evergreen Collection: Timeless elegance meets planet-positive innovation. Our sloped arm, slipcovered, modular, repairable sofa exudes quiet luxury while embodying the latest standards in sustainable design. Crafted with non-toxic and natural materials, it offers classic style updated for a greener future. Innovations include hemp upholstery, known for its durability and eco-friendliness, and cocolok, derived from coconut fiber. With a focus on longevity, this sofa is modular and repairable, reducing waste and extending its lifespan. Upgrade your living space with The Evergreen Collection and embrace a sofa that combines timeless beauty with environmentally conscious craftsmanship. Experience luxury with a conscience.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-264.png",
        "alt": "The Evergreen Ottoman in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "4df78afe-21e1-4df6-a15e-e6ce3491ae57",
        "label": "Natural",
        "priceCents": 49500,
        "available": true
      },
      {
        "id": "180a1082-3e7b-4c78-8ae9-fc82b89a48d5",
        "label": "Sand",
        "priceCents": 49500,
        "available": true
      },
      {
        "id": "b6fcd60b-3287-41b8-b970-6d2238bf7ed0",
        "label": "Fir",
        "priceCents": 49500,
        "available": true
      },
      {
        "id": "75b7eeeb-9fb1-458d-adbc-d8057ea7e22e",
        "label": "Thistle",
        "priceCents": 49500,
        "available": true
      },
      {
        "id": "b957f421-2563-4281-ae23-f1153b324e90",
        "label": "Fog",
        "priceCents": 49500,
        "available": true
      },
      {
        "id": "650bc558-8600-416e-9bd6-5bcb967db854",
        "label": "Field",
        "priceCents": 49500,
        "available": true
      },
      {
        "id": "ee0b1bdc-4f8b-465a-936e-c8ce0a14e980",
        "label": "Yellow Clay",
        "priceCents": 49500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "48232f6f-4d90-40e6-8435-b04457e81ea9",
    "name": "The Evergreen Ottoman in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-ottoman-in-recycled-velvet",
    "description": "Introducing The Evergreen Collection: Timeless elegance meets planet-positive innovation. Our sloped arm, slipcovered, modular, repairable sofa exudes quiet luxury while embodying the latest standards in sustainable design. Crafted with non-toxic and natural materials, it offers classic style updated for a greener future. Innovations include hemp upholstery, known for its durability and eco-friendliness, and cocolok, derived from coconut fiber. With a focus on longevity, this sofa is modular and repairable, reducing waste and extending its lifespan. Upgrade your living space with The Evergreen Collection and embrace a sofa that combines timeless beauty with environmentally conscious craftsmanship. Experience luxury with a conscience.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-265.png",
        "alt": "The Evergreen Ottoman in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "0b4aa420-0edf-4b48-9039-9c37b8aaefdd",
        "label": "Moss",
        "priceCents": 44500,
        "available": true
      },
      {
        "id": "0566918f-4a43-4bcf-87a8-1bd9490c5893",
        "label": "Indigo",
        "priceCents": 44500,
        "available": true
      },
      {
        "id": "86d75e40-f5ee-40eb-a263-f113a127ade5",
        "label": "Seafoam",
        "priceCents": 44500,
        "available": true
      },
      {
        "id": "9a771608-f001-46fb-939a-c8a682c8a57c",
        "label": "Dusty Rose",
        "priceCents": 44500,
        "available": true
      },
      {
        "id": "76610282-5c9d-4189-9888-66aec00bdcd0",
        "label": "Mustard",
        "priceCents": 44500,
        "available": true
      },
      {
        "id": "0d987e68-9d4e-49f4-89f6-ba904a08bba9",
        "label": "Chocolate",
        "priceCents": 44500,
        "available": true
      },
      {
        "id": "22c4e002-3bad-4ebe-85b6-604cb5c57a09",
        "label": "Amber",
        "priceCents": 44500,
        "available": true
      },
      {
        "id": "a3d59b83-6e95-461f-b315-6362beda6332",
        "label": "Ash",
        "priceCents": 44500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "9e2c9cfb-e097-49d1-baf8-4dcfbdff00fd",
    "name": "The Evergreen Sofa in Hemp Blend",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-sofa-in-hemp-blend",
    "description": "Introducing The Evergreen Collection: Timeless elegance meets planet-positive innovation. Our sloped arm, slipcovered, modular, repairable sofa exudes quiet luxury while embodying the latest standards in sustainable design. Crafted with non-toxic and natural materials, it offers classic style updated for a greener future. Innovations include hemp upholstery, known for its durability and eco-friendliness, and cocolok, derived from coconut fiber. With a focus on longevity, this sofa is modular and repairable, reducing waste and extending its lifespan. Upgrade your living space with The Evergreen Collection and embrace a sofa that combines timeless beauty with environmentally conscious craftsmanship. Experience luxury with a conscience.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-266.png",
        "alt": "The Evergreen Sofa in Hemp Blend by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "c5356045-b8f6-45a5-913a-24e05d24176e",
        "label": "Natural",
        "priceCents": 274500,
        "available": true
      },
      {
        "id": "4885da3d-7d93-4ce4-9ce6-3d9b044dfa6c",
        "label": "Sand",
        "priceCents": 274500,
        "available": true
      },
      {
        "id": "cb454beb-756f-4d68-a267-b5d1f26e0459",
        "label": "Fir",
        "priceCents": 274500,
        "available": true
      },
      {
        "id": "03ac6369-98af-4092-b2ea-e09c2d97ccf5",
        "label": "Thistle",
        "priceCents": 274500,
        "available": true
      },
      {
        "id": "f72ef16e-b1da-461f-9e87-1fcc27373422",
        "label": "Fog",
        "priceCents": 274500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "f6629c10-6b02-46b1-9089-6fb268871b78",
    "name": "The Evergreen Sofa in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Standard Sofa",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-sofa-in-recycled-velvet",
    "description": "Introducing The Evergreen Collection: Timeless elegance meets planet-positive innovation. Our sloped arm, slipcovered, modular, repairable sofa exudes quiet luxury while embodying the latest standards in sustainable design. Crafted with non-toxic and natural materials, it offers classic style updated for a greener future. Innovations include hemp upholstery, known for its durability and eco-friendliness, and cocolok, derived from coconut fiber. With a focus on longevity, this sofa is modular and repairable, reducing waste and extending its lifespan. Upgrade your living space with The Evergreen Collection and embrace a sofa that combines timeless beauty with environmentally conscious craftsmanship. Experience luxury with a conscience.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-267.png",
        "alt": "The Evergreen Sofa in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "ee710559-e0c1-4a8c-aae3-6d18b4f94687",
        "label": "Moss",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "b921477b-25b9-4364-ad18-6dda7e41287b",
        "label": "Indigo",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "e29e4760-5b0b-4790-b8a3-26940446ef95",
        "label": "Seafoam",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "caffa39f-b4bf-4bdd-961e-ada8e5ac0152",
        "label": "Dusty Rose",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "f267c09f-2e69-47a7-bd44-50a13d2f12eb",
        "label": "Mustard",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "881230e0-332b-4793-b3c0-3ff348ff45fe",
        "label": "Chocolate",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "2bb2e179-32c8-468c-8371-46d7f7e99012",
        "label": "Amber",
        "priceCents": 249500,
        "available": true
      },
      {
        "id": "b022c4d8-48c3-4f39-8da5-173f82405dcc",
        "label": "Ash",
        "priceCents": 249500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "db2e25f5-3738-4edc-bb94-7962aa0f25b8",
    "name": "The Evergreen Storage Ottoman in Hemp",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Storage Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-storage-ottoman-in-hemp",
    "description": "Introducing our Evergreen Storage Ottoman: where sustainability meets storage innovation. Cocolok wraps the frame exterior, providing all-natural cushioning on the ottoman top, while Natural Muslin ensures lasting durability inside and under the upholstery. With legs securely attached for stability and no glues used in upholstery, it's as eco-conscious as it is stylish. Available in Hemp or Velvet fabrics, this ottoman offers both comfort and discreet storage solutions.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-268.png",
        "alt": "The Evergreen Storage Ottoman in Hemp by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "d967e562-f623-48dc-ac50-07a114b8d096",
        "label": "Natural",
        "priceCents": 67500,
        "available": true
      },
      {
        "id": "f6b76ab8-fdaa-4968-a810-221e69cac89d",
        "label": "Fog",
        "priceCents": 67500,
        "available": true
      },
      {
        "id": "1b2542b5-7f3c-43c2-8e4e-aaea48d4a7c0",
        "label": "Sand",
        "priceCents": 67500,
        "available": true
      },
      {
        "id": "064ac6a4-37cb-4cbb-874b-a6c64977a6d6",
        "label": "Thistle",
        "priceCents": 67500,
        "available": true
      },
      {
        "id": "72c6a7e3-8366-43b3-8e24-cb9512dd0f58",
        "label": "Fir",
        "priceCents": 67500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "7e824129-d5a8-4de4-a1d2-ac7a600a0e45",
    "name": "The Evergreen Storage Ottoman in Recycled Velvet",
    "brand": "Sabai Design",
    "productType": "Product",
    "category": "Storage Ottoman",
    "roomTypes": [],
    "tags": [
      "Sabai Design",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/the-evergreen-storage-ottoman-in-recycled-velvet",
    "description": "Introducing our Evergreen Storage Ottoman: where sustainability meets storage innovation. Cocolok wraps the frame exterior, providing all-natural cushioning on the ottoman top, while Natural Muslin ensures lasting durability inside and under the upholstery. With legs securely attached for stability and no glues used in upholstery, it's as eco-conscious as it is stylish. Available in Hemp or Velvet fabrics, this ottoman offers both comfort and discreet storage solutions.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-269.png",
        "alt": "The Evergreen Storage Ottoman in Recycled Velvet by Sabai Design"
      }
    ],
    "variants": [
      {
        "id": "ffdc5524-4269-4d03-9334-3ce6d1c5648f",
        "label": "Moss",
        "priceCents": 59500,
        "available": true
      },
      {
        "id": "ad527517-a6ce-4916-84ef-0d7fffcc0e24",
        "label": "Mustard",
        "priceCents": 59500,
        "available": true
      },
      {
        "id": "c1ecf3d5-3dac-40b9-bf21-eb3a78fc775e",
        "label": "Indigo",
        "priceCents": 59500,
        "available": true
      },
      {
        "id": "4f4a34b4-1450-4f1e-b01d-af3dfa8d568d",
        "label": "Dusty Rose",
        "priceCents": 59500,
        "available": true
      },
      {
        "id": "b7665444-444e-4e1d-a93a-8460774eb9ca",
        "label": "Seafoam",
        "priceCents": 59500,
        "available": true
      },
      {
        "id": "0214bb5c-edd9-455e-b3d2-c0b1c0ac7e46",
        "label": "Amber",
        "priceCents": 59500,
        "available": true
      },
      {
        "id": "cf6552d6-0203-4c2e-9a40-62050a8419df",
        "label": "Ash",
        "priceCents": 59500,
        "available": true
      },
      {
        "id": "4039ee71-4954-4022-b945-b07a8a9157cd",
        "label": "Chocolate",
        "priceCents": 59500,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3f108b1a-79b2-4b94-8c0b-81520b2263bd",
    "name": "Topa Topa Dining Table - Mocha",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/topa-topa-dining-table-mocha",
    "description": "Made of solid white oak, the Topa Topa Dining Table in Mocha is designed to bring a playful look to your space. Introduced in a new Mocha color, this finish evokes a sense of warmth and nostalgia. The piece has an oil finish used to highlight the beautiful grain of the wood, topped with a protective coating for durable protection against food and liquid spills. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Please reach out for custom sizing inquiries. Wood Disclaimer: The solid wood should be viewed as a living breathing material. It's substantial thickness can lead to movement as it adjusts to new environments, especially those that are especially humid, dry, or sunny. This movement can lead to cracking during its initial adjustment period and is something that needs to be considered when making the decision to purchase a solid wood table.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-270.jpg",
        "alt": "Topa Topa Dining Table - Mocha by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "237eb229-f9d5-481e-a9e6-3bd103f9938d",
        "label": "Length: 72\"",
        "priceCents": 309000,
        "available": true
      },
      {
        "id": "906b5b13-a481-40cd-8069-3f123819b4f2",
        "label": "Length: 84\"",
        "priceCents": 319000,
        "available": true
      },
      {
        "id": "ece3dea4-9d66-4ba4-a2a3-4f576e4e5672",
        "label": "Length: 90\"",
        "priceCents": 329000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "b3193ad4-37f0-4691-9c1e-5396794112bd",
    "name": "Topa Topa Outdoor Dining Table",
    "brand": "House of Leon",
    "productType": "Product",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/topa-topa-outdoor-dining-table",
    "description": "The Outdoor Topa Topa Dining Table is a natural extension of our original Topa Topa, the first table we ever made and our bestseller. Crafted from solid teak and reimagined for outdoor living, it retains the sculptural silhouette of the original while introducing a slatted tabletop designed to withstand the elements and allow for natural drainage. Named after the Topa Topa Mountain Range that lines the Ojai Valley, the table balances soft curves with the natural resilience of teak, bringing the familiar character of Topa Topa outdoors. Over time, the teak will soften and silver with exposure to the elements, taking on the character of the environment around it. Built to be lived with outdoors, season after season.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-271.jpg",
        "alt": "Topa Topa Outdoor Dining Table by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "fddd1251-bc1a-46c9-9f57-f848e8865bc7",
        "label": "Default Title",
        "priceCents": 479000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e75de1b4-d3f3-448d-9d49-86e188be10f0",
    "name": "Topa Topa Rectangular Dining Table - Black",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/topa-topa-rectangular-dining-table-black",
    "description": "Made of solid white oak, the Topa Topa Dining Table is designed to bring a playful look to your space with conical legs, rounded edges, and Scandinavian design. Named after the Topa Topa Mountain Range that lines the Ojai Valley, the Topa Topa Table is a constant crowd pleaser. An oil-based black stain is used to protect and accentuate the natural grain of the white oak. The piece's oil finish is topped with 3 protective coatings of matte/non-glossy polyurethane for durable protection against food and liquid spills. Please reach out for custom sizing inquiries.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-272.jpg",
        "alt": "Topa Topa Rectangular Dining Table - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "6838cad1-e00d-4761-816f-90c059f3ba80",
        "label": "Length: 72\"",
        "priceCents": 309000,
        "available": true
      },
      {
        "id": "f49d7450-5b81-4020-b799-e42aa98ec542",
        "label": "Length: 84\"",
        "priceCents": 319000,
        "available": true
      },
      {
        "id": "d6404ad4-9fbf-4738-9120-ed51f9527d03",
        "label": "Length: 90\"",
        "priceCents": 329000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "e8812c1c-6920-4044-8f9a-1a2a7ae495dd",
    "name": "Topa Topa Rectangular Dining Table - Natural",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/topa-topa-rectangular-dining-table-natural",
    "description": "Made of solid Ash wood, the Topa Topa Dining Table is designed to bring a playful look to your space. Named after the Topa Topa Mountain Range that lines the Ojai Valley, the Topa Topa Table is a constant crowd pleaser. Using its own beautiful grain, a subtle white wash under a clear finish is used to protect and accentuate its existing beauty. The piece is finished with a protective coating for durable protection against food and liquid spills. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Please reach out for custom sizing inquiries. Wood Disclaimer: The solid wood should be viewed as a living breathing material. It's substantial thickness can lead to movement as it adjusts to new environments, especially those that are especially humid, dry, or sunny. This movement can lead to cracking during its initial adjustment period and is something that needs to be considered when making the decision to purchase a solid wood table.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-273.jpg",
        "alt": "Topa Topa Rectangular Dining Table - Natural by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "b1411c41-e51b-478e-b8bd-1950f48211fe",
        "label": "Length: 72\"",
        "priceCents": 309000,
        "available": true
      },
      {
        "id": "9e01edf2-2853-4e95-9b4a-7e8bf1d82ecc",
        "label": "Length: 84\"",
        "priceCents": 319000,
        "available": true
      },
      {
        "id": "3d32113c-8727-49d9-bd86-a13628f14c92",
        "label": "Length: 90\"",
        "priceCents": 329000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "583f8ef3-af8f-4c2e-80f6-e75b0ad96ba5",
    "name": "Topa Topa Rectangular Dining Table - Warm Oak",
    "brand": "House of Leon",
    "productType": "Kitchen & Dining Room Tables",
    "category": "Dining Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/topa-topa-rectangular-dining-table-warm-oak",
    "description": "Made of solid White Oak wood, the Topa Topa Dining Table is designed to bring a playful look to your space. Named after the Topa Topa Mountain Range that lines the Ojai Valley, the Topa Topa Table is a constant crowd pleaser. Using its own beautiful grain, a warm natural stain is used to protect and accentuate its existing beauty. The piece has an oil finish topped with 3 protective coatings of matte/non-glossy polyurethane for durable protection against food and liquid spills. Please note, our wood pieces, handmade by skilled woodworkers using locally sourced raw materials, vary by nature. As these pieces are not factory made, variations are to be expected and are what make each piece unique. Please reach out for custom sizing inquiries. Wood Disclaimer: The solid wood should be viewed as a living breathing material. It's substantial thickness can lead to movement as it adjusts to new environments, especially those that are especially humid, dry, or sunny. This movement can lead to cracking during its initial adjustment period and is something that needs to be considered when making the decision to purchase a solid wood table.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-274.jpg",
        "alt": "Topa Topa Rectangular Dining Table - Warm Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "5642496e-b185-43fa-840a-0e0ac7177ab6",
        "label": "Length: 72\"",
        "priceCents": 309000,
        "available": true
      },
      {
        "id": "883cc3ea-2326-49b1-8ff6-d470d897f87c",
        "label": "Length: 84\"",
        "priceCents": 319000,
        "available": true
      },
      {
        "id": "2f1abb71-87a6-4222-8b00-9219cee3275d",
        "label": "Length: 90\"",
        "priceCents": 329000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "049d5b65-f4a4-4891-8ea7-2c4a5c0c6e2f",
    "name": "Topa Topa Sofa",
    "brand": "House of Leon",
    "productType": "Sofas",
    "category": "Sofa",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/topa-topa-sofa",
    "description": "TOPA TOPA SOFA - BODY",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-275.jpg",
        "alt": "Topa Topa Sofa by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "3e42c357-77c2-482e-9dcd-9135086f24d0",
        "label": "Default Title",
        "priceCents": 389000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "dcfdf04e-ba42-4cf4-9852-48bf6167d94a",
    "name": "Umbra Towels",
    "brand": "Italic",
    "productType": "Home - Bath",
    "category": "Bath Towel",
    "roomTypes": [],
    "tags": [
      "Italic",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/umbra-towels",
    "description": "Australian Cotton, Perfected. Made from 100% Australian cotton at a plush 600 GSM, the Umbra towel wraps you in the kind of softness you feel the moment it touches your skin. The subtle triangular print adds quiet sophistication, while the quick-drying weave means it's always fresh for tomorrow. Dimensions Washcloth (set of 2): 13 in x 13 in (33 cm x 33 cm) Hand towel (set of 2): 16 in x 28 in (40.1 cm x 71.1 cm) Bath sheet (set of 2): 40 in x 65 in (101.6 cm x 165.1 cm) Materials 100% Australian Cotton Towels: 600 GSM Product Details 600 GSM towel with a 1.0 cm pile Soft and plush against the skin Absorbent and quick-drying for daily use Finished with a locker loop for easy drying We recommend washing towels before use Designed in the USA Standard Set Includes: 1x Washcloth (Set of 2) Deia Towels 1x Hand Towel (Set of 2) Umbra Towels 1x Bath Towel (Set of 2) Deia Towels Luxe Set Includes: 1x Washcloth (Set of 2) Umbra Towels 1x Hand Towel (Set of 2) Deia Towels 1x Bath Sheet (Set of 2) Umbra Towel s Family Set Includes 2x Deia Washcloth 2x Deia Hand towel 2x Deia Bath towel 2x Umbra Washcloth 2x Umbra Hand towel 2x Umbra Bath sheet 1x Ceramic candle Care Instructions Machine wash cold. Do not bleach. Tumble dry low.",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-276.jpg",
        "alt": "Umbra Towels by Italic"
      }
    ],
    "variants": [
      {
        "id": "c62e4962-72b1-4eed-ada4-033bd5a49cb1",
        "label": "Sage & Ecru / Washcloths (Set of 2)",
        "priceCents": 2500,
        "available": true
      },
      {
        "id": "4becc9d7-2c0c-4e4e-85ba-e0cd1c58daa3",
        "label": "Sage & Ecru / Hand Towels (Set of 2)",
        "priceCents": 4000,
        "available": true
      },
      {
        "id": "29492f8a-b34e-4a61-8f3f-1475f7a98900",
        "label": "Sage & Ecru / Bath Sheets (Set of 2)",
        "priceCents": 11500,
        "available": false
      },
      {
        "id": "bedbbb6f-47cd-4f8c-80b4-7d5fd1e384bc",
        "label": "Sage & Ecru / Standard Set (Set of 6 with Umbra Hand Towels)",
        "priceCents": 14400,
        "available": true
      },
      {
        "id": "1b442c6e-5b51-4ec8-899a-0dc056bd46eb",
        "label": "Sage & Ecru / Luxe Set (Set of 6 with Umbra Bath Sheets)",
        "priceCents": 18100,
        "available": false
      },
      {
        "id": "f705f663-75ea-41d9-8c95-6a5d8c0cdded",
        "label": "Sage & Ecru / Family Set (Set of 12)",
        "priceCents": 43400,
        "available": false
      },
      {
        "id": "366cb439-2de1-4329-aa6c-b4c759e4ffff",
        "label": "Sage & Ecru / Washcloths (Set of 4)",
        "priceCents": 5100,
        "available": true
      },
      {
        "id": "618ec4ba-30d2-4308-b8b0-6e4457f7f7a7",
        "label": "Sage & Ecru / Family Set (Set of 12 with FREE Candle)",
        "priceCents": 33800,
        "available": false
      },
      {
        "id": "967105ce-10f1-4ed7-9146-19017ac2ae32",
        "label": "Pink Sand & Ecru / Washcloths (Set of 2)",
        "priceCents": 3400,
        "available": false
      },
      {
        "id": "530008bd-f071-4757-9ebd-67be512246a4",
        "label": "Pink Sand & Ecru / Hand Towels (Set of 2)",
        "priceCents": 5400,
        "available": false
      },
      {
        "id": "8d17f85f-c67a-4df0-977a-c6ef9db488ca",
        "label": "Pink Sand & Ecru / Bath Sheets (Set of 2)",
        "priceCents": 15400,
        "available": false
      },
      {
        "id": "3f27747b-109f-488c-8e17-89dec07022f3",
        "label": "Pink Sand & Ecru / Standard Set (Set of 6 with Umbra Hand Towels)",
        "priceCents": 2300,
        "available": false
      },
      {
        "id": "ea512d88-4bfc-434d-88f7-d7c8fe947c2b",
        "label": "Pink Sand & Ecru / Luxe Set (Set of 6 with Umbra Bath Sheets)",
        "priceCents": 2300,
        "available": false
      },
      {
        "id": "a54db609-9648-4658-a84f-c3c1c85c1fc6",
        "label": "Pink Sand & Ecru / Family Set (Set of 12)",
        "priceCents": 2300,
        "available": false
      },
      {
        "id": "6f2a4116-feff-4d24-8a3c-ad7e70c99628",
        "label": "Pink Sand & Ecru / Washcloths (Set of 4)",
        "priceCents": 2300,
        "available": false
      },
      {
        "id": "cb5d5367-36f4-4ca0-96cb-412e89e2c4a2",
        "label": "Pink Sand & Ecru / Family Set (Set of 12 with FREE Candle)",
        "priceCents": 2300,
        "available": false
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "9210905f-d1de-4689-9f6a-3ada2309e487",
    "name": "Valley Side Table - Black",
    "brand": "House of Leon",
    "productType": "End Tables",
    "category": "Side Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/valley-side-table-black",
    "description": "The Ojai Valley Side Table in Black is designed to create interest in the eye of the viewer. With its tiered levels, geometric build, sleek structure, and built-in magazine rack, the piece delivers at every angle. Our Valley Side Tables are made of white oak veneer. The reason we opt for veneer for this piece is to achieve a thinness in design that would not be possible using solid wood, as solid wood would bend and warp when exposed to changes in humidity or harsh sunlight. *This piece can only be returned if sent back in the original packaging and internal protection is used. A 20% restocking fee will apply. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-277.jpg",
        "alt": "Valley Side Table - Black by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "2c48983a-e8b7-4c7c-b8fe-e5096cb2364c",
        "label": "Default Title",
        "priceCents": 65000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "85f8b3ab-5f5e-4533-bde1-31a3928a16f1",
    "name": "Valley Side Table - Stainless Steel",
    "brand": "House of Leon",
    "productType": "End Tables",
    "category": "Side Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/valley-side-table-stainless-steel",
    "description": "The Valley Side Table in Stainless Steel is designed to create interest in the eye of the viewer. With its tiered levels, geometric build, sleek structure, and built-in magazine rack, the piece delivers at every angle. The sharp corners have been sanded down to an unnoticeable, yet duller, point. *This piece can only be returned if sent back in the original packaging and internal protection is used. A 20% restocking fee will apply. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-278.jpg",
        "alt": "Valley Side Table - Stainless Steel by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "cd86b8c6-de7b-4a26-973d-c744678c58d0",
        "label": "Default Title",
        "priceCents": 99000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "3529d400-44cc-4747-97c7-0aa55e3dc55f",
    "name": "Valley Side Table - Walnut",
    "brand": "House of Leon",
    "productType": "Side Table",
    "category": "Side Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/valley-side-table-walnut",
    "description": "The Ojai Valley Side Table in Walnut is designed to create interest in the eye of the viewer. With its tiered levels, geometric build, sleek structure, and built-in magazine rack, the piece delivers at every angle. Our Valley Side Tables are made of walnut veneer. The reason we opt for veneer for this piece is to achieve a thinness in design that would not be possible using solid wood, as solid wood would bend and warp when exposed to changes in humidity or harsh sunlight. *This piece can only be returned if sent back in the original packaging and internal protection is used. A 20% restocking fee will apply. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-279.jpg",
        "alt": "Valley Side Table - Walnut by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "1664dd3b-0c88-4ef2-bd11-8bbb017f13f7",
        "label": "Default Title",
        "priceCents": 65000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  },
  {
    "id": "a071f019-90c7-4f32-b814-708d6cb6cd10",
    "name": "Valley Side Table - White Oak",
    "brand": "House of Leon",
    "productType": "End Tables",
    "category": "Side Table",
    "roomTypes": [],
    "tags": [
      "House of Leon",
      "Shopify Collective"
    ],
    "sourceUrl": "https://suede-9390.myshopify.com/products/valley-side-table-white-oak",
    "description": "The Ojai Valley Side Table in White Oak is designed to create interest in the eye of the viewer. With its tiered levels, geometric build, sleek structure, and built-in magazine rack, this sculptural piece delivers style at every angle while maintaining functionality. Our Valley Side Tables are made of white oak veneer. The reason we opt for veneer for this piece is to achieve a thinness in design that would not be possible using solid wood, as solid wood would bend and warp when exposed to changes in humidity or harsh sunlight. *This piece can only be returned if sent back in the original packaging and internal protection is used. A 20% restocking fee will apply. View Tear Sheet",
    "material": null,
    "dimensionsIn": {
      "width": null,
      "depth": null,
      "height": null
    },
    "images": [
      {
        "src": "/products/staging-280.jpg",
        "alt": "Valley Side Table - White Oak by House of Leon"
      }
    ],
    "variants": [
      {
        "id": "80f49ce6-9e12-40f2-8832-4ee1348f4e07",
        "label": "Default Title",
        "priceCents": 65000,
        "available": true
      }
    ],
    "availability": "in_stock",
    "leadTimeWeeks": null,
    "margin": null,
    "provenance": {
      "price": "verified",
      "availability": "verified",
      "leadTime": "unknown",
      "margin": "unknown"
    }
  }
];
