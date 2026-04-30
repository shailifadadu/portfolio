"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 max-w-3xl mx-auto px-4">
      <SectionHeading>My Experience</SectionHeading>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 timeline-line sm:-translate-x-1/2" />
        
        {/* Timeline Items */}
        <div className="space-y-12">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-accent rounded-full sm:-translate-x-1/2 ring-4 ring-background z-10" />
              
              {/* Date - Desktop */}
              <div className={`hidden sm:block flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <span className="text-sm font-mono text-accent">{item.date}</span>
              </div>
              
              {/* Content Card */}
              <motion.div
                className={`flex-1 ml-10 sm:ml-0 ${index % 2 === 0 ? "sm:pl-8" : "sm:pr-8"}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="glass rounded-lg p-5 card-hover">
                  {/* Date - Mobile */}
                  <span className="sm:hidden text-xs font-mono text-accent block mb-2">
                    {item.date}
                  </span>
                  
                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
