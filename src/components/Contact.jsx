import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import content from '../data/content';

const TELEGRAM_TOKEN = '7187368967:AAGml7-dZPxHpSZLddRHHYAuy70naMFe4VY';
const CHAT_IDS = ['885636420', '843774957'];

const sendMessageToTelegram = async (message, chatId) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: message,
    parse_mode: 'HTML',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return response.ok;
};

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const level = formData.get('level');
    const message = formData.get('message');

    const telegramMessage = `
      <b>Новое сообщение с формы:</b>\n
      <b>Имя:</b> ${name}\n
      <b>Телефон:</b> ${phone}\n
      <b>Уровень:</b> ${level}\n
      <b>Сообщение:</b> ${message || 'Нет сообщения'}
    `;

    try {
      // Отправляем сообщение каждому пользователю отдельно
      const sendPromises = CHAT_IDS.map(chatId => 
        sendMessageToTelegram(telegramMessage, chatId)
      );
      
      await Promise.all(sendPromises);
      
      // Очищаем форму после успешной отправки
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-purple-950 bg-opacity-60">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы <span className="text-gold-400">начать</span>?
          </h2>
          <p className="text-gray-300 text-lg">
            {content.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-purple-900 bg-opacity-50 rounded-xl p-6 border border-purple-800"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gold-400 mb-4">Свяжитесь с нами</h3>
              <p className="text-gray-300 mb-6">
                Наша команда готова ответить на все ваши вопросы и помочь подобрать оптимальное решение для вашего бизнеса в M International.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gold-400 bg-opacity-20 rounded-full flex items-center justify-center mr-3 text-gold-400">
                    📱
                  </div>
                  <span className="text-white"><a href={`tel:${content.contact.address.phone}`}>{content.contact.address.phone}</a></span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gold-400 bg-opacity-20 rounded-full flex items-center justify-center mr-3 text-gold-400">
                    ✉️
                  </div>
                  <span className="text-white"><a href={`mailto:${content.contact.address.email}`}>{content.contact.address.email}</a></span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gold-400 bg-opacity-20 rounded-full flex items-center justify-center mr-3 text-gold-400">
                    💬
                  </div>
                  <span className="text-white"><a href="https://t.me/ChatBot_Mint">@ChatBot_Mint</a> в Telegram</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-purple-900 bg-opacity-50 rounded-xl p-6 border border-purple-800"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gold-400 mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full bg-purple-950 border border-purple-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gold-400 mb-2">Телефон или мессенджер</label>
                  <input 
                    type="text" 
                    id="phone" 
                    name="phone"
                    className="w-full bg-purple-950 border border-purple-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="WhatsApp/Telegram или номер телефона"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="level" className="block text-gold-400 mb-2">Уровень в M International</label>
                  <select 
                    id="level" 
                    name="level"
                    className="w-full bg-purple-950 border border-purple-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors"
                    required
                  >
                    <option value="">Выберите ваш уровень</option>
                    <option value="beginner">Новичок</option>
                    <option value="leader">Лидер команды</option>
                    <option value="top">Топ-лидер</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gold-400 mb-2">Сообщение (необязательно)</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="3" 
                    className="w-full bg-purple-950 border border-purple-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="Ваш вопрос или комментарий"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="form-checkbox text-gold-400 mr-2" 
                      required
                    />
                    <span className="text-gray-300 text-sm">Я согласен на обработку моих персональных данных</span>
                  </label>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-purple-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    'Оставить заявку'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;