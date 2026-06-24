const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");

const movieModal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

async function searchMovies(movieName) {
  if (movieName.length < 3) {
    results.innerHTML = "";
    return;
  }

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=68f0488f&s=${movieName}`,
  );

  const data = await response.json();

  results.innerHTML = "";

  if (data.Response === "False") {
    results.innerHTML = `
      <h2 style="color:red">
        Фільм не знайдено
      </h2>
    `;
    return;
  }

  data.Search.forEach(function (movie) {
    const movieCard = `
      <div class="movie-card" data-id="${movie.imdbID}">
        <img
          src="${movie.Poster}"
          alt="${movie.Title}"
          onerror="this.src='https://via.placeholder.com/220x320?text=No+Image'"
        >

        <h3>${movie.Title}</h3>

        <p>${movie.Year}</p>
      </div>
    `;

    results.innerHTML += movieCard;
  });
}

async function getMovieDetails(movieId) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=68f0488f&i=${movieId}`,
  );

  const data = await response.json();

  modalBody.innerHTML = `
    <img src="${data.Poster}" alt="${data.Title}" width="250">

    <h2>${data.Title}</h2>

    <p><strong>Year:</strong> ${data.Year}</p>

    <p><strong>Genre:</strong> ${data.Genre}</p>

    <p><strong>IMDb:</strong> ⭐ ${data.imdbRating}</p>

    <p><strong>Actors:</strong> ${data.Actors}</p>

    <p>${data.Plot}</p>
  `;

  movieModal.style.display = "flex";
}

searchInput.addEventListener("input", function () {
  searchMovies(searchInput.value);
});

searchButton.addEventListener("click", function () {
  searchMovies(searchInput.value);
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchMovies(searchInput.value);
  }
});

results.addEventListener("click", function (event) {
  const card = event.target.closest(".movie-card");

  if (!card) {
    return;
  }

  const movieId = card.dataset.id;

  getMovieDetails(movieId);
});

closeModal.addEventListener("click", function () {
  movieModal.style.display = "none";
});

movieModal.addEventListener("click", function (event) {
  if (event.target === movieModal) {
    movieModal.style.display = "none";
  }
});
