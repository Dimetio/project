'use strict';

// filter

// const names = ['Ivan', 'Anna', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(name => {
//   return name.length < 5;
// });

// console.log(shortNames);

// map 

// let answers = ['IvAn','AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// every/some

// const some = [4, 'qwe', 'dgssfd'];

// // console.log(some.some(item => typeof(item) === 'number')); // если хоть 1 true вернет все true

// console.log(some.every(item => typeof(item) === 'number')); // true только когда все true

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const arr = ['apple', 'pear', 'pulm'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);


const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);