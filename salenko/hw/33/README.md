# Gulp Automation — ДЗ 33.1

Веб-проект із Gulp-пайплайном для автоматизації розробки.

## 🚀 Можливості

| Задача | Плагін | Результат |
|--------|--------|-----------|
| Компіляція SCSS | `gulp-sass` | `dist/css/style.css` |
| Live Reload | `browser-sync` | авто-оновлення браузера |
| Вендорні префікси | `gulp-autoprefixer` | `-webkit-`, `-ms-`, `-moz-` |
| Форматування CSS | `gulp-cssbeautify` | читабельний `style.css` |
| Мінімізація CSS | `gulp-clean-css` | `dist/css/style.min.css` |

## 📁 Структура

```
gulp-project/
├── src/
│   ├── scss/
│   │   ├── _variables.scss   # змінні (кольори, шрифти, відступи)
│   │   ├── _mixins.scss      # міксини (flex, respond-to, card)
│   │   └── main.scss         # головний файл стилів
│   ├── js/
│   │   └── main.js
│   └── index.html
├── dist/                     # збірка (генерується автоматично)
│   ├── css/
│   │   ├── style.css         # відформатований CSS з префіксами
│   │   └── style.min.css     # мінімізований CSS для продакшену
│   ├── js/
│   └── index.html
├── gulpfile.js
└── package.json
```

## ⚙️ Встановлення та запуск

### 1. Клонувати репозиторій

```bash
git clone https://github.com/<your-username>/gulp-project.git
cd gulp-project
```

### 2. Встановити залежності

```bash
npm install
```

### 3. Dev-режим (збірка + BrowserSync)

```bash
npm start
# або: npx gulp
```

Відкриє `http://localhost:3000` і стежитиме за змінами у `src/`.

### 4. Одноразова збірка

```bash
npm run build
# або: npx gulp build
```

## 🔧 Gulp-задачі

```js
// Компіляція SCSS → CSS
export function styles() { ... }

// Копіювання HTML до dist/
export function html() { ... }

// Копіювання JS до dist/
export function scripts() { ... }

// Dev-сервер + watch
export function serve() { ... }

// Build: parallel(styles, html, scripts)
export const build = gulp.series(gulp.parallel(styles, html, scripts));

// Default: build → serve
export default gulp.series(build, serve);
```

## 🛠 Залежності

- Node.js >= 18
- Gulp 5
- gulp-sass (Dart Sass)
- gulp-autoprefixer
- gulp-cssbeautify
- gulp-clean-css
- browser-sync
- gulp-rename

## 🌐 GitHub Pages

Сторінка доступна за адресою: `https://<your-username>.github.io/gulp-project/`

> GitHub Pages роздає вміст папки `dist/` через налаштування репозиторію → Settings → Pages → Source: `dist` branch або `/docs`.
