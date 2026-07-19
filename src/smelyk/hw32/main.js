async function makeGetRequest() {
  let segment = document.getElementById('search-input').value
  let response = await getData(segment)
  if (response.Error) {
    displayError(response)
  } else {
    printResponse(response)
  }
}

function printResponse(responseText) {
  displayMovieResults()
  displayFieldNames()
  displayTitle(responseText)
  displayYear(responseText)
  displayGenre(responseText)
  displayCountry(responseText)
  displayRaiting(responseText)
  displayPoster(responseText)
}

function displayTitle(response) {
  document.querySelector('#title').textContent = response.Title
}

function displayYear(response) {
  document.querySelector('#year').textContent = response.Year
}

function displayGenre(response) {
  document.querySelector('#genre').textContent = response.Genre
}

function displayCountry(response) {
  document.querySelector('#country').textContent = response.Country
}

function displayRaiting(response) {
  document.querySelector('#raiting').textContent = response.imdbRating
}

function displayPoster(response) {
  document.querySelector('#movie-poster').style.display = 'block'
  let poster = response.Poster
  if (poster === 'N/A') {
    document.querySelector('#poster').src = './media/no-image.jpg'
  } else {
    document.querySelector('#poster').src = response.Poster
  }
}

function displayFieldNames() {
  let fieldNames = document.querySelectorAll('.field-name')
  fieldNames.forEach((el) => (el.style.display = 'inline-block'))
}

function displayMovieResults() {
  let fieldContent = document.querySelectorAll('.search-result')
  fieldContent.forEach((el) => (el.style.display = 'block'))
  if (document.querySelector('#error-text')) {
    document.querySelector('#error-text').style.display = 'none'
  }
}

function hideMovieResults() {
  let fieldContent = document.querySelectorAll('.search-result')
  fieldContent.forEach((el) => (el.style.display = 'none'))
}

function displayError(response) {
  hideMovieResults()
  let errorText = document.querySelector('#error-text')
  errorText.style.display = 'inline-block'
  errorText.textContent = response.Error
}

async function getData(segment) {
  const url = `http://www.omdbapi.com/?apikey=8c63ab7d&t=${segment}`
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const responseData = await response.json()
    return responseData
  } catch (error) {
    return response.error
  }
}
