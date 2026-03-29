import AnimatedSection from "./AnimatedSection";

const AboutContent = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
      <AnimatedSection direction="left" delay={0.2}>
        <div className="aspect-3/2 relative overflow-hidden rounded-2xl glass">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10" />
          <img
            src="https://res.cloudinary.com/ddh8kuzew/image/upload/f_avif,q_auto/c_crop,g_north_west,h_809,w_928,y_32/-vcsbt1_pcn7al.jpg"
            alt="Anas Ahmed"
            className="w-full h-full object-cover"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.4} className="space-y-6">
        <div>
          <h3 className="text-xl font-display font-semibold mb-3">
            <span className="highlight-text">My Approach</span>
          </h3>
          <p className="text-muted-foreground text-justify">
            I am a Full Stack Developer from Pakistan with a strong foundation in MERN Stack and AI. My expertise spans the complete web development lifecycle, from designing intuitive user interfaces with React and Next.js to building robust backend systems using Node.js and Express. I am passionate about creating scalable, efficient, and user-centric applications that solve real-world problems. My approach combines technical excellence with a commitment to continuous learning, ensuring that I deliver high-quality solutions that drive business value.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutContent;
