"use client";
import { JSX } from "react";

export const Contact = (): JSX.Element => (
  <section
    id="contact"
    className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center px-8 py-16"
  >
    <h2 className="text-4xl font-bold mb-4">Contact</h2>
    <p className="text-gray-600 mb-10 text-center max-w-xl">
      Have a project in mind or just want to say hello? Fill out the form and
      we’ll get back to you soon.
    </p>

    <form
      className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        // Add your form submission logic here (email service, API call, etc.)
      }}
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1 font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black border-2 border-black hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  </section>
);
