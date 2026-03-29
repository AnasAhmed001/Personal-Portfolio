"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  children: React.ReactNode;
  className?: string;
}

const ExperienceCard = ({ children, className }: ExperienceCardProps) => {
  return (
    <motion.div
      className={
        className ||
        "glass rounded-2xl p-6 md:p-8 border border-border/50 h-auto min-h-[320px] flex flex-col"
      }
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ExperienceCard;
