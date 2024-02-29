let btn = document.querySelector('button')

let info = JSON.parse(localStorage.getItem("user"))

document.getElementById('e').value = info.email

btn.onclick = () => {
    sign_in(info)
}

function sign_in(about) {
    let pass_inp = document.getElementById('p').value
    
    if(pass_inp === about.password){
        window.location.href = "../../index.html"
    }else{
        alert("Неправильный пароль!")
    }
}