let menu = document.querySelector(".menu");
let menuItem = document.querySelectorAll(".menu-item");
let menuItemLi = document.createElement("li");
let title = document.querySelector('.title');
let adv = document.querySelector('.adv');
let question = 'Ваше отношение к технике Apple?';
let answer = document.querySelector('.prompt');

// меняю местами
menu.insertBefore(menuItem[2], menuItem[1]); 

// новый пункт меню
menuItemLi.classList.add("menu-item");  
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);  

// меняю фон
document.body.style.background = 'url(img/apple_true.jpg)'; 

// меняю текст
title.textContent = 'Мы продаем только подлинную технику Apple';

// убираю рекламу
 adv.remove(); 
// adv.style.visibility = 'hidden';
// adv.style.display = 'none';

// записывают ответ в блок
answer.textContent = prompt(question);