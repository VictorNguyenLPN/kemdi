import React from "react";

const stores = [
  {
    id: 1,
    name: "Kem Đi - Cơ Sở 1",
    address: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
    phone: "028 1234 5678",
    hours: "10:00 - 22:00 (Hàng ngày)",
    mapLink: "#",
  },
  {
    id: 2,
    name: "Kem Đi - Cơ Sở 2",
    address: "456 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội",
    phone: "024 8765 4321",
    hours: "10:00 - 22:00 (Hàng ngày)",
    mapLink: "#",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 to-yellow-50">
      {/* Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4">
          Liên Hệ & Địa Chỉ
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Ghé thăm cửa hàng để trải nghiệm Gelato nghệ thuật
        </p>
      </section>

      {/* Store Locations */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Cửa Hàng Của Chúng Tôi
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">📍</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {store.name}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-gray-600">🏠</span>
                        <p className="text-gray-700">{store.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-600">📞</span>
                        <a
                          href={`tel:${store.phone}`}
                          className="text-pink-600 hover:underline"
                        >
                          {store.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-600">🕐</span>
                        <p className="text-gray-700">{store.hours}</p>
                      </div>
                    </div>
                    <a
                      href={store.mapLink}
                      className="inline-block mt-4 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition"
                    >
                      Xem Bản Đồ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Đặt Giao Hàng
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Không thể đến cửa hàng? Đặt Gelato qua các ứng dụng giao hàng
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="#"
              className="bg-linear-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl text-center font-bold text-xl hover:scale-105 transition shadow-lg"
            >
              <div className="text-4xl mb-2">🛵</div>
              ShopeeFood
            </a>
            <a
              href="#"
              className="bg-linear-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl text-center font-bold text-xl hover:scale-105 transition shadow-lg"
            >
              <div className="text-4xl mb-2">🍴</div>
              GrabFood
            </a>
            <a
              href="#"
              className="bg-linear-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-2xl text-center font-bold text-xl hover:scale-105 transition shadow-lg"
            >
              <div className="text-4xl mb-2">🚴</div>
              Baemin
            </a>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 rounded-2xl">
            <p className="text-gray-700 text-center">
              <span className="font-bold">Lưu ý:</span> Gelato là sản phẩm tươi,
              cần bảo quản lạnh. Vui lòng thưởng thức ngay sau khi nhận hàng để
              có trải nghiệm tốt nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media & Contact Form */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-pink-500 to-purple-600 text-white rounded-3xl shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Kết Nối Với Chúng Tôi</h2>
            <p className="text-xl mb-8">
              Theo dõi hành trình Gelato nghệ thuật của chúng tôi
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="#"
                className="w-16 h-16 bg-white text-pink-600 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition shadow-lg"
              >
                📘
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-white text-pink-600 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition shadow-lg"
              >
                📷
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-white text-pink-600 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition shadow-lg"
              >
                🎵
              </a>
              <a
                href="#"
                className="w-16 h-16 bg-white text-pink-600 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition shadow-lg"
              >
                📧
              </a>
            </div>

            <div className="mt-8">
              <p className="text-lg mb-2">Email: hello@kemdi.vn</p>
              <p className="text-lg">Hotline: 1900 xxxx</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Câu Hỏi Thường Gặp
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Gelato có khác gì so với Ice Cream thông thường?
              </h3>
              <p className="text-gray-700">
                Gelato có hàm lượng kem và không khí thấp hơn, được bảo quản ở
                nhiệt độ cao hơn (-12°C), tạo kết cấu mềm mại và hương vị đậm đà
                hơn.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Gelato có thể bảo quản trong bao lâu?
              </h3>
              <p className="text-gray-700">
                Do không sử dụng chất bảo quản, Gelato tươi nhất trong vòng 3-5
                ngày. Bảo quản trong ngăn đá tủ lạnh và thưởng thức trong vòng 1
                tuần để có trải nghiệm tốt nhất.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Có thể đặt hàng tùy chỉnh cho sự kiện không?
              </h3>
              <p className="text-gray-700">
                Có! Chúng tôi nhận đặt hàng tùy chỉnh cho các sự kiện, tiệc sinh
                nhật, đám cưới. Vui lòng liên hệ trước ít nhất 3 ngày.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
