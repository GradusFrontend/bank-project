let email = localStorage.getItem('email')
let password = localStorage.getItem('password')
let form_2 = document.forms.enter
let a = document.querySelector('.main')
const link = 'http://localhost:8080/'
form_2.onsubmit = (e) => {
    e.preventDefault()
    let checking = {
        email: new FormData(form_2).get('email'),
        password: new FormData(form_2).get('password')
    }
    fetch(link + 'users')
.then(res => res.json())
.then(res => { 
    res.find(item => {
        if(item.email === checking.email && item.password === checking.password){
           window.location.assign('/')
        } else if( item.password !== checking.password) {
            alert('Check your password')
        } else if(item.email !== checking.email){
            alert('Check your email')
         } else if (item.email !== checking.email && item.password !== checking.password) {
            alert('Cannot find your account')
         }
    })
})
}