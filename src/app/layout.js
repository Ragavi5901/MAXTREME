import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MAXTREME Engineering (P) Ltd | Industrial Solutions",
  description: "We specialize in engineering, project management, installation, and commissioning services for diverse industrial and turnkey projects.",
  keywords: ["industrial pumps", "turnkey installations", "AODD pumps", "centrifugal pumps", "power transmission", "engineering services Chennai", "positive displacement pumps", "industrial valves", "dosing pumps", "MAXTREME Engineering"],
  authors: [{ name: "MAXTREME Engineering" }],
  creator: "MAXTREME Engineering",
  publisher: "MAXTREME Engineering",
  alternates: {
    canonical: 'https://maxtreme.in',
  },
  openGraph: {
    title: "MAXTREME Engineering (P) Ltd | Industrial Solutions",
    description: "Engineering, project management, installation, and commissioning services for diverse industrial and turnkey projects.",
    url: 'https://maxtreme.in',
    siteName: 'MAXTREME Engineering',
    images: [
      {
        url: '/image/logo.png', // Assuming logo is accessible here for OG
        width: 800,
        height: 600,
        alt: 'MAXTREME Engineering Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MAXTREME Engineering (P) Ltd",
    description: "Industrial engineering solutions and turnkey installations.",
    images: ['/image/logo.png'],
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
};

import TopHeader from '@/components/TopHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <TopHeader />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
