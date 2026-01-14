import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = [
    "Home",
    "About",   
    "Skills",
    "Education",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-6 left-0 w-full z-50">
      <div className="flex items-center justify-center relative">

        {/* Center pill navbar */}
        <nav className="flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-3 py-2 border border-white/10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActive(link)}
              className={`px-4 py-2 text-sm rounded-full transition-all
                ${
                  active === link
                    ? "bg-white text-black"
                    : "text-gray-300 hover:text-white"
                }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="absolute right-8 flex items-center gap-3">
          {/* Language button (UI only for now) */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 border border-white/10 text-sm text-white">
            🇬🇧 English
          </button>

          {/* Theme toggle (UI only for now) */}
          <button className="w-10 h-10 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center">
            🌙
          </button>
        </div>
      </div>
    </header>
  );
}