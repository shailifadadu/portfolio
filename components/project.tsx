"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const Project = forwardRef<HTMLAnchorElement, ProjectProps>(
  ({ title, description, tags, imageUrl, githubLink }, ref) => {
    const { scrollYProgress } = useScroll({
      target: ref as any,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
      <motion.a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
          display: "block",
        }}
        className="group mb-6 sm:mb-10 last:mb-0"
      >
        <article className="glass rounded-lg overflow-hidden sm:h-[22rem] relative card-hover">
          <div className="flex flex-col sm:flex-row h-full group-even:sm:flex-row-reverse">
            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-center sm:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                {description}
              </p>
              
              {/* Tags */}
              <ul className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              
              {/* GitHub Link */}
              {githubLink && (
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                    <FaGithub className="w-4 h-4" />
                    View Source
                    <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              )}
            </div>
            
            {/* Image */}
            <div className="relative sm:w-1/2 h-48 sm:h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r group-even:sm:bg-gradient-to-l from-card/80 to-transparent z-10" />
              <Image
                src={imageUrl}
                alt={`${title} project screenshot`}
                fill
                quality={95}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-accent/5" />
          </div>
        </article>
      </motion.a>
    );
  }
);

Project.displayName = "Project";

export default Project;
