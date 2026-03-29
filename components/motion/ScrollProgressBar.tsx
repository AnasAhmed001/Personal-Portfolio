"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/utils/animations";

const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left"
      style={{ scaleX: scrollProgress }}
    />
  );
};

export default ScrollProgressBar;
