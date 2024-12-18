import type { Metadata } from "next";
import localFont from "next/font/local";
import {  Inter, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import React, { PropsWithChildren } from "react";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
})

// const lora = Lora({
//   subsets: ["latin", "cyrillic", "cyrillic-ext"],
//   variable: "--font-lora"
// });
//
// const spectral = Spectral({
//   weight: ["200", "300", "400", "500", "600"],
//   subsets: ["cyrillic", "latin"],
//   variable: "--font-spectral"
// });

export const metadata: Metadata = {
  title: "Ленинград после победы",
  description: "Проект по истории"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <body
      className={cn(geistSans.variable, inter.variable, mono.variable, "antialiased scroll-smooth flex flex-col min-h-screen bg-background")}
    >
    <Providers>
      <Header/>
      {children}
    </Providers>
    <Footer/>
    </body>
    </html>
  );
}
