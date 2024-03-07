import { createHeader, reloadTransactions } from "../../modules/ui";
import { getData } from "../../modules/http"

const tbody = document.querySelector('tbody')

createHeader()

getData('/transactions')
    .then(res => {
        if (res.status === 201 || res.status === 200) {
            let id = res.data.filter(tran => tran.user_id === user.id)
            reloadTransactions(id, tbody, "full")
        }
    })

