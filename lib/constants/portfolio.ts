export interface PortfolioItem {
  id: string;
  title: string;
  category:
  | "Portraits"
  | "Paintings"
  | "Handicrafts"
  | "Home Decor"
  | "Interior Design"
  | "Event Decor"
  | "Wedding Decor"
  | "Festive Decor"
  | "Upcycling";
  shortDescription: string;
  image: string;
  location?: string;
  materials?: string;
  year?: string;
  featured?: boolean;
  priceNote?: string;
}

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Portraits",
  "Paintings",
  "Handicrafts",
  "Home Decor",
  "Interior Design",
  "Event Decor",
  "Wedding Decor",
  "Festive Decor",
  "Upcycling",
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // --- REAL PORTRAITS ---
  {
    id: "port-01",
    title: "Hand-Drawn Realistic Portrait Commission",
    category: "Portraits",
    shortDescription:
      "Intricately detailed hyper-realistic portrait commission capturing authentic human emotion and likeness with precision shading.",
    image: "/assets/ecowish/portraits/portrait-1.jpg",
    location: "EcoWish Studio, Patna",
    materials: "Graphite, Fine Charcoal, Archival Medium",
    year: "2024",
    featured: true,
    priceNote: "Dussehra Offer: 50% Off on All Portrait Sizes",
  },
  {
    id: "port-02",
    title: "Expressive Fine Art Character Study",
    category: "Portraits",
    shortDescription:
      "Tonal portrait drawing showing depth, light gradation, and textured hair work crafted by master artists.",
    image: "/assets/ecowish/portraits/portrait-2.jpg",
    location: "Commissioned Project",
    materials: "Charcoal on Heavyweight Cartridge Sheet",
    year: "2024",
    featured: true,
    priceNote: "Dussehra Offer: 50% Off",
  },
  {
    id: "port-03",
    title: "Tonal Charcoal Family Heirloom Portrait",
    category: "Portraits",
    shortDescription:
      "Custom commemorative portrait created from vintage family photographs, preserved for generations.",
    image: "/assets/ecowish/portraits/portrait-10.jpg",
    location: "Patna, Bihar",
    materials: "Archival Charcoal, Graphite, Protective Varnish",
    year: "2024",
    featured: true,
    priceNote: "Dussehra Offer: 50% Off",
  },
  {
    id: "port-04",
    title: "Cultural & Spiritual Portrait Study",
    category: "Portraits",
    shortDescription:
      "Spiritual and meditative fine art portrait highlighting traditional Indian devotion and intricate detail.",
    image: "/assets/ecowish/portraits/portrait-4.jpg",
    location: "Studio Collection",
    materials: "Fine Art Medium & Charcoal",
    year: "2023",
    featured: false,
  },
  {
    id: "port-05",
    title: "Bespoke Memorial Tribute Portrait",
    category: "Portraits",
    shortDescription:
      "Handcrafted tribute portrait honoring beloved elders with lifelike realism and soft tonal transitions.",
    image: "/assets/ecowish/portraits/portrait-5.jpg",
    location: "Private Collector",
    materials: "Pencil & Charcoal on Acid-Free Paper",
    year: "2024",
    featured: false,
  },
  {
    id: "port-06",
    title: "Artistic Contemporary Portraiture",
    category: "Portraits",
    shortDescription:
      "Blend of modern dynamic lines and traditional shading techniques creating a captivating visual portrait.",
    image: "/assets/ecowish/portraits/portrait-6.jpg",
    location: "West Champaran Hub",
    materials: "Graphite & Shading Stumps on Bristol Board",
    year: "2024",
    featured: false,
  },

  // --- REAL PAINTINGS ---
  {
    id: "paint-01",
    title: "Vibrant Indian Heritage & Devotional Canvas",
    category: "Paintings",
    shortDescription:
      "Magnificent classical painting celebrating sacred Indian motifs, intricate gold-accented ornamentation, and rich palette.",
    image: "/assets/ecowish/paintings/painting-1.jpg",
    location: "EcoWish Studio, Patna",
    materials: "Fine Acrylics, Mineral Pigments, Canvas",
    year: "2024",
    featured: true,
    priceNote: "Festive Special: 50% Off Custom Commissions",
  },
  {
    id: "paint-02",
    title: "Traditional Folk & Mythological Masterpiece",
    category: "Paintings",
    shortDescription:
      "Exquisite folk-inspired artwork capturing cultural legends with vibrant natural colors and detailed linework.",
    image: "/assets/ecowish/paintings/painting-2.jpg",
    location: "Bihar Art Conclave",
    materials: "Traditional Pigments on Hand-Treated Canvas",
    year: "2024",
    featured: true,
  },
  // {
  //   id: "paint-03",
  //   title: "Radha Krishna Divine Romance Artwork",
  //   category: "Paintings",
  //   shortDescription:
  //     "Soulful composition depicting timeless Indian spirituality, delicate facial expressions, and ornate festive attire.",
  //   image: "/assets/ecowish/paintings/painting-3.jpg",
  //   location: "Bespoke Commission",
  //   materials: "Acrylic & Gold Dust Highlights on Stretched Canvas",
  //   year: "2024",
  //   featured: true,
  // },
  // {
  //   id: "paint-04",
  //   title: "Madhubani Folk Contemporary Synthesis",
  //   category: "Paintings",
  //   shortDescription:
  //     "Bihar Mithila tradition reinterpreted with contemporary geometric border framing and organic dyes.",
  //   image: "/assets/ecowish/paintings/painting-4.jpg",
  //   location: "Artisan Residency",
  //   materials: "Natural Inks & Handwoven Cotton Sheet",
  //   year: "2023",
  //   featured: false,
  // },
  {
    id: "paint-05",
    title: "Serene Nature & Rural Indian Life Painting",
    category: "Paintings",
    shortDescription:
      "Evocative landscape and rural lifestyle painting evoking the peaceful countryside of Bihar.",
    image: "/assets/ecowish/paintings/painting-5.jpg",
    location: "Studio Collection",
    materials: "Oil & Acrylic on Fine Linen Canvas",
    year: "2024",
    featured: false,
  },
  {
    id: "paint-06",
    title: "Spiritual Lotus & Sacred Symbolism Canvas",
    category: "Paintings",
    shortDescription:
      "Calming artistic creation ideal for meditation rooms, luxury living areas, and executive lobbies.",
    image: "/assets/ecowish/paintings/painting-6.jpg",
    location: "Corporate Commission",
    materials: "Multi-layered Acrylics on Cotton Canvas",
    year: "2024",
    featured: false,
  },

  // --- REAL AGRICULTURE WASTE PRODUCTS ---
  // {
  //   id: "waste-01",
  //   title: "Handcrafted Agriculture Waste Straw Frame",
  //   category: "Upcycling",
  //   shortDescription:
  //     "Intricately pieced artwork made entirely from treated agricultural wheat straw waste, displaying shimmering golden tones naturally.",
  //   image: "/assets/ecowish/waste-products/waste-item-1.jpg",
  //   location: "West Champaran Cluster",
  //   materials: "Natural Wheat Straw Waste, Eco Adhesive, Wood Frame",
  //   year: "2024",
  //   featured: true,
  //   priceNote: "Dussehra 50% Off: ₹999 (Regular ₹1,999)",
  // },
  // {
  //   id: "waste-02",
  //   title: "Agri-Waste Decorative Wall Plaque",
  //   category: "Home Decor",
  //   shortDescription:
  //     "Sustainable wall decor piece crafted by rural women artisans converting crop residue into heirloom artistic relief.",
  //   image: "/assets/ecowish/waste-products/waste-item-2.jpg",
  //   location: "Rural Cluster Initiative",
  //   materials: "Crop Stubble Residue, Natural Binders, Terracotta Base",
  //   year: "2024",
  //   featured: true,
  // },
  // {
  //   id: "waste-03",
  //   title: "Eco-Friendly Upcycled Straw Sculpture",
  //   category: "Handicrafts",
  //   shortDescription:
  //     "Three-dimensional decorative craft object proving how agricultural residue can replace plastic decor.",
  //   image: "/assets/ecowish/waste-products/waste-item-3.jpg",
  //   location: "EcoWish Craft Workshop",
  //   materials: "Treated Crop Stubble, Bamboo Strands, Natural Polish",
  //   year: "2024",
  //   featured: true,
  // },
  // {
  //   id: "waste-04",
  //   title: "Straw Art Heritage Peacock Motif",
  //   category: "Upcycling",
  //   shortDescription:
  //     "Traditional Indian national bird rendered with iridescent natural straw fibers without synthetic paints.",
  //   image: "/assets/ecowish/waste-products/waste-item-4.jpg",
  //   location: "Studio Collection",
  //   materials: "Harvested Wheat Straw, Black Velvet Base, Glass Frame",
  //   year: "2024",
  //   featured: false,
  // },
  {
    id: "waste-05",
    title: "Agri-Waste Desk Organizer & Tray",
    category: "Handicrafts",
    shortDescription:
      "Durable, lightweight desk accessory made from compressed agricultural husk and recycled paper fiber.",
    image: "/assets/ecowish/waste-products/waste-item-5.jpg",
    location: "Corporate Gifting Batch",
    materials: "Paddy Husk, Paper Pulp, Non-Toxic Sealant",
    year: "2024",
    featured: false,
  },

  // --- REAL MARRIAGE HALL & EVENT DECOR ---
  {
    id: "decor-01",
    title: "Grand Wedding Mandap & Floral Stage Decor",
    category: "Wedding Decor",
    shortDescription:
      "Spectacular marriage hall stage installation crafted with regal backdrops, artistic warm illumination, and sustainable decor accents.",
    image: "/assets/ecowish/decorations/decor-1.jpg",
    location: "Grand Celebration Venue, Patna",
    materials: "Handcrafted Props, Draped Fabrics, Brass Illumination",
    year: "2024",
    featured: true,
    priceNote: "Dussehra Booking Offer: Flat 50% Off On-Site Setup Fee",
  },
  {
    id: "decor-02",
    title: "Royal Marriage Hall Entrance Arch",
    category: "Event Decor",
    shortDescription:
      "Impressive celebration entryway featuring traditional Indian motifs, ceremonial lighting, and photogenic aesthetics.",
    image: "/assets/ecowish/decorations/decor-2.jpg",
    location: "Patna, Bihar",
    materials: "Reclaimed Wood, Fabric Panels, Fairy Lighting",
    year: "2024",
    featured: true,
  },
  {
    id: "decor-03",
    title: "Festive Banquet & Reception Stage Setup",
    category: "Festive Decor",
    shortDescription:
      "Custom backdrop with ornate royal arches and warm ambient illumination designed for festive galas and weddings.",
    image: "/assets/ecowish/decorations/decor-3.jpg",
    location: "Celebration Hall, Bihar",
    materials: "Modular Stage Units, Traditional Accents, LED Glow",
    year: "2024",
    featured: true,
  },
  {
    id: "decor-04",
    title: "Vibrant Haldi & Sangeet Ceremonial Lounge",
    category: "Wedding Decor",
    shortDescription:
      "Soulful yellow-and-marigold festive setup with handcrafted seating, eco lanterns, and folk decor props.",
    image: "/assets/ecowish/decorations/decor-4.jpg",
    location: "Destination Wedding, Bihar",
    materials: "Khadi Drapes, Natural Flowers, Brass Urulis",
    year: "2024",
    featured: false,
  },
  {
    id: "decor-05",
    title: "Ornate Ceiling & Chandelier Decor",
    category: "Interior Design",
    shortDescription:
      "Custom overhead suspended decorative installations creating enchanting atmospheric depth in banquet venues.",
    image: "/assets/ecowish/decorations/decor-5.jpg",
    location: "Marriage Palace, Patna",
    materials: "Fabric Canopies, Woven Lanterns, Floral Hangings",
    year: "2023",
    featured: false,
  },

  // // --- REAL CRAFT PRODUCTS & HOME DECOR ---
  // {
  //   id: "prod-01",
  //   title: "Artisanal Home Decor Ceramic & Eco Planter",
  //   category: "Home Decor",
  //   shortDescription:
  //     "Handmade table centerpiece and planter set blending earthen textures with sustainable artisan finishing.",
  //   image: "/assets/ecowish/products/product-1.jpg",
  //   location: "EcoWish Craft Studio",
  //   materials: "Terracotta, Reclaimed Waste Fiber, Natural Glaze",
  //   year: "2024",
  //   featured: true,
  //   priceNote: "Dussehra Special: ₹749 (Regular ₹1,499)",
  // },
  // {
  //   id: "prod-02",
  //   title: "Handmade Upcycled Utility Box & Jewelry Casket",
  //   category: "Handicrafts",
  //   shortDescription:
  //     "Hand-finished storage box featuring delicate hand-carved accents and eco-friendly protective lining.",
  //   image: "/assets/ecowish/products/product-2.jpg",
  //   location: "Artisan Production Center",
  //   materials: "Upcycled Wood Offcuts, Brass Latches, Jute Lining",
  //   year: "2024",
  //   featured: true,
  // },
  // {
  //   id: "prod-03",
  //   title: "Bespoke Decorative Lantern & Candle Holder",
  //   category: "Home Decor",
  //   shortDescription:
  //     "Ambient handcrafted candleholder casting intricate shadows for festive Diwali and Dussehra celebrations.",
  //   image: "/assets/ecowish/products/product-3.jpg",
  //   location: "West Champaran",
  //   materials: "Recycled Metal Scrap, Pierced Brass Detailing",
  //   year: "2024",
  //   featured: true,
  // },
  // {
  //   id: "prod-04",
  //   title: "Handcrafted Festive Gift Hamper Basket",
  //   category: "Handicrafts",
  //   shortDescription:
  //     "Woven sustainable gift container filled with handcrafted curios and plantable seed paper greetings.",
  //   image: "/assets/ecowish/products/product-4.jpg",
  //   location: "Corporate ESG Batch",
  //   materials: "Natural River Grass, Cotton Scraps, Seed Paper",
  //   year: "2024",
  //   featured: false,
  // },
];
