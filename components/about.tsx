"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there 👋, I'm Shaily Fadadu, a dedicated software engineering
        student from Dharmsinh Desai University. I am passionate about
        leveraging technology to solve real-world problems and create impactful
        solutions. Actively involved in the tech community like GDSC, where I
        organize tech events, workshops, and hackathons. Through these
        experiences, I've developed a keen eye for detail, a knack for
        problem-solving, and a drive to continuously learn and adapt in the
        fast-paced world of technology. I'm always eager to learn new
        technologies and currently seeking an{" "}
        <span className="font-medium italic">
          internship and full-time position
        </span>{" "}
        as a software developer.
      </p>

      <p>
        Beyond technical skills, I value collaboration and teamwork, believing
        that diverse perspectives lead to innovative outcomes. Let's connect and
        discuss how we can innovate together!🚀
      </p>
    </motion.section>
  );
}
