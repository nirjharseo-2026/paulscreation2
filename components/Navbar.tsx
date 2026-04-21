'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-tighter flex items-center gap-2 group">
          Paulscreations 
          <span className="w-2 h-2 rounded-full bg-[#00F5FF] shadow-[0_0_10px_#00F5FF] group-hover:scale-125 transition-transform"></span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-['var(--font-space-grotesk)'] uppercase tracking-[0.2em] text-[12px] font-bold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative py-1 transition-colors duration-300 ${
                  isActive ? 'text-[#00F5FF]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00F5FF]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact"
            className="text-[#00F5FF] font-['var(--font-space-grotesk)'] uppercase tracking-[0.2em] text-[12px] font-bold border border-[#00F5FF]/30 px-6 py-2 rounded-full hover:bg-[#00F5FF]/10 hover:border-[#00F5FF] transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation (Slide Down) */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-2xl border-b border-white/10 py-8 px-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold tracking-tight ${
                pathname === link.href ? 'text-[#00F5FF]' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-4 bg-[#00F5FF] text-black font-bold rounded-lg"
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </header>
  );
}
