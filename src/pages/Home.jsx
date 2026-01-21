import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br">
        <div className="text-center px-4">
          <img
            className="group-hover:scale-110 transition-transform rounded-full// pt-1"
            src="/KEMDI.png"
          />
          <p className="text-2xl md:text-3xl text-gray-700 mb-8">
            Gelato Nghệ Thuật Thủ Công
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Nơi hương vị Gelato Ý gặp gỡ nông sản Việt Nam
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition"
            >
              Khám Phá Menu
            </Link>
            <Link
              to="/artist"
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-pink-600 hover:bg-pink-50 transition"
            >
              Tạo Kem Của Bạn
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-4 from-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white// rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">🍨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              16 Hương Vị
            </h3>
            <p className="text-gray-600">
              Gelato thủ công từ nông sản Việt Nam tươi ngon
            </p>
          </div>
          <div className="text-center p-8 bg-white// rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Nghệ Thuật
            </h3>
            <p className="text-gray-600">
              Tạo hình kem độc đáo, sáng tạo không giới hạn
            </p>
          </div>
          <div className="text-center p-8 bg-white// rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Nguồn Gốc</h3>
            <p className="text-gray-600">
              Minh bạch từ trang trại đến thành phẩm
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Khám Phá Cửa Hàng
            </h2>
            <p className="text-xl text-gray-600">
              Không gian nghệ thuật và những tác phẩm gelato độc đáo
            </p>
          </div>
          <ImageSlider />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-100 to-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Câu Chuyện Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Khám phá hành trình từ nông trại Việt Nam đến Gelato Ý đích thực
          </p>
          <Link
            to="/story"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition"
          >
            Đọc Câu Chuyện
          </Link>
        </div>
      </section>
    </div>
  );
}
