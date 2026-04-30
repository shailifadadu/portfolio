import Experience from "@/components/experience";

export const metadata = {
  title: "Experience | Shaily Fadadu",
  description: "Professional experience and journey of Shaily Fadadu - GDSC Co-Lead, Hackathon organizer, and open source contributor.",
};

export default function ExperiencePage() {
  return (
    <main className="flex flex-col items-center">
      <Experience />
    </main>
  );
}
