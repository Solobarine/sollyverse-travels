import { useSelector } from "react-redux"
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter"
import './css/Admin.css'

const Admin = () => {
  const {user} = useSelector(state => state.admin)

  return (
    <section className="admin_profile">
      <h2>Admin Profile</h2>
      <div className="admin"/>
      <div className="admin_details">
      <div>
        <h3>Personal Details</h3>
        <div>
          <label htmlFor="">First Name</label>
          <p>{capitalizeFirstLetter(user.firstName)}</p>
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <p>{capitalizeFirstLetter(user.lastName)}</p>
        </div>
        <div>
          <label htmlFor="">Admin ID</label>
          <p>{user._id}</p>
        </div>
      </div>
      <div>
        <h3>Contact Details</h3>
        <div>
          <label htmlFor="">Nationality</label>
          <p>{user.countryOfOrigin}</p>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <p>{user.email}</p>
        </div>
        <div>
          <label htmlFor="">Address</label>
          <p>{user.addressOne}</p>
        </div>
      </div>
      <div>
        <h3>Others</h3>
        <div>
          <label htmlFor="">Country of Residence</label>
          <p>{user.countryOfResidence}</p>
        </div>
        <div>
          <label htmlFor="">State</label>
          <p>{user.state}</p>
        </div>
        <div>
          <label htmlFor="">City</label>
          <p>{user.city}</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Admin
