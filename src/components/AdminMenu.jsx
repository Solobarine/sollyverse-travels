import {Link} from 'react-router-dom'
import "./AdminMenu.css"

const AdminMenu = () => {
  return (
    <section className="adminMenu">
      <ion-icon className="admin_menu" name="chevron-forward-circle" />
      <h3>Admin Portal</h3>
      <Link to="/admin">
        <i className="fa-solid fa-house-user"/>
        <p>Dashboard</p>
      </Link>
      <Link to="/admin/customers">
        <i className="fa-solid fa-user"/>
        <p>Customers</p>
      </Link>
      <Link to="/admin/staff">
        <i className="fa-solid fa-clipboard-user"/>
        <p>Staff</p>
      </Link>
      <Link to="/admin/destination">
        <i className="fa-solid fa-map-location-dot"/>
        <p>Destinations</p>
      </Link>
      <Link to="/admin/reservations">
        <i className="fa-solid fa-clipboard"/>
        <p>Reservations</p>
      </Link>
      <Link to="/admin/reviews">
        <i className="fa-solid fa-comments"/>
        <p>Reviews</p>
      </Link>
      <Link to="/admin/message">
        <i className="fa-solid fa-message"/>
        <p>Messages</p>
      </Link>
      <Link to="/admin/settings ">
        <i className="fa-solid fa-gears"/>
        <p>Settings</p>
      </Link>
      <Link to="/admin/login">
        <i className="fa-solid fa-right-from-bracket"/>
        <p>Logout</p>
      </Link>
    </section>
  )
}

export default AdminMenu
