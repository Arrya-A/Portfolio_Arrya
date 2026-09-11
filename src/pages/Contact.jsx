import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faSpinner, faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setErrorMessage("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage("Please fill in all required fields before sending.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/arrya98@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          _subject: `[Portfolio Contact] ${formData.subject.trim()}`,
          message: formData.message.trim(),
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrorMessage("");
      } else {
        setErrorMessage(
          result.message || "Failed to send message. Please try again later."
        );
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMessage(
        "Network error: Unable to send message. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("arrya98@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-transparent px-6 py-16 md:px-16 lg:px-24">
      <div className="relative w-full max-w-6xl space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Contact Me
          </h2>
        </div>

        {/* 4-Column Horizontal Contact Grid Section */}
        <div className="border-t border-stone-200 dark:border-stone-800/80 pt-10 sm:pt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {/* EMAIL */}
            <div className="space-y-3 flex flex-col items-center justify-start">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                EMAIL
              </span>
              <div className="group relative flex flex-col items-center">
                <div className="flex items-center justify-center gap-2">
                  <a
                    href="mailto:arrya98@gmail.com"
                    className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition break-words leading-tight"
                  >
                    arrya98@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    type="button"
                    title="Copy Email Address"
                    className="inline-flex items-center text-xs text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer"
                  >
                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? "text-emerald-500" : ""} />
                  </button>
                </div>
                {copied && (
                  <span className="block text-xs font-medium text-emerald-500 dark:text-emerald-400 mt-1">
                    Copied to clipboard!
                  </span>
                )}
              </div>
            </div>

            {/* PHONE */}
            <div className="space-y-3 flex flex-col items-center justify-start">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                PHONE
              </span>
              <div>
                <a
                  href="tel:+919443046717"
                  className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  +91 9443046717
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className="space-y-3 flex flex-col items-center justify-start">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                LOCATION
              </span>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                  Coimbatore & Calicut, India
                </span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="space-y-3 flex flex-col items-center justify-start">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                SOCIAL
              </span>
              <div className="flex flex-col space-y-1.5 items-center">
                <a
                  href="https://www.linkedin.com/in/arrya-a-088757168/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition inline-flex items-center gap-1.5 group"
                >
                  LinkedIn
                  <span className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
                <a
                  href="https://github.com/Arrya-A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition inline-flex items-center gap-1.5 group"
                >
                  GitHub
                  <span className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Contact Form Container */}
        {/* <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800 rounded-[2.5rem] p-8 sm:p-12 shadow-sm max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                Message Sent Successfully!
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm max-w-md mx-auto">
                Thank you for reaching out! Your message has been sent directly to{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  arrya98@gmail.com
                </span>. I'll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 px-6 py-2.5 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:bg-stone-300 dark:hover:bg-stone-700 transition cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-2xl bg-red-100 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm font-medium text-center">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 transition"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Project Inquiry / Hiring"
                  className="w-full px-4 py-3 rounded-2xl bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 transition"
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 transition resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 dark:bg-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 dark:hover:bg-emerald-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <FontAwesomeIcon
                    icon={isSubmitting ? faSpinner : faPaperPlane}
                    className={`text-xs ${isSubmitting ? "animate-spin" : ""}`}
                  />
                </button>
              </div>
            </form>
          )}
        </div> */}


      </div>
    </section>
  );
};

export default Contact;

