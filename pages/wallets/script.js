import { createHeader, reload } from "../../modules/ui.js"

let wrap_reload = document.querySelector('.reload')
let add = document.querySelector('.add')

createHeader()
reload([{
    type: 'Visa',
    Money: 'RUB',
    background: 'linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)'
}, {
    type: 'Visa',
    Money: 'RUB',
    background: 'linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)'
}, {
    type: 'Visa',
    Money: 'RUB',
    background: 'linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)'
}, {
    type: 'Visa',
    Money: 'RUB',
    background: 'linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)'
}, {
    type: 'Visa',
    Money: 'RUB',
    background: 'linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)'
}], wrap_reload)

wrap_reload.append(add)