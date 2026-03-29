import AnimatedSection from "./AnimatedSection";
import ParallaxBackground from "./motion/ParallaxBackground";
import AboutContent from "./AboutContent";
import EducationTimeline from "./EducationTimeline";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
    >
      <ParallaxBackground gradient="from-secondary/50 to-background/0" />

      <div className="section-container relative z-10">
        <AnimatedSection className="mb-16 text-center" direction="up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Turning Ideas Into Digital Reality
          </h2>
        </AnimatedSection>

        <AboutContent />
        <EducationTimeline />
      </div>
    </section>
  );
};

export default About;
