"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useAuthStore } from "@/store/useAuthStore";
import ProfileModal from "@/components/profile/ProfileModal";
import WatchlistModal from "@/components/navbar/WatchlistModal";
import PostReviewModal from "@/components/navbar/PostReviewModal";
import { signOut } from "next-auth/react";

const links = [
  { name: "Home", href: "/" },
  { name: "Artists", href: "/artists" },
  { name: "Awards", href: "/awards" },
  { name: "Community", href: "/community" },
  { name: "News", href: "/news" },
  { name: "Votings", href: "/votings" },
];

export default function Navbar() {
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const setLoginModal = useAuthStore((state) => state.setLoginModal);

  const [openProfile, setOpenProfile] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [openWatchlist, setOpenWatchlist] = useState(false);
  const [openReview, setOpenReview] = useState(false);

  function handleProfileClick() {
    if (!user) {
      setLoginModal(true);
      return;
    }

    setOpenProfile(true);
    console.log("clicked", user);
  }

  return (
    <>
      <nav className="w-full bg-black flex items-center justify-between px-10 py-4">

        {/* LEFT LOGO */}
        <div className="text-white">
          <h1 className="text-2xl font-semibold">Spoil-it</h1>
        </div>

        {/* CENTER NAV LINKS */}
        <div className="flex gap-6 items-center">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full transition
                ${
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

        {/* PROFILE DROPDOWN */}
        <div className="relative group">

          <button
            onClick={handleProfileClick}
            className="px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer"
          >
            Profile
          </button>

          {/* DROPDOWN */}
          <div
            className="absolute right-0 mt-2 w-44 bg-zinc-900 border border-white/20 rounded-lg shadow-lg overflow-hidden 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50"
          >

            <button
              onClick={() => setOpenWatchlist(true)}
              className="block w-full text-left px-4 py-3 text-white hover:bg-white hover:text-black transition"
            >
              Watchlist
            </button>

            <button
              onClick={() => setOpenReview(true)}
              className="block w-full text-left px-4 py-3 text-white hover:bg-white hover:text-black transition"
            >
              Post a Review
            </button>

            <button
              onClick={() => {signOut()}}
              className="w-full text-left px-4 py-3 text-white hover:bg-red-500 hover:text-white transition"
            >
              Sign Out
            </button>

          </div>
        </div>

      </nav>

      {/* PROFILE MODAL */}
      {openProfile && (
        <ProfileModal onClose={() => setOpenProfile(false)} />
      )}
      {/* WATCHLIST MODAL */}
        {openWatchlist && (
          <WatchlistModal onClose={() => setOpenWatchlist(false)} />
        )}
      {/* REVIEW MODAL */}
        {openReview && (
          <PostReviewModal onClose={() => setOpenReview(false)} />
        )}
    </>
  );
}