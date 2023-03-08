import { useState } from "react"
import './AdminSignUp.css'

const AdminSignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const newAdmin = {email, password, confirmPassword}

  return (
    <section className="adminSignUp page">
      <div></div>
      <div id="adminSignUp">
        <h2>Sign Up as Admin</h2>
        <form>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email"/>
          <input onChange={(e) => setPassword(e.target.value)} type="email" placeholder="Enter Password"/>
          <input onChange={(e) => setConfirmPassword(e.target.value)} type="email" placeholder="Confirm Password"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </section>
  )
}

export default AdminSignUp
