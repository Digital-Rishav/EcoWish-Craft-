export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract / Project-Based";
  experience: string;
  shortDescription: string;
  responsibilities: string[];
  qualifications: string[];
}

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "artisan-trainer",
    title: "Artisan Trainer & Skill Development Coordinator",
    department: "Training & Artisan Empowerment",
    location: "West Champaran & Patna, Bihar",
    type: "Full-Time",
    experience: "2–5 Years in craft instruction or design fieldwork",
    shortDescription:
      "Lead hands-on upcycling and craft development workshops for rural artisan clusters and student batches.",
    responsibilities: [
      "Conduct structured training sessions in upcycling, fiber weaving, and finishing",
      "Monitor quality control across student prototypes and artisan batch production",
      "Engage with women's self-help groups and rural craft communities in West Champaran",
      "Collaborate with the design head on new training module development",
    ],
    qualifications: [
      "Background in Fine Arts, Textile Design, Craft Technology, or demonstrated artisan mastery",
      "Fluency in Hindi/Bhojpuri and good conversational communication",
      "Passion for grassroots artisan empowerment and sustainable materials",
    ],
  },
  {
    id: "product-designer",
    title: "Product Design & Development Associate",
    department: "Design & Innovation",
    location: "Patna Studio (with field visits)",
    type: "Full-Time",
    experience: "1–3 Years (Fresh design graduates welcome to apply)",
    shortDescription:
      "Transform waste streams into functional home decor, lifestyle accessories, and modular installations.",
    responsibilities: [
      "Conceptualize and sketch 2D/3D proposals for eco-friendly home decor and corporate gifts",
      "Fabricate rapid physical prototypes using reclaimed timber, scrap metals, and textiles",
      "Work alongside master artisans to translate sketches into reproducible production batches",
      "Prepare technical specifications, bill of materials (BOM), and costing sheets",
    ],
    qualifications: [
      "Degree/Diploma in Industrial Design, Textile Design, Craft Design (NIFT, NID, or reputed institute)",
      "Strong freehand sketching and 3D prototyping abilities",
      "Understanding of sustainable materials and manufacturing constraints",
    ],
  },
  {
    id: "marketing-social",
    title: "Marketing & Social Media Strategist",
    department: "Brand & Growth",
    location: "Patna / Hybrid",
    type: "Full-Time",
    experience: "1–4 Years in digital storytelling or brand marketing",
    shortDescription:
      "Document artisan stories, craft compelling visual narratives, and grow EcoWish's digital presence.",
    responsibilities: [
      "Manage social media channels with authentic storytelling, reels, and craft process videos",
      "Coordinate photo and video documentation of workshops, projects, and founder insights",
      "Run targeted lead generation campaigns for training programs and corporate services",
      "Engage with architecture, interior design, and sustainability communities online",
    ],
    qualifications: [
      "Strong portfolio in content creation, copywriting, and social media management",
      "Basic photography and short-form video editing skills",
      "Appreciation for Indian art, culture, and sustainable living",
    ],
  },
  {
    id: "sales-b2b",
    title: "Sales & Business Development Lead (B2B & Institutional)",
    department: "Business Growth",
    location: "Patna / Regional Travel",
    type: "Full-Time",
    experience: "2–6 Years in corporate gifting, interior styling, or B2B sales",
    shortDescription:
      "Drive partnerships with corporates, hotels, event organizers, schools, and NGOs for sustainable solutions.",
    responsibilities: [
      "Identify and pitch corporate gifting, decor solutions, and ESG workshops to institutions",
      "Prepare customized project proposals, quotations, and impact metrics with the founding team",
      "Manage client relationships from initial inquiry through order execution and delivery",
      "Represent EcoWish Craft India at exhibitions, trade shows, and industry conclaves",
    ],
    qualifications: [
      "Proven track record in client-facing business development or institutional sales",
      "Excellent interpersonal, presentation, and written proposal skills",
      "Ability to understand and articulate sustainability impact",
    ],
  },
  {
    id: "operations-logistics",
    title: "Operations & Production Logistics Coordinator",
    department: "Operations",
    location: "West Champaran / Patna",
    type: "Full-Time",
    experience: "2–4 Years in supply chain, workshop operations, or manufacturing",
    shortDescription:
      "Manage raw material collection, inventory of waste streams, and dispatch of finished handcrafted goods.",
    responsibilities: [
      "Supervise daily workshop flow between material sorting, artisan production, and packaging",
      "Coordinate with courier and logistics partners for secure pan-India dispatches",
      "Maintain material inventory, safety standards, and tool maintenance",
      "Track order timelines and deliver on client delivery milestones",
    ],
    qualifications: [
      "Experience in production scheduling, inventory management, or logistics",
      "Well-organized, detail-oriented with basic computer/spreadsheet literacy",
      "Problem-solving attitude in dynamic workshop environments",
    ],
  },
  {
    id: "admin-field-staff",
    title: "Administrative & Field Community Officer",
    department: "Administration",
    location: "West Champaran, Bihar",
    type: "Full-Time",
    experience: "1–3 Years in community coordination, NGO field work, or office administration",
    shortDescription:
      "Liaise with local community members, manage center documentation, and assist visitor logistics.",
    responsibilities: [
      "Maintain training attendance registers, student records, and feedback forms",
      "Support visiting students, interns, and corporate visitors at the Champaran center",
      "Manage basic petty cash and office maintenance tasks",
      "Assist in coordinating community mobilization meetings with local artisan families",
    ],
    qualifications: [
      "Graduate in any discipline; familiarity with MS Office / Google Workspace",
      "Local resident of West Champaran or willing to relocate",
      "Empathetic, community-focused disposition",
    ],
  },
];
