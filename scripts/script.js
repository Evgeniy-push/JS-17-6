'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let number,
        divineNumber,
        guess = 0;

    number = Math.floor(Math.random()*(100 - 1) + 1);
    console.log('number: ', number);

    let isNamber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    divineNumber = () => {

        let divine = prompt('Угадай число от 1 до 100');

        if(+divine > number){
            alert("Загаданное число меньше");
            divineNumber();
        } else if (+divine < number && divine !== null) {
            alert("Загаданное число больше");
            divineNumber();
        } else if (!isNamber(+divine)){
            alert("Введи число");
            divineNumber();
        } else if(divine === null){
            alert("Игра окончена");
            guess = 1;
        } else if (+divine === number){
            alert("Поздравляю, Вы угадали!!!");
            guess = 1;
        }
    };

    if (guess === 0){
        divineNumber();
    }
});