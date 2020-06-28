import axios from '@/http/axios.js'

export async function getUserInfo() {
    const response = await axios.get('/api/header/user-info')
    return response.data
}