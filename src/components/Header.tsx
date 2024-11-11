import React, { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  toggleLanguage: () => void;
  isArabic: boolean;
}

export function Header({ toggleLanguage, isArabic }: HeaderProps) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Hurghada Radio" className="h-12 w-auto" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-purple-400 transition"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-purple-400 transition">
            {t.home}
          </a>
          <a href="#" className="hover:text-purple-400 transition">
            {t.programs}
          </a>
          <a href="#" className="hover:text-purple-400 transition">
            {t.schedule}
          </a>
          <a href="#" className="hover:text-purple-400 transition">
            {t.contact}
          </a>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-purple-600 hover:bg-purple-700 transition rounded-md"
          >
            {isArabic ? "English" : "عربي"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-24 left-0 right-0 bg-black/95 backdrop-blur-lg md:hidden z-50">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a
                href="#"
                className="hover:text-purple-400 transition py-2 border-b border-white/10"
              >
                {t.home}
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition py-2 border-b border-white/10"
              >
                {t.programs}
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition py-2 border-b border-white/10"
              >
                {t.schedule}
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition py-2 border-b border-white/10"
              >
                {t.contact}
              </a>
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-md mt-2"
              >
                {isArabic ? "English" : "عربي"}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
