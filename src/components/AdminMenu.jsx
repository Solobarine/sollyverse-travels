import {Link} from 'react-router-dom'
import { useRef } from 'react'
import { toggleMenu } from '../effects'
import "./AdminMenu.css"

const AdminMenu = () => {
  const button = useRef()

  return (
    <section className="adminMenu">
      <ion-icon
        ref={button}
        onClick={() => {
          const containers = document.querySelectorAll('.page')
          const links = document.querySelectorAll('.menu_link')
          toggleMenu(button, containers, links)
        }}
        className="admin_menu"
        name="chevron-forward-circle" 
      />
        <div className="admin_image">
          <img src="/logo/account.png" alt="Admin"/>
        </div>
      <Link className='menu_link' to="/admin">
        <i className="fa-solid fa-house-user"/>
        <p>Dashboard</p>
      </Link>
      <Link className='menu_link' to='/admin/profile'>
        <i className="fa-solid fa-address-card"/>
        <p>Profile</p>
      </Link>
      <Link className='menu_link' to="/admin/customers">
        <i className="fa-solid fa-user"/>
        <p>Customers</p>
      </Link>
      <Link className='menu_link' to="/admin/staff">
        <i className="fa-solid fa-clipboard-user"/>
        <p>Staff</p>
      </Link>
      <Link className='menu_link' to="/admin/destination">
        <i className="fa-solid fa-map-location-dot"/>
        <p>Destinations</p>
      </Link>
      <Link className='menu_link' to="/admin/reservations">
        <i className="fa-solid fa-clipboard"/>
        <p>Reservations</p>
      </Link>
      <Link className='menu_link' to="/admin/reviews">
        <i className="fa-solid fa-comments"/>
        <p>Reviews</p>
      </Link>
      <Link className='menu_link' to="/admin/message">
        <i className="fa-solid fa-message"/>
        <p>Messages</p>
      </Link>
      <Link className='menu_link' to="/admin/settings ">
        <i className="fa-solid fa-gears"/>
        <p>Settings</p>
      </Link>
      <Link className='menu_link' to="/admin/login">
        <i className="fa-solid fa-right-from-bracket"/>
        <p>Logout</p>
      </Link>
    </section>
  )
}

export default AdminMenu
