import { getData, patchData, postData } from "../../modules/http";
import { toaster } from "../../modules/ui";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms.transactionAdd;
    const select = document.querySelector('#wallet')
    const total_inp = document.querySelector('#total')
    const user = JSON.parse(localStorage.getItem('user'))
    let wallets = []
    let selected_wallet = null
    let h1 = document.querySelector('h1')
    getData('/wallets?user_id=' + user.id)
        .then(res => {
            for(let item of res.data) {
                let opt = new Option(`${item.name}`, item.id)

                select.append(opt.name="wallet")
            }

            wallets = res.data
        })

    select.onchange = (e) => {
        const id = e.target.value
        selected_wallet = wallets.find(el => el.id === id)
    }

    total_inp.onkeyup = (e) => {
        const val = e.target.value
        console.log(selected_wallet);
        if(+val > +selected_wallet.balance) {
            e.target.style.border = "2px solid red"
            h1.classList.add('error')
        } else {
            e.target.style.border = "2px solid blue"   
            h1.classList.remove('error')
            patchData('/wallets/' + selected_wallet.id, {balance: `${selected_wallet.balance - val}`} )
        }

    }



    form.onsubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(form);
        const transaction = {
            id: Math.random(),
            wallet: formData.get("wallet"),
            category: formData.get("category"),
            description: formData.get("description"),
            total: formData.get("total"),
            created_at: new Date().toLocaleTimeString(),
            updated_at: new Date().toLocaleTimeString(),
        };

        if(h1.className == 'error'){
            toaster('You dont have enough money', 'error')
            return
        } 
                
        const {wallet, category, description, total} = transaction
        if(wallet !== '' && category !== '' && description !== '' && total !== '' ){
            postData('/transactions', transaction)
                .then(res => {
                    if(res.status === 200 || res.status === 201) {
                        location.assign('../transactions/')
                    }
                })
        }
            
            }
})