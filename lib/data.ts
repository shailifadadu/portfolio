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
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Contact",
    path: "/contact",
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
    title: "Microservices Platform",
    description:
      "Designed and built a production microservices architecture during my internship at eInfochips. The system handles service-to-service communication, authentication, and data flow across independently deployable modules.",
    highlight:
      "RESTful microservices with Spring Boot, inter-service communication, JWT-based auth, and containerization with Docker — following enterprise-grade patterns used in production systems.",
    tags: ["Java", "Spring Boot", "Microservices", "Docker", "REST APIs", "JWT Auth"],
    imageUrl: "", // unused in new UI — keep to avoid type errors
    githubLink: "",
    isInternal: true,
    internalLabel: "eInfochips · Internal",
  },
  {
    title: "WealthVerse",
    description:
      "A financial and carbon emission tracker for young professionals — combines expense management with environmental awareness in one platform. Full-stack with Spring Boot, React, and an AI-powered chatbot for financial insights.",
    highlight:
      "Smart merchant categorization, CO₂ emission calculation per transaction, analytics dashboards, Groq LLM chatbot via Flask, and fully deployed on AWS (Amplify + EC2 + RDS + Route 53).",
    tags: ["React", "Spring Boot", "MySQL", "AWS", "Groq LLM", "Flask", "JWT", "Tailwind"],
    imageUrl: "/WealthVerse.png", // keep your existing image if you have one
    githubLink: "https://github.com/shailifadadu/WealthVerse",
    isInternal: false,
    internalLabel: "",
  },
  {
    title: "InvoEase",
    description:
      "A clean, full-stack invoicing platform that lets users create, manage, and track invoices effortlessly. Built with a focus on usability — from generating invoices to automated email delivery via MailTrap.",
    highlight:
      "Invoice creation and management, PDF generation, email delivery via MailTrap, PostgreSQL-backed data persistence, and a responsive Next.js frontend.",
    tags: ["Next.js", "PostgreSQL", "MailTrap", "Tailwind", "REST APIs"],
    imageUrl: "/InvoEase.png",
    githubLink: "https://github.com/shailifadadu/InvoEase",
    isInternal: false,
    internalLabel: "",
  },
] as const;

export const skillsData = [
  "Java",
  "SpringBoot",
  "Microservices",
  "Kafka",
  "AWS",
  "Docker",
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Git",
  "Github",
  "SQL",
] as const;
