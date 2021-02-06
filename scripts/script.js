'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let guess = 0;


    let isNamber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    const divineNumber = () => {

        let number = Math.floor(Math.random()*(100 - 1) + 1);
        console.log('number1: ', number);

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