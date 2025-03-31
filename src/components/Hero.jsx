import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';
import seo from '../data/seo';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = content.hero.typingText;
  
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText('');
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping, fullText]);

  const { title, subtitle, description, primaryButton, secondaryButton, chatDemo } = content.hero;

  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden" itemScope itemType="https://schema.org/WebPageElement">
      <meta itemProp="name" content={seo.sections.home.title} />
      
      {/* Фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-gold-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            itemScope
            itemType="https://schema.org/WebPageElement"
            itemProp="mainContentOfPage"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" itemProp="headline">
              {title} <br></br><span className="text-gold-400">M-International</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              {subtitle} <span className="text-gold-400 inline-block min-h-[40px]">{text}<span className="animate-pulse">|</span></span>
            </h2>
            <p className="text-gray-300 text-lg mb-8" itemProp="description">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg"
                itemProp="potentialAction"
                itemScope 
                itemType="https://schema.org/Action"
              >
                <meta itemProp="name" content="Получить чат-бота" />
                <meta itemProp="target" content="#contact" />
                {primaryButton}
              </motion.a>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-purple-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
                itemProp="potentialAction" 
                itemScope 
                itemType="https://schema.org/Action"
              >
                <meta itemProp="name" content="Просмотреть стоимость M-Bot" />
                <meta itemProp="target" content="#pricing" />
                {secondaryButton}
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-purple-900 bg-opacity-50 border border-purple-800 rounded-2xl p-2 shadow-2xl" 
                   itemScope itemType="https://schema.org/ImageObject"
                   itemProp="image">
                <meta itemProp="name" content="Интерфейс чат-бота для M International" />
                <meta itemProp="description" content="Демонстрация интерфейса чат-бота M-Bot для партнеров M International" />
                
                <div className="bg-purple-950 rounded-xl overflow-hidden">
                  <div className="bg-purple-900 rounded-t-xl p-4 flex items-center border-b border-purple-800">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-grow text-center">
                      <span className="text-white font-medium">{chatDemo.title}</span>
                    </div>
                  </div>
                  <div className="p-6 text-white space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-purple-800 rounded-lg p-3 max-w-[80%]">
                        {chatDemo.greeting}
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gold-400 text-purple-900 rounded-lg p-3 max-w-[80%]">
                        {chatDemo.userRequest}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-purple-800 rounded-lg p-3 max-w-[80%]">
                        {chatDemo.botResponse[0]}
                        <ul className="list-disc pl-5 mt-2">
                          {chatDemo.botResponse.slice(1, -1).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        {chatDemo.botResponse[chatDemo.botResponse.length - 1]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg px-4 py-3"
                animate={{ 
                  y: [0, -5, 0],
                  x: [0, 5, 0],
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-white font-medium text-sm">
                    {chatDemo.statsText}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 