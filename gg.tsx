"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative z-10">
      <HeroCarousel />

      <SearchBar />

      <Categories />

      <Section title="Produits en vedette">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCard key={i} index={i} />
        ))}
      </Section>

      <Section title="Inspirations Voyages">
        {Array.from({ length: 3 }).map((_, i) => (
          <TravelCard key={i} index={i} />
        ))}
      </Section>

      <Section title="Derniers Articles Culturels">
        {Array.from({ length: 3 }).map((_, i) => (
          <CultureCard key={i} index={i} />
        ))}
      </Section>
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
    "/calavi.webp",
    "/martyrs.jpg",
    "/Untitled-design-2024-03-20T102230.076-1.png",
    "/d8c427c7dd6445d50d9342ac3fcef82e_L.jpg",
    "/images (1).jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden rounded-b-[60px] shadow-2xl">
      {/* Background Images */}
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />

      {/* HERO TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-[25%] left-[8%] max-w-xl text-white z-10"
      >
        <p className="text-sm tracking-wide uppercase text-[#00E3C5]">
          Bienvenue sur ARIXA
        </p>

        <h1 className="mt-3 text-5xl font-extrabold leading-tight drop-shadow-xl">
          L’Afrique connectée au monde.
        </h1>

        <p className="mt-4 text-lg text-gray-200 drop-shadow">
          Commerce, tourisme et culture — une plateforme unique, moderne et immersive.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <CTA href="/marketplace" label="Marketplace" primary />
          <CTA href="/tourisme" label="Tourisme" />
          <CTA href="/culture" label="Culture" gold />
        </div>
      </motion.div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* CTA BUTTON */
function CTA({ href, label, primary, gold }: any) {
  const base = "px-6 py-3 rounded-lg font-medium transition shadow-lg";
  if (primary)
    return (
      <Link href={href} className={`${base} bg-[#00A9A5] text-white hover:opacity-90`}>
        {label}
      </Link>
    );
  if (gold)
    return (
      <Link href={href} className={`${base} bg-[#D9A441] text-white hover:bg-[#bb8834]`}>
        {label}
      </Link>
    );
  return (
    <Link
      href={href}
      className={`${base} border border-white/60 text-white hover:bg-white/10`}
    >
      {label}
    </Link>
  );
}

/* ================================================================ */
/* ========================= SEARCH BAR =========================== */
/* ================================================================ */

function SearchBar() {
  return (
    <section className="max-w-4xl mx-auto -mt-12 px-4 relative z-20">
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-gray-200">
        <form className="flex gap-3">
          <input
            type="text"
            placeholder="Recherche : produits, voyages, culture..."
            className="flex-1 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#00A9A5] outline-none"
          />
          <button className="px-6 py-3 rounded-lg bg-[#0B3C5D] text-white hover:opacity-90">
            Rechercher
          </button>
        </form>
      </div>
    </section>
  );
}

/* ================================================================ */
/* ======================== CATEGORIES ============================ */
/* ================================================================ */

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-24">
      <h2 className="text-2xl font-semibold text-[#0B3C5D] mb-6">
        Découvrez ARIXA
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Marketplace"
          desc="Produits authentiques, artisans, mode, déco"
          emoji="🛒"
          href="/marketplace"
        />
        <CategoryCard
          title="Tourisme"
          desc="Destinations, circuits, expériences"
          emoji="✈️"
          href="/tourisme"
        />
        <CategoryCard
          title="Culture"
          desc="Articles, vidéos, patrimoine"
          emoji="🎭"
          href="/culture"
        />
      </div>
    </section>
  );
}

function CategoryCard({ title, desc, emoji, href }: any) {
  return (
    <Link
      href={href}
      className="block p-6 rounded-2xl border hover:bg-gray-50 hover:shadow-xl transition group"
    >
      <div className="text-4xl group-hover:scale-110 transition-transform">
        {emoji}
      </div>
      <h3 className="mt-4 font-semibold text-lg text-[#0B3C5D]">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </Link>
  );
}

/* ================================================================ */
/* ====================== SECTIONS + CARDS ======================== */
/* ================================================================ */

function Section({ title, children }: any) {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-24 mb-14">
      <h2 className="text-2xl font-semibold text-[#0B3C5D]">{title}</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
}

function ProductCard({ index }: any) {
  return (
    <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
      <div className="h-40 bg-gray-100 rounded-lg mb-3" />
      <h4 className="font-medium">Produit {index + 1}</h4>
      <p className="text-sm text-gray-500">Artisan, pays</p>
    </div>
  );
}

function TravelCard({ index }: any) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <div className="h-44 bg-gray-200" />
      <div className="p-4">
        <h4 className="font-semibold">Destination {index + 1}</h4>
        <p className="text-sm text-gray-600">Circuit populaire</p>
      </div>
    </div>
  );
}

function CultureCard({ index }: any) {
  return (
    <article className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold">Article Culturel {index + 1}</h4>
      <p className="text-sm text-gray-600 mt-1">Introduction au patrimoine africain.</p>
    </article>
  );
}
