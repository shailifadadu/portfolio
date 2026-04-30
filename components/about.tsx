"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] leading-7 sm:mb-40 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      
      <div className="glass rounded-lg p-6 sm:p-8 space-y-4">
        <p className="text-muted-foreground">
          Hey there, I&apos;m <span className="text-foreground font-medium">Shaily Fadadu</span>, 
          a dedicated software engineering student from Dharmsinh Desai University. I am passionate 
          about leveraging technology to solve real-world problems and create impactful solutions.
        </p>
        
        <p className="text-muted-foreground">
          Actively involved in the tech community like <span className="text-accent font-medium">GDSC</span>, 
          where I organize tech events, workshops, and hackathons. Through these experiences, I&apos;ve 
          developed a keen eye for detail, a knack for problem-solving, and a drive to continuously 
          learn and adapt in the fast-paced world of technology.
        </p>
        
        <p className="text-muted-foreground">
          I&apos;m always eager to learn new technologies and currently seeking an{" "}
          <span className="text-foreground font-medium italic">internship and full-time position</span>{" "}
          as a software developer.
        </p>

        <div className="pt-4 border-t border-border/50">
          <p className="text-muted-foreground">
            Beyond technical skills, I value collaboration and teamwork, believing that diverse 
            perspectives lead to innovative outcomes.{" "}
            <span className="text-accent font-medium">Let&apos;s connect and innovate together!</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
