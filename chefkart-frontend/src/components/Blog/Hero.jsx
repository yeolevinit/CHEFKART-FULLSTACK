import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {

    // Function to smooth scroll to the blog list
    const scrollToBlogs = () => {
        window.scrollTo({
            top: window.innerHeight * 0.8, // Scrolls down 80% of the viewport
            behavior: "smooth",
        });
    };

    return (
        <section className="text-gray-600 body-font bg-white overflow-hidden">
            <div className="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col items-center">

                {/* --- Left Content (Text) --- */}
                <motion.div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-500 text-xs font-bold tracking-widest mb-4 uppercase">
                        Featured Article
                    </span>

                    <h1 className="title-font sm:text-6xl text-4xl mb-6 font-extrabold text-gray-900 leading-tight">
                        How to find the <span className="text-orange-500">best cook</span> <br className="hidden lg:inline-block" />
                        for your home
                    </h1>

                    <p className="mb-8 leading-relaxed text-gray-600 text-lg md:text-xl max-w-lg">
                        Finding a cook for home can be challenging, especially if you’re staying away from your hometown. Here is the ultimate guide to making the right choice.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4">
                        <button
                            onClick={scrollToBlogs}
                            className="group inline-flex items-center text-white bg-black border-0 py-3 px-8 focus:outline-none hover:bg-gray-800 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105"
                        >
                            Read More
                            <FaArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={14} />
                        </button>
                    </div>
                </motion.div>

                {/* --- Right Content (Video) --- */}
                <motion.div
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-full relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Decorative Blob Background */}
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full rounded-2xl bg-orange-100 -z-10 transform translate-x-4 translate-y-4"></div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        {/* Overlay Gradient for better text readability if you overlay text later */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                        <video
                            className="object-cover object-center w-full h-full"
                            src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/website_cook_loop_4e9912d5f5.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline // Important for iOS to play without going fullscreen
                        // Removed 'controls' for a cleaner look
                        ></video>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;