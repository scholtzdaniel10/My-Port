import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-8">
          Feel free to reach out to me for collaborations or just a friendly hello!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-full transition mb-8"
        >
          Say Hello
        </a>
        <form
          action="https://formspree.io/f/xwpbqdjj" // Replace with your Formspree endpoint
          method="POST"
          className="mt-8 bg-gray-800 rounded-lg p-8 shadow-lg text-left max-w-xl mx-auto"
        >
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-full font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}