import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Education', href: '#education' },
    { label: 'Bookshelf', href: '#bookshelf' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navigation - Tech-forward with dashed borders */}
      <nav className="hidden md:fixed md:top-8 md:left-1/2 md:-translate-x-1/2 md:z-50 md:flex">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-8 py-4 rounded-full bg-background/40 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="relative px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Dashed border background */}
              <div className="absolute inset-0 rounded-lg border border-dashed border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Text with gradient on hover */}
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300">
                {item.label}
              </span>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-sm"
                layoutId={`nav-hover-${index}`}
              />
            </motion.button>
          ))}
        </motion.div>
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-lg bg-background/40 backdrop-blur-xl border border-cyan-500/30 shadow-lg hover:border-cyan-500/60 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <X size={24} className="text-cyan-400" />
          ) : (
            <Menu size={24} className="text-cyan-400" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 right-6 z-40 bg-background/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10 p-6 min-w-56"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-4 py-3 text-left text-sm font-semibold text-white rounded-lg transition-all duration-300 group overflow-hidden"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Dashed border */}
                  <div className="absolute inset-0 rounded-lg border border-dashed border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Text */}
                  <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative floating badges */}
      <motion.div
        className="fixed top-8 left-8 hidden lg:flex items-center justify-center w-10 h-10 rounded-lg border border-dashed border-lime-500/50 bg-lime-500/5 text-lime-400 text-xs font-bold pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        CA
      </motion.div>

      <motion.div
        className="fixed top-20 right-20 hidden lg:flex items-center justify-center w-10 h-10 rounded-lg border border-dashed border-yellow-500/50 bg-yellow-500/5 text-yellow-400 text-xs font-bold pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        PRO
      </motion.div>
    </>
  );
}
