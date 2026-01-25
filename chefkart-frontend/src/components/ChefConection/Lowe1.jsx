import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";

const Lowe1 = () => {

  // Function to smooth scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="text-gray-600 bg-[#f9fafb] body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:flex lg:flex-row flex-col justify-between items-center gap-12">

          {/* --- Image Section (Slides in from Left) --- */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="ChefKart Cooks"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FMale_female_Cooks_ceb391c475.webp&w=1920&q=75"
                loading="lazy"
              />
              {/* Optional Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* --- Text Section (Slides in from Right) --- */}
          <motion.div
            className="lg:w-1/2 w-full lg:pl-10 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] uppercase mb-2">
              हमें है विश्वास
            </h2>

            <h1 className="text-gray-900 text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight">
              आपका बनाया खाना, <br className="hidden lg:block" />
              <span className="text-orange-500">खाएगा ज़माना!</span>
            </h1>

            {/* Main CTA Button */}
            <button className="group flex items-center gap-2 text-white bg-black border-0 py-4 px-8 focus:outline-none hover:bg-gray-800 rounded-full text-xl font-bold shadow-lg transition-all duration-300 transform hover:translate-y-1">
              ChefKart से जुड़ें
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* "Go Up" Button - Now Functional */}
            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 text-sm text-gray-500 font-semibold hover:text-black transition-colors cursor-pointer"
            >
              <div className="p-2 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors">
                <FaArrowUp />
              </div>
              ऊपर जाएँ (Back to Top)
            </button>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Lowe1;