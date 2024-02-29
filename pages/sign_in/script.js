export let email  = JSON.stringify(localStorage.getItem('email'))
export let password = JSON.stringify(localStorage.getItem('password'))
export let name_0  = JSON.stringify(localStorage.getItem('name'))
let surname = JSON.stringify(localStorage.getItem('surname'))
let form = document.forms.sign_up
const link = 'http://localhost:8080/'
form.onsubmit = (e) => {
    e.preventDefault()
    let user = {
        email: new FormData(form).get('email'),
        name: new FormData(form).get('name'),
        surname: new FormData(form).get('surname'),
        password: new FormData(form).get('password')
    }
    if(user.email !== '' && user.name !== '' && user.password !== ''){
        localStorage.setItem('email', user.email)
        localStorage.setItem('name', user.name)
        localStorage.setItem('surname', user.surname)
        localStorage.setItem('password', user.password)
        fetch(link + 'users', {
            method: 'post',
            body: JSON.stringify(user),
            headers:{
                "Content-Type": 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
        window.location.assign('../enter/')
    } else {
        alert('Error')
    }
}

console.log(email, name, surname, password);