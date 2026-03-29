"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FooterClientProps {
  year: number;
}

const FooterClient = ({ year }: FooterClientProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-center sm:text-left">
        <motion.div
          className="text-foreground font-medium"
          whileHover={{ scale: 1.02 }}
        >
          Portfolio
        </motion.div>
        <p className="text-sm text-muted-foreground">
          © {year} Anas Ahmed All rights reserved.
        </p>
      </div>

      <motion.nav className="flex gap-6">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={cn(
              "text-sm text-muted-foreground",
              "hover:text-foreground transition-colors"
            )}
            whileHover={{ y: -2 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
};

export default FooterClient;
