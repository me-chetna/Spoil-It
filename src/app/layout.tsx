"use client";

import "./globals.css";
import { Inter, Holtwood_One_SC } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import useSessionSync from "@/hooks/useSessionSync";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/Footer";
import Login from "@/components/navbar/Login";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function AppContent({ children }: any) {
  useSessionSync();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Login />
      <Footer />
    </>
  );
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>

        <SessionProvider>
          <AppContent>{children}</AppContent>
        </SessionProvider>

      </body>
    </html>
  );
}