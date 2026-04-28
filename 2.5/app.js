let titleProject;
let screensValue;
let responsive;
let screenPrice = 1000;
let percentage = 15;
let fullPrice = 0;
let servicePercentPrice;
let serviceName;
let servicePrice;
let allServicePrices = 0;
let newTitle = '';
let rollBackMessage;




const asking = function() {
    titleProject = prompt('Название проекта?', 'КальКУлЯтор');
    screensValue = prompt('Типы экранов: шаблонные, с уникальным дизайном, с анимациями', 'с уникальным дизайном');
    responsive = prompt('Нужен ли респонсивный сайт?', 'Нужен');
}



const getAllServicePrices = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        serviceName = prompt('Какой сервис нужен?');
        servicePrice = prompt('Сколько это будет стоить?');

        while (!checkIsNumber(servicePrice) || servicePrice === null || servicePrice.trim() === '') {
        servicePrice = prompt('Пожалуйста, введите стоимость цифрами!'); 
        }
        sum += +servicePrice
    }    
        return sum
    
    
}

function getFullPrice () {
    return screenPrice + allServicePrices
}


const getTitle = function() {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase()
}


const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percentage/100))
}

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

const checkIsNumber = function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

// Responsive y/n

if (responsive == 'да') {
    responsive = true
} 
else {
    responsive = false
}

// Предоставление скидки

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



asking ()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
newTitle = getTitle();
servicePercentPrice = getServicePercentPrices();
rollBackMessage = getRollbackMessage();


console.log(newTitle, 'отформатированное название');
console.log(screensValue);
console.log(screenPrice);
console.log(percentage);
console.log(responsive);
console.log(allServicePrices, 'сумма всех доп услуг');
console.log(fullPrice, 'сумма проекта + всех доп услуг');
console.log(newTitle, 'отформатированное название');
console.log(servicePercentPrice, 'полная сумма проекта минус процент подрядчика');
console.log(rollBackMessage, 'показывает доступную скидку')