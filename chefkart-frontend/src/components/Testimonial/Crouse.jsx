import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaChevronDown } from "react-icons/fa";

// Ensure Slick CSS is imported
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel3 = () => {
  const slides = [
    {
      id: 1,
      title: "What People Think About Us",
      subtitle: "Real stories from 10,000+ happy households across India.",
      bgImage: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FChefit_Hero_banner_f573fdf12c.webp&w=1920&q=75",
    },
    {
      id: 2,
      title: "Taste that Feels Like Home",
      subtitle: "Discover why we are rated 4.8/5 stars by our community.",
      bgImage: "https://images.unsplash.com/photo-1543362906-ac1b481287cf?auto=format&fit=crop&w=1920&q=80",
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
    <div className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-gray-900">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[60vh] md:h-screen outline-none">

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Dark Overlay for Text Contrast */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">

              {/* Floating Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-orange-500 text-5xl md:text-7xl opacity-80"
              >
                <FaQuoteLeft />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="mt-8 h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
              </motion.div>

            </div>
          </div>
        ))}
      </Slider>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2 z-20 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Scroll Down</span>
        <FaChevronDown className="text-xl" />
      </motion.div>

      {/* Custom Styles for Dots */}
      <style>{`
        .slick-dots { bottom: 80px; }
        .slick-dots li button:before { color: white; opacity: 0.5; }
        .slick-dots li.slick-active button:before { color: #ea580c; opacity: 1; }
      `}</style>
    </div>
  );
};

export default Carousel3;