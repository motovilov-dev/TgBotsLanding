import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';

const ForWhom = () => {
  const userTypes = content.forWhom.categories;

  return (
    <section id="for-whom" className="py-20 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-400 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Для кого создан <span className="text-gold-400">М-бот</span>?
          </h2>
          <p className="text-gray-300 text-lg">
            {content.forWhom.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-b from-purple-900 to-purple-950 rounded-2xl p-8 shadow-xl border border-purple-800 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gold-400 to-gold-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
              
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="bg-gold-400 text-purple-900 text-xl font-bold px-3 py-1 rounded-full">
                    {user.title}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 text-center">{user.name}</h3>
                <p className="text-gold-300 text-sm mb-4 text-center">{user.status}</p>
                
                <div className="bg-purple-800 bg-opacity-50 rounded-xl p-4 mb-6">
                  <p className="text-gray-300 text-center italic">"{user.description}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-white text-xl">
            <span className="text-gold-400 font-bold">97% партнеров</span> отмечают рост продуктивности после подключения бота
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhom; 