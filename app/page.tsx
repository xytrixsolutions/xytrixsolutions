import { JSX } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/page";

const Home = (): JSX.Element => (
  <>
    <Navbar />
    <Hero />
    <section
      id="projects"
      className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      {/* …your projects content */}
    </section>
    <section
      id="about"
      className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      {/* …your about content */}
    </section>
    <section
      id="services"
      className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-4">Services</h2>
      {/* …your services content */}
    </section>
    <section
      id="contact"
      className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      {/* …your contact form or info */}
    </section>
  </>
);

export default Home;
