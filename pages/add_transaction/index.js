import { postData, getData } from "../../modules/http"
import { toaster_green, toaster } from "../../modules/ui";
let user = JSON.parse(localStorage.getItem('user'))
let wallets = []
let selected_wallet = null

const form = document.forms.transactionAdd
const select = form.querySelector('#wallet')
const total_inp = form.querySelector('#total')

getData("/wallets?user_id=" + user.id)
    .then(res => {
        for (let item of res.data) {
            let opt = new Option(`${item.name}`, item.id)

            select.append(opt)
        }

        wallets = res.data
    })

select.onchange = (e) => {
    const id = e.target.value
    selected_wallet = wallets.find(el => el.id === id)
}

total_inp.onkeyup = (e) => {
    const val = e.target.value

    if (+val > +selected_wallet.balance) {
        alert("not enough money")
        e.target.classList.add('error')
    } else {
        e.target.classList.remove('error')

        // postData('/wallets', selected_wallet)
        // .then(res => {
        //     if (res.status === 200 || res.status === 201) {
        //             selected_wallet.balance -= e.target
        //         }
        //     })
    }
}

form.onsubmit = (e) => {
    e.preventDefault()

    let data = new FormData(e.target)

    let transaction = {
        id: Math.random(),
        wallet: data.get("wallet"),
        user_id: JSON.stringify(user)?.id,
        category: data.get("category"),
        description: data.get("description"),
        total: data.get("total"),
        created_at: new Date().toLocaleDateString(),
        updated_at: new Date().toLocaleDateString(),
    }

    data.forEach((value, key) => {
        transaction[key] = value
    })

    const { wallet, total, category, description } = transaction

    if (wallet && total && category && description) {
        postData('/transactions', transaction)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    toaster_green("Success")
                    location.assign('/pages/transactions/')
                }
            })
    }


}