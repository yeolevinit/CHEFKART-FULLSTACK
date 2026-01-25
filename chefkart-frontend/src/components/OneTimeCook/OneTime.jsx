import React from 'react';
import { motion } from 'framer-motion';

// --- Component Imports ---
// Make sure these paths match your actual project structure
import Carousel2 from './Carousel2';       // Hero Section
import BannerDow2 from './BannerDow2';     // Intro Section
import StatsSections from './StatsSection'; // Stats
import Work from './Work';                 // How it Works
import Heart from './Heart';               // Customer Story Video
import Testimonials from './Testimonials'; // Reviews Slider
import Lower3 from './Lower3';             // "No time to cook" Section
import Lower5 from './Lower5';             // "Why order online" Section
import FaqOne from './FaqOne';             // FAQ
import FloatingBanner from './FloatingBanner'; // Sticky Bottom CTA

const OneTime = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white w-full overflow-x-hidden relative"
    >

      {/* 1. Hero Section */}
      <Carousel2 />

      {/* 2. Introduction */}
      <BannerDow2 />

      {/* 3. Key Metrics */}
      <StatsSections />

      {/* 4. Process (How it works) */}
      <Work />

      {/* 5. Customer Spotlight (Video) */}
      <Heart />

      {/* 6. Social Proof (Reviews) */}
      <Testimonials />

      {/* 7. Speed/Urgency Section */}
      <Lower3 />

      {/* 8. Value Proposition */}
      <Lower5 />

      {/* 9. FAQ */}
      <FaqOne />

      {/* 10. Sticky Bottom CTA */}
      <FloatingBanner />

    </motion.main>
  );
}

export default OneTime;