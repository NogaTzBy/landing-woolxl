"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle, Phone } from "lucide-react";

const hours = [
  { days: "Lunes a Sábado", time: "09:00 — 20:00", open: true },
  { days: "Domingo", time: "10:00 — 14:00", open: true },
];

export default function VisitUs() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c9a96e] text-sm font-medium tracking-[0.3em] uppercase mb-3"
          >
            — Vení a vernos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight"
          >
            Encontranos
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#c9a96e]/10 rounded-xl flex items-center justify-center">
                <MapPin className="text-[#c9a96e]" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1c1c1c] mb-1 text-lg">Ubicación</h3>
                <p className="text-[#1c1c1c]/60 leading-relaxed">
                  Av. General Paz 42
                  <br />
                  Villa Carlos Paz, Córdoba, Argentina
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#c9a96e]/10 rounded-xl flex items-center justify-center">
                <Clock className="text-[#c9a96e]" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1c1c1c] mb-3 text-lg">Horarios de atención</h3>
                <div className="flex flex-col gap-2">
                  {hours.map((h) => (
                    <div key={h.days} className="flex items-center justify-between gap-8">
                      <span className="text-[#1c1c1c]/70 text-sm">{h.days}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#1c1c1c] font-medium text-sm">{h.time}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-[#c9a96e]/20" />

            {/* Contact buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20c25e] text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                <MessageCircle size={18} />
                Escribinos por WhatsApp
              </a>
              <a
                href="https://www.instagram.com/woolxl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-[#1c1c1c]/20 hover:border-[#c9a96e] hover:text-[#c9a96e] text-[#1c1c1c]/70 font-medium px-6 py-3.5 rounded-full transition-all duration-300 text-sm"
              >
                <Phone size={18} />
                Contacto por Instagram
              </a>
            </motion.div>
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#ede8e0]"
          >
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
              alt="Tienda WOOL XL Buenos Aires"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1c1c1c]/20" />
            {/* Pin overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-[#c9a96e]/20 text-center">
                <div className="w-10 h-10 bg-[#c9a96e] rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin size={18} className="text-white" />
                </div>
                <p className="font-serif font-bold text-[#1c1c1c]">WOOL XL</p>
                <p className="text-sm text-[#1c1c1c]/60">Av. General Paz 42, Carlos Paz</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
