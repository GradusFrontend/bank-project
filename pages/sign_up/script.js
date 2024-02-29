let btn = document.querySelector('button')

btn.onclick = () => {
    storage()
}

function storage() {
    let name_inp = document.getElementById('n').value
    let email_inp = document.getElementById('e').value
    let surn_inp = document.getElementById('s').value
    let pass_inp = document.getElementById('p').value

    let user = {
        email: email_inp,
        name: name_inp,
        surname: surn_inp,
        password: pass_inp
    }

    if (user.email.trim().toLowerCase() !== "" && user.password.trim().toLowerCase() !== "" && user.surname.trim().toLowerCase() !== "" && user.name.trim().toLowerCase() !== "") {
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "../sign_in/index.html"
    }else{
        alert("Заполните всё!")
    }
}



