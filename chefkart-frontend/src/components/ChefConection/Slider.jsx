import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ⚠️ IMPORTANT: These styles are required for react-slick to work!
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components for better UI
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-orange-500 p-3 rounded-full shadow-lg transition-all duration-300"
    aria-label="Next Slide"
  >
    <FaChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-orange-500 p-3 rounded-full shadow-lg transition-all duration-300"
    aria-label="Previous Slide"
  >
    <FaChevronLeft size={20} />
  </button>
);

export default function SimpleSlider() {
  // Config
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Slower smooth scroll
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile (swipe is better)
        },
      },
    ],
    // Custom Dots Class to style the indicators
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-orange-400 transition-colors"></div>
    ),
  };

  const slides = [
    { id: 1, src: "/slider1.png", alt: "Initiative 1" },
    { id: 2, src: "/slider2.png", alt: "Initiative 2" },
    { id: 3, src: "/slider3.png", alt: "Initiative 3" },
    { id: 4, src: "/slider4.png", alt: "Initiative 4" },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-5 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            एक प्रमुख <span className="text-orange-500">पहल</span>
          </h1>
          <div className="h-1 w-24 bg-orange-500 rounded mx-auto mt-4"></div>
        </div>

        {/* The Slider */}
        <div className="px-4 md:px-8">
          <Slider {...settings}>
            {slides.map((slide) => (
              // Wrapper div is crucial for the 'gap' effect
              <div key={slide.id} className="px-3 py-5">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  {/* Optional: Add a caption area here if needed */}
                  {/* <div className="p-4"><p>Caption...</p></div> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CSS Override for Active Dot */}
        <style>{`
          .slick-active div { background-color: #f97316 !important; width: 24px; border-radius: 99px; }
        `}</style>

      </div>
    </section>
  );
}