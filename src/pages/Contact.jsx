import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-transparent px-6 py-16 md:px-16 lg:px-24">
      <div className="relative mx-auto max-w-6xl space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Contact Me
          </h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto text-base sm:text-lg">
            Have a project in mind or want to talk? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="bg-white dark:bg-stone-900 rounded-[2.5rem] p-2.5 text-center shadow-sm border border-stone-200 dark:border-stone-800 hover:shadow-md transition duration-300">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText("arrya98@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
              }}
              title="Click to copy email address"
              className="w-full flex items-center justify-center gap-3 text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              <span className="text-base font-semibold">
                {copied ? "Copied arrya98@gmail.com!" : "arrya98@gmail.com"}
              </span>
            </button>
          </div>
        </div>

        {/* Form  */}
        <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800 rounded-[2.5rem] p-8 sm:p-12 shadow-sm max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
