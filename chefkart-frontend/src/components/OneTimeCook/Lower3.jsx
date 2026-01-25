import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaArrowRight, FaBolt } from "react-icons/fa";

const Lower3 = () => {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden font-sans relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* --- Image Section --- */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                alt="ChefKart Speed Service"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FKoustov1_d393227e33.png&w=1920&q=75"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badge: Speed Promise */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-2 md:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl animate-pulse-slow">
                <FaClock />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Arrival Time</p>
                <p className="text-2xl font-extrabold text-gray-900">
                  &lt; 60 Mins
                </p>
              </div>
            </motion.div>

            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </motion.div>

          {/* --- Text Section --- */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-500 font-bold text-sm mb-6 mx-auto lg:mx-0">
              <FaBolt /> Running on a tight schedule?
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              No time to cook? <br />
              <span className="text-orange-600">ChefKart</span> Got You Covered!
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Don't compromise on your meals just because you're busy.
              Get a verified, professional cook at your doorstep within
              <span className="text-gray-900 font-bold"> 60 minutes</span>.
            </p>

            <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-3 mx-auto lg:mx-0">
              Book Instant Cook <FaArrowRight />
            </button>

            {/* Micro-copy trust signal */}
            <p className="mt-4 text-xs text-gray-400 font-medium">
              *Available in select areas of Pune & Gurgaon
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Lower3;