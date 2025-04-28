"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const Project = forwardRef<HTMLAnchorElement, ProjectProps>(
  ({ title, description, tags, imageUrl, githubLink }, ref) => {
    const { scrollYProgress } = useScroll({
      target: ref as any, // Cast ref to any to resolve TypeScript error
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
      <motion.a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
          display: "block", // Ensures the entire section is clickable
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex justify-between items-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto"
              >
                {/* Left side - Text */}
                <span>View on GitHub</span>

                {/* Right side - GitHub Icon */}
                <FaGithub className="w-5 h-5 ml-4" />
              </a>
            )}
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-even:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </motion.a>
    );
  }
);

Project.displayName = "Project";

export default Project;
