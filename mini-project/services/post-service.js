import {Url} from "../constants";

const getUserPosts = (id) => {
  return fetch(Url.main+Url.users+`/${id}`+Url.posts).then((responce)=>responce.json())
}
export {getUserPosts}
