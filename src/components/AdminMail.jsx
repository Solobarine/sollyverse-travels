import './AdminMail.css'

const AdminMail = () => {
  return (
    <section className="adminMail">
      <div>
        <button type="submit">Send Email</button>
        <button type="submit">View Emails</button>
      </div>
      <div id='adminMessage'>
        <form action="">
          <h2>Create Email</h2>
          <input type="email" placeholder='to'/>
          <textarea name="message" placeholder='Enter Message'></textarea>
          <input type="submit" value="Send Email"/>
        </form>
        <div></div>
      </div>
    </section>
  )
}

export default AdminMail
