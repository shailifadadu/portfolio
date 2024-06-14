import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { SiContributorcovenant } from "react-icons/si";
import { HiPencil } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mentee",
    location: "Codess.Cafe",
    description:
      "Participating in the Codess.Cafe mentorship program, where I collaborate with industry professionals to enhance my tech skills and build a strong professional network.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2024 - Present",
  },
  {
    title: "Contributor",
    location: "GirlScript Summer of Code",
    description:
      "Contributing to various Open Source projects and learning best practices in open-source development.",
    icon: React.createElement(SiContributorcovenant),
    date: "May 2024 - Present",
  },
  {
    title: "Cloud Team Member",
    location: "Google Developer Student Clubs",
    description:
      "Serving as a cloud team member for a year, organizing and speaking at various tech events and hackathons.",
    icon: React.createElement(BiLogoGoogleCloud),
    date: "Sep 2023 - Present",
  },
  {
    title: "Associate Content Creator",
    location: "IETE Student's Forum DDU",
    description:
      "Created a variety of engaging content as an associate content creator.",
    icon: React.createElement(HiPencil),
    date: "Jul 2023 - Jan 2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
