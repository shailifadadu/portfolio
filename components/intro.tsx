"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaTerminal } from "react-icons/fa";

const lines = [
  { prefix: ">", text: "whoami",                                                       isCommand: true  },
  { prefix: "",  text: "Shaily Fadadu",                                                isCommand: false },
  { prefix: ">", text: "role",                                                         isCommand: true  },
  { prefix: "",  text: "Software Engineer Intern @ eInfochips (An Arrow Company)",     isCommand: false },
  { prefix: ">", text: "interests",                                                    isCommand: true  },
  { prefix: "",  text: "Backend Development | Distributed Systems | DevOps",           isCommand: false },
];

const COMMAND_SPEED = 40;
const OUTPUT_SPEED  = 18;
const OUTPUT_DELAY  = 120;
const LINE_GAP      = 80;

function buildTimings() {
  const timings: number[] = [];
  let cursor = 300;
  for (let i = 0; i < lines.length; i++) {
    timings.push(cursor);
    const line = lines[i];
    if (line.isCommand) {
      cursor += line.text.length * COMMAND_SPEED + OUTPUT_DELAY;
    } else {
      cursor += line.text.length * OUTPUT_SPEED + LINE_GAP;
    }
  }
  return timings;
}

const timings = buildTimings();
const totalDuration =
  timings[timings.length - 1] +
  lines[lines.length - 1].text.length * OUTPUT_SPEED +
  500;

const TerminalLine = ({
  prefix,
  text,
  delay,
  isCommand,
}: {
  prefix: string;
  text: string;
  delay: number;
  isCommand: boolean;
}) => {
  const [displayed, setDisplayed] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!active) return;
    if (displayed.length < text.length) {
      const speed = isCommand ? COMMAND_SPEED : OUTPUT_SPEED;
      const t = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length + 1)),
        speed
      );
      return () => clearTimeout(t);
    }
  }, [active, displayed, text, isCommand]);

  if (!active) return null;

  return (
    <div className="flex items-start gap-2 font-mono text-sm leading-relaxed">
      {prefix && (
        <span
          className={
            isCommand
              ? "text-accent shrink-0 select-none"
              : "shrink-0 select-none text-muted-foreground"
          }
        >
          {prefix}
        </span>
      )}
      <span className={isCommand ? "text-foreground" : "text-muted-foreground"}>
        {displayed}
        {displayed.length < text.length && (
          <span className="inline-block w-[7px] h-[14px] bg-accent ml-0.5 align-middle animate-pulse" />
        )}
      </span>
    </div>
  );
};

export default function Intro() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowButtons(true), totalDuration);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="mb-28 sm:mb-0 scroll-mt-[100rem] px-4 w-full max-w-5xl mx-auto"
    >
      <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-10 sm:gap-8">

        {/* LEFT — Terminal + Buttons */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-[58%]">

          {/* Terminal Window */}
          <motion.div
            className="glass rounded-lg overflow-hidden mb-8 text-left w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Title bar */}
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

            {/* Lines */}
            <div className="p-5 space-y-1.5 bg-card/30">
              {lines.map((line, i) => (
                <TerminalLine
                  key={i}
                  prefix={line.prefix}
                  text={line.text}
                  delay={timings[i]}
                  isCommand={line.isCommand}
                />
              ))}

              {/* Persistent blinking cursor */}
              <div className="flex items-center gap-2 font-mono text-sm mt-1">
                <span className="text-accent select-none">{">"}</span>
                <span className="inline-block w-[7px] h-[14px] bg-accent animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 w-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: showButtons ? 1 : 0, y: showButtons ? 0 : 16 }}
            transition={{ duration: 0.5 }}
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
          </motion.div>
        </div>

        {/* RIGHT — Profile Photo, top-aligned with terminal */}
        <div className="flex justify-center sm:justify-end sm:w-[38%] sm:pt-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            {/* Glow ring */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-110" />

            <Image
              src="/profile.jpg"
              alt="Shaily Fadadu"
              width={260}
              height={260}
              quality={95}
              priority
              className="relative h-48 w-48 sm:h-64 sm:w-64 rounded-full object-cover border-2 border-accent/50 shadow-2xl"
            />

            {/* Terminal badge */}
            <div className="absolute -bottom-1 -right-1 bg-accent text-accent-foreground p-2.5 rounded-full shadow-lg">
              <FaTerminal className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}