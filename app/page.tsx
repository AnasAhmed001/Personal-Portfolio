import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/Chatbot";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col max-w-full">
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
