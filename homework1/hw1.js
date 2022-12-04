// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль

//task1
const variable1 = 'hello';
const variable2 = 'owu';
const variable3 = 'com';
const variable4 = 'ua';
let value1 = 1;
let value2 = 1;
let value3 = -999;
let value4 = 123;
let value5 = 3.14;
const value6 = 2.7;
const value7 = 16;
const boolean1 = true;
const boolean2 = false;

//task2
let a = 100;
let b = '100';
let c = true;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));

//task3
const name =prompt("your name:","");
const surname =prompt("your surname:","");
const fathername =prompt("your fathername:","");

let username= name.concat(surname.concat(fathername));
console.log(username)
console.log(name+" "+surname+" "+fathername)
