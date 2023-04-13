export const dom = "http://localhost:3005"

const auth = localStorage.getItem("authentication_token")
export const api = async (method, url, payload) => {

    const options = {
      method,
      headers: {
        'Content-type': 'application/json',
        'authentication_token': auth
       },
    }
  
    console.log(payload)
  
    const response = await fetch(url, options).then(data => data.json()).catch(error => console.error(error))
    console.log(response)
    return response
  }