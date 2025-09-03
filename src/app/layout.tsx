import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "K'eex Bey - Transformación Cultural Empresarial",
  description: "Consultoría especializada en transformación cultural empresarial. Personas que se transforman, culturas que prosperan.",
  keywords: [
    "transformación cultural",
    "consultoría empresarial", 
    "cambio organizacional",
    "comunicación interna",
    "entornos híbridos",
    "América Latina"
  ],
  authors: [{ name: "Alicia Rodríguez Rosas" }],
  openGraph: {
    title: "K'eex Bey - Transformación Cultural Empresarial",
    description: "Personas que se transforman, culturas que prosperan",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
