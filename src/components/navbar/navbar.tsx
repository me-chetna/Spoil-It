"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { useAuthStore } from "@/store/useAuthStore";
import ProfileModal from "@/components/profile/ProfileModal";
import WatchlistModal from "@/components/navbar/WatchlistModal";
import LikeModal from "@/components/navbar/Like";
import { signOut } from "next-auth/react";

const links = [
  { name: "Home", href: "/" },
  { name: "Artists", href: "/artists" },
  { name: "Community", href: "/community" },
  { name: "News", href: "/news" },
  { name: "Votings", href: "/votings" },
  { name: "Chat-it", href: "/chat" },
];

export default function Navbar() {
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const setLoginModal = useAuthStore((state) => state.setLoginModal);

  const [openProfile, setOpenProfile] = useState(false);
  const [openWatchlist, setOpenWatchlist] = useState(false);
  const [openLikes, setOpenLikes] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileSubmenuOpen, setProfileSubmenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setProfileSubmenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function handleProfileClick() {
    if (!user) {
      setLoginModal(true);
      setMenuOpen(false);
      return;
    }
    setOpenProfile(true);
    setMenuOpen(false);
  }

  function handleModalOpen(modal: "watchlist" | "likes") {
    setMenuOpen(false);
    setProfileSubmenuOpen(false);
    if (modal === "watchlist") setOpenWatchlist(true);
    if (modal === "likes") setOpenLikes(true);
  }

  return (
    <>
      <nav className="w-full bg-black flex items-center justify-between px-6 md:px-10 py-4 relative z-50">

        {/* LOGO */}
        <div className="text-white">
          <h1 className="text-2xl font-semibold">Spoil-it</h1>
        </div>

        {/* NAV LINKS — desktop only */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full transition ${
                  active
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* PROFILE — desktop only */}
        <div className="relative group hidden md:block">
          <button
            onClick={handleProfileClick}
            className="px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
          >
            Profile
          </button>

          <div className="absolute right-0 top-full pt-2 w-44 group z-50">
            <div className="bg-zinc-900 border border-white/20 rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              <button
                onClick={() => handleModalOpen("watchlist")}
                className="block w-full text-left px-4 py-3 text-white hover:bg-white hover:text-black"
              >
                Watchlist
              </button>
              <button
                onClick={() => handleModalOpen("likes")}
                className="block w-full text-left px-4 py-3 text-white hover:bg-white hover:text-black"
              >
                Liked Movies
              </button>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-3 text-white hover:bg-red-500"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* HAMBURGER BUTTON — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 group"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] bg-white transition-all duration-300 origin-center ${
              menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "w-0 opacity-0" : "w-5"
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-all duration-300 origin-center ${
              menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
            }`}
          />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-zinc-950 border-l border-white/10 z-50 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-white font-semibold text-lg">Spoil-it</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/60 hover:text-white transition"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col py-4 px-4 gap-1 overflow-y-auto flex-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition text-sm font-medium ${
                  active
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="my-3 border-t border-white/10" />

          {/* Profile Section */}
          <button
            onClick={() => setProfileSubmenuOpen((prev) => !prev)}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-white hover:bg-white/10 transition text-sm font-medium"
          >
            <span>Profile</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-200 ${profileSubmenuOpen ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {/* Profile Submenu */}
          <div
            className={`flex flex-col gap-1 overflow-hidden transition-all duration-200 ${
              profileSubmenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <button
              onClick={handleProfileClick}
              className="text-left px-6 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition text-sm"
            >
              View Profile
            </button>
            <button
              onClick={() => handleModalOpen("watchlist")}
              className="text-left px-6 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition text-sm"
            >
              Watchlist
            </button>
            <button
              onClick={() => handleModalOpen("likes")}
              className="text-left px-6 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition text-sm"
            >
              Liked Movies
            </button>
          </div>
        </div>

        {/* Sign Out at bottom */}
        <div className="px-4 py-5 border-t border-white/10">
          <button
            onClick={() => { signOut(); setMenuOpen(false); }}
            className="w-full py-3 rounded-lg text-sm font-medium text-white bg-red-600/20 hover:bg-red-600 border border-red-600/40 hover:border-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* MODALS */}
      {openProfile && <ProfileModal onClose={() => setOpenProfile(false)} />}
      {openWatchlist && <WatchlistModal onClose={() => setOpenWatchlist(false)} />}
      {openLikes && <LikeModal onClose={() => setOpenLikes(false)} />}
    </>
  );
}