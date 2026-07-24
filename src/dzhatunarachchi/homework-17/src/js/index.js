import '../styles/main.css';
import '../styles/theme.scss';
import '../styles/utilities.less';
import 'normalize.css/normalize.css'; // приклад "зовнішнього" CSS з npm-пакета
import heroImage from '../images/hero.png';
import checkIcon from '../images/icon-check.svg';

// Імпортуємо лише одну функцію з lodash-es (ESM-збірка з підтримкою
// tree-shaking) — у фінальний бандл потрапить тільки debounce,
// а не вся бібліотека lodash. Це і є "оптимізоване використання
// зовнішньої бібліотеки" з вимог завдання.
import debounce from 'lodash-es/debounce';

// TypeScript-модуль — webpack компілює .ts через ts-loader
import { getWindowSize, formatSize } from '../ts/windowSize.ts';

function renderCard() {
  const app = document.getElementById('app');

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img class="card__hero" src="${heroImage}" alt="Ілюстрація">
    <h1 class="card__title">Webpack: активи під контролем</h1>
    <p class="card__text">
      Ця сторінка зібрана Webpack: шрифт Inter підключений локально,
      зображення оброблені асет-модулями, CSS винесено в окремий файл,
      а всі імена файлів захешовані для коректного кешування браузером.
    </p>
    <span class="theme-badge">SCSS + LESS підключені</span>
    <div class="utilities-divider utilities-row">
      <span>Розмір вікна (TypeScript)</span>
      <span id="widthValue">${formatSize(getWindowSize())}</span>
    </div>
    <span class="card__badge">
      <img src="${checkIcon}" alt="">
      Зібрано без помилок
    </span>
  `;

  app.appendChild(card);
}

function watchWindowSize() {
  const widthValue = document.getElementById('widthValue');

  // debounce з lodash-es — оновлюємо текст не частіше ніж раз на 200мс
  const handleResize = debounce(() => {
    widthValue.textContent = formatSize(getWindowSize());
  }, 200);

  window.addEventListener('resize', handleResize);
}

renderCard();
watchWindowSize();
