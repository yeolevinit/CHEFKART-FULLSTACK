import React from "react";
import { motion } from "framer-motion";

// 1. Data Configuration
const STATS = [
  { id: 1, value: "3M+", label: "Meals cooked with love" },
  { id: 2, value: "4500+", label: "Verified & Trained Cooks" },
  { id: 3, value: "10K+", label: "Households served" },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="container mx-auto px-5">

        {/* Container with shadow/border for distinct separation */}
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">

            {STATS.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center text-center p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* The Number */}
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 tracking-tighter">
                  {stat.value}
                </h2>

                {/* The Label */}
                <p className="text-gray-500 text-lg md:text-xl font-medium uppercase tracking-wide">
                  {stat.label}
                </p>

                {/* Mobile-only decorative underline (optional) */}
                <div className="w-12 h-1 bg-orange-500 rounded mt-4 md:hidden opacity-50"></div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;