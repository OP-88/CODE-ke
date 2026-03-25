import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Code as CodeIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Security', href: '#security' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0b]/80 backdrop-blur-md border-b border-[#27272a] py-3' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <CodeIcon className="w-8 h-8 text-[#00A3FF]" />
            <Shield className="w-4 h-4 text-[#00FF41] absolute -bottom-1 -right-1" />
          </div>
          <span className="text-xl font-bold tracking-tighter">
            CODE <span className="text-[#00A3FF]">KE</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-xs">
            Start a Fix
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#a1a1aa] hover:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0b] border-b border-[#27272a] py-6 px-4 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-[#a1a1aa] hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary w-full">
            Start a Fix
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
