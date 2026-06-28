import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Asif Zamil - Full Stack Developer Portfolio",
    template: "%s | Asif Zamil",
  },
  description: "Professional Full Stack Developer Portfolio showcasing projects, skills, and experience in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Web Development", "Portfolio"],
  authors: [{ name: "Asif Zamil" }],
  creator: "Asif Zamil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asifzamil.com",
    title: "Asif Zamil - Full Stack Developer Portfolio",
    description: "Professional Full Stack Developer Portfolio showcasing projects, skills, and experience in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Asif Zamil Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asif Zamil - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif Zamil - Full Stack Developer Portfolio",
    description: "Professional Full Stack Developer Portfolio showcasing projects, skills, and experience in React, Next.js, Node.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@asifzamil",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://asifzamil.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ScrollProgress />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
