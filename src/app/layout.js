import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Morten R. Winther | Pokémon Rip & Ship",
  description: "Moderne landingpage for Pokémon rip and ship med live Twitch-stream, banner og community-fokus.",
};

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
