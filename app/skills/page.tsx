import Skills from "@/components/skills";

export const metadata = {
  title: "Skills | Shaily Fadadu",
  description: "Technical skills and expertise of Shaily Fadadu - Java, React, Next.js, Node.js, AWS, and more.",
};

export default function SkillsPage() {
  return (
    <main className="flex flex-col items-center">
      <Skills />
    </main>
  );
}
