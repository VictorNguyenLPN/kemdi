import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Trang Chủ" },
  { path: "/menu", label: "Menu" },
  { path: "/story", label: "Câu Chuyện" },
  { path: "/artist", label: "Gelato Artist" },
  { path: "/contact", label: "Liên Hệ" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              className="group-hover:scale-110 transition-transform w-12 rounded-full"
              src="/LOGO.png"
            />
            <img
              className="group-hover:scale-110 transition-transform h-10 rounded-full pt-1"
              src="/KEMDI.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold transition-colors ${
                  location.pathname === item.path
                    ? "text-pink-600"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-opacity ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 font-semibold transition-colors ${
                  location.pathname === item.path
                    ? "text-pink-600 bg-pink-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
