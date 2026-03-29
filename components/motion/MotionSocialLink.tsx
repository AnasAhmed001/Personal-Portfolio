"use client";

import { motion } from "framer-motion";

interface MotionSocialLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const MotionSocialLink = ({ href, children, className }: MotionSocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ||
        "w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground"
      }
      whileHover={{ y: -3, backgroundColor: "#333", color: "#fff" }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
};

export default MotionSocialLink;
