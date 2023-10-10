import axios from "axios"

const apiCall = async (
    method,
    auth,
    url,
    payload
    ) => {
    let headers
    (auth) ? headers = {
        'authentication_token': auth
    } : headers = {'authentication_token': ''}
    
    try {
        const run = (method === 'GET') ? axios.get(url, {headers})
        .then(res => {
            return {data: res.data, status: res.status}
        })
        : (method === 'POST') ? axios.post(url, payload, {headers})
        .then(res => {
            return {data: res.data, status: res.status}
        })
        : (method === 'PATCH')  ? axios.patch(url, payload, {headers})
        .then(res => {
            return {data: res.data, status: res.status}
        })
        : (method === 'DELETE') ? axios.delete(url)
        .then(res => {
            return {data: res.data, status: res.status}
        })
        : Error('This Method Type is not Supported')

        return run
    } catch (error) {
       return error
    }
}

export default apiCall