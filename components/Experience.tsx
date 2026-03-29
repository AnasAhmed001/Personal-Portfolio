import { Calendar, MapPin, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ParallaxBackground from "./motion/ParallaxBackground";
import ExperienceCard from "./motion/ExperienceCard";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "Saylani Tech",
    location: "Karachi, Pakistan (Onsite)",
    period: "July 2025 - October 2025",
    description: [
      "Built production-ready React.js apps with Shadcn UI and Tailwind CSS, including Saylani Moments a face-detecting gallery built exclusively for Saylani Welfare International that streamlined event photo delivery.",
      "Developed an AI-powered content generator platform that connects with users' social accounts, creates personalized content roadmaps, and schedules posts automatically either at the user's chosen times or on the optimized times suggested by AI for maximum engagement.",
      "Led a team of developers, fostering collaboration and guiding the project from planning to deployment, which strengthened my leadership and teamwork skills.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Git", "GitHub", "AWS", "Shadcn UI", "Ant Design", "Material UI", "Nodejs", "Expressjs", "MongoDB", "Redis", "BullMQ", "Python"],
  },
  {
    id: 2,
    title: "React.Js Intern",
    company: "Plural Dynamics",
    location: "Karachi, Pakistan (Remote)",
    period: "May 2025 - July 2025",
    description: [
      "Contributed to a student management sytem using React and by integrating backend Api's.",
      "Worked closely with senior developers to learn best practices",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Assisted in debugging and testing web applications",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "GitHub", "Ant Design", "Material UI"],
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "Prodigy Info Tech",
    location: "Karachi, Pakistan (Remote)",
    period: "March 2025 - April 2025",
    description: [
      "Created custom websites for small businesses and startups",
      "Managed full project lifecycle from requirements to deployment",
      "Delivered projects on time and within budget constraints",
      "Provided ongoing maintenance and support for client websites",
    ],
    technologies: ["HTML/CSS", "JavaScript", "Git", "GitHub"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden"
    >
      <ParallaxBackground gradient="from-background/0 to-secondary/30" direction="to-b" offset="20%" />

      <div className="section-container relative z-10">
        <AnimatedSection className="mb-16 text-center" direction="up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Professional Journey
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My career path and the experiences that shaped my expertise
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              direction="up"
              delay={index * 0.2}
              className="relative"
            >
              <ExperienceCard>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <Briefcase className="w-4 h-4" />
                      {experience.company}
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ExperienceCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
