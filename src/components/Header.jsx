import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = content.header.menuItems

  const smoothScroll = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-purple-950 bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
      itemScope 
      itemType="https://schema.org/WPHeader"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.a 
            href="/" 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            itemProp="url"
          >
            <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center mr-3 text-purple-900 font-bold text-xl">
              M
            </div>
            <span className="text-white text-xl font-bold" itemProp="name">M-Bot</span>
          </motion.a>
          
          {/* Мобильное меню */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-8" itemScope itemType="https://schema.org/SiteNavigationElement">
            <a href="#home" className="text-white hover:text-gold-400 transition-colors" itemProp="url">
              <span itemProp="name">Главная</span>
            </a>
            <a href="#how-it-works" className="text-white hover:text-gold-400 transition-colors" itemProp="url">
              <span itemProp="name">Как это работает</span>
            </a>
            <a href="#for-whom" className="text-white hover:text-gold-400 transition-colors" itemProp="url">
              <span itemProp="name">Для кого</span>
            </a>
            <a href="#features" className="text-white hover:text-gold-400 transition-colors" itemProp="url">
              <span itemProp="name">Возможности</span>
            </a>
            <a href="#pricing" className="text-white hover:text-gold-400 transition-colors" itemProp="url">
              <span itemProp="name">Стоимость</span>
            </a>
            <a href="#contact" className="text-white hover:text-gold-400 transition-colors" itemProp="url">
              <span itemProp="name">Контакты</span>
            </a>
          </nav>
          
          <a 
            href="#contact" 
            className="hidden md:block bg-gold-400 hover:bg-gold-500 text-purple-900 font-bold py-2 px-6 rounded-full transition-colors"
            aria-label="Попробовать демо-версию бота"
          >
            Попробовать
          </a>
        </div>
      </div>
      
      {/* Мобильное меню (выпадающее) */}
      <motion.div 
        className={`md:hidden absolute w-full bg-purple-950 shadow-xl ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-gold-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Главная
            </a>
            <a href="#how-it-works" className="text-white hover:text-gold-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Как это работает
            </a>
            <a href="#for-whom" className="text-white hover:text-gold-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Для кого
            </a>
            <a href="#features" className="text-white hover:text-gold-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Возможности
            </a>
            <a href="#pricing" className="text-white hover:text-gold-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Стоимость
            </a>
            <a href="#contact" className="text-white hover:text-gold-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Контакты
            </a>
          </nav>
          
          <a 
            href="#contact"
            className="block mt-6 bg-gold-400 hover:bg-gold-500 text-purple-900 text-center font-bold py-3 px-6 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Попробовать
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header; 