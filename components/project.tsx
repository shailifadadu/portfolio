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
        <article className="
          group relative
          border border-zinc-200 dark:border-zinc-700
          rounded-xl p-6
          bg-white dark:bg-zinc-900
          shadow-sm dark:shadow-none
          hover:shadow-lg dark:hover:shadow-emerald-900/20
          hover:border-emerald-400 dark:hover:border-emerald-500
          hover:-translate-y-1
          transition-all duration-300 ease-out
          overflow-hidden
        ">

          {/* Subtle green glow on hover */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent dark:from-emerald-500/10" />

          {/* Accent top-edge line on hover */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Top row: title + link */}
          <div className="flex items-start justify-between mb-3 relative">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
              {title}
            </h3>

            <div className="ml-4 shrink-0 pt-0.5">
              {isInternal ? (
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {internalLabel ?? "Internal"}
                </span>
              ) : githubLink ? (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-zinc-500 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 px-3 py-1 rounded-md hover:text-emerald-600 hover:border-emerald-500 dark:hover:text-emerald-400 dark:hover:border-emerald-400 transition-colors duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub →
                </Link>
              ) : null}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm font-light leading-relaxed text-zinc-500 dark:text-zinc-400 mb-4 relative">
            {description}
          </p>

          {/* Highlight block */}
          {highlight && (
            <div className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-300 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg border-l-2 border-emerald-500 mb-4 relative">
              <span className="font-medium text-zinc-700 dark:text-zinc-100">Key features: </span>
              {highlight}
            </div>
          )}

          {/* Tags */}
          <ul className="flex flex-wrap gap-1.5 relative">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="font-mono text-[11px] text-zinc-500 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 px-3 py-1 rounded-full group-hover:border-emerald-500/40 dark:group-hover:border-emerald-500/50 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-200"
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