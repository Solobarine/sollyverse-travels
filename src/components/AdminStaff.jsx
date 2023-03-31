import { useDispatch, useSelector } from 'react-redux'
import Register from "./AdminRegister"
import './AdminStaff.css'

const AdminStaff = () => {
  const staff = useSelector((state) => state.staff.staff)
  const employee = useSelector(state => state.staff.singleStaff)
  console.log(staff)
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
