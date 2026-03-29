"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Toggle
        aria-label="Toggle theme"
        className="p-2 rounded-full border border-border bg-background hover:bg-accent cursor-pointer"
      >
        <div className="relative h-[1.2rem] w-[1.2rem]" />
      </Toggle>
    );
  }

  return (
    <Toggle
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="p-2 rounded-full border border-border bg-background hover:bg-accent cursor-pointer"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "dark" ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {theme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </motion.div>
    </Toggle>
  );
};


export default ThemeToggle;
