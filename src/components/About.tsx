"use client";

import { motion } from "framer-motion";
import { Star, Package, Heart } from "lucide-react";

const values = [
  { icon: Star, label: "Calidad Premium", text: "Seleccionamos cada prenda con criterio y detalle." },
  { icon: Package, label: "Nuevos Ingresos", text: "Novedades todas las semanas en tienda." },
  { icon: Heart, label: "Atención Personal", text: "Te asesoramos para que elijas lo mejor para vos." },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80"
                alt="Tienda WOOL XL"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 right-4 bg-white rounded-2xl shadow-xl p-5 max-w-[200px] border border-[#c9a96e]/20"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#c9a96e" className="text-[#c9a96e]" />
                ))}
              </div>
              <p className="text-sm font-semibold text-[#1c1c1c] font-serif leading-tight">
                &quot;Calidad increíble, super recomendada&quot;
              </p>
              <p className="text-xs text-[#1c1c1c]/50 mt-2">— Cliente frecuente</p>
            </motion.div>

            {/* Gold accent line */}
            <div className="absolute top-8 -left-4 w-1 h-32 bg-gradient-to-b from-[#c9a96e] to-[#c9a96e]/20 rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#c9a96e] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              — Nuestra historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight mb-6 leading-tight">
              Moda con identidad,
              <br />
              hecha en Argentina
            </h2>
            <p className="text-[#1c1c1c]/65 text-lg leading-relaxed mb-4 max-w-prose">
              En WOOL XL creemos que la ropa es más que tela — es expresión, es historia, es quién sos. Desde Villa Carlos Paz, Córdoba, seleccionamos prendas y accesorios con criterio y amor por el estilo.
            </p>
            <p className="text-[#1c1c1c]/65 leading-relaxed mb-10 max-w-prose">
              Somos una tienda minorista con trato cercano y personal. Cada semana incorporamos nuevos ingresos para que siempre encuentres algo especial.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center">
                    <v.icon size={18} className="text-[#c9a96e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1c1c1c] mb-0.5">{v.label}</p>
                    <p className="text-sm text-[#1c1c1c]/60 leading-relaxed">{v.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
