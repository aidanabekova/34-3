// NaN - not a number
var example = 5 / 'te4xt'
console.log(typeof example)

//switch..case
// var amount = Number(prompt('Enter amount'))
// var currency = prompt('Enter currency').toUpperCase()
//
// var convertedAmount = 0
//
// switch(currency){
//     case 'USD':
//         convertedAmount = amount / 89;
//         break
//     case "EUR":
//         convertedAmount = amount / 102;
//         break
//     case 'RUB':
//         convertedAmount = amount / 0.9;
//         break
//     default:
//         console.warn('INVALID CURRENCY');
// }
//
// console.log(convertedAmount + ' ' + currency);

// 4)undefined
let name
console.log(name)

//5) null
var name2 = null
console.log(typeof name2)

// 6)object
var courseGeeks = {
    name: 'Geeks',
    foundingDate: 2017,
    address: {
        street: 'Ibraimova 103',
        number: null,
    },
    branches: undefined
}
console.log(courseGeeks.foundingDate)
console.log(courseGeeks.address.number)


//методы
courseGeeks.course = 'GEEKS'
delete courseGeeks.branches
courseGeeks.address['number'] = 23
console.log(courseGeeks)

console.log(Object.keys(courseGeeks))
console.log(Object.values(courseGeeks))
console.log(Object.entries(courseGeeks))
console.log(courseGeeks.hasOwnProperty('name2'))

//циклы
// for(var i = 10; i <= 10; i++){
//     console.log(i)
// }
// var i = 0
// var i = i +1
// var i =+ 1
// var i++

//array - массив
var array = [1, 2, 3, 'qwerty', null, undefined, {}, []]
console.log(array)

var numbers = [123, 345, 567, 432, 789, 785, 567, 47, 5678, 7890, 345]
for (var i = 0; i < numbers.length; i++) {
    var firstNum = String(numbers[i])[0]
    if (firstNum === '3' || firstNum === '5' || firstNum === '7') {
        console.log(numbers[i])
    }
}

git
github.com

