import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';

const Testimonials = () => {
  const testimonials = content.testimonials.items

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-950 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Что говорят наши <span className="text-gold-400">клиенты</span>
          </h2>
          <p className="text-gray-300 text-lg">
            {content.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-purple-900 bg-opacity-40 rounded-xl p-6 border border-purple-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 flex-grow">
                  <svg className="w-8 h-8 text-gold-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 italic">{testimonial.text}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gold-400 bg-opacity-20 flex items-center justify-center mr-4 text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-gold-400 text-sm">{testimonial.position}</p>
                  </div>
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
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold-400 font-bold text-lg mb-6">
            98% наших клиентов рекомендуют бота своим партнерам
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg"
          >
            Стать следующим успешным клиентом
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 