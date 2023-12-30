const API_KEY = '1bfdbff05c2698dc917dd28c08d41096';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

// Function to fetch upcoming movies
async function getUpcomingMovies() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
        const responseData = await response.json();
        return responseData.results;
    } catch (error) {
        console.error('Error in getUpcomingMovies:', error);
        return [];
    }
}

// Function to create a movie card HTML
function createMovieCard(movie) {
    return `
        <div class="card" data-id="${movie.id}">
            <div class="img">
                <img src="${IMAGE_PATH + movie.poster_path}" alt="${movie.title}">
            </div>
            <div class="info">
                <h2>${movie.title}</h2>
                <div class="single-info">
                    <span>Rate: </span>
                    <span>${movie.vote_average} / 10</span>
                </div>
                <div class="single-info">
                    <span>Release Date: </span>
                    <span>${movie.release_date}</span>
                </div>
            </div>
        </div>
    `;
}

// Function to display upcoming movies
async function displayUpcomingMovies() {
    const upcomingMoviesData = await getUpcomingMovies();

    // Assuming you have a createMovieCard function
    const upcomingMoviesGrid = document.querySelector('.movies-container.upcoming .movies-grid');

    upcomingMoviesGrid.innerHTML = upcomingMoviesData.slice(0, 12).map(movie => createMovieCard(movie)).join('');
}

// Document ready event listener
document.addEventListener('DOMContentLoaded', () => {
    // Invoke the function to display upcoming movies
    displayUpcomingMovies();
});