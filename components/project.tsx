"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

const Project = forwardRef<HTMLDivElement, ProjectProps>(
  ({ title, description, tags, githubLink, highlight, isInternal, internalLabel }, ref) => {
    const { scrollYProgress } = useScroll({
      target: ref as any,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <article className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-150 bg-white dark:bg-zinc-950">
          {/* Top row: title + link */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              {title}
            </h3>

            <div className="ml-4 shrink-0 pt-0.5">
              {isInternal ? (
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {internalLabel ?? "Internal"}
                </span>
              ) : githubLink ? (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 px-3 py-1 rounded-md hover:text-emerald-600 hover:border-emerald-500 dark:hover:text-emerald-400 dark:hover:border-emerald-500 transition-colors duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub →
                </Link>
              ) : null}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm font-light leading-relaxed text-zinc-500 dark:text-zinc-400 mb-4">
            {description}
          </p>

          {/* Highlight block — only renders if highlight is provided */}
          {highlight && (
            <div className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400 px-4 py-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-l-2 border-emerald-500 mb-4">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Key features: </span>
              {highlight}
            </div>
          )}

          {/* Tags */}
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </article>
      </motion.div>
    );
  }
);

Project.displayName = "Project";

export default Project;