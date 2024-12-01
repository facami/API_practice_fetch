const API_KEY = 'bb71427bc8bcba5abbc13bc142222854';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;

const movieList = document.getElementById('movie-list');

// Función para obtener datos de la API
async function fetchMovies() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        movieList.innerHTML = `<p>Ocurrió un error al cargar las películas. Verifica tu API Key o conexión.</p>`;
    }
}

// Función para mostrar las películas en la página
function displayMovies(movies) {
    movieList.innerHTML = movies.map(movie => `
        <div class="movie">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>⭐ ${movie.vote_average}</p>
        </div>
    `).join('');
}

// Ejecutar al cargar la página
fetchMovies();
