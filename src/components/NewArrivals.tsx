"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function NewArrivals() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#c9a96e]/15 via-[#f5f0e8] to-[#c9a96e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1c1c1c] p-12 md:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a96e]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a96e]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-[#c9a96e]/20 border border-[#c9a96e]/30 text-[#c9a96e] text-xs font-medium px-4 py-2 rounded-full mb-5 tracking-widest uppercase"
              >
                <Sparkles size={12} />
                Siempre fresco
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
              >
                Nuevos Ingresos
                <br />
                <span className="text-[#c9a96e]">Cada Semana</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60 text-lg leading-relaxed"
              >
                Siempre tenemos algo nuevo esperándote. Seguinos en Instagram para ser la primera en enterarte de los últimos ingresos.
              </motion.p>
            </div>

            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="https://www.instagram.com/woolxl/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 flex items-center gap-3 bg-[#c9a96e] hover:bg-[#b8945a] text-[#1c1c1c] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#c9a96e]/20 text-sm tracking-wide whitespace-nowrap"
            >
              Ver Novedades
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
