import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';

const HowItWorks = () => {
  const features = content.howItWorks.steps;

  return (
    <section id="how-it-works" className="py-20 bg-purple-950 bg-opacity-60">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Как работает <span className="text-gold-400">M-Bot</span>?
          </h2>
          <p className="text-gray-300 text-lg">
            {content.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-900 bg-opacity-70 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] border border-purple-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-gold-400 bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gold-400 mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            className="inline-block p-1 border border-gold-400 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-purple-800 bg-opacity-50 rounded-full px-8 py-4"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-white text-lg">
                Бот обрабатывает <span className="text-gold-400 font-bold">до 500 запросов</span> одновременно!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 