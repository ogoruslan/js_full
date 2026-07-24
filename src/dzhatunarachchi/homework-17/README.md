


## Структура

```
webpack-assets/
├── webpack.config.js
├── babel.config.json
├── tsconfig.json
├── eslint.config.js
├── package.json
└── src/
    ├── index.html
    ├── js/index.js
    ├── ts/windowSize.ts
    ├── styles/
    │   ├── main.css
    │   ├── theme.scss
    │   └── utilities.less
    ├── images/
    │   ├── hero.png
    │   └── icon-check.svg
    └── fonts/
        ├── inter-regular.woff2
        └── inter-bold.woff2
```

## Команди

```bash
npm install
npm run dev       # webpack serve --mode development, hot reload на :8080
npm run build      # webpack --mode production, збірка в dist/
npm run analyze     # production-збірка + dist/report.html з візуалізацією бандла
npm run lint       # ESLint окремо, без запуску webpack
```

Усі команди реально перевірені під час підготовки проєкту: `build` і `analyze`
завершуються без помилок, `lint` коректно ловить проблемний код (перевірено
навмисним додаванням невикористаної змінної).

**Важливо:** `typescript` навмисно закріплено на версії `5.9.3` — новіші
пакети `typescript@7.x` є experimental-збіркою на новому Go-компіляторі й
поки що несумісні з `ts-loader`.
