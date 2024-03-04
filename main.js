import { getData } from "./modules/http"
import { createHeader, reload } from "./modules/ui"
let user = JSON.parse(localStorage.getItem('user'))

let body = document.querySelector('.header')
let user_view = document.querySelector('#user')
let rel = document.querySelector('.reload')

createHeader(body)

user_view.innerHTML = `${user.name} ${user.surname}`

// reload(rel)

getData('/wallets?user_id=' + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reload(res.data.slice(0, 4), rel);
        }
    })