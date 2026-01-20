import React from "react";

export default function Story() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-pink-600 to-yellow-500 flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Câu Chuyện Của Chúng Tôi
          </h1>
          <p className="text-xl md:text-2xl">
            Từ Nông Trại Việt Nam Đến Gelato Ý Đích Thực
          </p>
        </div>
      </section>

      {/* Impact Sourcing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full font-semibold mb-4">
              Impact Sourcing
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Thu Mua Nông Sản Việt Minh Bạch
            </h2>
          </div>

          <div className="space-y-12">
            {/* Sourcing Story 1 */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">🌾</span>
                <h3 className="text-2xl font-bold text-gray-800">
                  Kết Nối Trực Tiếp Với Nông Dân
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chúng tôi hợp tác trực tiếp với các hợp tác xã và nông dân địa
                phương từ Đà Lạt, Bến Tre, Đồng Tháp, Mộc Châu... Mỗi loại nông
                sản được tuyển chọn kỹ lưỡng, đảm bảo chất lượng cao nhất và giá
                trị công bằng cho người nông dân.
              </p>
            </div>

            {/* Sourcing Story 2 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">🚜</span>
                <h3 className="text-2xl font-bold text-gray-800">
                  Minh Bạch Nguồn Gốc
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mỗi hương vị Gelato đều có thể truy xuất nguồn gốc rõ ràng. Từ
                trang trại, thời gian thu hoạch, đến quy trình vận chuyển và chế
                biến - tất cả được ghi nhận và chia sẻ với khách hàng.
              </p>
            </div>

            {/* Sourcing Story 3 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">♻️</span>
                <h3 className="text-2xl font-bold text-gray-800">
                  Phát Triển Bền Vững
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chúng tôi ưu tiên các phương pháp canh tác hữu cơ, giảm thiểu
                tác động môi trường, và hỗ trợ các cộng đồng nông thôn phát
                triển bền vững thông qua việc tạo ra giá trị gia tăng cho nông
                sản địa phương.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Italian Gelato Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-semibold mb-4">
              Quy Trình Chế Tác
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Nghệ Thuật Gelato Ý Chính Hiệu
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🇮🇹</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Công Thức Truyền Thống Ý
              </h3>
              <p className="text-gray-700">
                Sử dụng công thức Gelato chính thống từ Italia, với tỷ lệ
                kem/sữa thấp hơn ice cream, giúp hương vị nông sản được tôn lên
                tự nhiên.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🧊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Nhiệt Độ Lý Tưởng
              </h3>
              <p className="text-gray-700">
                Gelato được bảo quản ở -12°C thay vì -18°C, tạo kết cấu mềm mại,
                dẻo mịn và giải phóng hương vị trọn vẹn hơn.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Thủ Công Hàng Ngày
              </h3>
              <p className="text-gray-700">
                Mỗi batch Gelato được chế tác thủ công hàng ngày với số lượng
                nhỏ, đảm bảo độ tươi ngon và chất lượng ổn định.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Không Chất Bảo Quản
              </h3>
              <p className="text-gray-700">
                100% tự nhiên, không sử dụng chất bảo quản, phẩm màu hay hương
                liệu nhân tạo. Chỉ có nông sản thật và nghệ thuật Gelato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Sứ Mệnh Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Tại Kem Đi, chúng tôi không chỉ làm Gelato. Chúng tôi tạo ra cầu nối
            giữa nông dân Việt Nam và người tiêu dùng, giữa truyền thống Ý và
            đổi mới sáng tạo, giữa hương vị và câu chuyện. Mỗi muỗng Gelato là
            một hành trình khám phá văn hóa ẩm thực và giá trị nhân văn.
          </p>
          <a
            href="/menu"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition"
          >
            Khám Phá Menu
          </a>
        </div>
      </section>
    </div>
  );
}
