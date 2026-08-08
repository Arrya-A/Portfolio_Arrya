import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-transparent px-6 py-16 md:px-16 lg:px-24">
      <div className="relative mx-auto max-w-6xl space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Contact Me
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto text-base sm:text-lg">
            Have a project in mind or want to talk? Feel free to reach out!
          </p>
        </div>

        {/* Single Centered Email Card */}
        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-[2.5rem] p-2 text-center shadow-sm border border-stone-200 hover:shadow-md transition duration-300">
            <a
              href="mailto:arrya.a.dev@gmail.com"
              className="flex items-center justify-center gap-3 text-emerald-700 hover:text-emerald-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              <span className="text-base font-semibold">
                arrya.a.dev@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-stone-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-sm max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-stone-900">
                Message Sent Successfully!
              </h3>
              <p className="text-stone-600 text-sm">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
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
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-stone-900 placeholder-stone-400 transition"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
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
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-stone-900 placeholder-stone-400 transition"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
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
                  className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-stone-900 placeholder-stone-400 transition"
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
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
                  className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-stone-900 placeholder-stone-400 transition resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Send Message</span>
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
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
