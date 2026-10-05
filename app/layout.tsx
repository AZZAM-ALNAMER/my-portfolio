import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./assets/font/font";
import { gitlabmono } from "./assets/font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import ChatbotWidget from "./components/shared/ChatbotWidget";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Azzam Hesham Al-Sarari | AI Engineer",
  description:
    "AI Engineer building intelligent systems across LLMs, agentic AI, and computer vision.",
};

export const metadata: Metadata = {
  title: options.title,
  description: options.description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: options.title,
    siteName: "Azzam Hesham Al-Sarari",
    locale: "en-US",
    type: "website",
    description: options.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ChatbotWidget />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
