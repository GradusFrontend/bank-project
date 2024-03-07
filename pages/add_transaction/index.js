import { getData, getSymbols, postData } from "../../modules/http";
let form = document.forms.namedItem('transactionAdd')
let user = JSON.parse(localStorage.getItem('user'))
let balance_of_wallet = await getData('/wallets?user_id=' + user.id)
let in_the_end = []
form.onsubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    let  inf_trn =  {
        id: Math.random(),
        wallet: formData.get("wallet"),
        currency: formData.get("currency"),
        category: formData.get("category"),
        description: formData.get("description"),
        money_to_get: +formData.get("amount"),
        created_at: new Date().toLocaleTimeString(),
        updated_at: new Date().toLocaleTimeString(),
    }
   balance_of_wallet.data.find(item  => {
       if(item.name === inf_trn.wallet && item.currency === inf_trn.currency){
           inf_trn.total = +item.balance - inf_trn.money_to_get
       }
   })
   postData('/transactions', inf_trn)
}
let select = document.querySelector('select')
getSymbols()
.then((symbols) => {
    for(let key in symbols) {
        let opt = new Option(`${key} - ${symbols[key]}`, key)
        select.append(opt)
    }
})
