// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movies => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movies => movies.director === `Steven Spilberg` && movies.genre ===`Drama`).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } 
    const scoreAvarage = moviesArray.reduce ((acc, movie) => {
        if (movie.score) {
            return acc + movie.score;
        } else {
            return acc;
        }
    }, 0);
    return parseFloat((scoreAvarage / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaAvarage = moviesArray.filter((movie)=> {
        return movie.genre === (`Drama`);
    }, 0);
    const dramaAvarageScore = dramaAvarage.reduce((acc, movie) => {
        if (movie.score) {
            return acc + movie.score;
        } else {
            return acc;
        }
    }, 0);
        if (dramaAvarage === 0){
            return 0;
        } else {
         return parseFloat(( dramaAvarageScore / moviesArray.length).toFixed(2));
        }
   }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   return [...moviesArray].sort ((a,b) =>{
    return a.year > b.year ? 1
    : a.year < b.year ? -1
    : a.year === b.year ? a.title.localeCompare(b.title)
    : 0;
});
   }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.sort((a, b) => a.title.localeCompare(b.title) )
    const titleArray = sortedMovies.map((movie) => {
        return movie.title;
    });

    if (titleArray.length < 20) {
        return titleArray;
    } else {
        const firstTwenty = [];

        for (let i = 0; i < 20; i++) {
          firstTwenty.push(titleArray[i]);
        }

        return firstTwenty;
    }
};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
