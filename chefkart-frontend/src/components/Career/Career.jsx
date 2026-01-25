import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaBriefcase } from "react-icons/fa";

const CareerEmptyState = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-[#fff9f2] overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 text-center z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Icon Illustration */}
          <div className="flex justify-center mb-6">
            <div className="bg-white p-6 rounded-full shadow-md">
              <FaBriefcase className="text-5xl text-orange-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            No open positions <span className="text-orange-500">right now</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            We are always growing, but currently, our team is full.
            However, we love meeting talented people!
          </p>

          {/* Call to Action: Don't just say 'wait', give them something to do! */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-black rounded-lg hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <FaPaperPlane className="mr-2" />
              Email Your Resume
            </button>

            <button
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:text-orange-500 focus:outline-none"
            >
              Follow us on LinkedIn
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Check back soon for updates!
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default CareerEmptyState;