import React from 'react';
import { Link } from 'react-router-dom'; // 1. Use Link for navigation
import { motion } from 'framer-motion';  // 2. Add smooth entry animations

const Hero = () => {
  return (
    // Semantic Tag: <section> is correct here
    <section className="text-gray-600 bg-[#e5e5e5] body-font relative overflow-hidden">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        {/* --- Text Content --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          {/* Badge: Used inline-block and padding instead of fixed w-24 h-6 for better text scaling */}
          <div className="inline-block py-1 px-3 mb-4 rounded-full bg-green-700 text-white text-xs font-semibold tracking-widest uppercase">
            Our Story
          </div>

          {/* Heading: Changed <p> to <h1> for SEO Importance */}
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-black leading-tight">
            Embracing the goal of <br className="hidden lg:inline-block" />
            <span className="text-green-800">Change & Empowerment</span>
          </h1>

          <p className="mb-8 leading-relaxed text-gray-700 text-xl sm:text-2xl max-w-lg">
            We aim to bridge the gap between delicious food and a healthy lifestyle while empowering our cooks.
          </p>

          <div className="flex justify-center">
            {/* Interactive Button with Hover State */}
            <Link
              to="/contact"
              className="inline-flex text-white bg-black border-0 py-3 px-8 focus:outline-none hover:bg-green-800 hover:scale-105 rounded-lg text-xl font-bold transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* --- Image Content --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          {/* Added shadow and slight hover effect to image */}
          <img
            className="object-cover object-center rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            alt="ChefKart cooking fresh food" // meaningful alt text
            src="image.png" // Ideally, import this at the top: import heroImg from './assets/image.png'
            loading="eager" // Load this immediately (LCP optimization)
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;