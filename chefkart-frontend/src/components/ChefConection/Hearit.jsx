import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Hear = () => {
  return (
    <section className="text-gray-600 body-font bg-white py-20 overflow-hidden">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-5"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Let's hear it from our <span className="text-orange-500">Partners</span>
        </h1>
        <div className="h-1 w-24 bg-orange-500 rounded mx-auto"></div>
      </motion.div>

      <div className="container px-5 mx-auto flex flex-wrap items-center">

        {/* --- Left Side: The Quote --- */}
        <motion.div
          className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Decorative Quote Icon */}
            <FaQuoteLeft className="text-6xl text-orange-100 absolute -top-8 -left-4 -z-10" />

            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 leading-relaxed font-medium italic relative z-10">
              "जहाँ आपको इज़्ज़त नहीं मिले, ChefKart उस घर में आपको कभी नहीं भेजेगी।"
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-1 w-12 bg-orange-500 rounded"></div>
              <div>
                <p className="font-bold text-gray-900 text-xl tracking-wider">
                  अजनहर बीबी
                </p>
                <span className="text-sm text-gray-500 uppercase tracking-widest">
                  Professional Cook
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Right Side: The Video --- */}
        <motion.div
          className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Video Wrapper for Aspect Ratio */}
          <div className="relative pt-[56.25%] bg-black">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              playsInline // Important for mobile behavior
              poster="https://via.placeholder.com/800x450?text=Watch+Story" // Optional: Add a thumbnail URL here if you have one
              src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/cook_vid_low_quality_8_mb_c474611303.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Decorative Border */}
          <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hear;