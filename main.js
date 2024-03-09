
import { createHeader, reload } from "./modules/ui"
import { getData } from "./modules/http"
let user = JSON.parse(localStorage.getItem('user'))

let body = document.querySelector('.header')
createHeader(body)

let user_view = document.querySelector('#user')
let email_view = document.querySelector('.email')
let emailHeader_view = document.querySelector('.user_mail')
let rel = document.querySelector('.reload')
let place_for_reload = document.querySelector('.reload')
getData('/wallets?user_id=' + user.id)
    .then(res => {
        if(res.status === 201 || res.status === 200) {
            reload(res.data , place_for_reload)
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
let pocket = document.querySelector('.pocket')
pocket.onclick = () => {
   location.assign('/pages/wallets/')
}


getData('/wallets?user_id=' + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reload(res.data.slice(0, 4), rel);
        }
    })
