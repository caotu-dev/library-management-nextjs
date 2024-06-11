import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/core/layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import { SEODefaultConfig } from "@/core/constants/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = SEODefaultConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
