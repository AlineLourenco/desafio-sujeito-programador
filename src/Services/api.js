import axios from "axios";

export const key = "c4689ed5b7535213290e7e7069387c16e0876b47";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;



