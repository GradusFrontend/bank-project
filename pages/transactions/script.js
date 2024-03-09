import {getData} from "../../modules/http";
import {createHeader, reloadTransactions} from "../../modules/ui";

const user = JSON.parse(localStorage.getItem('user'))

const tbody = document.querySelector('tbody')
createHeader()
let fg = await getData('/transactions')
reloadTransactions(fg.data, tbody)

getData('/transactions?user_id=' + user.id).then(res => {
    reloadTransactions(res.data, tbody)
})
