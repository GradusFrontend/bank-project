import { getData, getSymbols } from "../../modules/http"
import { createHeader, reload } from "../../modules/ui"
createHeader()

let wrap = document.querySelector('.reload_2')
let user = JSON.parse(localStorage.getItem('user'))
getData('/wallets?user_id=' + user.id)
    .then(res => {
        if(res.status === 201 || res.status === 200) {
            reload(res.data, wrap)
        }
    })

