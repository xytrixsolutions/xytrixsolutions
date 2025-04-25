'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-black border-b border-white sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={handleToggle}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-3 text-white font-medium">
          <Link href="/" onClick={closeMenu} className="block">
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="block">
            About
          </Link>
          <Link href="/services" onClick={closeMenu} className="block">
            Services
          </Link>
          <Link href="/contact" onClick={closeMenu} className="block">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
