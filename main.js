import { createHeader, reload } from "./modules/ui"
import { getData } from "./modules/http"
let user = JSON.parse(localStorage.getItem('user'))

let body = document.querySelector('.header')
let user_view = document.querySelector('#user')
let rel = document.querySelector('.reload')

createHeader(body)
let place_for_reload = document.querySelector('.reload')
getData('/wallets')
    .then(res => {
        if(res.status === 201 || res.status === 200) {
            reload(res.data, place_for_reload)
        }
    })
let user_data = JSON.parse(localStorage.getItem('user'))
let name = document.querySelector('.name')
let email = document.querySelector('.email')
console.log(email);
if(user_data !== ''){
    name.innerHTML = `${user_data.name}` + ' ' + `${user_data.surname}`
    email.innerHTML = `${user_data.email}`
} else {
    name.innerHTML = 'User'
    email.innerHTML = 'User'
}