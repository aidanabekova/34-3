doCalc(2, 4)
// function
// function-declaration
// function sayHello() {
//     alert('Hello')
// }

// sayHello()
printDelimiter()

function doCalc(num1, num2) {
    console.log(num1 + num2)
}

doCalc(100, 45)
printDelimiter()
// printText('Frontend')
//function-expression
var printText = function (string) {
    console.log(string)
}
printDelimiter()
//arrow function
var getMax = (n1, n2) => {
    if (n1 > n2) {
        console.log(n1)
    } else {
        console.log(n2)
    }
}
getMax(11, 9)

var getMax2 = (n1, n2) => console.log(n1 > n2 ? n1 : n2)

getMax2(86, 67)
printDelimiter()
var sumArray = (array) => {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return console.log(sum)
}
sumArray([4, 5, 6, 7, 8, 3, 2, 1])
printDelimiter()
// var sum = 0
// sum = sum + 1
// sum += 1

//область видимости
// var n1 = 0
// function f() {
//     var n1 = 0
// }
printText('Frontend')

var getPositionElement = (array, element) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return console.log(i)
        }
    }
    return console.log('not found')
}
getPositionElement([2, 3, 4, 5, 6, 7, 8, 9], 7)


function printDelimiter() {
    console.log('-'.repeat(75))
}

printDelimiter()

function findCommonElements(arr1, arr2) {
    var newArray = []

    for (var i = 0; i < arr1.length; i++) {
        var currentElement = arr1[i];
        var foundInSecondArray = false;

        for (var j = 0; j < arr2.length; j++) {
            if (currentElement === arr2[j]) {
                foundInSecondArray = true
                break
            }
        }
        if (foundInSecondArray) {
            newArray.push(currentElement)
        }
    }

    return newArray
}

console.log(findCommonElements([3, 4, 5, 6, 7], [3, 2, 1, 5, 7, 9, 10]))

//Callback

var alertName = (funcName)=> {
    return funcName()
}

var windowName = ()=>{
    return alert('Aidana')
}

alertName(windowName)

//анонимные функции
var button = document.querySelector('button')

button.addEventListener('click', () => console.log('Click!'))
