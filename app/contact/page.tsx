import Contact from "@/components/contact";

export const metadata = {
  title: "Contact | Shaily Fadadu",
  description: "Get in touch with Shaily Fadadu - Available for freelance projects, collaborations, and opportunities.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <Contact />
    </main>
  );
}
