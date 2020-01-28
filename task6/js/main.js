const qs = element => document.querySelector(element);
const qsa = element => document.querySelectorAll(element);
const getClass = element => document.getElementsByClassName(element);
const getId = element => document.getElementById(element);
const getTag = element => document.getElementsByTagName(element);

let start = getId('start');
let budget = getClass('budget-value');
let level = getClass('level-value');
let expenses = getClass('expenses-value');
let optionalexpenses = getClass('optionalexpenses-value');
let income = getClass('income-value');
let monthsavings = getClass('monthsavings-value');
let yearsavings = getClass('yearsavings-value');

let expensesItem = getClass('expenses-item');

let expensesBtn = getTag('button')[0];
let optionalexpensesBtn = getTag('button')[1];
let countBudgetBtn = getTag('button')[2];

let optionalexpensesItem = qsa('.optionalexpenses-item');

let chooseIncome = qs('.choose-income');
let checkbox = qs('#savings');
let chooseSum = qs('.choose-sum');
let choosePercent = qs('.choose-percent');
let year = qs('.year-value');
let month = qs('.month-value');
let day = qs('.day-value');

console.log(start);
console.log(budget);
console.log(level);
console.log(expenses);
console.log(optionalexpenses);
console.log(income);
console.log(monthsavings);
console.log(yearsavings);
console.log(expensesItem);
console.log(expensesBtn);
console.log(optionalexpensesBtn);
console.log(countBudgetBtn);
console.log(optionalexpensesItem);
console.log(chooseIncome);
console.log(checkbox);
console.log(chooseSum);
console.log(choosePercent);
console.log(year);
console.log(month);
console.log(day);