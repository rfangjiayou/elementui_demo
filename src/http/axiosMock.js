import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_ENDPOINT || ''
})

instance.interceptors.request.use(config => {
    // Do something before request is sent
    return config
})

instance.interceptors.response.use(
    response => {
        // Do something with valid response
        return response
    },
    error => {
        // handle exceptions returned from server
        return error
    }
)

export default instance
