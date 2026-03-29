import AnimatedSection from "./AnimatedSection";
import ProjectsClient from "./ProjectsClient";
import { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "AI Task Manager",
    description:
      "Built an AI Task Manager that helps users manage their tasks using natural language prompts.",
    image:
      "https://res.cloudinary.com/ddh8kuzew/image/upload/f_avif,q_auto/v1774805735/Capture_m0nboq.png",
    tags: [
      "Nextjs",
      "Tailwind CSS",
      "Shadcn UI",
      "OpenAI Agents SDK",
      "MCP SDK",
      "FastAPI",
      "Python",
      "NeonDB",
    ],
    liveUrl: "https://q4-hackathon-2.vercel.app",
    githubUrl: "https://github.com/AnasAhmed001/Q4-Hackathon-2/tree/main/phase-3-todo-chatbot",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "Built an AI content creator that connects social accounts, generates content roadmaps, and schedules posts intelligently.",
    image:
      "https://res.cloudinary.com/ddh8kuzew/image/upload/f_avif,q_auto/AI_Content_Generator.webp",
    tags: [
      "Nextjs",
      "Tailwind CSS",
      "Ant Design",
      "Gemini API",
      "Node.js",
      "MongoDB",
      "Expressjs",
      "Redis",
      "BullMQ",
      "Python",
    ],
    liveUrl: "https://ai-content-creator-rho.vercel.app/",
    githubUrl: "https://github.com/AnasAhmed001/AI_Content_Creator",
  },
  {
    id: 3,
    title: "Saylani Moments",
    description:
      "A face-detecting gallery built exclusively for Saylani Welfare International that streamlined event photo delivery.",
    image:
      "https://res.cloudinary.com/ddh8kuzew/image/upload/f_avif,q_auto/Saylani-Moments.webp",
    tags: [
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "AWS",
      "DynamoDB",
      "Lambda",
      "S3",
    ],
    githubUrl: "https://github.com/AnasAhmed001/Face-detecting-gallery-app",
  },
  {
    id: 4,
    title: "Blogging App",
    description:
      "A clean, modern Blogging App built using ReactJS, Tailwind CSS, DaisyUI. It includes Firebase Authentication and Firestorage for seamless data storage and retrieval",
    image:
      "https://res.cloudinary.com/ddh8kuzew/image/upload/f_avif,q_auto/Blogging_App.webp",
    tags: ["React", "Tailwind CSS", "DaisyUI", "Firebase"],
    liveUrl: "https://react-blogging-website-phi.vercel.app/",
    githubUrl: "https://github.com/AnasAhmed001/React-blogging-website",
  },
  {
    id: 5,
    title: "Meme Maker App",
    description:
      "Built a Meme Maker App using NextJS and TailwindCSS which comes with in which user can create and download ",
    image:
      "https://res.cloudinary.com/ddh8kuzew/image/upload/f_avif,q_auto/meme_maker.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://meme-maker-drab.vercel.app/",
    githubUrl: "https://github.com/AnasAhmed001/meme-maker",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Built a beautiful weather app using ReactJS and tailwind CSS. Featuring a Responsive UI and geolocation to get user current loacation and display the weather using OpenWeatherApi.",
    image:
      "https://res.cloudinary.com/ddh8kuzew/image/upload/f_avif,q_auto/weather-app.webp",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://react-weather-app-eosin-iota.vercel.app/",
    githubUrl: "https://github.com/AnasAhmed001/React-Weather-App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center" direction="up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Selected Works
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore my featured projects, showcasing my expertise in design and
            development
          </p>
        </AnimatedSection>
        <ProjectsClient projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
