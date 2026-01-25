import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaQuoteLeft, FaStar } from 'react-icons/fa';

const Heart1 = () => {
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
    <section className="bg-orange-50/30 py-24 overflow-hidden relative font-sans">

      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* --- Left Side: Text Content --- */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-12 -left-6 text-orange-200 text-9xl opacity-50 z-0">
              <FaQuoteLeft />
            </div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-6 text-orange-400">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

              <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight italic mb-8 font-serif">
                "I will <span className="text-orange-600 font-bold not-italic">never go back</span> to ordering food online because ChefKart just works great for me!"
              </h2>

              <div className="flex items-center gap-4 border-l-4 border-orange-500 pl-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Pramiti Upadhyay
                  </h3>
                  <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                    Monthly Subscriber
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Right Side: Video --- */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 aspect-video bg-black group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Monthly_Subscription_Testiomonial_454d9c714c.mp4"
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
                  {/* Play Button */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-25"></div>
                    <button className="relative w-20 h-20 bg-white text-orange-600 rounded-full flex items-center justify-center shadow-lg pl-2 transition-transform duration-300 transform group-hover:scale-110">
                      <FaPlay className="text-3xl" />
                    </button>
                  </div>

                  <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-bold tracking-widest text-sm uppercase bg-black/50 px-4 py-1 rounded-full backdrop-blur-md">
                    Play Story
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

export default Heart1;