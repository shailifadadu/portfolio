import React from "react";
import { CgWorkAlt, CgCommunity } from "react-icons/cg";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { SiContributorcovenant } from "react-icons/si";
import { HiPencil } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MoneyMorpher from "@/public/MoneyMorpher.png";
import LinkShrink from "@/public/LinkShrink.png";
import BuzzConnect from "@/public/BuzzConnect.png";

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
    title: "Sponsorship Lead",
    location: "DUHacks 4.0, GDSC DDU",
    description:
      "Leading sponsorship initiatives for DUHacks 4.0, Directing the entire hackathon and managing logistics.",
    icon: React.createElement(CgCommunity),
    date: "Oct 2024 - Present",
  },
  {
    title: "Co-Lead & Cloud Team Member",
    location: "Google Developer Student Clubs, DDU",
    description:
      "As Co-Lead, I mentor and guide a dynamic team, organizing Hackathons with 3000+ participants, various tech campaigns & events promoting the community.",
    icon: React.createElement(BiLogoGoogleCloud),
    date: "Sep 2023 - Present",
  },
  {
    title: "Contributor",
    location: "GirlScript Summer of Code",
    description:
      "Contributing to various Open Source projects and learning best practices in open-source development.",
    icon: React.createElement(SiContributorcovenant),
    date: "May 2024 - Aug 2024",
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
    title: "BuzzConnect",
    description:
      "A Chat-application that Connect with friends, share moments, and stay in touch with the loved ones.",
    tags: ["React", "Tailwind", "Socket.io", "Render"],
    imageUrl: BuzzConnect,
    githubLink: "https://github.com/shailifadadu/BuzzConnect",
  },
  {
    title: "MoneyMorpher",
    description:
      "A sleek and simple currency converter web application that allows users to convert between different currencies using real-time exchange rates.",
    tags: ["React", "Tailwind", "Vercel"],
    imageUrl: MoneyMorpher,
    githubLink: "https://github.com/shailifadadu/MoneyMorpher",
  },
  {
    title: "LinkShrink",
    description:
      "This is a simple URL shortener that allows users to generate short URLs for long links, making it easier to share them.",
    tags: ["NodeJS", "Express", "MongoDB"],
    imageUrl: LinkShrink,
    githubLink: "https://github.com/shailifadadu/LinkShrink",
  },
] as const;

export const skillsData = [
  "Java",
  "Spring",
  "Hibernate",
  "HTML5",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Git",
  "Github",
  "MongoDB",
  "SQL",
  "AWS",
] as const;
