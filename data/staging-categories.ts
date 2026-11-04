/**
 * Complete category ontology copied from staging on 2026-09-15.
 * The local Next.js server queries local SQLite at runtime through local APIs.
 * It makes no remote runtime database, catalog, or image requests.
 */
export interface StagingCatalogCategory {
  id: number;
  slug: string;
  name: string;
  parentId: number | null;
  level: number;
  path: string;
  aliases: readonly string[];
  status: 'active' | 'deprecated';
  mergedIntoId: number | null;
}

export const STAGING_CATALOG_CATEGORIES: readonly StagingCatalogCategory[] = [
  {
    "id": 16,
    "slug": "art",
    "name": "Art",
    "parentId": null,
    "level": 1,
    "path": "art",
    "aliases": [
      "fine_art"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 474,
    "slug": "art_framed",
    "name": "Framed Art",
    "parentId": 16,
    "level": 2,
    "path": "art/framed",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 470,
    "slug": "art_original",
    "name": "Original Art",
    "parentId": 16,
    "level": 2,
    "path": "art/original",
    "aliases": [
      "painting"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 472,
    "slug": "art_photography",
    "name": "Photography",
    "parentId": 16,
    "level": 2,
    "path": "art/photography",
    "aliases": [
      "photo_print"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 473,
    "slug": "art_poster",
    "name": "Poster",
    "parentId": 16,
    "level": 2,
    "path": "art/poster",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 471,
    "slug": "art_print",
    "name": "Art Print",
    "parentId": 16,
    "level": 2,
    "path": "art/print",
    "aliases": [
      "giclee",
      "fine_art_print"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 475,
    "slug": "art_sculpture_fine",
    "name": "Fine Art Sculpture",
    "parentId": 16,
    "level": 2,
    "path": "art/sculpture",
    "aliases": [
      "artist_sculpture"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 477,
    "slug": "art_stationery",
    "name": "Stationery",
    "parentId": 16,
    "level": 2,
    "path": "art/stationery",
    "aliases": [
      "cards",
      "paper_goods"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 476,
    "slug": "art_textile_art",
    "name": "Textile Art",
    "parentId": 16,
    "level": 2,
    "path": "art/textile",
    "aliases": [
      "tapestry",
      "wall_hanging"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 18,
    "slug": "bath_body",
    "name": "Bath & Body",
    "parentId": null,
    "level": 1,
    "path": "bath_body",
    "aliases": [
      "home_fragrance"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 493,
    "slug": "bath_accessory",
    "name": "Bath Accessory",
    "parentId": 18,
    "level": 2,
    "path": "bath_body/accessory",
    "aliases": [
      "soap_dispenser",
      "tray",
      "organizer"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 492,
    "slug": "bath_body_care",
    "name": "Body Care",
    "parentId": 18,
    "level": 2,
    "path": "bath_body/body_care",
    "aliases": [
      "soap",
      "lotion"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 490,
    "slug": "bath_candle",
    "name": "Candle",
    "parentId": 18,
    "level": 2,
    "path": "bath_body/candle",
    "aliases": [
      "scented_candle"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 491,
    "slug": "bath_fragrance",
    "name": "Home Fragrance",
    "parentId": 18,
    "level": 2,
    "path": "bath_body/fragrance",
    "aliases": [
      "diffuser",
      "room_spray"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 494,
    "slug": "bath_incense",
    "name": "Incense",
    "parentId": 18,
    "level": 2,
    "path": "bath_body/incense",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 4,
    "slug": "beds",
    "name": "Beds",
    "parentId": null,
    "level": 1,
    "path": "beds",
    "aliases": [
      "sleep"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 254,
    "slug": "bed_bassinet",
    "name": "Bassinet",
    "parentId": 4,
    "level": 2,
    "path": "beds/bassinet",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 255,
    "slug": "bed_box_spring",
    "name": "Box Spring",
    "parentId": 4,
    "level": 2,
    "path": "beds/box_spring",
    "aliases": [
      "foundation"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 63,
    "slug": "bed_bunk",
    "name": "Bunk Bed",
    "parentId": 4,
    "level": 2,
    "path": "beds/bunk",
    "aliases": [
      "loft_bed"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 253,
    "slug": "bed_canopy",
    "name": "Canopy Bed",
    "parentId": 4,
    "level": 2,
    "path": "beds/canopy",
    "aliases": [
      "four_poster"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 250,
    "slug": "bed_crib",
    "name": "Crib",
    "parentId": 4,
    "level": 2,
    "path": "beds/crib",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 64,
    "slug": "bed_daybed",
    "name": "Daybed",
    "parentId": 4,
    "level": 2,
    "path": "beds/daybed",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 60,
    "slug": "bed_frame",
    "name": "Bed Frame",
    "parentId": 4,
    "level": 2,
    "path": "beds/frame",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 61,
    "slug": "bed_headboard",
    "name": "Headboard",
    "parentId": 4,
    "level": 2,
    "path": "beds/headboard",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 62,
    "slug": "bed_mattress",
    "name": "Mattress",
    "parentId": 4,
    "level": 2,
    "path": "beds/mattress",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 252,
    "slug": "bed_platform",
    "name": "Platform Bed",
    "parentId": 4,
    "level": 2,
    "path": "beds/platform",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 251,
    "slug": "bed_toddler",
    "name": "Toddler Bed",
    "parentId": 4,
    "level": 2,
    "path": "beds/toddler",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 7,
    "slug": "decor",
    "name": "Decor",
    "parentId": null,
    "level": 1,
    "path": "decor",
    "aliases": [
      "accessories"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 307,
    "slug": "decor_basket",
    "name": "Basket",
    "parentId": 7,
    "level": 2,
    "path": "decor/basket",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 303,
    "slug": "decor_bookends",
    "name": "Bookends",
    "parentId": 7,
    "level": 2,
    "path": "decor/bookends",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 311,
    "slug": "decor_bowl",
    "name": "Decorative Bowl",
    "parentId": 7,
    "level": 2,
    "path": "decor/bowl",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 306,
    "slug": "decor_candleholder",
    "name": "Candleholder",
    "parentId": 7,
    "level": 2,
    "path": "decor/candleholder",
    "aliases": [
      "taper_holder"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 305,
    "slug": "decor_clock",
    "name": "Clock",
    "parentId": 7,
    "level": 2,
    "path": "decor/clock",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 308,
    "slug": "decor_floral",
    "name": "Floral",
    "parentId": 7,
    "level": 2,
    "path": "decor/floral",
    "aliases": [
      "faux_florals",
      "dried_stems"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 309,
    "slug": "decor_hook",
    "name": "Hook",
    "parentId": 7,
    "level": 2,
    "path": "decor/hook",
    "aliases": [
      "wall_hook"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 90,
    "slug": "decor_mirror",
    "name": "Mirror",
    "parentId": 7,
    "level": 2,
    "path": "decor/mirror",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 312,
    "slug": "decor_objet",
    "name": "Objet",
    "parentId": 7,
    "level": 2,
    "path": "decor/objet",
    "aliases": [
      "curio"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 304,
    "slug": "decor_picture_frame",
    "name": "Picture Frame",
    "parentId": 7,
    "level": 2,
    "path": "decor/picture_frame",
    "aliases": [
      "frame"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 310,
    "slug": "decor_room_divider",
    "name": "Room Divider",
    "parentId": 7,
    "level": 2,
    "path": "decor/room_divider",
    "aliases": [
      "screen"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 91,
    "slug": "decor_rug",
    "name": "Rug",
    "parentId": 7,
    "level": 2,
    "path": "decor/rug",
    "aliases": [
      "carpet"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 320,
    "slug": "rug_area",
    "name": "Area Rug",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/area",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 325,
    "slug": "rug_hand_knotted",
    "name": "Hand-Knotted Rug",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/hand_knotted",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 329,
    "slug": "rug_kids",
    "name": "Kids Rug",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/kids",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 326,
    "slug": "rug_machine_made",
    "name": "Machine-Made Rug",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/machine_made",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 327,
    "slug": "rug_natural_fiber",
    "name": "Natural Fiber Rug",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/natural_fiber",
    "aliases": [
      "jute_rug",
      "sisal_rug"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 323,
    "slug": "rug_outdoor",
    "name": "Outdoor Rug",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/outdoor",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 322,
    "slug": "rug_round",
    "name": "Round Rug",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/round",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 321,
    "slug": "rug_runner",
    "name": "Runner",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/runner",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 328,
    "slug": "rug_vintage",
    "name": "Vintage Rug",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/vintage",
    "aliases": [
      "one_of_a_kind_rug"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 324,
    "slug": "rug_washable",
    "name": "Washable Rug",
    "parentId": 91,
    "level": 3,
    "path": "decor/rug/washable",
    "aliases": [
      "machine_washable_rug"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 301,
    "slug": "decor_sculpture",
    "name": "Sculpture",
    "parentId": 7,
    "level": 2,
    "path": "decor/sculpture",
    "aliases": [
      "figurine"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 302,
    "slug": "decor_tray",
    "name": "Tray",
    "parentId": 7,
    "level": 2,
    "path": "decor/tray",
    "aliases": [
      "catchall"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 300,
    "slug": "decor_vase",
    "name": "Vase",
    "parentId": 7,
    "level": 2,
    "path": "decor/vase",
    "aliases": [
      "vessel"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 92,
    "slug": "decor_wall_art",
    "name": "Wall Art",
    "parentId": 7,
    "level": 2,
    "path": "decor/wall_art",
    "aliases": [
      "art",
      "print"
    ],
    "status": "deprecated",
    "mergedIntoId": 471
  },
  {
    "id": 17,
    "slug": "kitchen",
    "name": "Kitchen",
    "parentId": null,
    "level": 1,
    "path": "kitchen",
    "aliases": [
      "kitchenware"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 481,
    "slug": "kitchen_bakeware",
    "name": "Bakeware",
    "parentId": 17,
    "level": 2,
    "path": "kitchen/bakeware",
    "aliases": [
      "baking_sheet",
      "cake_pan"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 480,
    "slug": "kitchen_cookware",
    "name": "Cookware",
    "parentId": 17,
    "level": 2,
    "path": "kitchen/cookware",
    "aliases": [
      "pots",
      "pans"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 484,
    "slug": "kitchen_cutlery",
    "name": "Cutlery",
    "parentId": 17,
    "level": 2,
    "path": "kitchen/cutlery",
    "aliases": [
      "knives",
      "knife_block"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 482,
    "slug": "kitchen_small_appliance",
    "name": "Small Appliance",
    "parentId": 17,
    "level": 2,
    "path": "kitchen/small_appliance",
    "aliases": [
      "blender",
      "toaster",
      "kettle"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 485,
    "slug": "kitchen_storage",
    "name": "Kitchen Storage",
    "parentId": 17,
    "level": 2,
    "path": "kitchen/storage",
    "aliases": [
      "canister",
      "food_storage"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 486,
    "slug": "kitchen_textiles",
    "name": "Kitchen Textiles",
    "parentId": 17,
    "level": 2,
    "path": "kitchen/textiles",
    "aliases": [
      "dish_towel",
      "apron",
      "oven_mitt"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 483,
    "slug": "kitchen_tool",
    "name": "Kitchen Tool",
    "parentId": 17,
    "level": 2,
    "path": "kitchen/tool",
    "aliases": [
      "utensils",
      "gadget"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 5,
    "slug": "lighting",
    "name": "Lighting",
    "parentId": null,
    "level": 1,
    "path": "lighting",
    "aliases": [
      "lamps"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 267,
    "slug": "light_ceiling_fan",
    "name": "Ceiling Fan",
    "parentId": 5,
    "level": 2,
    "path": "lighting/ceiling_fan",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 73,
    "slug": "light_chandelier",
    "name": "Chandelier",
    "parentId": 5,
    "level": 2,
    "path": "lighting/chandelier",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 269,
    "slug": "light_cordless",
    "name": "Cordless Lamp",
    "parentId": 5,
    "level": 2,
    "path": "lighting/cordless",
    "aliases": [
      "rechargeable_lamp"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 260,
    "slug": "light_desk",
    "name": "Desk Lamp",
    "parentId": 5,
    "level": 2,
    "path": "lighting/desk",
    "aliases": [
      "task_lamp"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 70,
    "slug": "light_floor",
    "name": "Floor Lamp",
    "parentId": 5,
    "level": 2,
    "path": "lighting/floor",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 261,
    "slug": "light_flush_mount",
    "name": "Flush Mount",
    "parentId": 5,
    "level": 2,
    "path": "lighting/flush_mount",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 266,
    "slug": "light_lantern",
    "name": "Lantern",
    "parentId": 5,
    "level": 2,
    "path": "lighting/lantern",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 270,
    "slug": "light_led_strip",
    "name": "LED Strip",
    "parentId": 5,
    "level": 2,
    "path": "lighting/led_strip",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 268,
    "slug": "light_outdoor_fixture",
    "name": "Outdoor Light",
    "parentId": 5,
    "level": 2,
    "path": "lighting/outdoor_fixture",
    "aliases": [
      "exterior_light"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 72,
    "slug": "light_pendant",
    "name": "Pendant Light",
    "parentId": 5,
    "level": 2,
    "path": "lighting/pendant",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 264,
    "slug": "light_picture",
    "name": "Picture Light",
    "parentId": 5,
    "level": 2,
    "path": "lighting/picture",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 74,
    "slug": "light_sconce",
    "name": "Wall Sconce",
    "parentId": 5,
    "level": 2,
    "path": "lighting/sconce",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 262,
    "slug": "light_semi_flush",
    "name": "Semi-Flush Mount",
    "parentId": 5,
    "level": 2,
    "path": "lighting/semi_flush",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 265,
    "slug": "light_string",
    "name": "String Lights",
    "parentId": 5,
    "level": 2,
    "path": "lighting/string",
    "aliases": [
      "fairy_lights"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 71,
    "slug": "light_table",
    "name": "Table Lamp",
    "parentId": 5,
    "level": 2,
    "path": "lighting/table",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 263,
    "slug": "light_track",
    "name": "Track Lighting",
    "parentId": 5,
    "level": 2,
    "path": "lighting/track",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 500,
    "slug": "other",
    "name": "Other",
    "parentId": null,
    "level": 1,
    "path": "other",
    "aliases": [
      "misc",
      "miscellaneous",
      "uncategorized"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 6,
    "slug": "outdoor",
    "name": "Outdoor",
    "parentId": null,
    "level": 1,
    "path": "outdoor",
    "aliases": [
      "patio",
      "garden"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 287,
    "slug": "outdoor_bar",
    "name": "Outdoor Bar",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/bar",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 286,
    "slug": "outdoor_chaise",
    "name": "Outdoor Chaise",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/chaise",
    "aliases": [
      "sun_lounger"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 80,
    "slug": "outdoor_dining_set",
    "name": "Outdoor Dining Set",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/dining_set",
    "aliases": [
      "patio_set"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 280,
    "slug": "outdoor_fire_pit",
    "name": "Fire Pit",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/fire_pit",
    "aliases": [
      "fire_table"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 282,
    "slug": "outdoor_hammock",
    "name": "Hammock",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/hammock",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 81,
    "slug": "outdoor_lounge",
    "name": "Outdoor Lounge",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/lounge",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 285,
    "slug": "outdoor_pillow",
    "name": "Outdoor Pillow",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/pillow",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 284,
    "slug": "outdoor_planter",
    "name": "Planter",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/planter",
    "aliases": [
      "plant_stand",
      "pot"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 281,
    "slug": "outdoor_sofa",
    "name": "Outdoor Sofa",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/sofa",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 283,
    "slug": "outdoor_swing",
    "name": "Outdoor Swing",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/swing",
    "aliases": [
      "porch_swing"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 82,
    "slug": "outdoor_umbrella",
    "name": "Patio Umbrella",
    "parentId": 6,
    "level": 2,
    "path": "outdoor/umbrella",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 1,
    "slug": "seating",
    "name": "Seating",
    "parentId": null,
    "level": 1,
    "path": "seating",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 201,
    "slug": "seating_banquette",
    "name": "Banquette",
    "parentId": 1,
    "level": 2,
    "path": "seating/banquette",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 12,
    "slug": "bench",
    "name": "Bench",
    "parentId": 1,
    "level": 2,
    "path": "seating/bench",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 11,
    "slug": "chair",
    "name": "Chair",
    "parentId": 1,
    "level": 2,
    "path": "seating/chair",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 31,
    "slug": "chair_accent",
    "name": "Accent Chair",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/accent",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 30,
    "slug": "chair_armchair",
    "name": "Armchair",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/armchair",
    "aliases": [
      "club_chair"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 207,
    "slug": "chair_beanbag",
    "name": "Bean Bag Chair",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/beanbag",
    "aliases": [
      "beanbag"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 32,
    "slug": "chair_dining",
    "name": "Dining Chair",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/dining",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 206,
    "slug": "chair_glider",
    "name": "Glider",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/glider",
    "aliases": [
      "nursery_glider"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 33,
    "slug": "chair_office",
    "name": "Office Chair",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/office",
    "aliases": [
      "task_chair",
      "desk_chair"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 208,
    "slug": "chair_papasan",
    "name": "Papasan Chair",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/papasan",
    "aliases": [
      "bowl_chair"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 34,
    "slug": "chair_recliner",
    "name": "Recliner",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/recliner",
    "aliases": [
      "lounger"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 205,
    "slug": "chair_rocker",
    "name": "Rocking Chair",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/rocker",
    "aliases": [
      "rocker"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 35,
    "slug": "chair_stool",
    "name": "Stool",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/stool",
    "aliases": [
      "barstool",
      "counter_stool"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 204,
    "slug": "chair_swivel",
    "name": "Swivel Chair",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/swivel",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 209,
    "slug": "chair_vanity_stool",
    "name": "Vanity Stool",
    "parentId": 11,
    "level": 3,
    "path": "seating/chair/vanity_stool",
    "aliases": [
      "makeup_stool"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 200,
    "slug": "seating_chaise",
    "name": "Chaise Lounge",
    "parentId": 1,
    "level": 2,
    "path": "seating/chaise",
    "aliases": [
      "chaise"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 203,
    "slug": "seating_floor_cushion",
    "name": "Floor Cushion",
    "parentId": 1,
    "level": 2,
    "path": "seating/floor_cushion",
    "aliases": [
      "meditation_cushion"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 13,
    "slug": "ottoman",
    "name": "Ottoman",
    "parentId": 1,
    "level": 2,
    "path": "seating/ottoman",
    "aliases": [
      "pouf",
      "footstool"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 211,
    "slug": "ottoman_cocktail",
    "name": "Cocktail Ottoman",
    "parentId": 13,
    "level": 3,
    "path": "seating/ottoman/cocktail",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 210,
    "slug": "ottoman_storage",
    "name": "Storage Ottoman",
    "parentId": 13,
    "level": 3,
    "path": "seating/ottoman/storage",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 202,
    "slug": "seating_settee",
    "name": "Settee",
    "parentId": 1,
    "level": 2,
    "path": "seating/settee",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 10,
    "slug": "sofa",
    "name": "Sofa",
    "parentId": 1,
    "level": 2,
    "path": "seating/sofa",
    "aliases": [
      "couch",
      "settee"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 999,
    "slug": "couch",
    "name": "Couch (deprecated)",
    "parentId": 10,
    "level": 3,
    "path": "seating/sofa/couch",
    "aliases": [],
    "status": "deprecated",
    "mergedIntoId": 23
  },
  {
    "id": 22,
    "slug": "sofa_loveseat",
    "name": "Loveseat",
    "parentId": 10,
    "level": 3,
    "path": "seating/sofa/loveseat",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 20,
    "slug": "sofa_sectional",
    "name": "Sectional Sofa",
    "parentId": 10,
    "level": 3,
    "path": "seating/sofa/sectional",
    "aliases": [
      "l_shape",
      "u_shape",
      "sectional",
      "chaise sectional"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 21,
    "slug": "sofa_sleeper",
    "name": "Sleeper Sofa",
    "parentId": 10,
    "level": 3,
    "path": "seating/sofa/sleeper",
    "aliases": [
      "pullout",
      "convertible"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 23,
    "slug": "sofa_standard",
    "name": "Standard Sofa",
    "parentId": 10,
    "level": 3,
    "path": "seating/sofa/standard",
    "aliases": [
      "3_seater"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 3,
    "slug": "storage",
    "name": "Storage",
    "parentId": null,
    "level": 1,
    "path": "storage",
    "aliases": [
      "cabinetry"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 240,
    "slug": "storage_bar_cabinet",
    "name": "Bar Cabinet",
    "parentId": 3,
    "level": 2,
    "path": "storage/bar_cabinet",
    "aliases": [
      "drinks_cabinet"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 235,
    "slug": "storage_bench",
    "name": "Storage Bench",
    "parentId": 3,
    "level": 2,
    "path": "storage/bench",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 52,
    "slug": "storage_bookcase",
    "name": "Bookcase",
    "parentId": 3,
    "level": 2,
    "path": "storage/bookcase",
    "aliases": [
      "bookshelf"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 53,
    "slug": "storage_cabinet",
    "name": "Cabinet",
    "parentId": 3,
    "level": 2,
    "path": "storage/cabinet",
    "aliases": [
      "credenza"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 238,
    "slug": "storage_coat_rack",
    "name": "Coat Rack",
    "parentId": 3,
    "level": 2,
    "path": "storage/coat_rack",
    "aliases": [
      "coat_stand"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 231,
    "slug": "storage_credenza",
    "name": "Credenza",
    "parentId": 3,
    "level": 2,
    "path": "storage/credenza",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 50,
    "slug": "storage_dresser",
    "name": "Dresser",
    "parentId": 3,
    "level": 2,
    "path": "storage/dresser",
    "aliases": [
      "chest_of_drawers"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 233,
    "slug": "storage_etagere",
    "name": "Etagere",
    "parentId": 3,
    "level": 2,
    "path": "storage/etagere",
    "aliases": [
      "open_shelving"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 237,
    "slug": "storage_filing_cabinet",
    "name": "Filing Cabinet",
    "parentId": 3,
    "level": 2,
    "path": "storage/filing_cabinet",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 232,
    "slug": "storage_hutch",
    "name": "Hutch",
    "parentId": 3,
    "level": 2,
    "path": "storage/hutch",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 51,
    "slug": "storage_nightstand",
    "name": "Nightstand",
    "parentId": 3,
    "level": 2,
    "path": "storage/nightstand",
    "aliases": [
      "bedside_table"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 55,
    "slug": "storage_shelving",
    "name": "Shelving",
    "parentId": 3,
    "level": 2,
    "path": "storage/shelving",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 239,
    "slug": "storage_shoe",
    "name": "Shoe Storage",
    "parentId": 3,
    "level": 2,
    "path": "storage/shoe",
    "aliases": [
      "shoe_rack",
      "shoe_cabinet"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 230,
    "slug": "storage_sideboard",
    "name": "Sideboard",
    "parentId": 3,
    "level": 2,
    "path": "storage/sideboard",
    "aliases": [
      "buffet"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 234,
    "slug": "storage_trunk",
    "name": "Trunk",
    "parentId": 3,
    "level": 2,
    "path": "storage/trunk",
    "aliases": [
      "chest"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 54,
    "slug": "storage_wardrobe",
    "name": "Wardrobe",
    "parentId": 3,
    "level": 2,
    "path": "storage/wardrobe",
    "aliases": [
      "armoire"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 236,
    "slug": "storage_wine_rack",
    "name": "Wine Rack",
    "parentId": 3,
    "level": 2,
    "path": "storage/wine_rack",
    "aliases": [
      "wine_cabinet"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 2,
    "slug": "tables",
    "name": "Tables",
    "parentId": null,
    "level": 1,
    "path": "tables",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 221,
    "slug": "table_bar_cart",
    "name": "Bar Cart",
    "parentId": 2,
    "level": 2,
    "path": "tables/bar_cart",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 41,
    "slug": "table_coffee",
    "name": "Coffee Table",
    "parentId": 2,
    "level": 2,
    "path": "tables/coffee",
    "aliases": [
      "cocktail_table"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 44,
    "slug": "table_console",
    "name": "Console Table",
    "parentId": 2,
    "level": 2,
    "path": "tables/console",
    "aliases": [
      "sofa_table",
      "entry_table"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 43,
    "slug": "table_desk",
    "name": "Desk",
    "parentId": 2,
    "level": 2,
    "path": "tables/desk",
    "aliases": [
      "writing_desk"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 226,
    "slug": "desk_standing",
    "name": "Standing Desk",
    "parentId": 43,
    "level": 3,
    "path": "tables/desk/standing",
    "aliases": [
      "adjustable_desk",
      "sit_stand"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 225,
    "slug": "desk_writing",
    "name": "Writing Desk",
    "parentId": 43,
    "level": 3,
    "path": "tables/desk/writing",
    "aliases": [
      "secretary"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 40,
    "slug": "table_dining",
    "name": "Dining Table",
    "parentId": 2,
    "level": 2,
    "path": "tables/dining",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 224,
    "slug": "table_game",
    "name": "Game Table",
    "parentId": 2,
    "level": 2,
    "path": "tables/game",
    "aliases": [
      "poker_table",
      "card_table"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 220,
    "slug": "table_media_console",
    "name": "Media Console",
    "parentId": 2,
    "level": 2,
    "path": "tables/media_console",
    "aliases": [
      "tv_stand",
      "entertainment_center"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 222,
    "slug": "table_nesting",
    "name": "Nesting Tables",
    "parentId": 2,
    "level": 2,
    "path": "tables/nesting",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 42,
    "slug": "table_side",
    "name": "Side Table",
    "parentId": 2,
    "level": 2,
    "path": "tables/side",
    "aliases": [
      "end_table",
      "accent_table"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 223,
    "slug": "table_vanity",
    "name": "Vanity",
    "parentId": 2,
    "level": 2,
    "path": "tables/vanity",
    "aliases": [
      "makeup_vanity",
      "dressing_table"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 14,
    "slug": "tabletop",
    "name": "Tabletop",
    "parentId": null,
    "level": 1,
    "path": "tabletop",
    "aliases": [
      "dining_goods"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 455,
    "slug": "tabletop_barware",
    "name": "Barware",
    "parentId": 14,
    "level": 2,
    "path": "tabletop/barware",
    "aliases": [
      "shaker",
      "pitcher",
      "decanter"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 450,
    "slug": "tabletop_dinnerware",
    "name": "Dinnerware",
    "parentId": 14,
    "level": 2,
    "path": "tabletop/dinnerware",
    "aliases": [
      "plates",
      "bowls"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 451,
    "slug": "tabletop_drinkware",
    "name": "Drinkware",
    "parentId": 14,
    "level": 2,
    "path": "tabletop/drinkware",
    "aliases": [
      "glasses",
      "mugs",
      "tumblers"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 453,
    "slug": "tabletop_flatware",
    "name": "Flatware",
    "parentId": 14,
    "level": 2,
    "path": "tabletop/flatware",
    "aliases": [
      "cutlery",
      "silverware"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 454,
    "slug": "tabletop_serveware",
    "name": "Serveware",
    "parentId": 14,
    "level": 2,
    "path": "tabletop/serveware",
    "aliases": [
      "platter",
      "serving_bowl"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 452,
    "slug": "tabletop_stemware",
    "name": "Stemware",
    "parentId": 14,
    "level": 2,
    "path": "tabletop/stemware",
    "aliases": [
      "wine_glass",
      "champagne"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 8,
    "slug": "textiles",
    "name": "Textiles",
    "parentId": null,
    "level": 1,
    "path": "textiles",
    "aliases": [
      "soft_goods",
      "linens"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 401,
    "slug": "textile_bath",
    "name": "Bath Linens",
    "parentId": 8,
    "level": 2,
    "path": "textiles/bath",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 426,
    "slug": "bath_mat",
    "name": "Bath Mat",
    "parentId": 401,
    "level": 3,
    "path": "textiles/bath/mat",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 427,
    "slug": "bath_robe",
    "name": "Bath Robe",
    "parentId": 401,
    "level": 3,
    "path": "textiles/bath/robe",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 428,
    "slug": "bath_shower_curtain",
    "name": "Shower Curtain",
    "parentId": 401,
    "level": 3,
    "path": "textiles/bath/shower_curtain",
    "aliases": [
      "liner"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 425,
    "slug": "bath_towel",
    "name": "Bath Towel",
    "parentId": 401,
    "level": 3,
    "path": "textiles/bath/towel",
    "aliases": [
      "hand_towel",
      "washcloth"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 400,
    "slug": "textile_bedding",
    "name": "Bedding",
    "parentId": 8,
    "level": 2,
    "path": "textiles/bedding",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 416,
    "slug": "bedding_bed_pillow",
    "name": "Bed Pillow",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/bed_pillow",
    "aliases": [
      "sleep_pillow"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 418,
    "slug": "bedding_bed_skirt",
    "name": "Bed Skirt",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/bed_skirt",
    "aliases": [
      "dust_ruffle"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 415,
    "slug": "bedding_blanket",
    "name": "Blanket",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/blanket",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 412,
    "slug": "bedding_comforter",
    "name": "Comforter",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/comforter",
    "aliases": [
      "duvet_insert"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 414,
    "slug": "bedding_coverlet",
    "name": "Coverlet",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/coverlet",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 411,
    "slug": "bedding_duvet_cover",
    "name": "Duvet Cover",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/duvet_cover",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 420,
    "slug": "bedding_mattress_pad",
    "name": "Mattress Pad",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/mattress_pad",
    "aliases": [
      "protector"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 419,
    "slug": "bedding_mattress_topper",
    "name": "Mattress Topper",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/mattress_topper",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 413,
    "slug": "bedding_quilt",
    "name": "Quilt",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/quilt",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 417,
    "slug": "bedding_sham",
    "name": "Pillow Sham",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/sham",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 410,
    "slug": "bedding_sheet_set",
    "name": "Sheet Set",
    "parentId": 400,
    "level": 3,
    "path": "textiles/bedding/sheet_set",
    "aliases": [
      "sheets",
      "flat_sheet",
      "fitted_sheet"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 403,
    "slug": "textile_decorative",
    "name": "Decorative Textiles",
    "parentId": 8,
    "level": 2,
    "path": "textiles/decorative",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 437,
    "slug": "decorative_pillow_cover",
    "name": "Pillow Cover",
    "parentId": 403,
    "level": 3,
    "path": "textiles/decorative/pillow_cover",
    "aliases": [
      "pillow_case"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 436,
    "slug": "decorative_throw_blanket",
    "name": "Throw Blanket",
    "parentId": 403,
    "level": 3,
    "path": "textiles/decorative/throw_blanket",
    "aliases": [
      "throw"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 435,
    "slug": "decorative_throw_pillow",
    "name": "Throw Pillow",
    "parentId": 403,
    "level": 3,
    "path": "textiles/decorative/throw_pillow",
    "aliases": [
      "accent_pillow"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 402,
    "slug": "textile_table_linens",
    "name": "Table Linens",
    "parentId": 8,
    "level": 2,
    "path": "textiles/table_linens",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 430,
    "slug": "tablelinen_cloth",
    "name": "Tablecloth",
    "parentId": 402,
    "level": 3,
    "path": "textiles/table_linens/cloth",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 432,
    "slug": "tablelinen_napkin",
    "name": "Napkin",
    "parentId": 402,
    "level": 3,
    "path": "textiles/table_linens/napkin",
    "aliases": [
      "cloth_napkin"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 433,
    "slug": "tablelinen_placemat",
    "name": "Placemat",
    "parentId": 402,
    "level": 3,
    "path": "textiles/table_linens/placemat",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 431,
    "slug": "tablelinen_runner",
    "name": "Table Runner",
    "parentId": 402,
    "level": 3,
    "path": "textiles/table_linens/runner",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 15,
    "slug": "wallcovering",
    "name": "Wallcovering",
    "parentId": null,
    "level": 1,
    "path": "wallcovering",
    "aliases": [
      "wall_treatments"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 463,
    "slug": "wall_mural",
    "name": "Mural",
    "parentId": 15,
    "level": 2,
    "path": "wallcovering/mural",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 462,
    "slug": "wall_panel",
    "name": "Wall Panels",
    "parentId": 15,
    "level": 2,
    "path": "wallcovering/panel",
    "aliases": [
      "wainscoting",
      "beadboard"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 461,
    "slug": "wall_peel_stick",
    "name": "Peel-and-Stick",
    "parentId": 15,
    "level": 2,
    "path": "wallcovering/peel_stick",
    "aliases": [
      "removable_wallpaper"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 460,
    "slug": "wall_wallpaper",
    "name": "Wallpaper",
    "parentId": 15,
    "level": 2,
    "path": "wallcovering/wallpaper",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 9,
    "slug": "window",
    "name": "Window",
    "parentId": null,
    "level": 1,
    "path": "window",
    "aliases": [
      "window_treatments"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 442,
    "slug": "window_blind",
    "name": "Blinds",
    "parentId": 9,
    "level": 2,
    "path": "window/blind",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 440,
    "slug": "window_curtain",
    "name": "Curtains",
    "parentId": 9,
    "level": 2,
    "path": "window/curtain",
    "aliases": [
      "drapes",
      "panels",
      "draperies"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 446,
    "slug": "window_hardware",
    "name": "Window Hardware",
    "parentId": 9,
    "level": 2,
    "path": "window/hardware",
    "aliases": [
      "tieback",
      "finial"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 445,
    "slug": "window_rod",
    "name": "Curtain Rod",
    "parentId": 9,
    "level": 2,
    "path": "window/rod",
    "aliases": [
      "pole"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 443,
    "slug": "window_shade",
    "name": "Shades",
    "parentId": 9,
    "level": 2,
    "path": "window/shade",
    "aliases": [
      "roller_shade",
      "roman_shade"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 444,
    "slug": "window_shutter",
    "name": "Shutters",
    "parentId": 9,
    "level": 2,
    "path": "window/shutter",
    "aliases": [
      "plantation_shutters"
    ],
    "status": "active",
    "mergedIntoId": null
  },
  {
    "id": 441,
    "slug": "window_valance",
    "name": "Valance",
    "parentId": 9,
    "level": 2,
    "path": "window/valance",
    "aliases": [],
    "status": "active",
    "mergedIntoId": null
  }
];
