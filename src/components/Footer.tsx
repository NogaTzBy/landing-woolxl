"use client";

import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-serif text-2xl font-bold tracking-widest text-white">
                WOOL
              </span>
              <span className="text-xs tracking-[0.4em] text-[#c9a96e] font-medium -mt-1">
                XL
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-[220px]">
              Moda que te representa. Boutique de indumentaria y accesorios en Villa Carlos Paz, Córdoba.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {["Inicio", "Colecciones", "Nosotros", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-[#c9a96e] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Social */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">
              Horarios
            </h4>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex justify-between text-sm">
                <span>Lun — Sáb</span>
                <span className="text-white">09:00 — 20:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Domingo</span>
                <span className="text-white">10:00 — 14:00</span>
              </div>
            </div>

            {/* Social */}
            <a
              href="https://www.instagram.com/woolxl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-[#c9a96e] transition-colors group"
            >
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              @woolxl
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} WOOL XL. Todos los derechos reservados.</p>
          <p className="text-[#c9a96e]">Villa Carlos Paz, Córdoba</p>
        </div>
      </div>
    </footer>
  );
}
