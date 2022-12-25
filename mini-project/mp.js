/*
В index.html
1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
*/

import {getUsers} from "./services";
import {createElement, showSelectedkeysInObjet} from "./custom-library";

getUsers().then((users) => {
    let usersDiv = createElement('div',document.body)
    usersDiv.classList.add('users')
    for (const user of users) {
        let userDiv = createElement('div',usersDiv)
        userDiv.classList.add('user')
        showSelectedkeysInObjet(user,userDiv,'id', 'name')
        const linkToUserDetails = createElement('a',userDiv)
        linkToUserDetails.innerText ='See more'
        linkToUserDetails.setAttribute("href",`./components/user-details.component/user-details.html?user=${user.id}`)
    }
});
