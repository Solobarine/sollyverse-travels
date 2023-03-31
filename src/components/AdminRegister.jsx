import { useState } from "react"
import { useDispatch } from "react-redux"
import { create } from "../redux/features/apiCalls/staff"

const AdminRegister = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [countryOfOrigin, setCountryOfOrigin] = useState("")
  const [gender, setGender] = useState("")
  const [addressOne, setAddressOne] = useState("")
  const [addressTwo, setAddressTwo] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [countryOfResidence, setCountryOfResidence] = useState("")
  const [zipCode, setZipCode] = useState("")

  const dispatch = useDispatch()
  const auth = localStorage.getItem("admin_auth_token")

  const employee = {firstName, lastName, email, phoneNumber, dateOfBirth,
    countryOfOrigin, gender, addressOne, addressTwo, state, city, countryOfResidence, zipCode}

  return (
    <section id="adminRegister">
      <form action="">
        <h1>Register an Employee</h1>
        <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter First Name"/>
        <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter Last Name"/>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email"/>
        <input onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Enter Phone Number"/>
        <input onChange={(e) => setDateOfBirth(e.target.value)} type="text" placeholder="Enter Date of Birth"/>
        <input onChange={(e) => setCountryOfOrigin(e.target.value)} type="text" placeholder="Enter Country of Origin"/>
        <input onChange={(e) => setGender(e.target.value)} type="text" placeholder="Enter Gender"/>
        <input onChange={(e) => setAddressOne(e.target.value)} type="text" placeholder="Enter Address"/>
        <input onChange={(e) => setAddressTwo(e.target.value)} type="text" placeholder="Enter Address Two"/>
        <input onChange={(e) => setState(e.target.value)} type="text" placeholder="Enter State"/>
        <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter City"/>
        <input onChange={(e) => setCountryOfResidence(e.target.value)} type="text" placeholder="Enter Country of Residence"/>
        <input onChange={(e) => setZipCode(e.target.value)} type="text" placeholder="Enter Zip Code"/>
        <input onClick={() => dispatch(create(auth, employee))} type="submit" value="Add Employee"/>
      </form>
    </section>
  )
}

export default AdminRegister
