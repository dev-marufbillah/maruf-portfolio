"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form is not wired to a backend yet. Once you add one (an API route,
    // or a service like Formspree/Resend), send the form data from here.
    setStatus("sent");
  }

  return (
    <section id="contact" className="bg-gray-100 px-6 py-20 text-center md:px-14">
      <div className="mx-auto mb-8 inline-block border border-black px-8 py-3">
        <h2 className="text-lg font-semibold tracking-[0.3em]">CONTACT</h2>
      </div>

      <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-gray-500">
        Have a project in mind or just want to say hello? Fill out the form
        below and I will get back to you as soon as I can.
      </p>

      <div className="mb-12 text-gray-300">~~~~~~~~</div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-lg flex-col gap-8 text-left"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name*"
          required
          className="border-b border-black bg-transparent pb-2 text-sm placeholder:text-gray-400 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email*"
          required
          className="border-b border-black bg-transparent pb-2 text-sm placeholder:text-gray-400 focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          className="border-b border-black bg-transparent pb-2 text-sm placeholder:text-gray-400 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your message*"
          required
          rows={4}
          className="border-b border-black bg-transparent pb-2 text-sm placeholder:text-gray-400 focus:outline-none"
        />

        <button
          type="submit"
          className="mx-auto mt-4 border-x border-black px-6 py-2 text-xs font-medium tracking-widest"
        >
          SUBMIT
        </button>

        {status === "sent" && (
          <p className="text-center text-sm text-green-700">
            Thanks — your message has been noted. (Connect a backend to
            actually deliver it.)
          </p>
        )}
      </form>
    </section>
  );
}