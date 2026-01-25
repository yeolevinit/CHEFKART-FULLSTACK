import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaQuoteLeft, FaGlassCheers, FaStar } from 'react-icons/fa';

const Heart3 = () => {
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
    <section className="bg-white py-24 overflow-hidden relative font-sans border-b border-gray-100">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* --- Left Side: Text Content --- */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Icon */}
            <div className="absolute -top-10 -left-6 text-orange-100 text-9xl opacity-60 z-0">
              <FaQuoteLeft />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest mb-6 border border-yellow-200">
                <FaGlassCheers /> Chefit for Parties
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 text-orange-400">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

              {/* Quote */}
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-snug italic mb-8 font-serif">
                "Everyone was amazed by the kind of party we threw, and the food was the <span className="text-orange-600 font-bold not-italic decoration-orange-300 decoration-4 underline-offset-4 underline">talk of the party!</span>"
              </h2>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                  P
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Pramiti Upadhyay
                  </h3>
                  <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                    Party Host
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Right Side: Video --- */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 aspect-video bg-black group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/27389f2b_393b_42a7_bab8_7f0dc6ce3736_ca22a40ab0.mov"
                controls={isPlaying}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              />

              {/* Custom Play Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer group-hover:bg-black/50 transition-colors duration-300"
                  onClick={togglePlay}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-25"></div>
                    <button className="relative w-20 h-20 bg-white text-orange-600 rounded-full flex items-center justify-center shadow-lg pl-2 transition-transform duration-300 transform group-hover:scale-110">
                      <FaPlay className="text-3xl" />
                    </button>
                  </div>

                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-bold tracking-widest text-sm uppercase bg-black/50 px-4 py-1 rounded-full backdrop-blur-md whitespace-nowrap">
                    Watch Review
                  </span>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Heart3;