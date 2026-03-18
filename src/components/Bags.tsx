"use client";

import { motion } from "framer-motion";

const bags = [
  {
    id: 1,
    name: "Tote Premium",
    description: "Espaciosa y versátil para el día a día",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
    color: "Camel",
  },
  {
    id: 2,
    name: "Mini Clutch",
    description: "Perfecta para salidas y eventos especiales",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&q=80",
    color: "Negro",
  },
  {
    id: 3,
    name: "Cartera Clásica",
    description: "Diseño atemporal con herrajes dorados",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80",
    color: "Nude / Beige",
  },
  {
    id: 4,
    name: "Bandolera Cuero",
    description: "Correa regulable, cuero genuino premium",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
    color: "Cognac",
  },
];

export default function Bags() {
  return (
    <section className="py-24 md:py-32 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c9a96e] text-sm font-medium tracking-[0.3em] uppercase mb-3"
          >
            — Accesorios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight"
          >
            Carteras & Accesorios
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {bags.map((bag, index) => (
            <motion.div
              key={bag.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#ede8e0] mb-4">
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1c1c1c]/0 group-hover:bg-[#1c1c1c]/15 transition-colors duration-300" />
              </div>
              <p className="text-[#c9a96e] text-xs tracking-widest uppercase font-medium mb-1">
                {bag.color}
              </p>
              <h3 className="font-serif text-lg font-semibold text-[#1c1c1c]">
                {bag.name}
              </h3>
              <p className="text-[#1c1c1c]/55 text-sm leading-relaxed mt-1">
                {bag.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
