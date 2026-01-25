import React from 'react';
import { motion } from 'framer-motion';

// Sample data array
const cardData = [
  {
    id: 1,
    title: "Healthy & Hygienic Food",
    description: "Healthy food cooked in your kitchen with utmost hygiene protocols followed.",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/healthy_hygienic_a9878d9090.svg",
  },
  {
    id: 2,
    title: "Tailored to Your Taste",
    description: "Food prepared exactly according to your specific taste, spice levels, and preferences.",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/tailored_to_taste_33cb681b66.svg",
  },
  {
    id: 3,
    title: "Trained & Verified Cooks",
    description: "Professionally trained & background verified cooks ensuring 100% safety and quality.",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/professional_cooks_ec13508556.svg",
  },
  {
    id: 4,
    title: "Quick Service",
    description: "Assured cook arrival within 60 minutes of booking. Fast and reliable.",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/timely_service_3a6f9d9ebe.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ShowCard2 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-0 py-10 mx-auto">

        {/* Responsive grid layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group flex items-start p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300"
            >
              {/* Icon Section */}
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-2xl bg-orange-50 text-orange-500 mb-0 flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="flex-grow ml-6">
                <h2 className="text-gray-900 text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                  {card.title}
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShowCard2;