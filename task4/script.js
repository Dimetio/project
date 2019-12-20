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
  savings: true,
  chooseExpenses: function() {
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
  },
  chooseOptExpenses: function() {
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
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    console.log('бюджет: ' + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log('минималка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('среднячек');
    } else if (appData.moneyPerDay > 2000) {
      console.log('марожик');
    } else {
      console.log('ошибка');
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt('сумма накоплений');
      let percent = +prompt('под какой %?');
      appData.monthIncome = save / 100 / 12 * percent;
      console.log(`доход с депозита: ${appData.monthIncome}`);
    }
  },
  chooseIncome: function() {
    let items = prompt('что принесет деньги еще? (через запятую)', '');
    
    if (items == '' || typeof(items) != 'string' || typeof(items) == null) {
      console.log('попробуйка еще раз');      
    } else {
      appData.income = items.split(', ');
      appData.income .push(prompt('может что-то еще?')); 
      appData.income.sort(); 
    }

    appData.income.forEach ( (item, i) => {
      console.log(`Способы доп. заработка: ${i+1} - ${item}`);    
    });
  }
};

for(let key in appData) {
  console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);  
}