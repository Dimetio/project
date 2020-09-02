const numberOfFilms = +prompt('Сколько фильмов?', '');

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних фильмов', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD);