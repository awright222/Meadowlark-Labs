"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        setErrorMsg(json.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Could not send message. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="site-container">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px" style={{ backgroundColor: "var(--border)" }} />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2
              className="text-4xl sm:text-5xl font-light leading-[1.1] mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "var(--foreground)",
              }}
            >
              Let&rsquo;s talk.
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--muted)" }}
            >
              If you&rsquo;re building something and think I might be able to
              help, I&rsquo;d love to hear about it.
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--muted)" }}
            >
              Client projects are welcome, whether it&rsquo;s a new website, a
              custom application, or a tool that simplifies part of your
              business. Tell me what you have in mind and we can talk through
              how I can help.
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--muted)" }}
            >
              Usually reply within 1&ndash;2 business days.
            </p>
          </div>

          <div>
            <p
              className="text-xs leading-relaxed mb-8"
              style={{ color: "var(--muted)" }}
            >
              A few sentences is plenty: what you&rsquo;re trying to solve, who
              it&rsquo;s for, and anything you already have in place.
            </p>

            {status === "success" ? (
              <div className="py-8">
                <p
                  className="text-2xl font-light mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "var(--foreground)",
                  }}
                >
                  Message received.
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  I&rsquo;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.1em] uppercase mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    className="field"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.1em] uppercase mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    className="field"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-[0.1em] uppercase mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={3000}
                    className="field resize-none"
                    placeholder="Describe your project…"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-danger" role="alert">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary btn-lg self-start"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
