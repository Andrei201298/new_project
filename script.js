
const numberOfFilms = +prompt('How many movies did u watch already, Bob?', '') ;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('last film u watchaed?',''),
      b = prompt ('how good it was 0 - 10?', ''),
      c = prompt('last film u watchaed?',''),
      d = prompt('how good it was 0 - 10?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
