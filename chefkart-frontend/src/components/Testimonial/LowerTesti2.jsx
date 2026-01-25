import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaQuoteRight, FaHandHoldingHeart } from 'react-icons/fa';

const Heart2 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-white py-24 overflow-hidden relative font-sans border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* --- Left Side: Video (Partner Story) --- */}
          <motion.div
            className="w-full lg:w-1/2 relative order-last lg:order-first"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-orange-50 rounded-full blur-3xl -z-10"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover aspect-[4/3]" // Slightly taller aspect ratio for portraits/interviews
                src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/cook_vid_low_quality_8_mb_1249700be8.mp4"
                controls={isPlaying}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              />

              {/* Custom Play Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group-hover:bg-black/40 transition-colors duration-300"
                  onClick={togglePlay}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                    <button className="relative w-20 h-20 bg-white text-orange-600 rounded-full flex items-center justify-center shadow-lg pl-2 transform group-hover:scale-110 transition-transform">
                      <FaPlay className="text-3xl" />
                    </button>
                  </div>

                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-bold tracking-widest text-sm uppercase bg-black/50 px-4 py-1 rounded-full backdrop-blur-md whitespace-nowrap">
                    Watch Partner Story
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* --- Right Side: Text Content --- */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Quote Icon */}
            <div className="absolute -top-10 right-0 text-gray-100 text-8xl z-0">
              <FaQuoteRight />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest mb-6">
                <FaHandHoldingHeart /> Empowering Cooks
              </div>

              {/* Hindi Quote */}
              <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-snug mb-8 font-serif">
                "जहाँ आपको <span className="text-orange-600 font-bold">इज़्ज़त (Respect)</span> नहीं मिले, ChefKart उस घर में आपको कभी नहीं भेजेगी।"
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-1 bg-orange-500 h-16 rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    अजनहर बीबी (Ajnahar Bibi)
                  </h3>
                  <p className="text-gray-500 font-medium text-sm mt-1">
                    Proud ChefKart Partner
                  </p>
                </div>
              </div>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                At ChefKart, we don't just provide jobs; we provide dignity.
                Our partners are the heart of our service, and their safety and respect are our top priority.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Heart2;