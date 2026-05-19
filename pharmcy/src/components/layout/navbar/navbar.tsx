"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [language, setLanguage] = useState("EN");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Services", path: "/services" },
    // { name: "Blogs", path: "/blogs" },
    { name: "Video", path: "/video" },
    { name: "Brands", path: "/brands" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full border-b bg-[#eef6ff]">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-[#14b8a6]/10 p-2 rounded-full">
              <Pill className="text-[#14b8a6]" size={20} />
            </div>

            <div className="leading-tight">
              <h1 className="text-2xl font-bold">
                <span className="text-[#14b8a6]">Pharma</span>

                <span className="text-[#115e59]">Care</span>
              </h1>

              <p className="text-[11px] text-gray-500">
                Trusted Online Pharmacy
              </p>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-[420px] items-center border border-gray-200 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search medicine..."
              className="w-full px-3 py-1 outline-none text-sm text-gray-700 bg-transparent"
            />

            <button className="w-9 h-9 rounded-full flex items-center justify-center transition">
              <Search
                size={18}
                className="text-[#14b8a6] hover:text-[#0f9b8e]"
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
                      ? "text-[#14b8a6] font-semibold"
                      : "text-gray-700 hover:text-[#14b8a6]"
                  }`}
                >
                  {link.name}

                  {(link.name === "Categories" || link.name === "Services") && (
                    <ChevronDown size={16} />
                  )}
                </Link>

                {/* Dropdown */}
                {(link.name === "Categories" || link.name === "Services") && (
                  <div className="absolute top-8 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-lg border rounded-xl min-w-[190px] py-2 z-50">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6]"
                    >
                      Option 1
                    </Link>

                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6]"
                    >
                      Option 2
                    </Link>

                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6]"
                    >
                      Option 3
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
              onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
              className="hidden md:flex items-center gap-1.5 border border-gray-200 px-2.5 py-1.5 rounded-full text-xs text-gray-700 hover:bg-gray-50 transition"
            >
              <Languages size={15} className="text-[#14b8a6]" />

              {language}
            </button>

            {/* Dark / Light */}
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="border border-gray-200 hover:bg-gray-100 transition p-1.5 rounded-full"
  >
    {darkMode ? (
      <Sun
        size={16}
        className="text-[#14b8a6]"
      />
    ) : (
      <Moon
        size={16}
        className="text-[#14b8a6]"
      />
    )}
  </button>

            {/* Cart */}
            <button className="relative">
              <ShoppingCart size={22} className="text-[#14b8a6]" />

              <span className="absolute -top-2 -right-2 bg-[#14b8a6] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Sign In */}
            <button className="hidden md:flex bg-[#14b8a6] text-white hover:bg-[#0f9b8e] px-5 py-2 rounded-full transition font-semibold text-sm">
              Sign In
            </button>

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
                placeholder="Search..."
                className="w-full px-3 py-2 outline-none text-sm text-gray-700"
              />

              <button className="w-9 h-9 flex items-center justify-center">
                <Search size={18} className="text-[#14b8a6]" />
              </button>
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
                onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
                className="flex items-center justify-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 w-full"
              >
                <Languages size={16} className="text-[#14b8a6]" />

                {language}
              </button>

              <button className="w-full bg-[#14b8a6] text-white py-2 rounded-full font-semibold text-sm">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
