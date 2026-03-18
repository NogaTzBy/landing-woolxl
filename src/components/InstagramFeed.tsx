"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const posts = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
];

export default function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#c9a96e] text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            <Instagram size={16} />
            @woolxl
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight mb-4"
          >
            Seguinos en Instagram
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#1c1c1c]/60 text-lg max-w-md mx-auto"
          >
            Mirá los últimos looks y novedades en nuestro perfil.
          </motion.p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
          {posts.map((src, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/woolxl/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-[#ede8e0]"
            >
              <img
                src={src}
                alt={`WOOL XL post ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1c1c1c]/0 group-hover:bg-[#1c1c1c]/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  size={22}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/woolxl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#1c1c1c] text-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-[#faf7f2] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wide hover:scale-[1.02]"
          >
            <Instagram size={17} />
            Seguir en Instagram
          </motion.a>
        </div>
      </div>
    </section>
  );
}
