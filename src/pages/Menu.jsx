import React, { useState } from "react";
import durianImg from "../../images/icecream-flavour/SauRieng.png";
import mangoImg from "../../images/icecream-flavour/Xoai.png";
import dragonFruitImg from "../../images/icecream-flavour/ThanhLong.png";
import tomatoImg from "../../images/icecream-flavour/CaChua.png";
import mangosteenImg from "../../images/icecream-flavour/MangCut.png";
import berryImg from "../../images/icecream-flavour/VietQuat.png";
import melonImg from "../../images/new-flavour/AmazingMelon.png";
import mangosteenDelightImg from "../../images/new-flavour/MangosteenDelight.png";
import papayaImg from "../../images/new-flavour/PapayaPradise.png";

const gelatoFlavors = [
  {
    id: 1,
    name: "Sầu Riêng Cát Chu",
    category: "Seasonal",
    description: "Sầu riêng cát chu đặc sản vùng Cát Chu, Phú Thọ",
    color: "from-yellow-200 to-yellow-400",
    image: durianImg,
  },
  {
    id: 2,
    name: "Xoài Cát Hòa Lộc",
    category: "Seasonal",
    description: "Xoài Cát Hòa Lộc chín mọng từ Đồng Tháp",
    color: "from-orange-200 to-yellow-300",
    image: mangoImg,
  },
  {
    id: 3,
    name: "Dừa Bến Tre",
    category: "Classic",
    description: "Nước dừa tươi từ vườn dừa Bến Tre",
    color: "from-white to-gray-100",
    image: mangosteenImg,
  },
  {
    id: 4,
    name: "Dâu Tây Đà Lạt",
    category: "Seasonal",
    description: "Dâu tây tươi từ cao nguyên Đà Lạt",
    color: "from-pink-200 to-red-300",
    image: berryImg,
  },
  {
    id: 5,
    name: "Cà Phê Buôn Ma Thuột",
    category: "Classic",
    description: "Robusta nguyên chất từ Tây Nguyên",
    color: "from-amber-700 to-brown-900",
    image: tomatoImg,
  },
  {
    id: 6,
    name: "Thanh Long Ruột Đỏ",
    category: "Seasonal",
    description: "Thanh long ruột đỏ Bình Thuận",
    color: "from-fuchsia-200 to-pink-400",
    image: dragonFruitImg,
  },
  {
    id: 7,
    name: "Bơ Đắk Lắk",
    category: "Classic",
    description: "Bơ 034 thơm béo từ Đắk Lắk",
    color: "from-green-300 to-lime-400",
    image: mangosteenImg,
  },
  {
    id: 8,
    name: "Sữa Dê Núi Mộc Châu",
    category: "Premium",
    description: "Sữa dê tươi nguyên chất từ Mộc Châu",
    color: "from-slate-100 to-stone-200",
    image: tomatoImg,
  },
  {
    id: 9,
    name: "Cam Vinh",
    category: "Classic",
    description: "Cam canh Vinh - đặc sản Nghệ An",
    color: "from-orange-300 to-orange-500",
    image: tomatoImg,
  },
  {
    id: 10,
    name: "Nhãn Lồng Hưng Yên",
    category: "Seasonal",
    description: "Nhãn lồng Hưng Yên thơm ngọt",
    color: "from-amber-100 to-yellow-200",
    image: berryImg,
  },
  {
    id: 11,
    name: "Vải Thiều Bắc Giang",
    category: "Seasonal",
    description: "Vải thiều chín mọng Lục Ngạn",
    color: "from-red-200 to-rose-400",
    image: berryImg,
  },
  {
    id: 12,
    name: "Dưa Hấu Dứa",
    category: "Seasonal",
    description: "Dưa hấu dứa vàng Gia Lai",
    color: "from-red-300 to-pink-400",
    image: pineappleImg,
  },
  {
    id: 13,
    name: "Chocolate Bến Tre",
    category: "Premium",
    description: "Cacao Bến Tre 70% hảo hạng",
    color: "from-amber-800 to-stone-900",
    image: tomatoImg,
  },
  {
    id: 14,
    name: "Matcha Lâm Đồng",
    category: "Premium",
    description: "Matcha hữu cơ từ Đà Lạt",
    color: "from-green-400 to-emerald-600",
    image: mangosteenImg,
  },
  {
    id: 15,
    name: "Mật Ong Rừng U Minh",
    category: "Premium",
    description: "Mật ong nguyên chất từ rừng U Minh",
    color: "from-amber-300 to-yellow-600",
    image: pineappleImg,
  },
  {
    id: 16,
    name: "Sữa Tươi Nông Trại Đà Lạt",
    category: "Classic",
    description: "Sữa bò tươi từ nông trại Đà Lạt",
    color: "from-blue-50 to-sky-100",
    image: mangoImg,
  },
  {
    id: 17,
    name: "Amazing Melon",
    category: "Signature",
    description: "Melon mát lạnh phối nhiều viên gelato thủ công",
    color: "from-lime-200 to-emerald-300",
    image: melonImg,
  },
  {
    id: 18,
    name: "Mangosteen Delight",
    category: "Signature",
    description: "Chén gelato đa vị với điểm nhấn măng cụt",
    color: "from-purple-200 to-pink-300",
    image: mangosteenDelightImg,
  },
  {
    id: 19,
    name: "Papaya Paradise",
    category: "Signature",
    description: "Gelato trái cây nhiệt đới phối viên đu đủ",
    color: "from-amber-200 to-orange-300",
    image: papayaImg,
  },
];

const categories = ["All", "Classic", "Seasonal", "Premium", "Signature"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFlavors =
    selectedCategory === "All"
      ? gelatoFlavors
      : gelatoFlavors.filter((flavor) => flavor.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4">
            Digital Menu
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Bộ sưu tập gelato nghệ thuật từ nông sản Việt Nam
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-700 hover:bg-pink-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gelato Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFlavors.map((flavor) => (
            <div
              key={flavor.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div
                className={`h-48 bg-linear-to-br ${flavor.color} flex items-center justify-center overflow-hidden`}
              >
                {flavor.image ? (
                  <img
                    src={flavor.image}
                    alt={`Gelato ${flavor.name}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-6xl">🍨</span>
                )}
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-3">
                  {flavor.category}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {flavor.name}
                </h3>
                <p className="text-gray-600 text-sm">{flavor.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            <span className="font-bold">Lưu ý:</span> Menu theo mùa có thể thay
            đổi tùy vào mùa vụ nông sản. Vui lòng liên hệ cửa hàng để biết thêm
            chi tiết về hương vị hiện có.
          </p>
        </div>
      </div>
    </div>
  );
}
