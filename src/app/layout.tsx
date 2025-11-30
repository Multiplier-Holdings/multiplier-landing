import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const financier = localFont({
  src: "../../public/font/FinancierDisplay-Semibold.woff2",
  variable: "--font-serif",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Multiplier Holdings | The Operating System for Professional Services",
  description: "Expertise, Multiplied. Building and scaling professional services companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${financier.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
