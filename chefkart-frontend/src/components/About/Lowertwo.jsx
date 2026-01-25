import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="text-gray-600 bg-gray-50 body-font overflow-hidden">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        {/* --- Text Section (Animates in from Left) --- */}
        <motion.div
          className="lg:flex-grow md:w-1/2 w-full md:pr-16 flex flex-col md:items-start items-center md:text-left text-center mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Eyebrow Label */}
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">
            Our Mission
          </h2>

          {/* Main Headline */}
          <h3 className="sm:text-4xl text-3xl mb-6 font-extrabold text-gray-900 leading-tight">
            Impacting the cooking industry
          </h3>

          <p className="mb-8 leading-relaxed text-lg text-gray-600">
            We are on a mission to manage millions of kitchens while empowering
            the cooking community to contribute significantly to the economy.
          </p>

          {/* Design Accent Line */}
          <div className="h-1 w-20 bg-red-500 rounded"></div>
        </motion.div>

        {/* --- Image Section (Animates in from Right) --- */}
        <motion.div
          className="lg:max-w-lg md:w-1/2 w-full relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Decorative Background Blob */}
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full rounded-xl bg-red-100 -z-10 transform translate-x-2 translate-y-2"></div>

          <img
            className="object-cover object-center rounded-xl shadow-lg w-full h-auto"
            alt="ChefKart Mission - Empowering cooks"
            src="https://thechefkart.com/_next/image?url=%2FiStock-1223383996%201.png&w=1920&q=75"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;