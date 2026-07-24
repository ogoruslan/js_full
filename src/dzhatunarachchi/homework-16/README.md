# HW33 — Автоматизація веб-розробки з Gulp

## Структура

```
homework-16/
├── gulpfile.js
├── package.json
├── src/
│   ├── index.html
│   └── scss/
│       ├── main.scss        (точка входу)
│       ├── _variables.scss  (кольори, розміри, брейкпоінти)
│       ├── _base.scss       (скидання стилів, базова типографіка)
│       └── _card.scss       (компонент картки та кнопки)
└── dist/                    (згенеровано автоматично — не редагувати вручну)
    ├── index.html
    └── css/
        ├── main.css         (читабельний, з вендорними префіксами)
        └── main.min.css     (мінімізований)
```

## Що реалізовано

| Можливість | Інструмент |
|---|---|
| Компіляція SCSS → CSS | `gulp-sass` |
| Вендорні префікси | `gulp-autoprefixer` |
| Форматування коду | `gulp-cssbeautify` |
| Мінімізація стилів | `gulp-clean-css` |
| Live reload при зміні коду | `browser-sync` |

## Команди

```bash
npm install
npm start        # dev-режим: збірка + локальний сервер + live reload
npm run build      # одноразова продакшн-збірка в dist/, без сервера
```

Після `npm start` у терміналі з'явиться адреса виду `http://localhost:3000` —
саме її треба відкрити в браузері (не `file://...`), інакше live reload
не працюватиме.

## Налаштування кольорів

Усі кольори винесені в змінні у `src/scss/_variables.scss`:
```scss
$color-bg:      #141821;
$color-panel:   #1d2330;
$color-accent:  #ff8a3d;
$color-text:    #eef1f7;
$color-muted:   #8a93a6;
```
Зміна будь-якої з них під час роботи `npm start` одразу оновлює сторінку
в браузері завдяки live reload.
