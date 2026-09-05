"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "414892c5-6beb-412d-8f3f-0b99982f8686");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
          disabled={status === "sending"}
          className="mx-auto mt-4 border-x border-black px-6 py-2 text-xs font-medium tracking-widest disabled:opacity-50"
        >
          {status === "sending" ? "SENDING..." : "SUBMIT"}
        </button>

        {status === "sent" && (
          <p className="text-center text-sm text-green-700">
            Thanks — your message has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-600">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </form>
    </section>
  );
}