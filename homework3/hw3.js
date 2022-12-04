/*- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
 Перевірте  скрипт при a, що дорівнює 1, 0, -3

- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
 до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).

- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
 потрапляє це число (у першу, другу чи третю).

- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.

- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
 Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)*/

//tusk1
let x = +prompt("wright 1 or 0 or -3", "");
if (typeof x === "number" && x === 0) {
    console.log(true)
} else {
    console.log(false)
}
//tusk1.1
switch (x) {
    case 0:
        console.log(true)
        break
    default:
        console.log(false)
}

//tusk2
const time = +prompt("enter time", "");
if (typeof (time) === 'number' && time >= 0 && time <= 59) {
    switch (true) {
        case time < 15:
            console.log("1 quarter")
            break
        case time > 14 && time < 30:
            console.log("2 quarter")
            break
        case time > 29 && time < 45:
            console.log("3 quarter")
            break
        case time > 44 && time < 60:
            console.log("4 quarter")
            break
    }
} else {
    console.log('time error')
}

//tusk3
const day = +prompt('enter the day', '')
typeof (day) === 'number' && day > 0 && day < 32 ? day < 11 ? console.log("1 decade") :
    day < 21 ? console.log("2 decade") : console.log("3 decade") : console.log('data error');

//tusk4
let dayOfWeek = prompt("present day","")
switch (dayOfWeek.toLowerCase()){
    case 'monday':
        console.log("monday plan")
        break
    case 'tuesday':
        console.log("tuesday plan")
        break
    case 'wednesday':
        console.log("wednesday plan")
        break
    case 'thursday':
        console.log("thursday plan")
        break
    case 'friday':
        console.log("friday plan")
        break
    case 'saturday':
        console.log("saturday plan")
        break
    case 'sunday':
        console.log("sunday")
        break
    default:
        console.log("day error")
}

//tusk5
const num1 = +prompt('enter first numder','');
const num2 = +prompt('enter second number','');
typeof(num1)==="number"&&typeof(num2)==="number"?num1===num2?console.log("num1=num2"):num1>num2?console.log(`${num1}>${num2}`):console.log(`${num1}<${num2}`):console.log("number error")

//tusk6
let x;
if(x===true||typeof(x)==='number'||typeof(x)==='string'||typeof(x)==='bigint'||typeof(x)==='function'){
    switch (true){
        case typeof(x)==="number":
            x=0;
            break
        case typeof(x)==="function":
            x=undefined;
            break
        case typeof (x)==="string":
            x=null;
            break
        case typeof(x)==='bigint':
            x=0;
            break
        default:
            x=false;
    }

}else{
    console.log(false)
}
