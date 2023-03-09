import {Outlet, Link} from 'react-router-dom'
import './AdminHeader.css'

const AdminHeader = () => {
  return (
    <>
      <nav id="adminHeader">
        <ul>
          <li><Link to="/"><img src="/airplane.png" alt="sollyverse"/></Link></li>
          <li><Link to="/">Sollyverse</Link></li>
        </ul>
        <ul>
          <li><Link to="/admin/destination">Destination</Link></li>
          <li><Link to="/admin/staff">Staff</Link></li>
          <li><Link to="/admin/message">Messages</Link></li>
        </ul>
        <ul>
          <li>Hello &nbsp;<span>Josh</span></li>
          <li><Link to="/admin/login">Logout</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default AdminHeader
