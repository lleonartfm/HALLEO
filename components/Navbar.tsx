import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Agency', href: '#agency' },
  { label: 'Contact', href: '#contact' },
];

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

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-black/50 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-3xl font-display font-black tracking-tighter z-50 relative group mix-blend-difference" data-cursor="hover">
            HALLEO
            <span className="text-accent inline-block transition-transform group-hover:-translate-y-1 duration-300">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase font-bold tracking-[0.2em] hover:text-accent transition-colors duration-300"
                data-cursor="hover"
              >
                {item.label}
              </a>
            ))}
            <button className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:border-accent hover:text-white transition-all duration-300" data-cursor="hover">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 relative text-white"
            onClick={() => setIsOpen(!isOpen)}
            data-cursor="hover"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-neutral-950 z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-display font-black text-white hover:text-transparent hover:stroke-text hover:text-accent transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;