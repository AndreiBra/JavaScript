// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// variant A

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

// Variant В

let num =2, exp =10, result =1; count = 0;
while (count<exp) {
	result = result*num;
	count++;
}
console.log(result)

// Variant С

function power(base,exp){
    let result = 1;
    for(let cnt = 0; cnt < exp; cnt++){
    result *= base };
    return result;
    
    }
    
    console.log( power(2,10));


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// 2.Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее Пример в консоли: :) :):) :):):) :):):):) :):):):):)

let string = "", cnt = 1;
while (cnt<=5) {
string += ":)";
console.log(string);
cnt++;
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

// 3**. Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв. e.g. function getWordStructure(word) В консоли: Слово (word) состоит из (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

const str1 = 'abba'
function isPalindrom (word) {
    word = word.toLowerCase()

    let objPalindrom = word.split("").reverse().join("");   
    if(word == objPalindrom) {
        return 'Слово является палиндромом'
    } else {
        return 'Слово не является палиндромом'
    }
}
let result = isPalindrom(str1)
console.log(result)
