"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useAuthStore } from "@/store/auth";
import ProfileModal from "@/components/ProfileModal";

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
  const { isLoggedIn, setLoginModal } = useAuthStore();

  const [openProfile, setOpenProfile] = useState(false);

  function handleProfileClick() {

    if (!isLoggedIn) {
      setLoginModal(true);
      return;
    }

    setOpenProfile(true);
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

        {/* PROFILE BUTTON */}
        <button
          onClick={handleProfileClick}
          className="px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer"
        >
          Profile
        </button>

      </nav>

      {/* PROFILE MODAL */}
      {openProfile && (
        <ProfileModal onClose={() => setOpenProfile(false)} />
      )}
    </>
  );
}