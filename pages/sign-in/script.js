let form = document.forms.data

let url = 'http://localhost:8080/users'

form.onsubmit = (e) => {
    e.preventDefault()

    let fm = new FormData(form)

    const data = {}

    fm.forEach((val, key) => data[key] = val)


    fetch(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                location.assign("./index-sign.html")
            } else {
                alert("Error")
            }
        })
}




const xhr = new XMLHttpRequest()

xhr.open("GET", url)
xhr.onload = () => {
    console.log(JSON.parse(xhr.response))
}
xhr.send()
