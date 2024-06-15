import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { SiContributorcovenant } from "react-icons/si";
import { HiPencil } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MoneyMorpher from "@/public/MoneyMorpher.png";
import LinkShrink from "@/public/LinkShrink.png";
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
    title: "MoneyMorpher",
    description:
      "A sleek and simple currency converter web application that allows users to convert between different currencies using real-time exchange rates.",
    tags: ["React", "Tailwind", "Vercel"],
    imageUrl: MoneyMorpher,
  },
  {
    title: "LinkShrink",
    description:
      "This is a simple URL shortener that allows users to generate short URLs for long links, making it easier to share them.",
    tags: ["NodeJS", "Express", "MongoDB"],
    imageUrl: LinkShrink,
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
  "Node.js",
  "Express",
  "Git",
  "Github",
  "Tailwind",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "MySQL",
  "AWS",
] as const;
