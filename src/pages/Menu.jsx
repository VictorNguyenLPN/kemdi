import React, { useState } from "react";
import SauRiengCaiMon from "../../images/icecream-flavour/SauRiengCaiMon.png";
import XoaiCatHoaLoc from "../../images/icecream-flavour/XoaiCatHoaLoc.png";
import MangCutLaiThieu from "../../images/icecream-flavour/MangCutLaiThieu.png";
import MitToNu from "../../images/icecream-flavour/MitToNu.png";
import CamVinh from "../../images/icecream-flavour/CamVinh.png";
import ThanhLongRuotDo from "../../images/icecream-flavour/ThanhLongRuotDo.png";
import DuaHauDo from "../../images/icecream-flavour/DuaHauDo.png";
import VuSuaLoRen from "../../images/icecream-flavour/VuSuaLoRen.png";
import DuDuChin from "../../images/icecream-flavour/DuDuChin.png";
import OiNuHoang from "../../images/icecream-flavour/OiNuHoang.png";
import DuaLuoiNgot from "../../images/icecream-flavour/DuaLuoiNgot.png";
import ChanhDay from "../../images/icecream-flavour/ChanhDay.png";
import KheChuaNgot from "../../images/icecream-flavour/KheChuaNgot.png";
import ChanhMeLy from "../../images/icecream-flavour/ChanhMeLy.png";
import DuaBenTre from "../../images/icecream-flavour/DuaBenTre.png";

import melonImg from "../../images/new-flavour/AmazingMelon.png";
import mangosteenDelightImg from "../../images/new-flavour/MangosteenDelight.png";
import papayaImg from "../../images/new-flavour/PapayaPradise.png";

const gelatoFlavors = [
  {
    id: 1,
    name: "Sầu Riêng Cái Mơn",
    category: "Seasonal",
    description:
      "Béo ngậy nồng nàn từ vua trái cây miền Tây, tan chảy quyến rũ trong từng lớp kem dẻo mịn.",
    color: "from-yellow-200 to-yellow-400",
    image: SauRiengCaiMon,
  },
  {
    id: 2,
    name: "Xoài Cát Hòa Lộc",
    category: "Seasonal",
    description:
      "Vị ngọt thanh tao, thơm lừng đặc trưng của giống xoài quý, mang đến cảm giác mọng nước tức thì.",
    color: "from-orange-200 to-yellow-300",
    image: XoaiCatHoaLoc,
  },
  {
    id: 3,
    name: "Măng Cụt Lái Thiêu",
    category: "Classic",
    description:
      "Sự kết hợp tinh tế giữa vị chua nhẹ và ngọt thanh, mát lạnh như gió bãi bồi.",
    color: "from-white to-gray-100",
    image: MangCutLaiThieu,
  },
  {
    id: 4,
    name: "Mít Tố Nữ",
    category: "Seasonal",
    description:
      "Hương mít nồng nàn, ngọt đậm đà khó cưỡng, gợi nhớ những thức quà quê chân phương.",
    color: "from-pink-200 to-red-300",
    image: MitToNu,
  },
  {
    id: 5,
    name: "Cam Vinh",
    category: "Classic",
    description:
      "Giải nhiệt tức thì với vị cam mọng nước, giàu Vitamin và sảng khoái đến từng thìa kem.",
    color: "from-amber-700 to-brown-900",
    image: CamVinh,
  },
  {
    id: 6,
    name: "Thanh Long Ruột Đỏ",
    category: "Seasonal",
    description:
      "Visual rực rỡ từ sắc tím tự nhiên, vị thanh nhẹ nhàng cho một ngày nắng rạng rỡ.",
    color: "from-fuchsia-200 to-pink-400",
    image: ThanhLongRuotDo,
  },
  {
    id: 7,
    name: "Dưa Hấu Đỏ",
    category: "Classic",
    description:
      "Mát lạnh sảng khoái, mang trọn vẹn sự tinh khiết của mùa hè vào trong hũ kem của bạn.",
    color: "from-green-300 to-lime-400",
    image: DuaHauDo,
  },
  {
    id: 8,
    name: "Vú Sữa Lò Rèn",
    category: "Premium",
    description:
      "Ngọt lành như dòng sữa, mềm mại và dịu dàng tan chậm trên đầu lưỡi.",
    color: "from-slate-100 to-stone-200",
    image: VuSuaLoRen,
  },
  {
    id: 9,
    name: "Đu Đủ Chín",
    category: "Classic",
    description:
      "Vị ngọt dịu, kết cấu kem mượt mà mang đậm năng lượng nhiệt đới rực rỡ.",
    color: "from-orange-300 to-orange-500",
    image: DuDuChin,
  },
  {
    id: 10,
    name: "Ổi Nữ Hoàng",
    category: "Seasonal",
    description:
      "Hương ổi nồng nàn, thanh tao và chuẩn vị trái cây tươi, cực kỳ nịnh miệng.",
    color: "from-amber-100 to-yellow-200",
    image: OiNuHoang,
  },
  {
    id: 11,
    name: "Dưa Lưới Ngọt",
    category: "Seasonal",
    description:
      "Thơm dịu, ngọt thanh và tinh tế, là lựa chọn hoàn hảo cho những tín đồ sành ăn.",
    color: "from-red-200 to-rose-400",
    image: DuaLuoiNgot,
  },
  {
    id: 12,
    name: "Chanh Dây",
    category: "Seasonal",
    description:
      "Chua thanh cực đã, đánh thức mọi giác quan và giải tỏa stress sau giờ làm việc.",
    color: "from-red-300 to-pink-400",
    image: ChanhDay,
  },
  {
    id: 13,
    name: "Khế Chua Ngọt",
    category: "Premium",
    description:
      "Sự kết hợp lạ miệng đầy thú vị, gợi nhớ ký ức tuổi thơ trong từng tầng hương vị.",
    color: "from-amber-800 to-stone-900",
    image: KheChuaNgot,
  },
  {
    id: 14,
    name: "Chanh mê ly",
    category: "Premium",
    description:
      "Cực kỳ sảng khoái, đánh bay cơn nóng Sài Gòn chỉ trong một nốt nhạc.",
    color: "from-green-400 to-emerald-600",
    image: ChanhMeLy,
  },
  {
    id: 15,
    name: "Dừa Bến Tre",
    category: "Premium",
    description:
      "Béo thơm thuần khiết từ cốt dừa nguyên chất, đưa bạn về với vùng đất dừa xanh mát.",
    color: "from-amber-300 to-yellow-600",
    image: DuaBenTre,
  },
  {
    id: 17,
    name: "Amazing Melon",
    category: "Signature",
    description: "Mo ta",
    color: "from-lime-200 to-emerald-300",
    image: melonImg,
  },
  {
    id: 18,
    name: "Mangosteen Delight",
    category: "Signature",
    description: "Mo ta",
    color: "from-purple-200 to-pink-300",
    image: mangosteenDelightImg,
  },
  {
    id: 19,
    name: "Papaya Paradise",
    category: "Signature",
    description: "Mo ta",
    color: "from-amber-200 to-orange-300",
    image: papayaImg,
  },
];

const categories = ["All", "Classic", "Seasonal", "Premium", "Signature"];

const categoryColors = {
  Classic: { bg: "bg-amber-100", text: "text-amber-800" },
  Seasonal: { bg: "bg-green-100", text: "text-green-800" },
  Premium: { bg: "bg-yellow-100", text: "text-yellow-800" },
  Signature: { bg: "bg-purple-100", text: "text-purple-800" },
};

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
                <div
                  className={`inline-block px-3 py-1 ${categoryColors[flavor.category]?.bg || "bg-gray-100"} ${categoryColors[flavor.category]?.text || "text-gray-800"} text-sm font-semibold rounded-full mb-3`}
                >
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
