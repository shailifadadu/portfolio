import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold capitalize mb-10 text-center text-foreground">
      {children}
    </h2>
  );
}
