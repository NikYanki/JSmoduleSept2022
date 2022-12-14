/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let tenUsers = () => {
    let namesAndSurnmes = 'Закусило Тимур, Осецький Біломир, Щука Жито, Грушевський Юліан, Пахолюк Никифор, Рубчак Йонас, Купчинський Тихон, Пустовійт Одинець, Коник Еммануїл, Блажко Єремій'.trim().split(', ')
    let users = [];
    for (let i = 0; i < namesAndSurnmes.length; i++) {
        let nameSurname = namesAndSurnmes[i].split(' ')
        let user = new User(i + 1, nameSurname[1], nameSurname[0], nameSurname[0].concat('@mail.com'), Math.floor(Math.random() * Math.pow(10, 8)))
        users.push(user)
    }
    return users
}
let users = tenUsers()
/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
console.log(users.filter((user) => user.id % 2 !== 1))
/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
console.log(users.sort((a, b) => a.id - b.id))

/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/
class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
}

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let tenClient = () => {
    let products = 'bananas, strawberries, grapes, apples, watermelon, oranges, blueberries, lemons, peaches, avocados, pineapple, cherries, cantaloupe'.trim().split(', ');
    let namesAndSurnmes = 'Закусило Тимур, Осецький Біломир, Щука Жито, Грушевський Юліан, Пахолюк Никифор, Рубчак Йонас, Купчинський Тихон, Пустовійт Одинець, Коник Еммануїл, Блажко Єремій'.trim().split(', ')
    let clients = [];
    for (let i = 0; i < namesAndSurnmes.length; i++) {
        let productList = []
        for (let j = 0; j < Math.random() * products.length; j++) {
            const product = products[j];
            productList.push(new Product(j + 1, products[j]))
        }
        let nameSurname = namesAndSurnmes[i].split(' ')
        let client = new Client(i + 1, nameSurname[1], nameSurname[0], nameSurname[0].concat('@mail.com'), Math.floor(Math.random() * Math.pow(10, 8)), productList)
        clients.push(client)
    }
    return clients
}
/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
let clients = tenClient().sort((a, b) => a.order.length - b.order.length)
console.log(clients)

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
    максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
function Car(model, brand, year, maxSpeed, vEngine) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.vEngine = vEngine;
    this.showDrive = function () {
        console.log(`двигаемся со скоростью ${this.maxSpeed} в час`);
    }
    this.showInfo = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearManufact = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let car1 = new Car(`hyundai`, `i30`, 2007, 210, 2000)
car1.showDrive();
car1.showInfo();
car1.increaseMaxSpeed(211)
car1.addDriver(`Nikolay`);
car1.changeYear(1997)
car1.showInfo();
console.log(car1);
car1.showDrive();

/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
class Car1 {
    constructor(model, brand, year, maxSpeed, vEngine) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.vEngine = vEngine;
        this.showDrive = function () {
            console.log(`двигаемся со скоростью ${this.maxSpeed} в час`);
        }
        this.showInfo = function () {
            for (const key in this) {
                if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
            }
        };
    };

    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    changeYear = function (newValue) {
        this.yearManufact = newValue;
    }
    addDriver = function (driver) {
        this.driver = driver
    }
}

car2 = new Car(`banderomobil`, `zaz`, 2022, 300, 7000)
car2.showDrive();
car2.showInfo();
car2.increaseMaxSpeed(380)
car2.addDriver(`driver`);
car2.changeYear(1999)
car2.showInfo();
console.log(car2);
car2.showDrive();

/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
function Popelushka(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

function Prince(name, age, ShoozSize) {
    this.name = name;
    this.age = age;
    this.ShoozSize = ShoozSize;
}

let list = []
list.push(new Popelushka("Pamela", 26, 32), new Popelushka("Silvia", 26, 33));
list.push(new Popelushka("Roza", 26, 34), new Popelushka("Agness", 26, 35));
list.push(new Popelushka("Alexandra", 26, 36), new Popelushka("Jeniffer", 26, 37));
list.push(new Popelushka("Eva", 26, 38), new Popelushka("Margaret", 26, 39));
list.push(new Popelushka("Katrina", 26, 31), new Popelushka("Olvia", 26, 33));
console.log(list)
prince = new Prince("Walera", 30, 37);

let findPopelusku = (list, prince) => {
    for (let popelushka of list) {
        if (popelushka.footSize === prince.ShoozSize) {
            return popelushka;
        }
    }
}
console.log(findPopelusku(list, prince))
console.log(list.find((popelushka) => (popelushka.footSize === prince.ShoozSize)))
