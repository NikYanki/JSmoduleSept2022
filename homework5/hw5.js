/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
- створити функцію яка обчислює та повертає площу кола з радіусом r
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
- створити функцію яка приймає масив та виводить кожен його елемент
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
- створити функцію яка повертає найменьше число з масиву
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13*/

//tusk1
let areaRectagle = (a, b) => (a * b);
console.log(areaRectagle(10, 20))
//tusk2
const areaCirkle = (r) => {
    return Math.PI * Math.pow(r, 2);
}
console.log(areaCirkle(10))
//tusk3
let areaCilinder = (h, r) => (2 * Math.PI * r * h + Math.PI * Math.pow(r, 2));
console.log(areaCilinder(10, 5))
//tusk4
let showArray = (...a) => {
    for (const aElement of a) {
        console.log(aElement)
    }
}
//tusk4
let showArray1 = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
showArray(1, 2, 3, 4, 5, 6);
//tusk5
const writeInParagraph = (anything) => {
    document.write(`<p>${anything}</p>`)
}
writeInParagraph("hello world")
//tusk6
const threeLiCreator = (text) => {
    document.write('<ul>')
    let i = 0
    while (i < 3) {
        document.write(`<li>${text}</li>`)
        i++
    }
    document.write('</ul>')
}
threeLiCreator("wtf")

//tusk7
const liCreator = (text, count) => {
    if (typeof (count) === 'number') {
        document.write('<ul>')
        for (i = 0; i < count; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write('</ul>')
    }
}
liCreator('test', 10.5)

//tusk8
let showArrayInDocument = (...a) => {
    document.write('<ul>')
    for (const aElement of a) {
        document.write(`<li>${aElement}</li>`)
    }
    document.write('</ul>')
}
showArrayInDocument('hello', 1, true, undefined, null)
//tusk9
let users = [
    {id: 3, name: 'vasya', age: 15},
    {id: 1, name: 'petya', age: 16},
    {id: 2, name: 'valera', age: 17},
    {id: 4, name: 'volodya', age: 18}
];

let listInOut = (array) => {
    for (const user of users) {
        document.write(`<div> id :${user.id}. Name :${user.name}. Age :${user.age}</div>`);
    }
}
listInOut(users);
//tusk10
let findMinInArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
            }
            arr[i] = min
        }
    }
    return arr[0]
}
console.log(findMinInArray([4, 1, 6, 0, 5, 3, -1]))

//tusk11
let sumArray = (arr) => {
    let summa = 0
    for (const arrElement of arr) {
        summa += arrElement
    }
    return summa
}
console.log(sumArray([4, 1, 6, 0, 5, 3, -1]))
