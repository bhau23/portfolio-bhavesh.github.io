import type { Metadata } from "next";
import { Doto, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const doto = Doto({ subsets: ["latin"], variable: "--font-doto" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "BHAVESH.K — AI / ML Engineer",
    template: "%s — BHAVESH.K",
  },
  description:
    "Bhavesh Kanoje — AI/ML Engineer building production-grade Generative AI, Computer Vision and Agentic AI systems. Oracle Certified Generative AI Professional.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${doto.variable} ${grotesk.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Navbar />
        {children}
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
