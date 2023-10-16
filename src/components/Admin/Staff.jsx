import { useDispatch, useSelector } from 'react-redux'
import Register from "./Register"
import './css/Staff.css'

const Staff = () => {
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

export default Staff
