import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaChevronRight } from "react-icons/fa";

const Work = () => {
  const steps = [
    {
      id: 1,
      title: "Register on App",
      description: "Download the ChefKart App and create your account in seconds.",
      image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Register_on_app_4372ed1276.svg",
    },
    {
      id: 2,
      title: "Select Service",
      description: "Choose 'Chefit' or 'Cook for One Meal' from our services menu.",
      image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/select_your_service_7ba59dddd5.svg",
    },
    {
      id: 3,
      title: "Customize & Pay",
      description: "Tell us what you want to eat, how many people, and complete payment.",
      image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/make_payment_50309d2915.svg",
    },
    {
      id: 4,
      title: "Get a Cook",
      description: "A verified professional cook arrives at your doorstep in 60 mins.",
      image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Get_a_cook_b0e201f46a.svg",
    },
  ];

  return (
    <section className="bg-white py-24 font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
              Simple Process
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
              How it <span className="text-orange-600">Works</span>?
            </h1>
          </motion.div>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative">

          {steps.map((step, index) => (
            <React.Fragment key={step.id}>

              {/* Step Card */}
              <motion.div
                className="w-full lg:w-1/4 flex flex-col items-center text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Image Container */}
                <div className="relative mb-8 w-full max-w-[250px] aspect-square">
                  <div className="absolute inset-0 bg-orange-50 rounded-full scale-90 transform -rotate-6"></div>
                  <img
                    alt={step.title}
                    className="relative w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                    src={step.image}
                  />
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">
                    {step.id}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm px-2">
                  {step.description}
                </p>
              </motion.div>

              {/* Connector Arrow (Visible between items, hidden after last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center h-full pt-32 w-12 text-orange-300">

                  <FaChevronRight className="text-2xl animate-pulse" />
                </div>
              )}

              {/* Mobile Arrow (Vertical) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden w-full flex justify-center py-4 text-orange-300">

                  <FaArrowDown className="text-2xl animate-bounce" />
                </div>
              )}

            </React.Fragment>
          ))}

        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <button className="bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1">
            Book Your Cook Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default Work;