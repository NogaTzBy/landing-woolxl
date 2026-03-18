"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1800&q=80"
          alt="WOOL XL - Nueva Colección"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/80 via-[#1c1c1c]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#c9a96e]/20 border border-[#c9a96e]/40 text-[#c9a96e] text-xs font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
            Nuevos ingresos disponibles
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Nueva Colección
            <br />
            <span className="text-[#c9a96e]">Otoño</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            Prendas que cuentan historias.
            <br />
            Diseñadas para durar.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#colecciones"
              className="group flex items-center gap-2 bg-[#c9a96e] hover:bg-[#b8945a] text-[#1c1c1c] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#c9a96e]/30 text-sm tracking-wide"
            >
              Explorar Colección
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="https://www.instagram.com/woolxl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/40 hover:border-white text-white font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-sm tracking-wide"
            >
              <Instagram size={16} />
              Ver en Instagram
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-[0.3em] uppercase rotate-90 mb-4">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
