import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Ascendiazorg Riupassa — Portfolio",
  description:
    "Data Scientist & Developer — Machine Learning, Data Visualization, and Web Development. Published researcher at ICIMTech 2024.",
  keywords: ["Ascendiazorg", "Riupassa", "Data Scientist", "Machine Learning", "Python", "Portfolio", "ICIMTech"],
  authors: [{ name: "Ascendiazorg Riupassa" }],
  openGraph: {
    title: "Ascendiazorg Riupassa — Portfolio",
    description: "Data Scientist & Developer — ML, Data Viz, Web Development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream text-charcoal font-sans antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
