import { reload } from "/modules/cards_reload/ui.js";
import { createHeader } from "/modules/index.js";
let body = document.querySelector('.header')
createHeader(body)
let rel = document.querySelector('.reload')
let array = [
    {
        type: 'Visa',
        Money: 'RUB',
        background: 'linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)'
    },
    {
        type: 'Visa',
        Money: 'RUB',
        background: 'linear-gradient(84.37deg, #5F0A87 2.27%, #A4508B 92.26%)'
    },
    {
        type: 'Visa',
        Money: 'RUB',
        background: 'linear-gradient(84.37deg, #20BF55 2.27%, #01BAEF 92.26%)'
    },
    {
        type: 'Visa',
        Money: 'RUB',
        background: 'linear-gradient(84.37deg, #380036 2.27%, #0CBABA 92.26%)'
    }
]
reload(array, rel)