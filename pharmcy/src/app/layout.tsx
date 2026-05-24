import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "../components/layout/navbar/navbar";
// import Footer from "../components/layout/footer/footer";
// import TopBar from "../components/layout/topbar/topbar";
// import Features from "../components/layout/features/features";
import "./globals.css";
import { cn } from "@/lib/utils";
// import { Toaster } from "sonner";
// import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pharmacy",
  description: "Modern Pharmacy App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          <Navbar />

          {children}

          {/* <Features />
          <Footer /> */}
          {/* <Toaster richColors position="top-center" /> */}
        
      </body>
    </html>
  );
}
