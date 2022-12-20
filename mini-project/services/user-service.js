import {Url} from "../constants";

const getUsers = () => {
    return fetch(Url.main.concat(Url.users)).then((response) => response.json())
}

const getSingleUser = (userId) => {
    return fetch(Url.main.concat(Url.users) + '/' + userId).then((response) => response.json())
}

export {
    getUsers,
    getSingleUser
}
