/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieBD = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieBD.count = +prompt('Сколько фильмов?', '');

        while (personalMovieBD.count == '' || personalMovieBD.count == null || isNaN(personalMovieBD.count)) {
            personalMovieBD.count = +prompt('Сколько фильмов?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieBD.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieBD.count >= 10 && personalMovieBD < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieBD.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieBD);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieBD.privat) {
            personalMovieBD.privat = false;
        } else {
            personalMovieBD.privat = true;
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i <= 3; i++) {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre === '' || genre === null) {
            //     console.log('Вы ввели некорректные данные');
            //     i--;
            // } else {
            //     personalMovieBD.genres[i - 1] = genre;
            // }

            let genres = prompt(`Введит ваши фильмы через запятую`).toLowerCase();

            if (genres === '' || genres === null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieBD.genres = genres.split(', ');
                personalMovieBD.genres.sort();
            }

            personalMovieBD.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    }
};