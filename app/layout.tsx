import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
// @ts-expect-error Next.js handles this global stylesheet import at build time.
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import FestiveProvider from "@/components/festive/FestiveProvider";
import { COMPANY_INFO } from "@/lib/constants/company";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://ecowishcraft.com"),
  title: {
    default: "EcoWish Craft India | Turning Creativity, Craft & Waste Into Meaningful Design",
    template: "%s | EcoWish Craft India",
  },
  description:
    "EcoWish Craft India Pvt. Ltd. transforms waste materials into valuable sustainable handicrafts, eco home decor, portrait painting, and interior styling while providing professional craft training and NIFT/NID/UCEED design exam preparation in Bihar.",
  keywords: [
    "EcoWish Craft India",
    "eco friendly handicrafts Bihar",
    "sustainable home decor",
    "upcycled handicrafts",
    "handmade decor Bihar",
    "portrait painting services",
    "event decoration Bihar",
    "wedding decoration Bihar",
    "art training Patna",
    "painting classes Patna",
    "handicraft training Bihar",
    "design entrance preparation",
    "NIFT preparation",
    "NID preparation",
    "UCEED preparation",
  ],
  authors: [{ name: "EcoWish Craft India Pvt. Ltd." }],
  creator: "EcoWish Craft India Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ecowishcraft.com",
    siteName: "EcoWish Craft India",
    title: "EcoWish Craft India | Sustainable Design, Decor & Artisan Training",
    description:
      "Combining traditional Indian craftsmanship, modern creativity, and sustainable upcycling for homes, corporate projects, and aspiring design students.",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 800,
        height: 800,
        alt: "EcoWish Craft India Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoWish Craft India",
    description: "Turning Creativity, Craft & Waste Into Meaningful Design.",
    images: ["/assets/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ecowishcraft.com/#organization",
        name: COMPANY_INFO.name,
        legalName: COMPANY_INFO.legalName,
        url: "https://ecowishcraft.com",
        logo: "https://ecowishcraft.com/assets/images/logo.png",
        description: COMPANY_INFO.shortMission,
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_INFO.address.line1,
          addressLocality: COMPANY_INFO.address.district,
          addressRegion: COMPANY_INFO.address.state,
          postalCode: COMPANY_INFO.address.pincode,
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: COMPANY_INFO.contact.primaryPhone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        founder: [
          {
            "@type": "Person",
            name: "Sudhanshu Pandey",
            jobTitle: "Founder | Designer & Artist",
          },
          {
            "@type": "Person",
            name: "Amiya Swarup",
            jobTitle: "Co-Founder | Marketing & Strategy",
          },
        ],
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://ecowishcraft.com/#training",
        name: "EcoWish Craft Training & Design Exam Mentorship",
        url: "https://ecowishcraft.com/training",
        description:
          "Professional hands-on skill development in upcycling, home decor, portrait painting, and NIFT / NID / UCEED design entrance coaching in Bihar.",
      },
    ],
  };

  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ecowish-bg text-ecowish-charcoal antialiased selection:bg-ecowish-accent/30 selection:text-ecowish-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ecowish-primary focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <FestiveProvider />
        <Navbar />
        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <MobileActionBar />
      </body>
    </html>
  );
}
