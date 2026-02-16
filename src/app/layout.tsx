import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { personalInfo, siteConfig } from "./data/data";
import { Providers } from "./components/Providers";
import LoaderWrapper from "./components/LoaderWrapper";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: siteConfig.seoDescription,
  keywords: personalInfo.keywords,
  openGraph: {
    title: `${personalInfo.name} - Portfolio`,
    description: siteConfig.seoDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.previewImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Portfolio`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - Portfolio`,
    description: siteConfig.seoDescription,
    images: [siteConfig.previewImage],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`}>
        <Providers>
          <LoaderWrapper>{children}</LoaderWrapper>
        </Providers>
      </body>
    </html>
  );
}