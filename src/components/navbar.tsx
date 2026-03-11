"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";

const links = [
  { name: "Home", href: "/" },
  { name: "Artists", href: "/artists" },
  { name: "Awards", href: "/awards" },
  { name: "Community", href: "/community" },
  { name: "News", href: "/news" },
  { name: "Votings", href: "/votings" },
];

export default function Navbar() {
  const router = useRouter()
  const { isLoggedIn, setLoginModal } = useAuthStore()
  
  const pathname = usePathname();
  function handleProfileClick() {

    if (!isLoggedIn) {
      setLoginModal(true)
      return
    }
    router.push("/profile")
  }

  return (
    <nav className="w-full bg-black flex items-center justify-between px-10 py-4">

      {/* LEFT SEARCH ICON */}
      <div className="text-white">
        <h1 className="text-2xl">Spoil-it</h1>
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
        className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer"
      >
        Profile
      </button>
    </nav>
  );
}