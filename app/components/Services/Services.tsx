"use client";
import { JSX } from "react";
import { FaGlobe, FaInfinity } from "react-icons/fa";
import { MdContentCopy, MdContentPaste } from "react-icons/md";
import { SiAmazonredshift } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";

const services = [
  {
    title: "Website Development",
    description:
      "We craft scalable, responsive web applications with seamless front-end and back-end integration—customized to fit your business needs.",
    icon: <FaGlobe className="text-2xl" />,
  },
  {
    title: "CMS",
    description:
      "We develop user-friendly CMS solutions that let you easily manage and update your website content—no technical skills required.",
    icon: <MdContentCopy className="text-2xl" />,
  },
  {
    title: "CRM",
    description:
      "We build custom CRM solutions to help you manage leads, automate workflows, and boost customer engagement—all in one place.",
    icon: <MdContentPaste className="text-2xl" />,
  },
  {
    title: "Deployment",
    description:
      "We ensure secure, reliable, and scalable deployment of your web applications across cloud and on-premise environments—optimized for performance and uptime.",
    icon: <FaInfinity className="text-2xl" />,
  },
  {
    title: "Migration",
    description:
      "We provide seamless migration of applications, databases, and infrastructure with minimal downtime—ensuring data integrity, security, and business continuity.",
    icon: <SiAmazonredshift className="text-2xl" />,
  },
  {
    title: "DB Setup",
    description:
      "We design, set up, and optimize secure, scalable databases tailored to your application needs—ensuring high performance and data reliability.",
    icon: <FaDatabase className="text-2xl" />,
  },
];

export const Services = (): JSX.Element => (
  <section id="services" className="bg-white text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase text-gray-500">Our Services</p>
        <h2 className="text-3xl font-bold mb-12 text-black">Our Palette of Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group rounded-xl p-15 text-black border border-gray-300 shadow-2xl hover:bg-black hover:text-white transition`}
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto bg-black text-white group-hover:bg-white group-hover:text-black rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
);