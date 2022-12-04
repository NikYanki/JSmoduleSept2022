/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
Поле "автори" - масив. Кожен автор має поля name,age

- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
Вивести в консоль пароль кожного користувача*/

//task1
const exampleArray = [1, -2.2, 's', `string`, "String", 'String', true, false, {name: 'Vasya'}, [null]];

//task2
let book1, book2, book3;
book1 = {
    title: "Harry Potter",
    pageCount: 100,
    genre: "fantasy"
};
book2 = {
    title: "Under the dome",
    pageCount: 200,
    genre: "horror"
};
book3 = {
    title: "java8",
    pageCount: 300,
    genre: "sience"
};

//task3
let book4, book5, book6;
book4 = {
    title: "Harry Potter",
    pageCount: 100,
    genre: "fantasy",
    authors: [
        {
            name: 'J.K. Rowling',
            age: 40
        }, null
    ]
};
book5 = {
    title: "Under the dome",
    pageCount: 200,
    genre: "horror",
    authors: [
        {
            name: 'Stephen King',
            age: 50
        }, undefined
    ]
};
book6 = {
    title: "java8",
    pageCount: 300,
    genre: "sience",
    authors: [
        {
            name: 'Herbert Schildt',
            age: 35
        }

    ]
};

//task4
const users = [
    {
        name: 'kokos',
        username: 'koks',
        password: '1234'
    },
    {
        name: 'orange',
        username: 'org',
        password: 4321
    },
    {
        name: 'banan',
        username: 'ban',
        password: '5678'
    },
    {
        name: 'kivi',
        username: 'kwa',
        password: 8765
    },
    {
        name: 'apple',
        username: 'iphone',
        password: '9012'
    },
    {
        name: 'grape',
        username: 'dots',
        password: 2109
    },
    {
        name: 'melone',
        username: 'boop',
        password: '3456'
    },
    {
        name: 'pineapple',
        username: 'bananas',
        password: 6543
    },
    {
        name: 'pamelo',
        username: 'omelo',
        password: '4477'
    },
    {
        name: 'lime',
        username: 'lemon',
        password: 1234
    }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);
