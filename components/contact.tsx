"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] px-4 mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <div className="glass rounded-lg p-6 sm:p-8">
        <p className="text-muted-foreground text-center mb-8">
          Please contact me directly at{" "}
          <a
            className="text-accent hover:underline underline-offset-2 font-medium"
            href="mailto:shailyfadadu04@gmail.com"
          >
            shailyfadadu04@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 rounded-lg bg-muted/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 rounded-lg p-4 bg-muted/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none placeholder:text-muted-foreground"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
