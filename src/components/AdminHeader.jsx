import { useDispatch, useSelector } from 'react-redux'
import {Outlet, Link, Navigate} from 'react-router-dom'
import { logout } from '../redux/features/adminReducer/admin'
import './AdminHeader.css'

const AdminHeader = () => {
  const is_logged_in = useSelector(state => state.admin.user.logged_in)
  const dispatch = useDispatch()
  
  const exit = () => {
    dispatch(logout())
    if (!is_logged_in) return <Navigate to="/login"/>
  }

  return (
    <>
      <nav id="adminHeader">
        <ul id='links_1'>
          <li><Link to="/"><img src="/airplane.png" alt="sollyverse"/></Link></li>
          <li><Link to="/">Sollyverse</Link></li>
        </ul>
        <ul id='links_2'>
          <li><Link to="/admin/destination">Destination</Link></li>
          <li><Link to="/admin/staff">Staff</Link></li>
          <li><Link to="/admin/message">Messages</Link></li>
        </ul>
        <ul id='links_3'>
          {
            (!is_logged_in) ?
            <>
              <li><Link id='admin_register' to="/admin/register">Register</Link></li>
              <li><Link id='admin_login' to="/admin/login">Login</Link></li>
            </>
          :
            <li><Link id='admin_logout' onClick={() => exit()} to="/admin/login">Logout</Link></li>
          }
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default AdminHeader
