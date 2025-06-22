import { JSX } from "react";

const aboutCards = [
  {
    title: "What We Do",
    description:
      "We build Full-Stack web applications with front-end, back-end, database setup, CMS & CRM integration, third-party services (e.g. payments), and full deployment with infrastructure setup.",
  },
  {
    title: "Why Choose Us",
    description:
      "We combine creativity and technical skill to build scalable, reliable, and visually polished solutions—turning your goals into results that exceed expectations.”",
  },
  {
    title: "Our Vision",
    description:
      "We aim to be the go-to tech partner for startups—driving faster innovation, smarter product launches, and long-term, sustainable business growth across industries worldwide.",
  },
  {
    title: "Our Values",
    description:
      "Transparency. Collaboration. Innovation. We stay curious, embrace challenges, keep learning, and consistently push boundaries to deliver smarter, stronger, and more impactful results—always as one team.",
  },
];

export const About = (): JSX.Element => (
  <section
    id="about"
    className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-8 py-16"
  >
    <h2 className="text-4xl font-bold mb-4">About Us</h2>
    <p className="max-w-3xl text-center text-lg text-gray-700 mb-8">
      At <span className="font-semibold">Xytrix</span>, we don’t just build
      software—we craft digital experiences. We’re a passionate team of
      developers, designers, and strategists committed to helping startups and
      brands grow through cutting-edge web and mobile solutions.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
      {aboutCards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  </section>
);
