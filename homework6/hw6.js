/*- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
*/
//tusk1
let arr = ['hello world', 'lorem ipsum', 'javascript is cool']
for (const string of arr) {
    console.log(string.length)
}
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase()
}
console.log(arr)
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase()
}
console.log(arr)

let str = ' dirty string   '
console.log(str.length)
str = str.trim()
console.log(str)
console.log(str.length)
/*
- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

//tusk2
let str1 = 'Ревуть воли як ясла повні';
//str1=str1.split(' ');
console.log(str1);
let stringToarray = (str) => str.split(' ');
let arr1 = stringToarray(str1)
console.log(arr1)
/*
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку
перетворити всі об'єкти в масиві на стрінгові.*/
//tusk3
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let strings = numbers.map(value => value.toString());
console.log(numbers)
console.log(strings)
/*
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/

//tusk4
let nums = [11, 21, 3];
console.log(nums)
console.log(nums.sort((a, b) => b - a))
console.log(nums.sort((a, b) => a - b))
/*
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

//tusk5
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter((a) => a.monthDuration > 5))
/*
 описати колоду карт
 - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше


{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}*/

//tusk6
function card(value, name, cardSuit,color){
    this.value = value;
    this.name = name;
    this.cardSuit = cardSuit;
    this.color = color;
}
function desk() {
    this.value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];
    this.cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
    this.color = ['red', 'black']
    let cards = [];
    for (let i = 0; i < this.cardSuit.length; i++) {
        for (let j = 0; j < this.value.length-1; j++) {
            cards.push(new card (j + 1, this.value[j], this.cardSuit[i]));
        }
    }
    for (let k = 0; k < this.color.length; k++) {
        cards.push(new card (this.value.length,this.value[this.value.length-1],undefined, this.color[k]));

    }

    cards.map((card) => {
        if (card.cardSuit === 'spade' || card.cardSuit === 'clubs') {
            card.color = this.color[1]
        } else if(card.value!==this.value.length){
            card.color = this.color[0]
        }
    })
    return cards;
}
let deskCard = desk();
console.log(deskCard)
/*
* - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше
*/
console.log(deskCard.filter((card)=>card.name==='ace'&&card.cardSuit==='spade'))
console.log(deskCard.filter((card)=>card.value===1))
console.log(deskCard.filter((card)=>card.color==='red'))
console.log(deskCard.filter((card)=>card.cardSuit==='diamond'))
console.log(deskCard.filter((card)=>card.value>4&&card.cardSuit==='clubs'))

/*


Додатково по reduce
Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}*/
//tusk7
function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        const curGroup = acc[key] ?? [];

        return { ...acc, [key]: [...curGroup, obj] };
    }, {});
}
const group = groupBy(deskCard,'cardSuit')
console.log(group)
