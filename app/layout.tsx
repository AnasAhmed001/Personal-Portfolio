import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

// Same fonts as original portfolio
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Same metadata as original index.html
const SITE_URL = "https://anas-ahmed.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anas Ahmed | Full Stack Developer & Agentic AI Engineer",
    template: "%s | Anas Ahmed",
  },
  description:
    "Full Stack Developer and Agentic AI Engineer from Pakistan. Specializing in React, Next.js, Node.js, Python, and AI-powered applications. View my projects, experience, and get in touch.",
  keywords: [
    "Anas Ahmed",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Agentic AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "Portfolio",
    "Karachi",
    "Pakistan",
    "Frontend Developer",
    "Web Developer",
  ],
  authors: [{ name: "Anas Ahmed", url: SITE_URL }],
  creator: "Anas Ahmed",
  publisher: "Anas Ahmed",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Anas Ahmed Portfolio",
    title: "Anas Ahmed | Full Stack Developer & Agentic AI Engineer",
    description:
      "Full Stack Developer and Agentic AI Engineer from Pakistan. Specializing in React, Next.js, Node.js, Python, and AI-powered applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Ahmed | Full Stack Developer & Agentic AI Engineer",
    description:
      "Full Stack Developer and Agentic AI Engineer from Pakistan. Specializing in React, Next.js, Node.js, Python, and AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "lE2vlRKohTflb5fKN2wLw2BTwoBBYY33IJUb9SpMJ08",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`relative ${plusJakartaSans.variable} ${playfairDisplay.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className="relative min-h-full flex flex-col antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <TooltipProvider>{children}</TooltipProvider>
            <Toaster />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
