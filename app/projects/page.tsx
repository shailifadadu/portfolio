import Projects from "@/components/projects";

export const metadata = {
  title: "Projects | Shaily Fadadu",
  description: "Explore the projects built by Shaily Fadadu - featuring modern web applications with Next.js, React, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center">
      <Projects />
    </main>
  );
}
