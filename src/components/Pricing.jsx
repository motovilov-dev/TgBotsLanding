import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';

const Pricing = () => {
  const { pricing } = content;

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-950 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {pricing.title} <span className="text-gold-400">для вашего бизнеса</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Основная цена */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full bg-gold-400 text-purple-900 text-center py-1 font-medium text-sm z-10">
              Начните сейчас
            </div>
            
            <div className="h-full flex flex-col bg-gradient-to-b from-purple-700 to-purple-900 p-8 pt-12">
              <h3 className="text-2xl font-bold text-white mb-2">Запуск бота</h3>
              <p className="text-gray-300 mb-6">{pricing.mainPrice.description}</p>
              
              <div className="mb-6">
                <p className="text-4xl font-bold text-white">{pricing.mainPrice.price}</p>
                <p className="text-gray-300 text-sm">разовый платеж</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {pricing.mainPrice.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 rounded-full font-bold transition-all duration-300 bg-gold-400 text-purple-900 hover:bg-gold-500 mt-auto text-center block"
              >
                {pricing.ctaButton}
              </motion.a>
            </div>
          </motion.div>

          {/* Балансовая система */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-full flex flex-col bg-gradient-to-b from-gold-400 to-gold-600 p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-2">{pricing.balanceSystem.title}</h3>
              <p className="text-purple-800 mb-6">{pricing.balanceSystem.description}</p>
              
              <div className="mb-6">
                <p className="text-4xl font-bold text-purple-900">{pricing.balanceSystem.averageAmount}</p>
                <p className="text-purple-800 text-sm">средний расход</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {pricing.balanceSystem.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="ml-3 text-purple-800">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 rounded-full font-bold transition-all duration-300 bg-purple-900 text-white hover:bg-purple-800 mt-auto"
              >
                Подробнее о системе
              </motion.a>
            </div>
          </motion.div>

          {/* Программа лояльности */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-full flex flex-col bg-gradient-to-b from-purple-600 to-indigo-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{pricing.loyaltyProgram.title}</h3>
              <p className="text-gray-300 mb-6">{pricing.loyaltyProgram.description}</p>
              
              <div className="mb-6">
                <p className="text-4xl font-bold text-white">+15%</p>
                <p className="text-gray-300 text-sm">максимальный бонус</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {pricing.loyaltyProgram.tiers.map((tier, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="ml-3 text-gray-300">{tier}</span>
                  </li>
                ))}
              </ul>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 rounded-full font-bold transition-all duration-300 bg-white bg-opacity-10 text-white hover:bg-opacity-20 mt-auto"
              >
                Узнать условия
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center bg-purple-900 bg-opacity-40 rounded-xl p-6 max-w-3xl mx-auto border border-purple-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-white text-lg font-bold mb-2">Нужна помощь с выбором?</h3>
          <p className="text-gray-300 mb-4">
            Свяжитесь с нами для получения консультации по настройке бота
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-purple-900 font-medium py-2 px-6 rounded-full transition-all duration-300"
          >
            Получить консультацию
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 