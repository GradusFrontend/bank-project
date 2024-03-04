import { getData } from "../../modules/http"
import { createHeader, reload } from "../../modules/ui"
createHeader()

let user = JSON.parse(localStorage.getItem('user'))

let wrap_reload = document.querySelector('.reload')
let add = document.querySelector('.add')

getData('/wallets')
    .then(res => {
        if (res.status === 201 || res.status === 200) {
            let id = res.data.filter(wall => wall.user_id === user.id)
            reload(id, wrap_reload)
            wrap_reload.append(add)
        }
    })
