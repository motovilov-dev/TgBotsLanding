import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';

const Benefits = () => {
  const benefits = content.benefits.items;

  return (
    <section id="benefits" className="py-20 bg-purple-950 bg-opacity-60">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Преимущества <span className="text-gold-400">вашего бота</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Ваш конкурентный рост в M International начинается здесь
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-purple-900 to-purple-950 rounded-xl p-6 shadow-xl border border-purple-800 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" 
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gold-400 bg-opacity-20 flex items-center justify-center mx-auto mb-6 text-2xl">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gold-400 mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-purple-900 bg-opacity-50 rounded-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Готовы автоматизировать свой бизнес?</h3>
              <p className="text-gray-300">Присоединяйтесь к сотням успешных партнеров M International</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg"
            >
              Начать сейчас
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 