import { createHeader, reload } from "./modules/ui"
import { getData } from "./modules/http"
let user = JSON.parse(localStorage.getItem('user'))

let body = document.querySelector('.header')
let user_view = document.querySelector('#user')
let email_view = document.querySelector('.email')
let rel = document.querySelector('.reload')
let view_more = document.querySelector('.pocket')

createHeader(body)

user_view.innerHTML = `${user.name} ${user.surname}`
email_view.innerHTML = `${user.email}`

getData('/wallets?user_id=' + user.id)
    .then(res => {
        if (res.status === 201 || res.status === 200) {
            reload(res.data.slice(0, 4), rel)
            view_more.onclick = () => {
                if (view_more.innerHTML === "Смотреть все кошельки") {
                    view_more.innerHTML = "Скрыть"
                    reload(res.data, rel)
                } else {
                    view_more.innerHTML = "Смотреть все кошельки"
                    reload(res.data.slice(0, 4), rel)
                }
            }
        }
    })