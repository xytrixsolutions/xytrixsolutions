import { JSX } from "react";

export const About = (): JSX.Element => (
  <section
    id="about"
    className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center px-8 py-16"
  >
    <h2 className="text-4xl font-bold mb-4">About Us</h2>
    <p className="max-w-3xl text-center text-lg text-gray-700 mb-8">
      At <span className="font-semibold">Xytrix</span>, we don’t just build
      software—we craft digital experiences. We’re a passionate team of
      developers, designers, and strategists committed to helping startups and
      brands grow through cutting-edge web and mobile solutions.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-2">What We Do</h3>
        <p className="text-gray-600">
          We specialize in full-stack web and mobile development, UI/UX design,
          and digital product strategy. Whether you’re building an MVP or
          scaling your app, we bring clarity and execution to every stage.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-2">Why Choose Us</h3>
        <p className="text-gray-600">
          We blend creativity with technical expertise to deliver reliable,
          scalable, and beautiful solutions. Your goals become our mission—and
          we never settle for “just okay.”
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
        <p className="text-gray-600">
          To become the go-to tech partner for startups worldwide, helping them
          innovate faster, launch smarter, and scale sustainably.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-2">Our Values</h3>
        <p className="text-gray-600">
          Transparency. Collaboration. Innovation. We stay curious, keep
          learning, and always push for better results—together.
        </p>
      </div>
    </div>
  </section>
);
