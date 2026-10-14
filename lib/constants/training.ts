export interface TrainingProgram {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  duration: string;
  level: string;
  location: string;
  mode: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  focusAreas: string[];
  curriculum: {
    module: string;
    title: string;
    topics: string[];
  }[];
  keyBenefits: string[];
  whoShouldJoin: string[];
  currentFeeText: string;
  scholarshipNotice: string;
}

export interface UpcomingBatch {
  id: string;
  programTitle: string;
  programSlug: string;
  duration: string;
  locations: string[];
  status: "Open" | "Upcoming" | "Filling Fast";
  startDateDescription: string;
  scheduleDescription: string;
  scholarshipAvailable: boolean;
}

export interface ExamPrepCategory {
  id: string;
  code: string;
  name: string;
  targetInstitutions: string;
  shortDescription: string;
  syllabusHighlights: string[];
  examPatternSummary: string;
  idealFor: string;
}

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "upcycling-workshop",
    slug: "upcycling-workshop",
    title: "Upcycling & Waste-to-Craft Workshop",
    category: "Handicrafts & Upcycling",
    tagline: "Master the fundamentals of turning discarded materials into market-ready craft.",
    duration: "3 – 5 Days (Intensive Hands-on)",
    level: "Beginner to Intermediate",
    location: "Patna / West Champaran Studios",
    mode: "In-Person Hands-on Studio Work",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "A fast-paced, immersive practical workshop focusing on waste material identification, weaving, molding, and artistic painting techniques to create tangible upcycled crafts.",
    fullDescription:
      "The Upcycling Workshop is an intensive program created by EcoWish Craft India to introduce artists, craft learners, and beginners to the art and science of creative recycling. Participants work hands-on with real materials—including discarded textiles, paper offcuts, coconut shells, and metal scrap—guided step-by-step by master artisans.",
    focusAreas: [
      "Waste material taxonomy & non-toxic processing",
      "Weaving techniques with fabric offcuts and natural grasses",
      "Molding with natural binders and paper pulp",
      "Finishing, surface painting, and protective coatings",
    ],
    curriculum: [
      {
        module: "Day 1",
        title: "Material Science & Creative Upcycling Concept",
        topics: [
          "Understanding waste streams: fabrics, paper, natural agri-residue",
          "Safety, sorting, cleaning, and preparation protocols",
          "Ideation sketch & functional design fundamentals",
        ],
      },
      {
        module: "Day 2",
        title: "Weaving & Structural Formations",
        topics: [
          "Frame preparation and warp/weft fundamentals",
          "Working with reclaimed textile strips",
          "Creating flat weaves, coasters, and small mats",
        ],
      },
      {
        module: "Day 3",
        title: "Molding & 3D Objects",
        topics: [
          "Natural binder mixtures and sustainable clay/paper pulp",
          "Form molding and drying dynamics",
          "Structural reinforcement of lightweight objects",
        ],
      },
      {
        module: "Day 4 & 5",
        title: "Surface Finishing & Studio Showcase",
        topics: [
          "Non-toxic pigment preparation and decorative painting",
          "Edge binding, sealing, and durability testing",
          "Final product presentation, pricing basics, and peer review",
        ],
      },
    ],
    keyBenefits: [
      "Learn to convert waste into sellable handicrafts",
      "Blend traditional craft with modern design",
      "Improve income opportunities through craft making",
      "Opportunity to be considered for EcoWish project work",
      "Official Certificate of Completion from EcoWish Craft India",
      "Join our active eco-conscious artisan community",
    ],
    whoShouldJoin: [
      "Art & craft enthusiasts seeking hands-on sustainable techniques",
      "College students & young designers exploring material manipulation",
      "Rural artisans and homemakers desiring skill enhancement",
      "School teachers and community organizers",
    ],
    currentFeeText: "Contact us for current fees",
    scholarshipNotice:
      "Special fee waivers and sponsorships available for women, rural artisans, and differently-abled candidates.",
  },
  {
    id: "sustainable-home-decor",
    slug: "sustainable-home-decor",
    title: "Sustainable Home Decor Course",
    category: "Sustainable Home Decor",
    tagline: "Professional training in contemporary product design, costing, and premium finishes.",
    duration: "15 Days (Comprehensive)",
    level: "Intermediate",
    location: "Patna / West Champaran Studios",
    mode: "Hybrid Studio & Masterclass",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Deep dive into contemporary home decor design, understanding domestic and urban market trends, calculating costings, and executing premium artisan finishes.",
    fullDescription:
      "This 15-day course bridges the gap between raw hobbyist craft and high-value interior decor. Led by founder Sudhanshu Pandey (NIFT Textile Design), learners analyze modern interior aesthetics, study ergonomic and aesthetic proportions, master finishing techniques that command premium pricing, and understand unit economics for profitable craft ventures.",
    focusAreas: [
      "Product design methodology for interiors",
      "Current Indian & global sustainable decor trends",
      "Material costing, bill of materials (BOM), and pricing strategy",
      "Premium finishing: varnishes, joinery, and packaging",
    ],
    curriculum: [
      {
        module: "Week 1",
        title: "Design Principles & Aesthetic Research",
        topics: [
          "Color palettes, textures, and contemporary decor themes",
          "Analyzing customer demand in modern urban households",
          "Concept sketching and 1:1 scale mockups",
        ],
      },
      {
        module: "Week 2",
        title: "Advanced Fabrication & Prototyping",
        topics: [
          "Wall decor, accent mirrors, table lamps, and organizers",
          "Working with hybrid materials: wood, metal, rope, and recycled paper",
          "Durability standards and quality control checks",
        ],
      },
      {
        module: "Week 3",
        title: "Costing, Branding & Commercialization",
        topics: [
          "Raw material sourcing, labor hours, and profit margin calculation",
          "Eco-friendly packaging and product storytelling",
          "Graduation showcase and client exhibition preparation",
        ],
      },
    ],
    keyBenefits: [
      "Develop complete, commercial-ready home decor product prototypes",
      "Direct mentorship from NIFT-trained design leadership",
      "Understand practical commercial pricing and client pitch methods",
      "Priority consideration for freelance execution with EcoWish client orders",
      "Official Certificate of Completion",
      "Lifetime access to artisan alumni network",
    ],
    whoShouldJoin: [
      "Aspiring interior stylists and decor entrepreneurs",
      "Fine arts and design graduates wanting hands-on practical exposure",
      "Existing artisans aiming to upgrade to premium urban market standards",
      "Creative individuals looking to launch their home decor micro-brand",
    ],
    currentFeeText: "Contact us for current fees",
    scholarshipNotice:
      "Scholarships available for eligible women creators, rural artisan clusters, and differently-abled learners.",
  },
  {
    id: "master-artisan-certification",
    slug: "master-artisan-certification",
    title: "Master Artisan Certification",
    category: "Professional Artisan Certification",
    tagline: "Transform your passion into a self-sustaining creative enterprise.",
    duration: "1 – 3 Months (Full Program)",
    level: "Advanced / Career Track",
    location: "Patna / West Champaran Hubs",
    mode: "Intensive Studio Apprenticeship & Online Modules",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Our most extensive certification covering advanced craft mastery, e-commerce, digital cataloging, business skills, one-on-one mentorship, and placement/project support.",
    fullDescription:
      "The Master Artisan Certification is designed to nurture craft leaders and creative entrepreneurs. Over 1 to 3 months, students undergo rigorous craft apprenticeships alongside practical modules on digital marketing, online store setup, photography for handicrafts, client communication, and export standards. Outstanding graduates are integrated directly into EcoWish production runs.",
    focusAreas: [
      "Advanced multi-material craftsmanship and joinery",
      "Business literacy, GST basics, invoicing, and banking",
      "Online selling, social media marketing, and smartphone photography",
      "Dedicated 1-on-1 mentorship and client project placement support",
    ],
    curriculum: [
      {
        module: "Month 1",
        title: "Advanced Craft Mastery & Material Innovation",
        topics: [
          "Mastery of complex upcycling techniques and large formats",
          "Tool ergonomics, workshop safety, and efficient production lines",
          "Independent collection development",
        ],
      },
      {
        module: "Month 2",
        title: "The Business of Craft & Digital Commerce",
        topics: [
          "Setting up online profiles on artisan marketplaces and social commerce",
          "Product photography using smartphones and natural lighting",
          "Pricing formulas, margin structures, and wholesale vs. retail",
        ],
      },
      {
        module: "Month 3 (Optional)",
        title: "Apprenticeship, Live Client Projects & Showcase",
        topics: [
          "Working on live EcoWish client and event projects",
          "Mentorship sessions with business co-founder Amiya Swarup",
          "Graduation jury, portfolio catalog compilation, and certification",
        ],
      },
    ],
    keyBenefits: [
      "Complete end-to-end artisan business training",
      "Direct project work opportunities on EcoWish commercial commissions",
      "High-level portfolio and digital catalog ready for clients",
      "EcoWish Master Artisan Credential",
      "Placement and incubation support for starting independent craft collectives",
      "Access to ongoing raw material procurement networks",
    ],
    whoShouldJoin: [
      "Committed craftspeople aiming to establish their own creative micro-enterprise",
      "Design and fine arts diploma holders looking for practical enterprise skills",
      "Community leaders organizing women's self-help groups (SHGs)",
      "Dedicated artists seeking commercial stability",
    ],
    currentFeeText: "Contact us for current fees",
    scholarshipNotice:
      "Need-based and merit-based financial aid is prioritized for candidates from underrepresented backgrounds, rural craft regions, and women artisans.",
  },
  {
    id: "corporate-ngo-workshops",
    slug: "corporate-ngo-workshops",
    title: "Corporate & NGO Workshops",
    category: "Institutional & Community Workshops",
    tagline: "Experiential eco-workshops tailored for schools, colleges, NGOs, and corporate teams.",
    duration: "Half-Day / Full-Day / Multi-Session Modules",
    level: "All Skill Levels",
    location: "On-Site (Client Campus) or EcoWish Studios",
    mode: "Facilitated Group Workshop",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Tailored sustainability and upcycling workshops designed to engage employees, students, or community members in meaningful hands-on environmental action.",
    fullDescription:
      "EcoWish conducts custom experiential sessions for schools, universities, non-profits, and corporate teams across Bihar and neighboring regions. Our workshops turn environmental theory into tangible creative output. Participants leave with their own handmade upcycled creations, a deeper respect for artisan labor, and actionable waste-reduction habits.",
    focusAreas: [
      "Hands-on waste upcycling suitable for groups",
      "Team collaboration through large communal art pieces",
      "Awareness of circular economy principles and Indian crafts",
      "Customized themes aligned with corporate ESG or academic curricula",
    ],
    curriculum: [
      {
        module: "Session 1",
        title: "Context & Creative Provocation",
        topics: [
          "The lifecycle of everyday waste items",
          "Introduction to traditional Indian waste-to-wealth techniques",
          "Design thinking challenge for groups",
        ],
      },
      {
        module: "Session 2",
        title: "Hands-on Crafting Lab",
        topics: [
          "Guided fabrication using pre-sanitized surplus materials",
          "Individual object crafting (planters, diaries, decor accents)",
          "Optional team sculpture or mural installation",
        ],
      },
      {
        module: "Session 3",
        title: "Reflection, Exhibition & Certification",
        topics: [
          "Pop-up exhibition of participant work",
          "Sharing insights and institutional waste reduction pledges",
          "Distribution of co-branded EcoWish Certificates",
        ],
      },
    ],
    keyBenefits: [
      "Memorable experiential team-building with zero plastic",
      "Measurable ESG and sustainability engagement metrics",
      "Inspires creative mindfulness and environmental accountability",
      "Fully turnkey: EcoWish supplies trainers, materials, and safety gear",
      "Participation certificates provided for every attendee",
    ],
    whoShouldJoin: [
      "Schools and colleges seeking experiential eco-clubs activities",
      "Corporate HR and CSR departments organizing green wellness days",
      "NGOs conducting livelihood skill-building sessions",
      "Festival and community cultural organizers",
    ],
    currentFeeText: "Contact us for customized institutional proposals",
    scholarshipNotice:
      "Discounted or sponsored sessions available for government schools and non-profit community clusters.",
  },
];

export const UPCOMING_BATCHES: UpcomingBatch[] = [
  {
    id: "batch-upcycling-patna-01",
    programTitle: "Upcycling & Waste-to-Craft Workshop",
    programSlug: "upcycling-workshop",
    duration: "5 Days",
    locations: ["Patna", "West Champaran"],
    status: "Open",
    startDateDescription: "Next Cohort Enrolling Now",
    scheduleDescription: "Morning & Afternoon Batches Available",
    scholarshipAvailable: true,
  },
  {
    id: "batch-decor-champaran-01",
    programTitle: "Sustainable Home Decor Course",
    programSlug: "sustainable-home-decor",
    duration: "15 Days",
    locations: ["Patna", "West Champaran"],
    status: "Open",
    startDateDescription: "Enrolling for Upcoming Session",
    scheduleDescription: "Mon–Fri Studio Intensives",
    scholarshipAvailable: true,
  },
  {
    id: "batch-master-01",
    programTitle: "Master Artisan Certification",
    programSlug: "master-artisan-certification",
    duration: "2 Months",
    locations: ["Patna", "West Champaran"],
    status: "Upcoming",
    startDateDescription: "Applications Open for Next Cohort",
    scheduleDescription: "Full Studio Apprenticeship Schedule",
    scholarshipAvailable: true,
  },
];

export const DESIGN_EXAM_PREP: ExamPrepCategory[] = [
  {
    id: "nift",
    code: "NIFT",
    name: "National Institute of Fashion Technology Entrance",
    targetInstitutions: "NIFT Campuses Nationwide (B.Des, B.FTech, M.Des)",
    shortDescription:
      "Comprehensive artistic, aesthetic, and design aptitude mentoring guided by NIFT alumnus Sudhanshu Pandey.",
    syllabusHighlights: [
      "Creative Ability Test (CAT): Visualization, storytelling, perspective sketching",
      "General Ability Test (GAT): Design observation, quantitative and analytical logic",
      "Situation Test: Hands-on 3D material manipulation, scale, model aesthetics, write-ups",
      "Portfolio preparation and personal interview guidance",
    ],
    examPatternSummary:
      "Focuses heavily on intuitive drawing, originality, color application, and rapid physical modeling with limited materials.",
    idealFor: "Class 11, 12, and gap-year students aspiring for premier fashion and design careers in India.",
  },
  {
    id: "nid",
    code: "NID",
    name: "National Institute of Design DAT (Prelims & Mains)",
    targetInstitutions: "NID Ahmedabad, Bengaluru, Gandhinagar, and Regional NIDs (B.Des / M.Des)",
    shortDescription:
      "Deep problem-solving, cognitive sketching, human-centered design, and hands-on material testing.",
    syllabusHighlights: [
      "Design Aptitude Test (DAT) Prelims: Visual and creative reasoning, lateral thinking",
      "Studio Test (DAT Mains): 3D modeling, observation tests, audiovisual sensitivity",
      "Concept sketching: Contextual design for real-world Indian challenges",
      "Mock interviews and personal portfolio evaluation",
    ],
    examPatternSummary:
      "NID values observation, lateral problem solving, and social empathy over mere technical shading.",
    idealFor: "Students seeking world-class industrial, communication, textile, and interaction design degrees.",
  },
  {
    id: "uceed",
    code: "UCEED",
    name: "Undergraduate Common Entrance Examination for Design",
    targetInstitutions: "IIT Bombay, IIT Delhi, IIT Guwahati, IIT Hyderabad, IIITDM Jabalpur, etc.",
    shortDescription:
      "Rigorous preparation covering analytical visualization, spatial reasoning, and drawing aptitude for IIT design programs.",
    syllabusHighlights: [
      "Part A: Visualization & spatial ability, observation & design sensitivity, analytical reasoning",
      "Part B: Perspective drawing, proportion, scene rendering, and environmental detailing",
      "Speed sketching techniques and spatial projection drills",
      "Timed computer-based test simulation and past paper deconstructions",
    ],
    examPatternSummary:
      "Demands high-speed spatial perception, geometric precision, and imaginative perspective sketching.",
    idealFor: "Science, commerce, and humanities students aiming for Bachelor of Design (B.Des) at premier IITs.",
  },
  {
    id: "ceed",
    code: "CEED",
    name: "Common Entrance Examination for Design (Postgraduate)",
    targetInstitutions: "IITs and IISc Bangalore for M.Des & Ph.D. programs",
    shortDescription:
      "Advanced design problem-solving, product concepts, visual communication, and technical portfolio development.",
    syllabusHighlights: [
      "Part A: Visual perception, environmental sensitivity, creative problem analysis",
      "Part B: Product design sketching, user journey illustration, narrative representation",
      "Design portfolio compilation for post-exam departmental interviews",
      "One-on-one critique on industrial and sustainable design projects",
    ],
    examPatternSummary:
      "Focuses on mature design thinking, systems design, and exceptional visual communication skills.",
    idealFor: "Graduates in engineering, architecture, arts, or design preparing for master's programs at IITs/IISc.",
  },
  {
    id: "other-design-exams",
    code: "OTHER",
    name: "Other National & State Design Entrance Examinations",
    targetInstitutions: "Private & State Design Universities (FDDI, Pearl Academy, Srishti, UID, MIT-ID)",
    shortDescription:
      "Extensible curriculum tailored to specific university exam formats, general design aptitude, and studio rounds.",
    syllabusHighlights: [
      "Core drawing fundamentals: light, shadow, human anatomy, linear perspective",
      "Material exploration: clay, paper, wire, cloth, and cardboard",
      "Creative portfolio curation tailored to each institution's specific criteria",
      "Interview confidence, articulation, and personal statement coaching",
    ],
    examPatternSummary:
      "Customized based on the specific university's evaluation matrix and testing dates.",
    idealFor: "Students targeting comprehensive multi-college design entrance applications.",
  },
];
