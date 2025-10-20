let titleProject = prompt('Название проекта?');
let screensValue = prompt('Типы экранов: шаблонные, с уникальным дизайном, с анимациями');
let responsive = prompt('Нужен ли респонсивный сайт? (да/нет)');

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
let fullPrice = servicePrice1 + servicePrice2

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
console.log(responsive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
