import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/Chatbot";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";
import { portfolioData } from "@/lib/portfolio-data";

// JSON-LD structured data for SEO + AEO
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.personal.name,
  url: portfolioData.personal.portfolio,
  jobTitle: portfolioData.personal.title,
  description: portfolioData.personal.summary,
  email: `mailto:${portfolioData.personal.email}`,
  telephone: portfolioData.personal.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  sameAs: [
    portfolioData.personal.linkedin,
    portfolioData.personal.github,
    portfolioData.personal.portfolio,
  ],
  knowsAbout: [
    ...portfolioData.skills.frameworksAndLibraries,
    ...portfolioData.skills.uiLibraries,
    ...portfolioData.skills.tools,
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: portfolioData.education[0].institution,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Anas Ahmed Portfolio",
  url: portfolioData.personal.portfolio,
  description:
    "Full Stack Developer and Agentic AI Engineer from Pakistan. Specializing in React, Next.js, Node.js, Python, and AI-powered applications.",
  author: {
    "@type": "Person",
    name: portfolioData.personal.name,
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col max-w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollProgressBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

