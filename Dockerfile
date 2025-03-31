# Используем Node.js как базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем глобально serve для раздачи статики
RUN npm install -g serve

# Открываем порт 3453
EXPOSE 3453

# Запускаем приложение
CMD ["serve", "-s", "build", "-l", "3453"]
