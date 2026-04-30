import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/shailifadadu",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/shailyfadadu/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/ShailyFadadu",
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "mailto:shailyfadadu04@gmail.com",
    icon: FaEnvelope,
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="py-5 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass card-hover hover:text-accent"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center">
          Designed & Built by{" "}
          <span className="font-medium text-foreground">Shaily Fadadu</span>
        </p>
        
        <p className="text-xs text-muted-foreground/60">
          {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
