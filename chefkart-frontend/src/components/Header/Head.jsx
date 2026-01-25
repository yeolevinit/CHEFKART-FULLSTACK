import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiBowlHot } from "react-icons/bi";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gradient-to-r from-rose-50 to-orange-50 border-b border-rose-100 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">

            {/* Content Wrapper (Centered) */}
            <div className="flex-1 flex items-center justify-center gap-2 text-center md:text-left">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              >
                <BiBowlHot className="text-rose-500 text-2xl md:text-3xl" />
              </motion.div>

              <p className="text-gray-800 font-medium text-sm md:text-base">
                <span className="font-bold text-rose-600">New!</span> One-time cooks now available in
                <span className="font-bold text-gray-900 mx-1">Pune, Delhi & Bangalore!</span>
              </p>

              {/* CTA Link (Hidden on very small screens if space is tight) */}
              <Link
                to="/one-time-cook"
                className="hidden md:flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 bg-white px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                Book Now <FaArrowRight size={10} />
              </Link>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-rose-500 transition-colors p-1"
              aria-label="Close notification"
            >
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBanner;