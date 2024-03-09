import { getData } from "./modules/http"
import { createHeader, reload, reloadTransactions} from "./modules/ui"
let user = JSON.parse(localStorage.getItem('user'))

let body = document.querySelector('.header')
const tbody = document.querySelector('#latest_transactions_tbody')
createHeader(body)

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
getData('/transactions?user_id=' + user.id)
.then(res => {
    if (res.status === 200 || res.status === 201) {
        reloadTransactions(res.data, tbody, 'small');
    }
})
let link_for_transactions = document.querySelector('#all_transactions_link')
link_for_transactions.onclick = () => {
    location.assign('/pages/transactions/')
}