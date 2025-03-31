// SEO данные для всего сайта
const seo = {
  // Основные метатеги
  main: {
    title: "M-Bot — чат-бот для партнеров M International | Автоматизируйте работу с клиентами",
    description: "Автоматизируйте 80% рутины в M International с помощью чат-бота. Экономьте время на консультациях клиентов и увеличивайте продажи. Начните использовать бота уже сегодня!",
    keywords: "M International, чат-бот, автоматизация MLM, бот для бизнеса, автоматизация продаж, M International бот, млм автоматизация",
    author: "M-Bot",
    themeColor: "#130426"
  },
  
  // Open Graph / Facebook метатеги
  openGraph: {
    type: "website",
    url: "https://m-international-bot.ru/",
    title: "M-Bot — чат-бот для партнеров M International",
    description: "Автоматизируйте 80% рутины в M International. Ваш личный ассистент 24/7 для обработки заказов, консультаций и обучения",
    image: "%PUBLIC_URL%/og-image.jpg"
  },
  
  // Twitter метатеги
  twitter: {
    card: "summary_large_image",
    url: "https://m-international-bot.ru/",
    title: "M-Bot — чат-бот для партнеров M International",
    description: "Автоматизируйте 80% рутины в M International. Ваш личный ассистент 24/7",
    image: "%PUBLIC_URL%/og-image.jpg"
  },
  
  // Schema.org разметка
  schemaOrg: {
    application: {
      context: "https://schema.org",
      type: "SoftwareApplication",
      name: "M-Bot для партнеров M International",
      applicationCategory: "BusinessApplication",
      price: "5000",
      priceCurrency: "RUB",
      ratingValue: "4.8",
      ratingCount: "127",
      description: "Автоматизация бизнес-процессов для партнеров M International через чат-ботов."
    },
    // Можно добавить другие схемы по необходимости
    organization: {
      context: "https://schema.org",
      type: "Organization",
      name: "M-Bot",
      url: "https://m-international-bot.ru",
      logo: "https://m-international-bot.ru/logo.png"
    }
  },
  
  // Настройки для каждой секции сайта
  sections: {
    home: {
      title: "Главная секция - M-Bot для партнеров M International",
      description: "Автоматизируйте бизнес в M International с помощью чат-бота. Экономьте время и увеличивайте продажи."
    },
    howItWorks: {
      title: "Как работает M-Bot - чат-бот для M International",
      description: "Простые шаги к автоматизации вашего бизнеса в M International с помощью чат-бота."
    },
    features: {
      title: "Функции M-Bot для партнеров M International",
      description: "Узнайте все возможности M-Bot для автоматизации вашего бизнеса в M International."
    },
    benefits: {
      title: "Преимущества бота для M International",
      description: "Почему партнеры M International выбирают M-Bot для автоматизации бизнеса."
    },
    pricing: {
      title: "Тарифы и цены M-Bot для M International",
      description: "Прозрачное ценообразование и выгодные условия использования бота для партнеров M International."
    }
  }
};

export default seo; 