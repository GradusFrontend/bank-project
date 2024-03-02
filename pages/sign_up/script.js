import axios from "axios"
import { postData, getData } from "../../modules/http"
import { toaster } from "../../modules/ui"
const form = document.forms.namedItem('sign_up')
form.onsubmit = (e) => {
    e.preventDefault()
    let user = {}
    const fm = new FormData(e.target)
    fm.forEach((val, key) => user[key] = val)
    const {email, name, surname, password} = user
    if(email && name && surname && password ){
        getData('/users?email=' + email)
        .then(res => {
            if(res.data.length > 0){
                toaster('We have this kind of account')
                return
            }
             postData('/users', user)
             .then(res => {
                if(res.status === 200 || res.status === 201){
                    location.assign('../enter/')
                    localStorage.setItem('name', res.data.name)
                    localStorage.setItem('suname', res.data.surname)
                    localStorage.setItem('email', res.data.email)
                    localStorage.setItem('password', res.data.password)
                }
             })
        })
    }
}