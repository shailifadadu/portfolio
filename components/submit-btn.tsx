"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitBtnProps {
  pending?: boolean;
}

export default function SubmitBtn({ pending = false }: SubmitBtnProps) {
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-12 w-full sm:w-auto sm:px-8 bg-accent text-accent-foreground rounded-lg font-medium card-hover glow disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground" />
      ) : (
        <>
          Send Message
          <FaPaperPlane className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
