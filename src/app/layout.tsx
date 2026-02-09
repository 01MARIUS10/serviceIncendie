import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// Import dynamique pour éviter les erreurs SSR
const TetraedeWrapper = dynamic(() => import("@/components/TetraedeWrapper"), {
  ssr: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tsotra.com"),
  title: {
    default: "TSOTRA | Formation Sécurité, Nautisme et Expertise",
    template: "%s | TSOTRA",
  },
  description: "TSOTRA propose des formations professionnelles en sécurité incendie, nautisme et accompagnement d'entreprises. Expert en prévention et gestion des risques.",
  keywords: [
    "formation sécurité",
    "formation incendie",
    "permis bateau",
    "nautisme",
    "TSOTRA",
    "prévention incendie",
    "expertise post-incendie",
  ],
  authors: [{ name: "TSOTRA" }],
  creator: "TSOTRA",
  publisher: "TSOTRA",
  applicationName: "TSOTRA",
  
  // Open Graph par défaut
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tsotra.com",
    siteName: "TSOTRA",
    title: "TSOTRA | Formation Sécurité, Nautisme et Expertise",
    description: "Expert en formation professionnelle, sécurité incendie et navigation",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "TSOTRA",
      },
    ],
  },

  // Twitter par défaut
  twitter: {
    card: "summary_large_image",
    title: "TSOTRA | Formation Sécurité, Nautisme et Expertise",
    description: "Expert en formation professionnelle, sécurité incendie et navigation",
    creator: "@tsotra",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-scroll overflow-x-hidden`}
      >
        <TetraedeWrapper />
        {children}
      </body>
    </html>
  );
}
