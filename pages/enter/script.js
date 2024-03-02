import { postData, getData } from "../../modules/http"
import { toaster } from "../../modules/ui"
const form = document.forms.namedItem('enter')
form.onsubmit = (e) => {
    e.preventDefault()
    let user = {}
    const fm = new FormData(e.target)
    fm.forEach((val, key) => user[key] = val)
    const {email, password} = user
    if(email && password ){
        getData('/users?email=' + email)
        .then(res => {
            const [res_user] = res.data
            if(!res_user){
                toaster('Cannot find this account')
                return
            }
            if(res_user.password !== password){
                toaster('Uncorrect password')
                return
            }
            location.assign('/')
        })
    }
}