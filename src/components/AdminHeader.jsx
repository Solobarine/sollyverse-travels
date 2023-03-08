import {Outlet} from 'react-router-dom'
import './AdminHeader.css'

const AdminHeader = () => {
  return (
    <>
      <nav id="adminHeader">
        <ul>
          <li><img src="/airplane.png" alt="sollyverse"/></li>
          <li>Sollyverse</li>
        </ul>
        <ul>
          <li>Customers</li>
          <li>Staff</li>
          <li>Messages</li>
        </ul>
        <ul>
          <li>Hello &nbsp;<span>Josh</span></li>
          <li>Logout</li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default AdminHeader
