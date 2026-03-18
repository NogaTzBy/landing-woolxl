"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Colecciones", href: "#colecciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#c9a96e]/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold tracking-widest text-[#1c1c1c]">
                WOOL
              </span>
              <span className="text-xs tracking-[0.4em] text-[#c9a96e] font-medium -mt-1">
                XL
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider text-[#1c1c1c]/70 hover:text-[#1c1c1c] transition-colors duration-200 font-medium uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="#colecciones"
              className="hidden md:flex items-center gap-2 bg-[#1c1c1c] text-[#faf7f2] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#c9a96e] transition-colors duration-300 tracking-wide"
            >
              <ShoppingBag size={15} />
              Ver Colección
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#1c1c1c]"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#faf7f2] border-t border-[#c9a96e]/20"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium tracking-wider text-[#1c1c1c]/70 hover:text-[#c9a96e] uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#colecciones"
                className="inline-flex items-center gap-2 bg-[#1c1c1c] text-[#faf7f2] text-sm font-medium px-5 py-3 rounded-full w-fit"
              >
                <ShoppingBag size={15} />
                Ver Colección
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
