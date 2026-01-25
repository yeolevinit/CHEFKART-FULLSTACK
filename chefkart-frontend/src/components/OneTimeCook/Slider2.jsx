import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowRight, FaStopwatch } from "react-icons/fa";

// Slick CSS (Ensure these are imported in your main file or here)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel2 = () => {
  const slides = [
    {
      id: 1,
      title: "Get a cook for One-time",
      highlight: "Within 60 seconds",
      description: "Forget ordering online! Get fresh, healthy food cooked right in your kitchen by a professional.",
      bgImage: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FChefit_Hero_banner_f573fdf12c.webp&w=1920&q=75",
    },
    // Added a second slide for demonstration
    {
      id: 2,
      title: "Sudden Guests?",
      highlight: "We've got you covered.",
      description: "Impress your guests with a multi-course meal prepared by an expert chef in your home.",
      bgImage: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1920&q=80",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-screen outline-none">

            {/* Background Image with Zoom Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
              <div className="w-full md:w-2/3 lg:w-1/2">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500 text-orange-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm"
                >
                  <FaStopwatch /> Instant Booking
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
                >
                  {slide.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    {slide.highlight}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg"
                >
                  {slide.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-orange-600/30 hover:bg-orange-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    Book Now <FaArrowRight />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white font-bold text-lg px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-gray-900 transition-all duration-300">
                    How it Works
                  </button>
                </motion.div>

              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Styles for Dots */}
      <style>{`
        .slick-dots { bottom: 40px; }
        .slick-dots li button:before { color: white; opacity: 0.5; font-size: 10px; }
        .slick-dots li.slick-active button:before { color: #ea580c; opacity: 1; font-size: 12px; }
      `}</style>
    </div>
  );
};

export default Carousel2;