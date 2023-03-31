import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AdminMail.css'

const AdminMail = () => {
  const mail = useSelector((state) => state.adminMessage)

  const [receiver, setReceiver] = useState()
  const [message, setMessage] = useState()

  return (
    <section className="adminMail">
      <div>
        <button type="submit">Send Email</button>
        <button type="submit">View Emails</button>
      </div>
      <div id='adminMessage'>
        <form action="">
          <h2>Create Email</h2>
          <input onChange={(e) => setReceiver(e.target.value)} type="email" placeholder='to'/>
    <textarea onChange={(e) => setMessage(e.target.value)} name="message" placeholder='Enter Message'></textarea>
          <input type="submit" value="Send Email"/>
        </form>
        <div></div>
      </div>
    </section>
  )
}

export default AdminMail
