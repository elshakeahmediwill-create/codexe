"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext"; // تأكد من المسار الصحيح

import {
  ShoppingCart,
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Pill,
  Languages,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { t, toggleLanguage, lang } = useLanguage(); // استخدام السياق المخصص للغة

  const navLinks = [
    { name: t.home, path: "/" },
    { name: t.categories, path: "/categories" },
    { name: t.services, path: "/services" },
    { name: t.video, path: "/video" },
    { name: t.brands, path: "/brands" },
    { name: t.aboutUs, path: "/about" },
    { name: t.contactUs, path: "/contact" },
  ];

  return (
    <header className="w-full border-b bg-[#eef6ff]">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-[#14b8a6]/10 p-2 rounded-full">
              <Pill className="text-primary" size={20} />
            </div>

            <div className="leading-tight">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PharmaCare
              </h1>
              <p className="text-[11px] text-gray-500">
                {t.trustedPharmacy}
              </p>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-[420px] items-center border border-gray-200 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full px-3 py-1 outline-none text-sm text-gray-700 bg-transparent"
            />

            <button className="w-9 h-9 rounded-full flex items-center justify-center transition group">
              <Search
                size={18}
                className="text-primary group-hover:text-accent transition"
              />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  href={link.path}
                  className={`flex items-center gap-1 transition text-[13px] ${
                    pathname === link.path
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.name}

                  {(link.name === t.categories || link.name === t.services) && (
                    <ChevronDown size={16} />
                  )}
                </Link>

                {/* Dropdown */}
                {(link.name === t.categories || link.name === t.services) && (
                  <div className="absolute top-8 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-lg border rounded-xl min-w-[190px] py-2 z-50">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14b8a6]/10 hover:text-[#146eb8]"
                    >
                      {t.option1}
                    </Link>

                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14b8a6]/10 hover:text-[#146eb8]"
                    >
                      {t.option2}
                    </Link>

                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14b8a6]/10 hover:text-[#146eb8]"
                    >
                      {t.option3}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-1.5 border border-gray-200 px-2.5 py-1.5 rounded-full text-xs text-gray-700 hover:bg-gray-50 transition"
            >
              <Languages size={15} className="text-primary" />

              {lang.toUpperCase()}
            </button>

            {/* Dark / Light */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border border-gray-200 hover:bg-gray-100 transition p-1.5 rounded-full"
            >
              {darkMode ? (
                <Sun size={16} className="text-primary" />
              ) : (
                <Moon size={16} className="text-primary" />
              )}
            </button>

            {/* Cart */}
            <button className="relative">
              <ShoppingCart size={22} className="text-primary" />

              <span className="absolute -top-2 -right-2 bg-red-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Sign In */}
            <Link 
              href="/signup" 
              className="hidden md:flex bg-primary text-white px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold text-sm"
            >
              {t.signIn}
            </Link>

            {/* Mobile Menu */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={24} className="text-[#14b8a6]" />
              ) : (
                <Menu size={24} className="text-[#14b8a6]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-5 space-y-5">
            {/* Mobile Search */}
            <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full px-3 py-2 outline-none text-sm text-gray-700"
              />

              <Link href="/signup" className="w-9 h-9 flex items-center justify-center">
                <Search size={18} className="text-[#14b8a6]" />
              </Link>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-[15px] ${
                    pathname === link.path
                      ? "text-[#14b8a6] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 w-full"
              >
                <Languages size={16} className="text-[#14b8a6]" />

                {lang.toUpperCase()}
              </button>

              <button className="w-full bg-[#107e6d] text-white py-2 rounded-full font-semibold text-sm">
                {t.signIn}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}