/*На странице post-details.html:
7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
*/
import {getComments, getPostById} from "../../services";
import {showObject} from "../../custom-library";
import {createElement} from "../../custom-library";

const postId = new URL(location.href).searchParams.get("post");
getPostById(postId).then(post => {
    const postDetails = createElement('div', document.body);
    postDetails.classList.add('post');
    showObject(post, postDetails)
    const btnCommentsOfCurentPost = createElement("button", postDetails)
    btnCommentsOfCurentPost.innerText = "comments of curent post"
    btnCommentsOfCurentPost.addEventListener("click", (e) => {
        getComments(post.id).then(comments => {
            const commentsDiv = createElement('div', document.body);
            commentsDiv.classList.add('comments');
            for (const comment of comments) {
                showObject(comment,commentsDiv)
            }
        })
    })

})
