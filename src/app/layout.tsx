import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Holtwood_One_SC } from "next/font/google";
import Footer from "@/components/Footer";
import Login from "@/components/Login";

const holtwood = Holtwood_One_SC({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400","500","700"],
});

export const metadata = {
  title: "Spoil-it",
  description: "Discover anime, dramas, movies and series.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>
        <Login />

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}