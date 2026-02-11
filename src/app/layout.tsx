import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

// Configuration Montserrat avec les 3 poids (Regular, Medium, Bold)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://service-incendie.netlify.app"),
  title: {
    default: "Fire FORENSIC | Formation Sécurité, Nautisme et Expertise",
    template: "%s | Fire FORENSIC",
  },
  description: "Fire FORENSIC propose des formations professionnelles en sécurité incendie, nautisme et accompagnement d'entreprises. Expert en prévention et gestion des risques.",
  keywords: [
    "formation sécurité",
    "formation incendie",
    "permis bateau",
    "nautisme",
    "Fire FORENSIC",
    "prévention incendie",
    "expertise post-incendie",
  ],
  authors: [{ name: "Fire FORENSIC" }],
  creator: "Fire FORENSIC",
  publisher: "Fire FORENSIC",
  applicationName: "Fire FORENSIC",

  // Open Graph par défaut
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fireforensic.com",
    siteName: "Fire FORENSIC",
    title: "Fire FORENSIC | Formation Sécurité, Nautisme et Expertise",
    description: "Expert en formation professionnelle, sécurité incendie et navigation",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Fire FORENSIC",
      },
    ],
  },

  // Twitter par défaut
  twitter: {
    card: "summary_large_image",
    title: "Fire FORENSIC | Formation Sécurité, Nautisme et Expertise",
    description: "Expert en formation professionnelle, sécurité incendie et navigation",
    creator: "@fireforensic",
    images: ["/images/og-default.jpg"],
  },

  // Robots
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

  // Icônes et manifeste
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} antialiased overflow-y-scroll overflow-x-hidden font-montserrat-regular`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
