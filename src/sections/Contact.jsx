import { useState } from "react";
import { API_BASE_URL } from "../config/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    alert("Server error. Please try again later.");
  }
};

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-20
                 flex flex-col items-center"
    >
      {/* Content */}
      <div className="w-full max-w-xl text-center">
        <h2 className="text-3xl font-semibold mb-2">Get In Touch</h2>

        <p className="text-gray-400 mb-8 text-sm">
          Contact me at{" "}
          <span className="text-white underline underline-offset-4">
            omkargavade@gmail.com
          </span>{" "}
          or via the form below.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Name */}
          <div>
            <label className="block text-xs mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2.5 rounded-lg
                         bg-transparent border border-white/15
                         text-white placeholder-gray-500
                         focus:outline-none focus:border-white/40
                         transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="hello@gmail.com"
              required
              className="w-full px-4 py-2.5 rounded-lg
                         bg-transparent border border-white/15
                         text-white placeholder-gray-500
                         focus:outline-none focus:border-white/40
                         transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hello! Let's talk..."
              rows={4}
              required
              className="w-full px-4 py-2.5 rounded-lg
                         bg-transparent border border-white/15
                         text-white placeholder-gray-500
                         focus:outline-none focus:border-white/40
                         transition resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-7 py-2.5 rounded-full bg-white text-black
                         text-sm font-medium
                         hover:bg-gray-200 active:scale-95
                         transition"
            >
              Submit →
            </button>
          </div>
        </form>
      </div>

      {/* Footer (always bottom) */}
      <footer className="mt-auto pt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} Omkar Gavade. All rights reserved.
      </footer>
    </section>
  );
}