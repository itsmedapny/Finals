// Function to update movie details on the movie details page
function updateMovieDetails(movieDetails) {
    console.log('Updating movie details:', movieDetails);

    const titleElement = document.querySelector('.movie-title');
    const infoElement = document.querySelector('.movie-info');

    if (titleElement && infoElement) {
        titleElement.innerText = movieDetails.title;

        // Customize this part based on your movie details structure
        infoElement.innerHTML = `
            <div>Language: ${escapeHtml(movieDetails.original_language)}</div>
            <div>Length: ${escapeHtml(movieDetails.runtime)} minutes</div>
            <div>Rate: ${escapeHtml(movieDetails.vote_average)} / 10</div>
            <div>Budget: $${escapeHtml(movieDetails.budget)}</div>
            <div>Release Date: ${escapeHtml(movieDetails.release_date)}</div>
            <!-- Add more details as needed -->
        `;
    } else {
        console.error('Elements not found. Make sure your HTML structure is correct.');
    }
}

// Function to display similar movies
function displaySimilarMovies(similarMovies) {
    console.log('Displaying similar movies:', similarMovies);

    const similarMoviesContainer = document.querySelector('.similar-movies');

    if (similarMoviesContainer) {
        similarMoviesContainer.innerHTML = similarMovies.map(movie => createMovieCard(movie)).join('');
    } else {
        console.error('Similar movies container not found. Make sure your HTML structure is correct.');
    }
}

// Utility function to escape HTML content
function escapeHtml(unsafe) {
    return (unsafe + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
