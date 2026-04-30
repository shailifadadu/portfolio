"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-5 right-5 glass w-12 h-12 rounded-full flex items-center justify-center card-hover hover:text-accent"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === "light" ? (
          <BsSun className="w-5 h-5" />
        ) : (
          <BsMoon className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
}
