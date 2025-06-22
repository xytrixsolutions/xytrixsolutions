import { JSX } from "react";

export const Footer = (): JSX.Element => (
  <footer className="bg-black text-gray-300 py-10">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* Brand Info */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Xytrix Solutions</h3>
        <p className="text-sm">
          Building future-ready web and mobile solutions for startups and
          growing businesses.
        </p>
      </div>

      {/* Navigation Links */}
      <div>
        <h4 className="text-lg font-medium mb-2">Quick Links</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-medium mb-2">Contact</h4>
        <p className="text-sm">Email: info@Xytrix.com</p>
        <p className="text-sm">Phone: +92 300 1234567</p>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="mt-10 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Xytrix Solutions. All rights reserved.
    </div>
  </footer>
);
