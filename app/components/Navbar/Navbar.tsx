"use client";

import Link from "next/link";
import { useState, useEffect, JSX } from "react";
import { NavLink, navLinks } from "./Links";
import Image from "next/image";

export const Navbar = (): JSX.Element => {
  const [scrolledPastHeroMid, setScrolledPastHeroMid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolledPastHeroMid(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderedLinks = navLinks.map((link: NavLink) => (
    <Link
      key={link.href}
      href={link.href}
      className="nav-links"
      onClick={() => setMenuOpen(false)}
    >
      {link.label}
    </Link>
  ));
  return (
    <header
      className={`header ${
        scrolledPastHeroMid ? "scroll-past-true" : "scroll-past-false"
      }`}
    >
      <nav className="header-nav">
      <div className="text-2xl font-bold flex items-center gap-2">
  <Link href="/" className="flex items-center gap-2">
    <Image src="/logo/Group 3.png" alt="Logo" width={92} height={92} />
    <span className="text-black">Xytrix <span className="text-[#545454]">Solutions</span></span>
  </Link>
</div>


        <div className="desktop-links">{renderedLinks}</div>

        <button
          className={`mobile-toggle-btn ${
            scrolledPastHeroMid ? "text-black" : "md:text-white"
          }`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && <div className="mobile-links backdrop-blur-md bg-transparent">{renderedLinks}</div>}
    </header>
  );
};
