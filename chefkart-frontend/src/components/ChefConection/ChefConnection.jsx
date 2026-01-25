import React from 'react';
import { motion } from 'framer-motion';

// Component Imports
import Carousel from './Crouse';
import StatsSection from './Stat';
import SimpleSlider from './Slider';
import Cater from './Cater';
import Hear from './Hearit';
import Testimonial from './Testimonial';
import Lowe1 from './Lowe1';
import Lower from './Lower';
import FAQ2 from './Faq2';

const ChefConnection = () => {
  return (
    // 1. Semantic <main> tag for SEO
    // 2. Framer Motion for a smooth "Fade In" effect on page load
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      {/* Hero / Carousel Section */}
      <Carousel />

      {/* Statistics Wrapper */}
      <StatsSection />

      {/* Image Slider */}
      <SimpleSlider />

      {/* "Why Join" Section */}
      <Cater />

      {/* Audio/Media Section */}
      <Hear />

      {/* User Reviews */}
      <Testimonial />

      {/* Content Sections (likely Call-to-Actions) */}
      <Lowe1 />
      <Lower />

      {/* Frequently Asked Questions */}
      <section className="bg-gray-50">
        <FAQ2 />
      </section>

    </motion.main>
  );
};

export default ChefConnection;