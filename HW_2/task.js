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

// Variant A

const exponenta1 = function(i) {
    console.log(2 ** i)
}
    exponenta1(3)
    exponenta1(4)
    exponenta1(10)

// Variant B

let exponenta2 = function(i) { 
    console.log(Math.pow(2, i))
}
exponenta2(5)
exponenta2(10)

// Varianc С

const exponenta3 = function(p1, i) {
    console.log("Число " + p1 + " в степени " + i + " равно " + p1 ** i)
}
   exponenta3(3, 5)

// metod mach.pow

const exponenta4 = function(p_1, i) {
           console.log("Число " + p_1 + " в степени " + i + " равно " + Math.pow(p_1, i))
   }
   exponenta4(2, 10)

// Variant D

function exponentiate (ext) {
    let val = 1
    const number = 2
    for(let i = 1; i <= ext; i++) {
       val = val * number;
       console.log(number + ' в степени ' + i + ' равно ' + val)
    }
}
exponentiate(10)
    

// 2.Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее Пример в консоли: :) :):) :):):) :):):):) :):):):):)

// Variant A

let string = "", cnt = 1;
while (cnt<=5) {
string += ":)";
console.log(string);
cnt++;
}

// Variant B

let s_2 = ""
for (let i = 0; i < 5; i++)
console.log(s_2+=':)') 

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

// Variant A
    let stroka = ":)"
    let numberOfRows = 10
    function printSmile(stroka, numberOfRows) {
        let strSmile = stroka
        for(let i = 1; i <= numberOfRows; i++) {
            console.log(strSmile)
            strSmile = strSmile + stroka
        }
    }
    printSmile(stroka, numberOfRows)

// Variant B

let r1=''
function printSmile(stroka, numberOfRows) {
    for (let i=1; i<=numberOfRows; i++){
    console.log(r1+=stroka)
    }
}
printSmile('(-:-)',6)

// Variant С

function printSmile(stroka, numberOfRows) {
    for (let i=1; i<=numberOfRows; i++){
        console.log(stroka.repeat(i))
    }
}
printSmile('>:-)',6)  

// 3**. Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв. e.g. function getWordStructure(word) В консоли: Слово (word) состоит из (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

// Variant A

    // const valString = 'case'
    // const valString = 'Case'
    const valString = 'Check-list'

    function getWordStructure (wodr) {
        const count = {                     
            glasnye : 0,
            soglasnie : 0
        }
        wodr = wodr.toLowerCase()           //для более простого сканирования, переводим все слово в нижний регистр
        for (let i = 0; i < wodr.length; i++) {      // цикл перебирает строку по буквам
            if(wodr[i].match(/[aeiouAEIOU]/)) {                  
                count.glasnye = count.glasnye + 1
            } else if (wodr[i].match(/[bcdfghjklmnpqrtsvwxyzBCDFGHJKLMNPQRTSVWXYZ]/)) {
                count.soglasnie = count.soglasnie + 1
            }
        }
        return count    //функция возвращает обьект
    }
    const count = getWordStructure(valString)  // результат функции присваиваем в объект
        
    console.log('Слово ' + valString + ' состоит из ' + count.glasnye + ' гласных и ' + count.soglasnie + ' согласных букв')
    


// Variant B

function getWordStructure(word){

    let vowelsArray = ['a','e','i','o','u','y']
    let consonantsArray = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
    let tempArray = word.toLowerCase().split('')
    // toLowerCase приводит строку в нижний регистр. split разделяет строку в массив, пустые кавычки разделяют строку на отдельные элементы (буквы)
    let vowelsSum = tempArray.filter(x => vowelsArray.includes(x)).length;
    // Метод filter() создаёт новый массив с элементами прошедшими проверку. св-во length позволяет узнать длину строки. 
    let consonantsSum = tempArray.filter(x => consonantsArray.includes(x)).length;
    console.log(`Слово ${word} содержит гласных букв: `+vowelsSum+" и согласных букв: "+consonantsSum) 
    console.log(tempArray)
    // выведет введеное слово в виде массива
    let tempArray2 = tempArray.join('');
    // метод join объединяет массив в строку
    console.log(tempArray2)
    // выводит слово строкой, в нижнем регистре    
}

getWordStructure('case')
getWordStructure('Cace')
getWordStructure('Check-list')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

const str = 'abba'
// const str = 'Abba'
function isPalindrom (word) {
  
    let objPalindrom = word.split("").reverse().join("");   
    if(word == objPalindrom) {
        return 'Слово является палиндромом'
    } else {
        return 'Слово не является палиндромом'
    }
}
let result = isPalindrom(str)
console.log(result)
