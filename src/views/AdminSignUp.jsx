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
    <section className="adminSignUp page shrinkMenu">
      <div></div>
      <div id="adminSignUp">
        <h2>Sign Up as Admin</h2>
        <form>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email"/>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"/>
          <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password"/>
          <input onClick={() => dispatch(signUp(auth, newAdmin))} type="submit" value="Submit"/>
        </form>
        <p>Already an Admin ,<Link to="/admin/login">Sign in</Link></p> 
      </div>
    </section>
  )
}

export default AdminSignUp
