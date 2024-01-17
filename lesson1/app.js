// console.log("Hello world!") - строчный коммент
/*блочный
* */

//переменные
// var name = 'Aidana'
//camelcase
var nameAndSurname = 'Bekova Aidana'

var name2 = ''
console.log(name)

//типы данных
//1) string
var text = 'fronTend'
console.log(typeof text)
console.log(text + ' 34-3')
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.repeat(34))

//2) number
var number = 11
var number2 = 2
console.log(number)
//математические операторы - **, %
console.log(number ** number2)
console.log(number % number2)

console.log('Средний возраст группы 34-3 - ' + (19 + 17 + 16 + 19 + 28 + 17 + 18 + 16 + 15 + 17 + 16 + 16 + 18 + 19 + 15 + 18 + 18 + 16 + 15) / 19)

console.log(typeof number.toString())
console.log(typeof Number(text))

//3)boolean - true, false
//операторы сравнения >, <, >=, <=, ==, ===, !==
var num1 = 90
var num2 = '90'
console.log(number > number2)
console.log(num1 === num2)
console.log(num1 !== num2)
//логические операторы &&, ||
//условные конструкции if, else..if, else
//практика
// var name = prompt('Enter your name') //Aidana
// var surname = prompt('Enter your surname') //Bekova
// var age = prompt('Enter your age') //bfgbfgbfg

// if (age <= 18) {
//     alert('Привет, ' + name)
// } else if (age > 18 && age <= 50) {
//     alert('Здравствуйте, ' + name + ' ' + surname)
// } else if (age > 50 && age <= 80) {
//     alert('Здравствуйте, добро пожаловать! ' + name + ' ' + surname)
// } else {
//     alert('Что-то пошло не так, проверьте свои данные!')
// }


var userInn = "93434567808097"
var firstNum = Number(userInn[0]) //'1'
if((firstNum === 0 || firstNum === 1 || firstNum === 2) && userInn.length === 14){
    console.log('ok')
}else{
    console.error('error')
}














