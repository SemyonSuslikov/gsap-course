let titleProject = prompt('Название проекта?');
let screensValue = prompt('Типы экранов: шаблонные, с уникальным дизайном, с анимациями');
let responsive = prompt('Нужен ли респонсивный сайт? (да/нет)');

let screenPrice = 1000;
let percentage = 15;

if (responsive == 'да') {
    responsive = true
} 
else {
    responsive = false
}

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
let fullPrice = servicePrice1 + servicePrice2 + screenPrice
let servicePercentPrice = fullPrice - (fullPrice * (percentage/100))

if (fullPrice > 50000) {
    alert('Cделаем скидку 10%')
    console.log('Cделаем скидку 10%')
}
else if (fullPrice === 50000) {
    alert('Cделаем скидку 10%')
    console.log('Cделаем скидку 10%')
}
else if (fullPrice > 20000) {
    alert('Cделаем скидку 5%')
    console.log('Cделаем скидку 5%')
}
else if (fullPrice === 20000) {
    alert('Cделаем скидку 5%')
    console.log('Cделаем скидку 5%')
}
else if (fullPrice > 0) {
    alert('Cкидка не предусмотрена')
    console.log('Cкидка не предусмотрена')
}
else if (fullPrice < 0) {
    alert('Что-то пошло не так.')
    console.log('Что-то пошло не так.')
}

console.log(titleProject);
console.log(screensValue);
console.log(screenPrice);
console.log(percentage);
console.log(responsive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePercentPrice)


let allServicePrices;

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2
}

allServicePrices = getAllServicePrices()

console.log(allServicePrices, 'сумма всех доп услуг');

function getFullPrice () {
    return fullPrice + allServicePrices
}

fullPrice = getFullPrice()

console.log(fullPrice, 'сумма проекта + всех доп услуг');


let newTitle = '';

const getTitle = function() {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase()
}

newTitle = getTitle();
console.log(newTitle, 'отформатированное название');


const getServicePercentPrices = function () {
    return fullPrice - servicePercentPrice
}
servicePercentPrice = getServicePercentPrices();
console.log(servicePercentPrice, 'полная сумма проекта минус процент подрядчика');


let rollBackMessage;

const getRollbackMessage = function() {
    
    if (fullPrice >= 50000) {
        return "Cделаем скидку 10%";
    } else if (fullPrice >= 20000) {
        return "Cделаем скидку 5%";
    } else if (fullPrice >= 0) {
        return "Cкидка не предусмотрена";
    } else {
        return "Что-то пошло не так.";
    }
};

rollBackMessage = getRollbackMessage();
console.log(rollBackMessage, 'показывает доступную скидку');
