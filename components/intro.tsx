"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaTerminal } from "react-icons/fa";

const TerminalLine = ({
  prefix,
  text,
  delay,
  isCommand = false,
}: {
  prefix?: string;
  text: string;
  delay: number;
  isCommand?: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setIsTyping(true);
      setShowCursor(true);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setShowCursor(false);
    }
  }, [displayedText, text, isTyping]);

  return (
    <div className="flex items-start gap-2 font-mono text-sm sm:text-base">
      {prefix && <span className="text-accent shrink-0">{prefix}</span>}
      <span className={isCommand ? "text-foreground" : "text-muted-foreground"}>
        {displayedText}
        {showCursor && (
          <span className="inline-block w-2 h-4 bg-accent ml-0.5 cursor-blink" />
        )}
      </span>
    </div>
  );
};

export default function Intro() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="mb-28 max-w-[52rem] text-center sm:mb-0 scroll-mt-[100rem] px-4"
    >
      {/* Profile Image */}
      <div className="flex items-center justify-center mb-8">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 125, delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl scale-110" />
          <Image
            src="/profile.jpg"
            alt="Shaily Fadadu"
            width="150"
            height="150"
            quality="95"
            priority={true}
            className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover border-2 border-accent/50 shadow-xl"
          />
          <div className="absolute -bottom-1 -right-1 bg-accent text-accent-foreground p-2 rounded-full">
            <FaTerminal className="w-3 h-3" />
          </div>
        </motion.div>
      </div>

      {/* Terminal Window */}
      <motion.div
        className="glass rounded-lg overflow-hidden mb-10 text-left max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground font-mono ml-2">
            ~/shaily-portfolio
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-4 space-y-2 bg-card/30">
          <TerminalLine
            prefix="$"
            text="whoami"
            delay={300}
            isCommand={true}
          />
          <TerminalLine
            text="Shaily Fadadu"
            delay={800}
          />
          <TerminalLine
            prefix="$"
            text="cat role.txt"
            delay={1400}
            isCommand={true}
          />
          <TerminalLine
            text="Backend Developer"
            delay={1900}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-balance">
          Building{" "}
          <span className="text-gradient">modern web experiences</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8 text-pretty">
          A passionate developer crafting scalable applications with React,
          Next.js, and cloud technologies. Always eager to learn and contribute
          to open source.
        </p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            href="/contact"
            className="group bg-accent text-accent-foreground px-6 py-3 flex items-center gap-2 rounded-lg font-medium card-hover glow"
          >
            Contact me
            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            className="group glass px-6 py-3 flex items-center gap-2 rounded-lg font-medium card-hover"
            href="/CV.pdf"
            download
          >
            Download Resume
            <HiDownload className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <div className="flex gap-2">
            <a
              className="glass p-3 rounded-lg card-hover hover:text-accent"
              href="https://www.linkedin.com/in/shailyfadadu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <BsLinkedin className="w-5 h-5" />
            </a>

            <a
              className="glass p-3 rounded-lg card-hover hover:text-accent"
              href="https://github.com/shailifadadu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithubSquare className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
