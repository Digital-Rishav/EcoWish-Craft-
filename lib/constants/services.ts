export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  iconName: string;
  subCategories: string[];
  targetAudience: string[];
  deliverables: string[];
  exampleUseCases: {
    title: string;
    description: string;
    impact: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "home-decor",
    slug: "home-decor",
    title: "Eco-Conscious Home Decor",
    tagline: "Sustainable beauty handcrafted for mindful living spaces.",
    shortDescription:
      "Handcrafted, customized decorative objects created from upcycled raw materials, natural fibers, and artisan techniques that bring warmth and character into modern living spaces.",
    fullDescription:
      "EcoWish Craft India creates heirloom-quality decorative elements using reclaimed wood, discarded textiles, paper mache, metal scraps, and natural clays. Each item is individually finished by skilled craftspeople under the direction of designer Sudhanshu Pandey, turning discarded surplus into tactile art that celebrates conscious architecture.",
    heroImage:
      "/assets/ecowish/products/product-1.jpg",
    iconName: "Home",
    subCategories: [
      "Eco-friendly home decor",
      "Customized decor products",
      "Handmade decorative accents",
      "Wall installations & hangings",
      "Sustainable table & shelf decor",
    ],
    targetAudience: [
      "Mindful homeowners seeking unique, non-mass-produced interior pieces",
      "Interior architects & stylists sourcing sustainable accents",
      "Boutique hotels, eco-resorts, and heritage homestays",
      "Cultural centers and contemporary studios",
    ],
    deliverables: [
      "Bespoke sculptural wall hangings and mirrors",
      "Upcycled fiber and paper lighting accents",
      "Terracotta and reclaimed ceramic decorative planters",
      "Hand-painted wooden trays, organizers, and centerpieces",
      "Custom size, palette, and motif harmonization with your existing interiors",
    ],
    exampleUseCases: [
      {
        title: "Heritage Living Room Transformation",
        description: "Curated a set of 7 upcycled textile-and-brass wall installations for a Patna residence.",
        impact: "Diverted 24kg of textile surplus; created 3 weeks of artisan employment.",
      },
      {
        title: "Boutique Eco-Lodge Accent Series",
        description: "Crafted 30 custom bedside lamps and sustainable planter sets using reclaimed wood and bamboo.",
        impact: "Zero-plastic aesthetic aligned with eco-certification standards.",
      },
    ],
    process: [
      { step: "01", title: "Consultation", description: "Discuss your space, interior theme, dimensions, and aesthetic preferences." },
      { step: "02", title: "Concept & Material Sourcing", description: "We present sample swatches, upcycled material choices, and sketch proposals." },
      { step: "03", title: "Artisan Handcrafting", description: "Our master artisans craft each piece with precision finishing." },
      { step: "04", title: "Quality Check & Delivery", description: "Rigorous quality inspection and secure eco-friendly delivery to your doorstep." },
    ],
    faqs: [
      {
        question: "Can I request custom colors and dimensions?",
        answer: "Yes. Every piece can be customized to match your room palette, wall measurements, and styling requirements.",
      },
      {
        question: "How do I maintain and clean upcycled decor products?",
        answer: "Most items require only dry dusting with a soft microfiber cloth or feather duster. We provide specific care guides with every product.",
      },
    ],
  },
  {
    id: "handicrafts",
    slug: "handicrafts",
    title: "Handicrafts & Upcycled Creations",
    tagline: "Bridging timeless Indian folk heritage with contemporary eco-design.",
    shortDescription:
      "Handcrafted lifestyle goods, functional accessories, and sustainable souvenirs that celebrate Indian artisan traditions while actively diverting waste from landfills.",
    fullDescription:
      "Our handicrafts division merges traditional rural craft techniques—including basketry, weaving, woodcarving, and paper crafting—with modern lifestyle needs. We turn post-industrial paper offcuts, discarded fabric rolls, and natural agri-residues into utilitarian and aesthetic treasures that narrate stories of resilience and sustainable heritage.",
    heroImage:
      "/assets/ecowish/waste-products/waste-item-1.jpg",
    iconName: "Sparkles",
    subCategories: [
      "Handmade heritage products",
      "Upcycled craft collections",
      "Customized artisanal items",
      "Sustainable gift merchandise",
      "Folk-inspired utilitarian accessories",
    ],
    targetAudience: [
      "Corporate procurement teams looking for green gifting",
      "Tourists, collectors, and folk-craft lovers",
      "Museum gift shops and cultural institutions",
      "Festive gifting organizers and wedding parties",
    ],
    deliverables: [
      "Upcycled textile pouches, stationery, and organizers",
      "Handcrafted baskets and organizers from natural fibers and reclaimed materials",
      "Hand-finished brass, terracotta, and wooden curio items",
      "Custom gift boxes and eco-packaged corporate souvenir kits",
      "Artisan provenance certificates accompanying each piece",
    ],
    exampleUseCases: [
      {
        title: "Green Corporate Souvenirs (500 Units)",
        description: "Manufactured handmade diaries and pen holders utilizing seed paper and reclaimed cotton fabric.",
        impact: "Zero-waste gifting adopted for an annual regional conference.",
      },
      {
        title: "Artisan Co-op Utility Range",
        description: "Developed multi-purpose storage baskets combining local grasses with upcycled tailoring waste.",
        impact: "Generated sustainable home-based income for 15 women artisans in West Champaran.",
      },
    ],
    process: [
      { step: "01", title: "Inquiry & Requirements", description: "Select catalog items or define custom volume, budget, and packaging requirements." },
      { step: "02", title: "Sample Prototyping", description: "We prepare physical or photographic prototypes for client sign-off." },
      { step: "03", title: "Artisan Batch Production", description: "Production by dedicated craft clusters under quality supervision." },
      { step: "04", title: "Packaging & Dispatch", description: "Packaged in recycled craft boxes with custom branding if requested." },
    ],
    faqs: [
      {
        question: "What is the minimum order quantity for custom handicrafts?",
        answer: "We accommodate both small bespoke batches (from 10 units) and large corporate orders (1,000+ units) with tiered pricing.",
      },
      {
        question: "Can we get custom branding / logos on the items?",
        answer: "Yes, we offer subtle laser engraving, screen printing with non-toxic dyes, and custom embossed tags on upcycled materials.",
      },
    ],
  },
  {
    id: "painting-and-portraits",
    slug: "painting-and-portraits",
    title: "Painting & Portrait Services",
    tagline: "Expressive fine arts, lifelike portraits, and commissioned masterpieces.",
    shortDescription:
      "Bespoke fine art commissions, realistic charcoal and oil portraits, traditional Indian folk paintings, and large-scale artistic canvas murals tailored for homes and executive spaces.",
    fullDescription:
      "Led by artist and NIFT alumnus Sudhanshu Pandey, our fine art studio offers bespoke portraiture and fine art commissions. Whether you desire an intimate family heirloom portrait in oil or charcoal, a modern abstract canvas reflecting natural elements, or traditional Indian folk murals (such as Madhubani or contemporary folk reinterpretations), our artists deliver unmatched depth, emotional resonance, and museum-grade finishes.",
    heroImage:
      "/assets/ecowish/paintings/painting-1.jpg",
    iconName: "Palette",
    subCategories: [
      "Portrait commissions (Charcoal, Acrylic, Oil, Graphite)",
      "Fine art painting commissions",
      "Customized wall artwork & canvases",
      "Traditional Indian folk art & contemporary hybrids",
      "Artistic wall murals for corporate & residential spaces",
    ],
    targetAudience: [
      "Families and individuals commemorating milestones, loved ones, or anniversaries",
      "Corporate executives desiring formal boardroom portraits",
      "Art collectors seeking original contemporary and folk paintings",
      "Interior designers commissioning centerpiece artworks",
    ],
    deliverables: [
      "Original hand-painted portrait or canvas on archival materials",
      "Framed or gallery-wrapped finishing ready for display",
      "Certificate of Authenticity signed by the artist",
      "Step-by-step progress previews during painting",
      "Safe, insured art packaging and doorstep delivery",
    ],
    exampleUseCases: [
      {
        title: "Memorial Portrait in Charcoal (24x36 inches)",
        description: "Commissioned family portrait celebrating three generations based on vintage photographs.",
        impact: "High-detail archival rendering presented in a custom reclaimed teak frame.",
      },
      {
        title: "Executive Boardroom Folk Murals",
        description: "Series of 3 large contemporary paintings exploring nature and sustainability for an organization's headquarters.",
        impact: "Created an inspiring visual centerpiece celebrating Indian cultural ethos.",
      },
    ],
    process: [
      { step: "01", title: "Reference & Vision", description: "Provide photos or discuss the theme, medium (oil, acrylic, charcoal), and canvas size." },
      { step: "02", title: "Composition Sketch", description: "The artist produces a tonal compositional layout for your approval." },
      { step: "03", title: "Execution & Updates", description: "The artwork is painted in layers; we share progress photos for review." },
      { step: "04", title: "Varnishing & Delivery", description: "Archival protective coating applied, optional framing, and secure packaging." },
    ],
    faqs: [
      {
        question: "Can you paint a portrait from multiple different photographs?",
        answer: "Yes, our portrait artists excel at harmonizing separate photos into a single coherent portrait composition.",
      },
      {
        question: "How long does a portrait commission take?",
        answer: "Charcoal portraits typically take 7–12 days; oil paintings require 3–4 weeks for layering and drying.",
      },
    ],
  },
  {
    id: "interior-design",
    slug: "interior-design",
    title: "Interior & Design Solutions",
    tagline: "Holistic spaces styled with sustainable aesthetics and artisan warmth.",
    shortDescription:
      "Sustainable interior design guidance, decorative surface treatments, eco-friendly spatial concepts, and bespoke artisan installations that elevate residential and commercial environments.",
    fullDescription:
      "We partner with homeowners, commercial venue owners, and architects to bring warmth, natural textures, and sustainability into built environments. Our design team focuses on decorative spatial interventions—from statement acoustic wall panels made of upcycled materials to mood-enhancing artisan lighting, textured mud plaster effects, and curated sustainable styling.",
    heroImage:
      "/assets/ecowish/decorations/decor-5.jpg",
    iconName: "Compass",
    subCategories: [
      "Interior styling & decor support",
      "Decorative design interventions",
      "Sustainable design concepts & material boards",
      "Bespoke artisan acoustic & feature walls",
      "Turnkey decor execution for cafes, studios & offices",
    ],
    targetAudience: [
      "Homeowners building or renovating mindful residential sanctuaries",
      "Cafes, restaurants, and experiential retail wanting rustic-chic, eco-friendly atmospheres",
      "Creative agencies and forward-looking corporate workspaces",
      "Wellness centers, yoga studios, and boutique clinics",
    ],
    deliverables: [
      "Moodboards, color palettes, and material specifications",
      "Custom feature wall and ceiling installation designs",
      "Procurement of handcrafted lighting, screens, and fixtures",
      "On-site artisan styling and finishing supervision",
      "Maintenance guidelines for natural and upcycled surfaces",
    ],
    exampleUseCases: [
      {
        title: "Artisan Cafe Interior Styling (Patna)",
        description: "Complete decorative concept featuring reclaimed wood counters, jute chandeliers, and clay mural accents.",
        impact: "Delivered distinct rustic brand identity while reducing decor material expenditure by 35%.",
      },
      {
        title: "Biophilic Work Studio Decor",
        description: "Created acoustic art dividers made from felt waste and handcrafted cane screens.",
        impact: "Enhanced sound absorption and visual privacy with zero plastic.",
      },
    ],
    process: [
      { step: "01", title: "Site Assessment", description: "Virtual or on-site walkthrough to analyze layout, lighting, and requirements." },
      { step: "02", title: "Concept Deck", description: "Detailed 2D layout suggestions, moodboards, and artisan product selection." },
      { step: "03", title: "Crafting & Sourcing", description: "Bespoke elements manufactured in our artisan hubs." },
      { step: "04", title: "Installation & Styling", description: "Final styling, lighting alignment, and handover." },
    ],
    faqs: [
      {
        question: "Do you handle complete civil renovations?",
        answer: "We specialize in decorative interior solutions, surface treatments, sustainable furniture/accents, and artistic styling. For civil work, we collaborate seamlessly with your existing contractors.",
      },
      {
        question: "Can this service be offered outside Bihar?",
        answer: "Yes, we provide remote design consultations with shipped custom elements across India, with on-site installation teams available for major projects.",
      },
    ],
  },
  {
    id: "event-and-festive-decor",
    slug: "event-and-festive-decor",
    title: "Event & Festive Decor",
    tagline: "Breathtaking celebrations crafted with zero-waste, eco-conscious splendor.",
    shortDescription:
      "Transforming weddings, festive celebrations, cultural galas, and corporate events with authentic handcrafted decorations, biodegradable floral installations, and reusable artisan backdrops.",
    fullDescription:
      "Traditional Indian celebrations are vibrant and emotional, but conventional event decor generates massive quantities of single-use plastic, thermocol, and non-recyclable waste. EcoWish Craft India pioneers conscious event decor: creating breathtaking mandaps, stage backdrops, entrance arches, photo booths, and table centerpieces using indigenous textiles, bamboo structures, hand-painted earthen lamps, upcycled brass, and natural flora.",
    heroImage:
      "/assets/ecowish/decorations/decor-1.jpg",
    iconName: "Gift",
    subCategories: [
      "Sustainable wedding & mehendi decoration",
      "Traditional festival decoration (Diwali, Chhath, Durga Puja)",
      "Corporate conferences & annual gala decoration",
      "Cultural & institutional stage decor",
      "On-site installation & dismantling services",
    ],
    targetAudience: [
      "Couples and families planning soulful, eco-friendly weddings and rituals",
      "Event management companies seeking authentic artisan decor partners",
      "Corporate event planners committed to ESG and green guidelines",
      "Community and cultural festival committees",
    ],
    deliverables: [
      "Custom concept sketches and 3D layout visualizations",
      "Artisan-crafted modular backdrops and photobooths",
      "Natural lighting concepts (terracotta diyas, recycled glass lanterns, brass fixtures)",
      "Biodegradable floral and botanical arrangements",
      "Full on-site setup, event-day management, and eco-friendly dismantling",
    ],
    exampleUseCases: [
      {
        title: "Zero-Thermocol Sustainable Wedding (Patna)",
        description: "Entire 3-day wedding celebration styled using khadi drapes, marigolds, upcycled brass lanterns, and bamboo pergolas.",
        impact: "Eliminated 180kg of plastic and thermocol waste; 100% of flowers composted locally.",
      },
      {
        title: "Festive Corporate Gala Installation",
        description: "Created a 20-foot handcrafted festive entrance tunnel using woven baskets and warm fairy illumination.",
        impact: "Became the most photographed highlight with 90% reusable elements.",
      },
    ],
    process: [
      { step: "01", title: "Event Briefing", description: "Discuss venue, guest count, theme, ceremonial requirements, and date." },
      { step: "02", title: "Theme Presentation", description: "Receive custom decor moodboards and material breakdowns." },
      { step: "03", title: "Artisan Fabrication", description: "Backdrops and custom props are prepared in our workshop." },
      { step: "04", title: "On-Site Execution", description: "Our dedicated team sets up before the event and dismantles responsibly." },
    ],
    faqs: [
      {
        question: "Is eco-friendly event decor more expensive than conventional decor?",
        answer: "Not necessarily. Because many of our artisan backdrops and structural elements are modular and reusable, our pricing is highly competitive with traditional commercial event setups.",
      },
      {
        question: "How far in advance should we book for weddings?",
        answer: "We recommend booking 4 to 8 weeks in advance for weddings to allow sufficient time for custom artisan production.",
      },
    ],
  },
  {
    id: "corporate-institutional",
    slug: "corporate-institutional",
    title: "Corporate & Institutional Projects",
    tagline: "ESG-aligned creative solutions, ethical corporate gifts, and campus workshops.",
    shortDescription:
      "Turnkey sustainable solutions for corporate enterprises, colleges, schools, and NGOs—including custom eco-gifting, campus upcycling workshops, institutional decor, and CSR-aligned initiatives.",
    fullDescription:
      "EcoWish Craft India bridges corporate sustainability goals with grassroots artisan empowerment. We collaborate with companies, educational institutions, and non-profits to deliver measurable environmental and social impact. From custom ethical corporate gifts crafted from upcycled industrial scrap to campus-wide waste-to-art installations and interactive employee sustainability workshops, we make eco-consciousness tangible and memorable.",
    heroImage:
      "/assets/images/hero-right.jpg",
    iconName: "Briefcase",
    subCategories: [
      "Customized sustainable corporate gifting",
      "NGO & social enterprise collaboration projects",
      "School & college hands-on waste-to-craft workshops",
      "Institutional office & campus decor installations",
      "Corporate sustainability engagement & CSR programs",
      "Custom creative projects & public art installations",
    ],
    targetAudience: [
      "Corporate CSR heads, HR leaders, and procurement directors",
      "Colleges, universities, and schools fostering creative environmental awareness",
      "NGOs promoting rural artisan livelihoods",
      "Government bodies and public sector creative initiatives",
    ],
    deliverables: [
      "Branded eco-friendly employee welcome kits and conference merchandise",
      "Custom waste-to-art installations for lobbies and auditoriums",
      "Hands-on workshop curriculum, toolkits, and expert artisan trainers",
      "Impact reports detailing waste diverted and artisan work hours generated",
      "Structured partnership agreements and GST compliance documentation",
    ],
    exampleUseCases: [
      {
        title: "Campus Waste-to-Art Residency (Engineering College)",
        description: "Engaged 300+ students over 3 days to transform campus electronic and scrap metal waste into a 12-foot eagle sculpture.",
        impact: "Diverted 450kg scrap; won regional campus sustainability recognition.",
      },
      {
        title: "Annual ESG Gift Hamper for Banking Client",
        description: "Produced 1,200 curated gift hampers including handmade seed journals, reclaimed fabric laptop sleeves, and brass accents.",
        impact: "Directly benefited 42 rural artisan households across West Champaran.",
      },
    ],
    process: [
      { step: "01", title: "Institutional Scoping", description: "Define organization goals, participant size, timelines, and branding requirements." },
      { step: "02", title: "Proposal & Impact Metrics", description: "We provide comprehensive concept proposals with transparent costings and social impact KPIs." },
      { step: "03", title: "Execution & Training", description: "Delivery of bulk merchandise or on-campus facilitator-led workshop execution." },
      { step: "04", title: "Impact Certification", description: "Receive official sustainability impact summary and participant certifications." },
    ],
    faqs: [
      {
        question: "Can EcoWish handle bulk delivery across multiple company branch locations?",
        answer: "Yes, we handle coordinated logistics and individual address dispatches across India with tracking.",
      },
      {
        question: "Do you provide certificates for workshop participants?",
        answer: "Yes, all school, college, and corporate workshop attendees receive co-branded EcoWish Certificates of Participation.",
      },
    ],
  },
];
