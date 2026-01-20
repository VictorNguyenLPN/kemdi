import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "/images/demo/1.png",
    title: "Trải Nghiệm Gelato Nghệ Thuật",
    description: "Không gian cửa hàng sang trọng và hiện đại",
  },
  {
    id: 2,
    image: "/images/demo/2.png",
    title: "Tạo Hình Độc Đáo",
    description: "Mỗi viên gelato là một tác phẩm nghệ thuật",
  },
  {
    id: 3,
    image: "/images/demo/3.png",
    title: "Hương Vị Tươi Ngon",
    description: "Từ nông sản Việt Nam đến gelato Ý đích thực",
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchDelta = useRef(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Touch/Swipe handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDelta.current = 0;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    touchDelta.current = currentX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const threshold = 50; // px to trigger swipe
    if (touchDelta.current > threshold) {
      prevSlide();
    } else if (touchDelta.current < -threshold) {
      nextSlide();
    }
    touchStartX.current = null;
    touchDelta.current = 0;
    setIsPaused(false);
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              {slide.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-200">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm text-white font-bold text-2xl hover:bg-white/50 transition opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm text-white font-bold text-2xl hover:bg-white/50 transition opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
