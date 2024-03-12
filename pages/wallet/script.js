import { createHeader, toaster } from "../../modules/ui";
import { getData, getSymbols } from "../../modules/http"
import axios from "axios";
import { Chart, registerables} from 'chart.js';
import moment from "moment";
Chart.register(...registerables);

let wall = location.search.split('=').at(-1)

let name = document.querySelector('.front h2')
let balance = document.querySelector('.front h1')
let name_back = document.querySelector('.back h2')
let currency = document.querySelector('.back h1')

let card = document.querySelector('.card')
let select = document.querySelector('select')
let converBtn = document.querySelector(".convert button")
let curr_w

createHeader()

getSymbols()
    .then((symbols) => {
        for (let key in symbols) {
            let opt = new Option(`${key} - ${symbols[key]}`, key)

            select.append(opt)
        }
    })


getData('/wallets/' + wall)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            name.innerHTML = res.data.name
            balance.innerHTML = "Баланс" + ":" + " " + `${res.data.balance} ${res.data.currency}`
            name_back.innerHTML = res.data.name
            currency.innerHTML = res.data.currency
            curr_w = res.data
        } else {
            toaster(e.message, 'error')
        }
    })

converBtn.onclick = async () => {
    try {
        const res = await axios.get(`https://api.apilayer.com/fixer/convert?to=${select.value}&from=${curr_w.currency}&amount=${curr_w.balance}`, {
            headers: {
                apikey: import.meta.env.VITE_API_KEY
            }
        })

        if (res.status === 200 && res.status === 201) {
            console.log(res);
        }
    } catch (e) {
        toaster(e.message, "error")
    }
}

let first = []
let second = []

getData('/transactions?wallet_id=' + wall)
    .then(res => {
        console.log(res);
        if(res.status === 200 || res.status === 201){
            res.data.forEach(item => {

                first.push(moment(item.created_at.split(',')[0]).format('MMM Do YY'))
                second.push(item.total)
            });

            createChart()
        }
    })

const ctx = document.getElementById('myChart');

function createChart() {
    console.log(first, second);
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: first,
            datasets: [{
                label: 'График Транзакций',
                data: second,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}