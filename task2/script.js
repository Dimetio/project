const numberOfFilms = +prompt('Сколько фильмов?', '');

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних фильмов', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieBD.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

/*
let i = 0;
while (i < 2) {
  const a = prompt('Один из последних фильмов', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieBD.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
  i++;
}
*/

/*
let i = 0;
do {
  const a = prompt('Один из последних фильмов', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieBD.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
  i++;
}
while ( i < 2);
*/

if (personalMovieBD.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieBD.count >= 10 && personalMovieBD < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieBD.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieBD);