let forma = document.forms.form
let url = 'http://localhost:8080/users'
let htm = 'http://localhost:5173/'

forma.onsubmit = (e) => {
    e.preventDefault()

    // let password = {
    //     name: new FormData(forma).get('password')
    // }

    // if(password.name === xhr[5]) {
    //     alert("good")
    // }

    location.assign(htm)

}

// const xhr = new XMLHttpRequest()

// xhr.open("GET", url)
// xhr.onload = () => {
//     console.log(JSON.parse(xhr.response))
// }
// xhr.send()