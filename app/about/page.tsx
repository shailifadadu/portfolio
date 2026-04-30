import About from "@/components/about";

export const metadata = {
  title: "About | Shaily Fadadu",
  description: "Learn more about Shaily Fadadu - Full-stack developer, open source contributor, and cloud enthusiast.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <About />
    </main>
  );
}
