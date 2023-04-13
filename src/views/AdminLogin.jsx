import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from '../redux/features/apiCalls/admin'
import './AdminLogin.css'

const AdminLogin = () => {
  let is_logged_in = useSelector(state => state.admin.user.logged_in)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const payload = {email, password}
  const error = useSelector(state => state.admin.user.error)

  return (
    <section id="adminLogin">
      <div>
      <div id="admin_login_image">
        <img src="/admin_login.jpg" alt="admin login" />
      </div>
      </div>
        <div className="adminLogin">
        <form>
          <h1>Admin Login</h1>
          {(error.length !== 0) && <p id="admin_login_error">{error}</p>}
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email"/>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"/>
          <input onClick={(e) => {
            e.preventDefault()
            dispatch(login(payload)).then((res) => {
              if (res.payload.admin) is_logged_in = true
              if (is_logged_in) navigate("/admin/dashboard")
              })
            }} type="submit" value="Login"/>
          <Link>Forgot Password?</Link>
          <p>Become an <Link id="adminSign" to="/admin/register">Admin</Link></p>
        </form>
      </div>
    </section>
  )
}

export default AdminLogin
