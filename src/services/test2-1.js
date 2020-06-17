import axios from '@/http/axios.js'

export async function getTableData() {
    const response = await axios.get('/api/test2-1/tablelist')
    return response.data
}