import { useDispatch, useSelector } from "react-redux"
import './Admin.css'

const Admin = () => {
  const admin = useSelector(state => state.admin)

  return (
    <section className="admin_profile">
      <h2>Admin Profile</h2>
      <div className="admin"/>
      <div className="admin_details">
      <div>
        <h3>Personal Details</h3>
        <div>
          <label htmlFor="">First Name</label>
          <p>Solly</p>
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <p>John</p>
        </div>
        <div>
          <label htmlFor="">Admin ID</label>
          <p>22341</p>
        </div>
      </div>
      <div>
        <h3>Contact Details</h3>
        <div>
          <label htmlFor="">Phone Number</label>
          <p></p>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <p></p>
        </div>
        <div>
          <label htmlFor="">Address</label>
          <p></p>
        </div>
      </div>
      <div>
        <h3>Others</h3>
        <div>
          <label htmlFor="">Nationality</label>
          <p></p>
        </div>
        <div>
          <label htmlFor="">State</label>
          <p></p>
        </div>
        <div>
          <label htmlFor="">City</label>
          <p></p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Admin
