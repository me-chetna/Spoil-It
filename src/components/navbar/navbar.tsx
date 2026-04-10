"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useAuthStore } from "@/store/useAuthStore";
import ProfileModal from "@/components/profile/ProfileModal";
import WatchlistModal from "@/components/navbar/WatchlistModal";
import LikeModal from "@/components/navbar/Like"; // ✅ FIXED
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
  const [openLikes, setOpenLikes] = useState(false); // ✅ renamed

  function handleProfileClick() {
    if (!user) {
      setLoginModal(true);
      return;
    }

    setOpenProfile(true);
  }

  return (
    <>
      <nav className="w-full bg-black flex items-center justify-between px-10 py-4">

        {/* LOGO */}
        <div className="text-white">
          <h1 className="text-2xl font-semibold">Spoil-it</h1>
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-6 items-center">
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

        {/* PROFILE */}
        <div className="relative group">
          <button
            onClick={handleProfileClick}
            className="px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
          >
            Profile
          </button>

          {/* DROPDOWN */}
          <div className="absolute right-0 top-full pt-2 w-44 group z-50">
            <div className = "bg-zinc-900 border border-white/20 rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">

              <button
                onClick={() => setOpenWatchlist(true)}
                className="block w-full text-left px-4 py-3 text-white hover:bg-white hover:text-black"
              >
                Watchlist
              </button>

              <button
                onClick={() => setOpenLikes(true)}
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

      </nav>

      {/* MODALS */}
      {openProfile && (
        <ProfileModal onClose={() => setOpenProfile(false)} />
      )}

      {openWatchlist && (
        <WatchlistModal onClose={() => setOpenWatchlist(false)} />
      )}

      {openLikes && (
        <LikeModal onClose={() => setOpenLikes(false)} />
      )}
    </>
  );
}