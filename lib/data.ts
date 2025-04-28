import React from "react";
import { CgWorkAlt, CgCommunity } from "react-icons/cg";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { SiContributorcovenant } from "react-icons/si";
import { HiPencil } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Finwelth from "@/public/Finwelth.png";
import InvoEase from "@/public/InvoEase.png";
import MailGenie from "@/public/MailGenie.png";
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
    title: "Co-Lead & Cloud Team Member",
    location: "Google Developer Student Clubs, DDU",
    description:
      "As Co-Lead, I mentor and guide a dynamic team, organizing Hackathons with 3000+ participants, various tech campaigns & events promoting the community.",
    icon: React.createElement(BiLogoGoogleCloud),
    date: "Sep 2023 - Present",
  },
  {
    title: "Sponsorship Lead",
    location: "DUHacks 4.0, GDSC DDU",
    description:
      "Spearheaded sponsorship initiatives for DUHacks 4.0 with 6000+ registrations, Directed the entire hackathon and managed logistics.",
    icon: React.createElement(CgCommunity),
    date: "Oct 2024 - Feb 2025",
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
    title: "FinWelth",
    description:
      "A smart, AI-Powered personal finance platform that help you manage your finances efficiently.",
    tags: ["NextJS", "Tailwind", "Shadcn", "Supabase", "Clerk", "Inngest"],
    imageUrl: Finwelth,
    githubLink: "https://github.com/shailifadadu/FinWelth",
  },
  {
    title: "InvoEase",
    description:
      " It is a powerful yet simple invoicing platform designed to help users manage their invoices efficiently",
    tags: ["NextJS", "Tailwind", "PostgreSQL", "MailTrap"],
    imageUrl: InvoEase,
    githubLink: "https://github.com/shailifadadu/InvoEase",
  },
  {
    title: "MailGenie",
    description:
      " It's AI powered email reply generator - Chrome extension that helps you generate well-structured email replies quickly.",
    tags: ["ReactJS", "SpringBoot", "GenAI"],
    imageUrl: MailGenie,
    githubLink: "https://github.com/shailifadadu/MailGenie",
  },
  {
    title: "BuzzConnect",
    description:
      "A Chat-application that Connect with friends, share moments, and stay in touch with the loved ones.",
    tags: ["React", "Tailwind", "Socket.io", "Render"],
    imageUrl: BuzzConnect,
    githubLink: "https://github.com/shailifadadu/BuzzConnect",
  },
] as const;

export const skillsData = [
  "Java",
  "SpringBoot",
  "Hibernate",
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Express.js",
  "Git",
  "Github",
  "MongoDB",
  "SQL",
  "AWS",
] as const;
