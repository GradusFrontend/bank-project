import {getData, getSymbols} from "../../modules/http";
import {createHeader, getRGB, reload} from "../../modules/ui";
import vanilla_tilt from 'vanilla-tilt'
createHeader()
const user = JSON.parse(localStorage.getItem('user'))
let recent_card = JSON.parse(localStorage.getItem('recent_card'))
let logo = document.querySelector('.logo')
logo.style.background = `linear-gradient(84.37deg, ${getRGB() + '2.27%'}, ${getRGB() +
        '92.26%'})`
let selection = document.querySelector('select')
getSymbols().then((symbols) => {
    for (let key in symbols) {
        let opt = new Option(`${key}`, key)

        selection.append(opt)
    }
})
let reloado = document.querySelector('.reload')
getData('/wallets?id=' + recent_card.id).then(res => {
    if (res.status === 201 || res.status === 200) {
        reload(res.data, reloado)
        let card = document.querySelector('.card_visa')
            card.onclick = null
            card.style.width = '400px'
            card.style.height = '250px'
            VanillaTilt.init(card), {
                reverse: false,
                max: 55,
                speed: 300,
                glare: true,
                maxGlare: .5,
                scale: 1.2
            }
        }
    })
    let opt = document.querySelector('#one')
    opt.innerHTML = recent_card.currency
    logo.innerHTML = `
   <h2 class="letter">${JSON
        .stringify(recent_card.name)
        .slice(1, 2)}</h2>
`
    const form = document.forms.buy
    form.onsubmit = (e) => {
        e.preventDefault()
    }
    const form_2 = document.forms.clarify
    form_2.onsubmit = (e) => {
        e.preventDefault()
    }