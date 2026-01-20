import React, { useState } from "react";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "❤",
  "★",
  "☺",
  "♪",
];

const flavors = [
  { name: "Sầu Riêng", color: "bg-yellow-400" },
  { name: "Xoài", color: "bg-orange-300" },
  { name: "Dừa", color: "bg-gray-100" },
  { name: "Dâu", color: "bg-red-300" },
  { name: "Cà Phê", color: "bg-amber-800" },
  { name: "Thanh Long", color: "bg-fuchsia-300" },
  { name: "Bơ", color: "bg-green-400" },
  { name: "Chocolate", color: "bg-stone-900" },
  { name: "Matcha", color: "bg-emerald-500" },
];

export default function Artist() {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [selectedFlavors, setSelectedFlavors] = useState({});

  const addLetter = (letter) => {
    if (selectedLetters.length < 10) {
      const index = selectedLetters.length;
      setSelectedLetters([...selectedLetters, letter]);
      setSelectedFlavors({ ...selectedFlavors, [index]: flavors[0] });
    }
  };

  const removeLetter = (index) => {
    const newLetters = selectedLetters.filter((_, i) => i !== index);
    const newFlavors = {};
    Object.keys(selectedFlavors).forEach((key) => {
      if (parseInt(key) < index) {
        newFlavors[key] = selectedFlavors[key];
      } else if (parseInt(key) > index) {
        newFlavors[parseInt(key) - 1] = selectedFlavors[key];
      }
    });
    setSelectedLetters(newLetters);
    setSelectedFlavors(newFlavors);
  };

  const changeFlavor = (index, flavor) => {
    setSelectedFlavors({ ...selectedFlavors, [index]: flavor });
  };

  const reset = () => {
    setSelectedLetters([]);
    setSelectedFlavors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4">
            The Gelato Artist
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Tạo hình chữ độc đáo với Gelato - Sáng tạo không giới hạn
          </p>
          <p className="text-md text-gray-600 mt-2">
            Chọn tối đa 10 ký tự và phối hợp hương vị cho từng chữ
          </p>
        </div>

        {/* Canvas - Display Area */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 min-h-[300px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Tác Phẩm Của Bạn ({selectedLetters.length}/10)
            </h2>
            {selectedLetters.length > 0 && (
              <button
                onClick={reset}
                className="px-6 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition"
              >
                Làm Lại
              </button>
            )}
          </div>

          {selectedLetters.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-2xl mb-4">🎨</p>
              <p className="text-lg">
                Bắt đầu chọn chữ để tạo tác phẩm Gelato của bạn
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {selectedLetters.map((letter, index) => (
                <div key={index} className="relative group">
                  <div
                    className={`w-20 h-20 ${selectedFlavors[index]?.color || "bg-gray-200"} rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg cursor-pointer hover:scale-110 transition-transform`}
                  >
                    {letter}
                  </div>
                  <button
                    onClick={() => removeLetter(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition"
                  >
                    ✕
                  </button>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-gray-600">
                    {selectedFlavors[index]?.name}
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedLetters.length > 0 && (
            <div className="mt-16 text-center">
              <button className="px-8 py-4 bg-pink-600 text-white rounded-full text-lg font-bold hover:bg-pink-700 transition shadow-lg">
                Đặt Hàng Tác Phẩm Này 🚀
              </button>
              <p className="text-sm text-gray-600 mt-3">
                Liên hệ cửa hàng để đặt thiết kế này
              </p>
            </div>
          )}
        </div>

        {/* Letter Selection */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Chọn Ký Tự</h3>
          <div className="grid grid-cols-7 md:grid-cols-10 gap-3">
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => addLetter(letter)}
                disabled={selectedLetters.length >= 10}
                className={`w-12 h-12 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl flex items-center justify-center text-xl font-bold text-gray-800 hover:from-pink-200 hover:to-yellow-200 transition hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Flavor Selection for Last Letter */}
        {selectedLetters.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Chọn Hương Vị Cho Ký Tự Vừa Chọn
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {flavors.map((flavor) => (
                <button
                  key={flavor.name}
                  onClick={() =>
                    changeFlavor(selectedLetters.length - 1, flavor)
                  }
                  className={`${flavor.color} p-4 rounded-2xl font-semibold transition hover:scale-105 shadow-lg ${
                    flavor.color.includes("900")
                      ? "text-white"
                      : "text-gray-800"
                  }`}
                >
                  {flavor.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Làm Thế Nào Để Đặt Hàng?
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Sau khi hoàn thiện thiết kế của bạn, chụp màn hình và gửi cho chúng
            tôi qua Facebook Messenger hoặc đến trực tiếp cửa hàng để đặt hàng.
            Đội ngũ Gelato Artist sẽ tạo tác phẩm của bạn trong vòng 15-20 phút!
          </p>
        </div>
      </div>
    </div>
  );
}
