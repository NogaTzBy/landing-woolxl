"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Sweater Oversized",
    description: "Lana merino premium. Caída perfecta, abrigado sin perder estilo.",
    tag: "Nuevo",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    color: "Crema / Beige",
  },
  {
    id: 2,
    name: "Cartera Artesanal",
    description: "Cuero genuino trabajado a mano. Funcional y atemporal.",
    tag: "Destacado",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    color: "Marrón / Camel",
  },
  {
    id: 3,
    name: "Conjunto Casual Premium",
    description: "Comodidad y elegancia en un mismo look. Listo para cualquier ocasión.",
    tag: "Colección",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    color: "Neutros",
  },
];

export default function FeaturedCollection() {
  return (
    <section id="colecciones" className="py-24 md:py-32 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#c9a96e] text-sm font-medium tracking-[0.3em] uppercase mb-3"
            >
              — Temporada Otoño
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight"
            >
              Colección Destacada
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/woolxl/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-medium text-[#1c1c1c] border-b border-[#1c1c1c]/30 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors pb-0.5"
          >
            Ver todo en Instagram
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4] bg-[#ede8e0]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#c9a96e] text-white text-xs font-medium px-3 py-1.5 rounded-full tracking-wide">
                    {product.tag}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1c1c1c]/0 group-hover:bg-[#1c1c1c]/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#1c1c1c] text-sm font-medium px-5 py-2.5 rounded-full">
                    Ver más
                  </span>
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="text-xs text-[#c9a96e] tracking-widest uppercase mb-1 font-medium">
                  {product.color}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#1c1c1c] mb-2">
                  {product.name}
                </h3>
                <p className="text-[#1c1c1c]/60 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
