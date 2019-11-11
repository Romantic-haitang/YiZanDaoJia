import fetch from '../utils/fetch'

export function getLogin(obj) {
    return fetch({
       url:"/api/login",
       method:"post",
       data:obj
    })
}