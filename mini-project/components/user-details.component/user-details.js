/*
На странице user-details.html:
4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
*/
import {getSingleUser, getUserPosts} from "../../services";
import {showObject, createElement, showSelectedkeysInObjet} from "../../custom-library";


const userId = new URL(location.href).searchParams.get("user");
getSingleUser(userId).then(user => {
    const userDetails = createElement('div', document.body);
    userDetails.classList.add('user');
    showObject(user, userDetails)
    const btnPostOfCurrentUser = createElement("button", userDetails);
    btnPostOfCurrentUser.innerText = "post of current user";
    btnPostOfCurrentUser.addEventListener("click", (e) => {
        getUserPosts(userId).then(posts => {
            const postsDiv =createElement("div",document.body)
            postsDiv.classList.add("posts")
            for (const post of posts) {
                const postDiv =createElement("div",postsDiv)
                postDiv.classList.add("post")
                showSelectedkeysInObjet(post, postDiv, "title")
                const linkToPostDetails = createElement("a", postDiv)
                linkToPostDetails.innerText = "see more"
                linkToPostDetails.setAttribute("href", `../../components/post-details.component/post-details.html?post=${post.id}\ `)

            }

        })
    })

})


