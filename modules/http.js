import axios from "axios";
import { toaster } from "./ui";

const baseUrl = 'http://localhost:8080'

export const getData = async (path) => {
        try{
            const res = await axios.get(baseUrl + path)
            return res
        }catch (e) {
            toaster(e.message)
        }
}
export const postData = async (path, body) => {
        try{
            const res = await axios.post(baseUrl + path, body)
            return res
        }catch (e) {
            toaster(e.message)
        }
}