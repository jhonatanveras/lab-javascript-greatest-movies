// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = directo => {
  return directo.map(movies => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = howManyMovie => {
  const howManyMoviearray = howManyMovie.filter(movies => {
    return movies.genre.includes('Drama') && movies.director === 'Steven Spielberg'
  });
  return howManyMoviearray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = scoreAverage => {
  if (scoreAverage.length === 0) return 0;

  const scoreSum = scoreAverage.reduce((acc, ele) => {
    if (!ele.score) return acc + 0;
    return acc + ele.score;

  }, 0);

  const average = (scoreSum / scoreAverage.length).toFixed(2);
  return parseFloat(average);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = dramaMovieScore => {
  const drama = dramaMovieScore.filter(movies => movies.genre.includes('Drama'));
  const dramaScore = drama.reduce((acc, ele) => acc + ele.score / drama.length, 0).toFixed(2);
  return parseFloat(dramaScore);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = orderPerYear => {
  const movieYear = orderPerYear.map(movies => movies);
  const orderYaer = movieYear.sort((x, y) => {
    if (x.year !== y.year) {
      return x.year - y.year;
    } else
    return x.title.localeCompare(y.title);
  });

  return orderYaer;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = alphabetically => {
  const titleOrder = alphabetically.map(tt => tt.title);
  const order = titleOrder.sort();
  return order.splice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}