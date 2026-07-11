const API_KEY = 'd1001fd8';
const API_URL = 'https://www.omdbapi.com/';
const DEBOUNCE_DELAY = 400; 

const searchInput   = document.getElementById('searchInput');
const searchHint    = document.getElementById('searchHint');
const clearBtn      = document.getElementById('clearBtn');
const moviesGrid    = document.getElementById('moviesGrid');
const stateEmpty    = document.getElementById('stateEmpty');
const stateLoading  = document.getElementById('stateLoading');
const stateError    = document.getElementById('stateError');
const stateNotFound = document.getElementById('stateNotFound');
const errorText     = document.getElementById('errorText');

let debounceTimer = null;
let lastQuery     = '';
let controller    = null;

function showState(name) {
  stateEmpty.classList.add('hidden');
  stateLoading.classList.add('hidden');
  stateError.classList.add('hidden');
  stateNotFound.classList.add('hidden');
  moviesGrid.classList.add('hidden');

  if (name === 'empty')    stateEmpty.classList.remove('hidden');
  if (name === 'loading')  stateLoading.classList.remove('hidden');
  if (name === 'error')    stateError.classList.remove('hidden');
  if (name === 'notFound') stateNotFound.classList.remove('hidden');
  if (name === 'results')  moviesGrid.classList.remove('hidden');
}

function getTypeLabel(type) {
  const map = { movie: 'Фільм', series: 'Серіал', episode: 'Епізод' };
  return map[type] || type;
}

function createCard(movie) {
  const card = document.createElement('article');
  card.className = 'card';

  const hasPoster = movie.Poster && movie.Poster !== 'N/A';
  const typeClass = `card__type--${movie.Type}`;
  const typeLabel = getTypeLabel(movie.Type);

  card.innerHTML = `
    <div class="card__poster-wrap">
      ${
        hasPoster
          ? `<img class="card__poster" src="${movie.Poster}" alt="Постер ${movie.Title}" loading="lazy" />`
          : `<div class="card__poster--placeholder">🎬</div>`
      }
    </div>
    <div class="card__body">
      <h3 class="card__title" title="${movie.Title}">${movie.Title}</h3>
      <div class="card__meta">
        <span class="card__year">${movie.Year}</span>
        <span class="card__type ${typeClass}">${typeLabel}</span>
      </div>
    </div>
  `;

  return card;
}

function renderMovies(movies) {
  moviesGrid.innerHTML = '';
  const fragment = document.createDocumentFragment();
  movies.forEach(movie => fragment.appendChild(createCard(movie)));
  moviesGrid.appendChild(fragment);
  showState('results');
}

async function fetchMovies(query) {
  if (controller) controller.abort();
  controller = new AbortController();

  showState('loading');

  try {
    const url = `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`;
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`HTTP помилка: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === 'True') {
      renderMovies(data.Search);
    } else if (data.Error === 'Movie not found!') {
      showState('notFound');
    } else if (data.Error === 'Too many results.') {
      showState('notFound');
    } else {
      throw new Error(data.Error || 'Невідома помилка API');
    }

  } catch (err) {
    if (err.name === 'AbortError') return;

    errorText.textContent = err.message.includes('Failed to fetch')
      ? 'Немає з\'єднання з інтернетом'
      : err.message;

    showState('error');
    console.error('Помилка запиту:', err);
  }
}

function onInput() {
  const query = searchInput.value.trim();

  clearBtn.classList.toggle('visible', query.length > 0);

  if (/[а-яёА-ЯЁіїєІЇЄ]/.test(query)) {
    searchHint.textContent = '⚠️ Назву фільму вводьте англійською — наприклад: Inception, The Dark Knight';
    searchHint.classList.add('visible', 'hint--warn');
    clearTimeout(debounceTimer);
    if (controller) controller.abort();
    showState('empty');
    return;
  } else {
    searchHint.textContent = '🌐 Вводьте назву англійською, мін. 3 символи — наприклад: Inception, The Dark Knight';
    searchHint.classList.remove('hint--warn');
  }

  if (!query || query.length < 3) {
    clearTimeout(debounceTimer);
    if (controller) controller.abort();
    lastQuery = '';
    showState('empty');
    return;
  }

  if (query === lastQuery) return;

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    lastQuery = query;
    fetchMovies(query);
  }, DEBOUNCE_DELAY);
}

function onClear() {
  searchInput.value = '';
  searchInput.focus();
  clearBtn.classList.remove('visible');
  clearTimeout(debounceTimer);
  if (controller) controller.abort();
  lastQuery = '';
  showState('empty');
}

searchInput.addEventListener('input', onInput);
clearBtn.addEventListener('click', onClear);

showState('empty');