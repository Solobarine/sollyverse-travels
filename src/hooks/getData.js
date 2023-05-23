export const dom = "http://localhost:3005"

const auth = localStorage.getItem("authentication_token")

const  getData = async (method, url, payload) => {

    const options = {
      method,
      headers: {
        'Content-type': 'application/json',
        'authentication_token': auth
       },
    }
  
    console.log(payload)
  
    try {
      const response = await fetch(url, options)
      console.log(response)
      const { status, ok } = response
      const data = await response.json()
      console.log(data)
      return {status, ok, data}
    } catch(error) {
      return { ok: false, data: { error: `Server down. Try again later` } }
    }
  }

  export default getData