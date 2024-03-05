import { createHeader, reload } from "./modules/ui"
let user = JSON.parse(localStorage.getItem('user'))

let body = document.querySelector('.header')
let user_view = document.querySelector('#user')
let rel = document.querySelector('.reload')

createHeader(body)
reload(array, rel)
let name = document.querySelector('.name')
let emails = document.querySelectorAll('.email')
if(localStorage.length !== 0){
    name.innerHTML = localStorage.getItem('name') + ' ' + localStorage.getItem('surname')
    emails.forEach(email => {
        email.innerHTML = localStorage.getItem('email')
    })
}

user_view.innerHTML = `${user.name} ${user.surname}`

