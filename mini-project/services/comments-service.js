import {Url} from "../constants";

const getComments = (id) => {
    return fetch(Url.main+Url.posts+`/${id}`+Url.comments).then(responce=>responce.json())
}
export {getComments}
