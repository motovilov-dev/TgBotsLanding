import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-purple-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center mr-3 text-purple-900 font-bold text-xl">M</div>
              <span className="text-white text-xl font-bold">M-Bot</span>
            </div>
            <p className="text-gray-400 mb-6">
              Автоматизация бизнес-процессов для партнеров M International через современных чат-ботов
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center text-white hover:bg-gold-400 hover:text-purple-900 transition-colors">
                <span role="img" aria-label="telegram">📱</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center text-white hover:bg-gold-400 hover:text-purple-900 transition-colors">
                <span role="img" aria-label="whatsapp">💬</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center text-white hover:bg-gold-400 hover:text-purple-900 transition-colors">
                <span role="img" aria-label="instagram">📷</span>
              </a>
            </div>
          </div>
          
          {/* <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Бот для новичков</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Бот для лидеров команд</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Бот для топ-менеджеров</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Индивидуальная настройка</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Блог</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Партнерам</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">📱</span>
                <span className="text-gray-400">+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">✉️</span>
                <span className="text-gray-400">info@m-international-bot.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">🕒</span>
                <span className="text-gray-400">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div> */}
        </div>
        
        <div className="pt-8 border-t border-purple-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© 2025 M-Bot. Все права защищены.</p>
          <div className="flex space-x-6 justify-center">
            <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 