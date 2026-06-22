// Імпорт стилів (Webpack обробить їх через css-loader)
import './css/style.css';

// Оптимізований імпорт зовнішньої бібліотеки (використовуємо лише функцію join)
// Завдяки конфігурації usedExports (Tree Shaking) та lodash-es, інша частина бібліотеки не потрапить у збірку
import { join } from 'lodash-es';

// Імпорт зображення безпосередньо в JS (за потреби)
import logoImg from './assets/images/logo.png';

console.log('Webpack працює успішно!');

const textContainer = document.getElementById('optimised-text');
if (textContainer) {
  // Демонстрація роботи імпортованої функції з бібліотеки
  textContainer.innerText = join(['Текст', 'оброблено', 'за', 'допомогою', 'библиотеки', 'Lodash!'], ' ');
}
