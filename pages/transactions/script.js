import { getData } from "../../modules/http";
import { createHeader, reloadTransactions } from "../../modules/ui";

const tbody = document.querySelector('tbody')

createHeader()
let fg = await getData('/transactions')
reloadTransactions( fg.data, tbody)