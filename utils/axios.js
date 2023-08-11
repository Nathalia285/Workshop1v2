import axios from "axios"
import { environment } from "./environment"
const customFetch = axios.create({
    baseURL: environment.URL,
})
export default customFetch