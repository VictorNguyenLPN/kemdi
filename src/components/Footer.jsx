import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🍨</span>
              <span className="text-2xl font-bold">Kem Đi</span>
            </div>
            <p className="text-gray-400">
              Gelato nghệ thuật thủ công từ nông sản Việt Nam
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-gray-400 hover:text-white transition"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/story"
                  className="text-gray-400 hover:text-white transition"
                >
                  Câu Chuyện
                </Link>
              </li>
              <li>
                <Link
                  to="/artist"
                  className="text-gray-400 hover:text-white transition"
                >
                  Gelato Artist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@kemdi.vn</li>
              <li>Hotline: 1900 xxxx</li>
              <li>TP. Hồ Chí Minh</li>
              <li>Hà Nội</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Mạng Xã Hội</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
              >
                📘
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
              >
                🎵
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2026 Kem Đi. All rights reserved. Made with ❤️ in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
