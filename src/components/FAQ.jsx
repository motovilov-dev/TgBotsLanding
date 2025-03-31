import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '../data/content';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = content.faq.items

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Часто задаваемые <span className="text-gold-400">вопросы</span>
          </h2>
          <p className="text-gray-300 text-lg">
            {content.faq.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-purple-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-purple-900 bg-opacity-70 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-gold-400 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-purple-900 bg-opacity-30"
                  >
                    <div className="p-5 border-t border-purple-800">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-300 mb-6">
            Не нашли ответ на свой вопрос? Свяжитесь с нами напрямую
          </p>
          <motion.a
            href="https://t.me/ChatBot_Mint"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-purple-900 font-medium py-2 px-6 rounded-full transition-all duration-300"
          >
            Задать вопрос
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 