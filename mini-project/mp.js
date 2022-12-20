/*
В index.html
1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
*/

import {getUsers} from "./services";
import {createElement, showSelectedkeysInObjet} from "./custom-library";

getUsers().then((users) => {
    for (const user of users) {
      let userDiv = createElement('div',document.body)
      userDiv.classList.add('user')
        showSelectedkeysInObjet(user,userDiv,'id', 'name')
        const link = createElement('a',userDiv)
        link.innerText ='See more'
        link.setAttribute("href",`./components/user-details.component/user-details.html?user=${user.id}`)
    }
});
