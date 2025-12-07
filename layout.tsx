// app/layout.tsx (SERVER COMPONENT)
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ARIXA – L’Afrique connectée au monde",
  description: "Marketplace, Tourisme & Culture – Plateforme africaine moderne.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-[#F5F9FF] to-white">
        {/* Background Africa subtle pattern */}
        <div className="pointer-events-none fixed inset-0 bg-[url('/patterns/africa-pattern.svg')] opacity-[0.06] z-0" />

        {/* HEADER (Client Component) */}
        <Header />

        {/* CONTENT */}
        <main className="flex-1 relative z-10">{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
