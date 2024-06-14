import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <span className="font-semibold">Made With 💖 by Shaily Fadadu</span>
      <div className="mt-4">
        <a
          href="https://github.com/shailifadadu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2 text-gray-500 hover:text-gray-700"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/shailyfadadu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2 text-gray-500 hover:text-gray-700"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/ShailyFadadu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2 text-gray-500 hover:text-gray-700"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
