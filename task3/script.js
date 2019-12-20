let money;
let time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}
start();

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

// обязательный расходы
function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
    } else {
      console.log('нужно ввести значение');
      i--;
    }
  }
}
chooseExpenses();

// необязательные расходы
function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let a = prompt("Введите необязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
      console.log('done');
      appData.optionalExpenses[i] = b;
    } else {
      console.log('нужно ввести значение');
      i--;
    }
  }
}
chooseOptExpenses();

// бюджет на день
function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  console.log('бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

// уровень достатка
function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('минималка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('среднячек');
  } else if (appData.moneyPerDay > 2000) {
    console.log('марожик');
  } else {
    console.log('ошибка');
  }
}
detectLevel();

// накопления
function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('сумма накоплений');
    let percent = +prompt('под какой %?');
    appData.monthIncome = save / 100 / 12 * percent;
    console.log(`доход с депозита: ${appData.monthIncome}`);
  }
}
checkSavings();