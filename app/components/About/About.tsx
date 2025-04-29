import { JSX } from "react";

export const About = (): JSX.Element => (
  <section
    id="about"
    className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center px-8 py-16"
  >
    <h2 className="text-4xl font-bold mb-4">About Me</h2>
    {/* …your about content */}
  </section>
);
