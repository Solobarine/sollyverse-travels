const auth = localStorage.getItem("authentication_token")

const sendData = async (method, url, payload) => {

    const options = {
      method,
      headers: {
        'Content-type': 'application/json',
        'authentication_token': auth
       },
      body: JSON.stringify(payload)
    }
    try {
        const response = await fetch(url, options)
        console.log(response)
        const data = await response.json()
        const { status, ok } = response
        console.log(data)
        return {status, ok, data}
    } catch(error) {
      console.log(error)
      return { ok: false, data: { error: error.message } }
    }
  }

  export default sendData