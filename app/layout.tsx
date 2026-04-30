import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Katalog SPBE",
  description: "Katalog layanan dan aplikasi SPBE yang modern, responsif, dan terintegrasi."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} min-h-screen font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
