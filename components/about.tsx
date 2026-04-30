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
          an Information Technology student from Dharmsinh Desai University, currently interning as a Backend Engineer at eInfochips (An Arrow Company) - where I focus on building microservices, designing REST APIs, and working with cloud
        </p>
        
        <p className="text-muted-foreground">
          I was actively involved in the tech community like <span className="text-accent font-medium">Google Developer Students Club</span>, 
          where I had organized tech events, workshops, and hackathons with 6000+ participants. Leading these events taught me that great software and great teams are built the same way: with clarity, ownership, and iteration.
        </p>
        
        <p className="text-muted-foreground">
          Currently deepening my knowledge in System Design, CI/CD pipelines, and Cloud (AWS & GCP). Open to full-time backend and full-stack engineering roles where I can keep building things that matter.
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
