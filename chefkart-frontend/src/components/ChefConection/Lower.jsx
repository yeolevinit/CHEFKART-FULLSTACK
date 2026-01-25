import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";

const Lower = () => {
  return (
    <section className="bg-orange-50 border-t border-orange-100 py-16 md:py-24 relative overflow-hidden">

      {/* Decorative Background Icon */}
      <FaUserPlus className="absolute -right-10 -bottom-10 text-9xl text-orange-100 opacity-50 transform rotate-12" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* --- Heading Section --- */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              ChefKart के <br className="hidden md:block" />
              <span className="text-orange-500 relative">
                4500 से भी ज़्यादा
                {/* Underline SVG */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
              <br className="hidden md:block" />
              कुक्स का हिस्सा बनें।
            </h2>
          </motion.div>

          {/* --- Text Section --- */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-orange-100">
              <p className="leading-relaxed text-lg md:text-xl text-gray-700 mb-6">
                इज़्ज़त और गर्व के साथ जिएँ। ChefKart की ट्रेनिंग व सहायता से अपने
                खाना बनाने के कौशल को एक नई मंज़िल पर ले जाएँ।
              </p>

              <button className="w-full md:w-auto inline-flex items-center justify-center bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md">
                अभी रजिस्टर करें
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Lower;