// array
var array = ['a', 'b', 'c', 'd']
console.log(array[3])
console.log(array[7])
array[5] = 'y'
console.log(array[5])

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[2][2])

var num = 10
num = 'qwerty'
console.log(num)

//циклы
var i = 0
while(i < 10){
    i++
    console.log(i)
}

//for
var names = ['aidar', 'john', 'jack', 'anna', 'oliver', 'bob', 'tim']
var blackList = ['john', 'bob']

for(var i = 0; i < names.length; i++){
    if(blackList.includes(names[i])){
        console.warn(`${names[i]} in blacklist`)
        continue
    }
    console.log(`Welcome, dear guest ${names[i]}`)
}
var courseGeeks = {
    name: 'Geeks',
    foundingDate: 2017,
    address: {
        street: 'Ibraimova 103',
        number: null,
    },
    branches: undefined
}
//for..of - array
var nums = [1,2,3,4]
for(var number of nums){
    console.log(number)
}
console.log(Object.keys(courseGeeks))
//for..in - object

// console.log(courseGeeks)
console.log(nums)
for(var key in courseGeeks){
    console.log(key)
}

//методы массива
var fruits = ['banana', 'orange', 'apple']
//1
fruits.push('cherry')
//2
var addFruit = fruits.unshift('apple')
//3
var firstFruit = fruits.shift()
// console.log(firstFruit)
//4
var deleteFruit = fruits.pop()
//5
fruits.splice(1, 1, 'cherry')
fruits.includes('cherry')
console.log(fruits)

var children = [1994, 2015, 2024, 2023, 2019, 2017, 2018, 1998, 2000, 2015, 2018, 2019]

var currentYear = new Date().getFullYear()
var gifts = 0

for(var i of children){
    var childAge = currentYear - i
    if(childAge >= 3 && childAge <= 17){
        gifts++
    }
}
console.log(`Gift total - ${gifts} of ${children.length}`)





