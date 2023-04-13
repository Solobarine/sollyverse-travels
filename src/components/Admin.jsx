import { useSelector } from "react-redux"
import './Admin.css'

const Admin = () => {
  const admin = useSelector(state => state.admin.user.value)

  return (
    <section className="admin_profile">
      <h2>Admin Profile</h2>
      <div className="admin"/>
      <div className="admin_details">
      <div>
        <h3>Personal Details</h3>
        <div>
          <label htmlFor="">First Name</label>
          <p>{`${admin.firstName[0].toUpperCase()}${admin.firstName.substring(1)}`}</p>
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <p>{`${admin.lastName[0].toUpperCase()}${admin.lastName.substring(1)}`}</p>
        </div>
        <div>
          <label htmlFor="">Admin ID</label>
          <p>{admin._id}</p>
        </div>
      </div>
      <div>
        <h3>Contact Details</h3>
        <div>
          <label htmlFor="">Phone Number</label>
          <p>{admin.phoneNumber}</p>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <p>{admin.email}</p>
        </div>
        <div>
          <label htmlFor="">Address</label>
          <p>{admin.addressOne}</p>
        </div>
      </div>
      <div>
        <h3>Others</h3>
        <div>
          <label htmlFor="">Nationality</label>
          <p>{admin.countryOfOrigin}</p>
        </div>
        <div>
          <label htmlFor="">State</label>
          <p>{admin.state}</p>
        </div>
        <div>
          <label htmlFor="">City</label>
          <p>{admin.city}</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Admin
