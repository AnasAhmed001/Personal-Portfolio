"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: string;
}

const MotionLink = ({ href, children, className, download }: MotionLinkProps) => {
  return (
    <motion.a
      href={href}
      download={download}
      className={cn(
        "inline-flex items-center justify-center rounded-md",
        "px-5 py-2.5 text-sm font-medium",
        "border border-input bg-background",
        "transition-all duration-300 ease-out",
        className
      )}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
};

export default MotionLink;
