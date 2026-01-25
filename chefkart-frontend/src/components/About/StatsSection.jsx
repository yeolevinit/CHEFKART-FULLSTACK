import React from "react";
import { motion } from "framer-motion";

// 1. Configuration: Easy to update numbers without digging into HTML
const STATS = [
  { id: 1, value: "3M+", label: "Meals cooked with love" },
  { id: 2, value: "4500+", label: "Verified & trained cooks" },
  { id: 3, value: "10K+", label: "Households served" },
];

const StatsSection = () => {
  return (
    <section className="bg-green-900 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">

          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggers the animation (0s, 0.2s, 0.4s)
              viewport={{ once: true }} // Animates only once
              className="flex flex-col items-center justify-center p-4"
            >
              {/* The Number */}
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2 text-green-100">
                {stat.value}
              </h2>

              {/* The Label */}
              <p className="text-lg md:text-xl font-medium text-green-200 opacity-90">
                {stat.label}
              </p>

              {/* Optional: Tiny decorative line under the text */}
              <div className="w-12 h-1 bg-green-500 rounded mt-4 opacity-50"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;