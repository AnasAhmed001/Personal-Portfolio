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
export const metadata: Metadata = {
  title: "Anas Ahmed | Portfolio",
  description:
    "Hi I am Anas Ahmed, a MERN Stack developer from Pakistan with strong foundation in Frontend Technologies. This is my Personal Portfolio that reflects my work and experience as a MERN Stack Developer.",
  keywords:
    "Anas Ahmed Portfolio, Frontend Developer Portfolio, React Developer Portfolio, MERN Stack Developer Portfolio, Portfolio, JavaScript",
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
