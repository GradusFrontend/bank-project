import { createHeader, toaster } from "../../modules/ui";
import { getData, getSymbols } from "../../modules/http"

createHeader()

let name_card = document.querySelector("#cn")
let bal = document.querySelector(".bal")
// let curr = document.querySelector("#cur")
let user = JSON.parse(localStorage.getItem('user'))


getData('/wallets?user_id=' + user.id)
.then(res =>{
    console.log(res.data);
    console.log(res.data.name)
    const userData = res.data[0]
    console.log(userData);
    
    if (res.status === 200 || res.status === 201) {
        name_card.innerHTML = userData.name; 
        bal.innerHTML = `Ваш баланс: ${userData.balance} ${userData.currency}`;
    }
    else {
        toaster('Card Load Error', 'error')
    }
})

const select = document.querySelector('#currency')

// let first_box = document.querySelectorAll(".first_box")
// let another_side = document.querySelector(".another_side")

// first_box.onclick = () =>{
//     first_box.classList.add("anside")
// }

getSymbols()
    .then((symbols) => {
        for (let key in symbols) {
            let opt = new Option(`${key} - ${symbols[key]}`, key)

            select.append(opt)
        }
    })