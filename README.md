# Pomodoro Timer App

Приложение Pomodoro Timer, созданное с использованием Next.js 15, React 18 и TypeScript.

## 🚀 Деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions.

### Настройка GitHub Pages

1. Перейдите в настройки репозитория на GitHub:
   - Откройте репозиторий `https://github.com/Damirbek05/pomodoro`
   - Перейдите в **Settings** → **Pages**

2. В разделе **Source** выберите:
   - **Source**: `GitHub Actions`
   - Сохраните изменения

3. После первого пуша в ветку `main`, GitHub Actions автоматически:
   - Соберет проект
   - Задеплоит его на GitHub Pages

4. Ваш сайт будет доступен по адресу:
   ```
   https://damirbek05.github.io/pomodoro/
   ```

### Локальная разработка

```bash
# Установка зависимостей
npm install --legacy-peer-deps

# Запуск dev сервера
npm run dev

# Сборка для production
npm run build
```

### Структура проекта

- `/app` - Next.js App Router страницы
- `/components` - React компоненты
- `/lib` - Утилиты и хелперы
- `/public` - Статические файлы

## 📝 Примечания

- Проект использует статический экспорт (`output: 'export'` в `next.config.mjs`)
- Изображения настроены как `unoptimized: true` для совместимости со статическим хостингом
- Если репозиторий находится не в корне GitHub Pages, раскомментируйте `basePath` в `next.config.mjs`

