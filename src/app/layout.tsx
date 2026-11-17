import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./cinema.css";
import "./product-scenes.css";
import "./proximity-experience.css";
import "./native-experience.css";
import Nav from "@/components/Nav";
import { SITE_URL } from "@/lib/site";
const manrope = localFont({
  src: [
    {
      path: "../../public/fonts/manrope-latin-variable.woff2",
      weight: "400 800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});
const italiana = localFont({
  src: "../../public/fonts/italiana-regular.ttf",
  variable: "--font-display",
  weight: "400",
  display: "swap",
});
const title = "Aeria — One identity. Every currency. Everywhere.";
const description =
  "A new dimension of payments. Discover Aeria: a universal payment identity and proximity-first vision connecting people, currencies and eligible payment networks.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  manifest: "/manifest.json",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Aeria",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/visuals/aeria-film-social.jpg",
        width: 1200,
        height: 800,
        alt: "Aeria — One identity. Every currency. Everywhere.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/visuals/aeria-film-social.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};
export const viewport: Viewport = {
  themeColor: "#426f78",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${italiana.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
