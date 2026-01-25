import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="text-gray-600 bg-white body-font overflow-hidden">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        {/* --- Image Section (Animates in from Left) --- */}
        <motion.div
          className="lg:max-w-lg md:w-1/2 w-full mb-10 md:mb-0 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }} // Animates only once when 30% visible
        >
          {/* Decorative shadow/border element */}
          <div className="absolute inset-0 bg-red-100 rounded-xl transform translate-x-3 translate-y-3 -z-10"></div>

          <img
            className="object-cover object-center rounded-xl shadow-lg w-full h-auto"
            alt="ChefKart Vision - Fresh home cooked food"
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FAbout_us_Banner_02_413026c0c6.webp&w=1920&q=75"
            loading="lazy"
          />
        </motion.div>

        {/* --- Text Section (Animates in from Right) --- */}
        <motion.div
          className="lg:flex-grow md:w-1/2 w-full lg:pl-24 md:pl-16 flex flex-col md:items-start items-center text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">
            Our Vision
          </h2>

          <h3 className="sm:text-4xl text-3xl mb-6 font-extrabold text-gray-900 leading-tight">
            One kitchen at a time
          </h3>

          <p className="mb-8 leading-relaxed text-lg text-gray-600">
            Our vision is to ensure that every household in the country can
            enjoy quality food prepared by our cooks in their own kitchens.
          </p>

          {/* Minimalist Design Element */}
          <div className="h-1 w-20 bg-red-500 rounded"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionSection;