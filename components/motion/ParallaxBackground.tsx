"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBackgroundProps {
  gradient: string;
  offset?: string;
  direction?: "to-t" | "to-b";
}

const ParallaxBackground = ({
  gradient,
  offset = "30%",
  direction = "to-t",
}: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", offset]);

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 bg-gradient-${direction} ${gradient}`}
      style={{ y, willChange: "transform" }}
    />
  );
};

export default ParallaxBackground;
