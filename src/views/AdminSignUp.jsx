import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { signUp } from "../redux/features/apiCalls/admin"
import './AdminSignUp.css'

const AdminSignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch()

  const newAdmin = {email, password, confirmPassword}

  return (
    <section className="adminSignUp">
      <div>
        <div id="admin_register_image">
          <img src="/admin_register.jpg" alt="admin signup"/>
        </div>
      </div>
      <div id="adminSignUp">
        <form>
          <h2>Admin Sign Up</h2>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email"/>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"/>
          <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password"/>
          <input onClick={() => dispatch(signUp(newAdmin))} type="submit" value="Submit"/>
          <p>Already an Admin ,<Link to="/admin/login">Sign in</Link></p>
        </form>
      </div>
    </section>
  )
}

export default AdminSignUp
