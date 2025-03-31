import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';
import seo from '../data/seo';

const Features = () => {
  const { title, subtitle, items, ctaButton } = content.features;

  return (
    <section 
      id="features" 
      className="py-20 relative overflow-hidden"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={seo.sections.features.title} />
      <meta itemProp="description" content={seo.sections.features.description} />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-400">
            {title}
          </h2>
          <p className="text-gray-300 text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-900 bg-opacity-50 rounded-xl p-6 border border-purple-800 hover:border-gold-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              itemScope 
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={index + 1} />
              <div className="flex items-start">
                <div className="bg-gold-400 bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold-400 mb-2" itemProp="name">{feature.title}</h3>
                  <p className="text-gray-300" itemProp="description">{feature.description}</p>
                </div>
              </div>
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
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-purple-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            {ctaButton}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 