import Register from "./AdminRegister"
import './AdminStaff.css'

const AdminStaff = () => {
  return (
    <section id="staff">
      <div>
        <button>View Staff</button>
        <button>Register Staff</button>
        <button>Update Staff Bio</button>
      </div>
      <div>
        <Register />
      </div>
    </section>
  )
}

export default AdminStaff
