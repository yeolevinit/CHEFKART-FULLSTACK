import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ2 = () => {
  // Using 'null' means all are closed initially.
  // Change to '0' if you want the first one open by default.
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    // If clicking the already open item, close it (set to null), otherwise open the clicked one.
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "ChefKart से कैसे जुड़ें?",
      answer:
        "ChefKart से जुड़ने के लिए ऊपर दिए गए ‘ChefKart से जुड़ें’ का बटन दबा कर फॉर्म भरें या हमें 9871231115 पर कॉल करें।.",
    },
    {
      question: "ChefKart से कौन जुड़ सकते हैं?",
      answer:
        "ChefKart से हर वह कुक जुड़ सकते हैं जो खाना पकाने की प्रतिभा रखते हैं और 18 साल से ज़्यादा उम्र के हैं। .",
    },
    {
      question: "ChefKart से जुड़ने के लिए किन चीजों की आवश्यकता है?",
      answer:
        "ChefKart से जुड़ने के लिए आपके पास आधार कार्ड, स्मार्ट फ़ोन, बैंक अकाउंट और पासपोर्ट फ़ोटो होना ज़रूरी है।..",
    },
  ];

  // Framer Motion variants for smooth height animation
  const accordionVariants = {
    open: { opacity: 1, height: "auto", marginTop: 16 },
    collapsed: { opacity: 0, height: 0, marginTop: 0 },
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-5 max-w-4xl">

        {/* Header with decorative underline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            आपके प्रश्न <span className="text-orange-500">(FAQ)</span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 rounded mx-auto mt-4"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-300 ${isOpen ? 'border-orange-500 shadow-md' : 'border-gray-200 shadow-sm hover:border-orange-300'}`}
              >
                {/* Question Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </span>
                  {/* Animated Icon */}
                  <FaChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Animated Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={accordionVariants}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ2;