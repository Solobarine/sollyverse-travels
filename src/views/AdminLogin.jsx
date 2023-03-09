import { useState } from "react"
import { Link } from "react-router-dom"
import './AdminLogin.css'

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const user = {email, password}

  return (
    <section id="adminLogin" className="page">
      <div></div>
        <div className="adminLogin">
        <h1>Admin Login</h1>
        <form>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email"/>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"/>
          <input type="submit" value="Login"/>
          <Link>Forgot Password?</Link>
          <Link id="adminSign" to="/admin/register">Become an Admin</Link>
        </form>
      </div>
    </section>
  )
}

export default AdminLogin
