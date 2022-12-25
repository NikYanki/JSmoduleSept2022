import {Url} from "../constants";

const getUserPosts = (id) => {
  return fetch(Url.main+Url.users+`/${id}`+Url.posts).then((responce)=>responce.json())
}
const getPostById = (id) => {
  return fetch(Url.main+Url.posts+`/${id}`).then(responce => responce.json())
}
export {getUserPosts, getPostById}
