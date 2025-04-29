"use client";

import Link from "next/link";
import { useState, useEffect, JSX } from "react";
import { NavLink, navLinks } from "./Links";

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
        <div className="text-2xl font-bold">
          <Link href="/">MyLogo</Link>
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

      {menuOpen && <div className="mobile-links">{renderedLinks}</div>}
    </header>
  );
};
