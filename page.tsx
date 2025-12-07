"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ================================================================ */
/* =========================== HOME PAGE ========================== */
/* ================================================================ */

export default function HomePage() {
  return (
    <div className="relative z-10">
      <HeroCarousel />
      <SearchBar />
      <FeaturedProducts />
      <TravelInspirations />
      <WhyArixa />
    </div>
  );
}

/* ================================================================ */
/* ======================== HERO CAROUSEL ========================= */
/* ================================================================ */

function HeroCarousel() {
  const images = [
    "/cotonou.jpg",
    "/martyrs.png",
    "/etoile.jpg",
    "/sofitel.webp",
    "/calavi.webp",
    "/martyrs.jpg",
    "/Untitled-design-2024-03-20T102230.076-1.png",
    "/d8c427c7dd6445d50d9342ac3fcef82e_L.jpg",
    "/images (1).jpg",
    "/africa.webp",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden rounded-b-[50px] shadow-2xl">
      
      {/* Images */}
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.4 }}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />

      {/* HERO TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-[30%] left-[7%] max-w-xl text-white z-20"
      >
        <p className="text-sm tracking-wide uppercase text-[#00E3C5]">
          Bienvenue sur ARIXA
        </p>

        <h1 className="mt-2 text-5xl font-extrabold leading-tight drop-shadow-xl">
          L’Afrique connectée au monde.
        </h1>

        <p className="mt-4 text-lg text-gray-200 drop-shadow">
          Commerce, tourisme et culture — réunis dans une expérience fluide,
          moderne et immersive.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <CTA href="/marketplace" label="Marketplace" primary />
          <CTA href="/tourisme" label="Tourisme" />
          <CTA href="/culture" label="Culture" gold />
        </div>
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function CTA({ href, label, primary, gold }: any) {
  const base =
    "px-6 py-3 rounded-lg font-medium transition shadow-lg backdrop-blur";
  if (primary)
    return (
      <Link href={href} className={`${base} bg-[#00A9A5] text-white`}>
        {label}
      </Link>
    );
  if (gold)
    return (
      <Link href={href} className={`${base} bg-[#D9A441] text-white`}>
        {label}
      </Link>
    );
  return (
    <Link href={href} className={`${base} border border-white/40 text-white`}>
      {label}
    </Link>
  );
}

/* ================================================================ */
/* ========================= SEARCH BAR =========================== */
/* ================================================================ */

function SearchBar() {
  return (
    <section className="max-w-4xl mx-auto -mt-12 px-4 relative z-30">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-gray-100">
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Rechercher un produit, une destination..."
            className="flex-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#00A9A5] outline-none bg-gray-50"
          />
          <button className="px-8 py-3 rounded-xl bg-[#0B3C5D] text-white font-medium hover:opacity-90 shadow">
            Rechercher
          </button>
        </form>

        {/* Suggestions */}
        <div className="mt-3 flex gap-2 flex-wrap text-sm">
          {["Voyage Bénin", "Sculptures africaines", "Mode africaine", "Expériences gastronomiques"].map(
            (s, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 transition"
              >
                {s}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ================================================================ */
/* ====================== FEATURED PRODUCTS ======================= */
/* ================================================================ */

function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-28">
      <h2 className="text-3xl font-bold text-[#0B3C5D]">
        Produits en vedette
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border bg-white shadow hover:shadow-xl overflow-hidden transition"
          >
            <div className="h-52 bg-gray-200" />
            <div className="p-4">
              <h4 className="font-semibold text-gray-800">Produit {i + 1}</h4>
              <p className="text-sm text-gray-500 mt-1">Artisan • Afrique</p>
              <button className="mt-4 text-[#0B3C5D] font-medium hover:underline">
                Voir le produit →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================ */
/* ===================== TRAVEL INSPIRATIONS ====================== */
/* ================================================================ */

function TravelInspirations() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-32">
      <h2 className="text-3xl font-bold text-[#0B3C5D]">
        Inspirations voyages ✈️
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
          >
            <div className="h-72 bg-gray-300" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold drop-shadow">Destination {i + 1}</h3>
              <p className="text-sm text-gray-200">Circuit populaire</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================ */
/* ======================= WHY ARIXA SECTION ====================== */
/* ================================================================ */

function WhyArixa() {
  const items = [
    {
      title: "Plateforme sécurisée",
      desc: "Paiements protégés, data encryptée et partenariats vérifiés.",
      icon: "🛡️",
    },
    {
      title: "Expérience fluide",
      desc: "Navigation rapide, interface moderne et optimisée mobile.",
      icon: "⚡",
    },
    {
      title: "Made in Africa",
      desc: "Artisans, créateurs, destinations et cultures africaines mises en avant.",
      icon: "🌍",
    },
    {
      title: "Tout-en-un",
      desc: "Marketplace, tourisme, culture — centralisés dans une super-app unique.",
      icon: "✨",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-40 mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#0B3C5D]">
          Pourquoi choisir ARIXA ?
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Une plateforme conçue pour sublimer l’Afrique et offrir le meilleur aux utilisateurs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white border rounded-3xl shadow-md hover:shadow-xl transition text-center"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#0B3C5D]">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
