import {useRef} from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  const menu = useRef()
  const sun = useRef()
  const moon = useRef()

  const toggleTheme = () => {
    console.log(menu)
    menu.current.classList.toggle('dark')
    if (menu.current.classList.contains('dark') ) {
      sun.current.classList.toggle('lumen')
      moon.current.classList.toggle('lumen')
    } else {
      moon.current.classList.toggle('lumen')
      sun.current.classList.toggle('lumen')
    }
  }

  return (
    <section ref={menu} className='menu'>
      <i className="fa-solid fa-circle-chevron-right menuToggle"></i>
      <ul className="menuNav">
        <li className="nav-links">
          <Link to="/account/dashboard">
          <i className="fa-solid fa-house"></i>
          <p>Dashboard</p>
          </Link>
        </li>
        <li className="nav-links">
          <i className="fa-solid fa-user"></i>
          <p>Profile</p>
        </li>
        <li className="nav-links">
          <Link to="/countries">
          <i className="fa-solid fa-plane-departure"></i>
          <p>Discover</p>
          </Link>
        </li>
        <li className="nav-links">
          <i className="fa-regular fa-thumbs-up"></i>
          <p>Favourites</p>
        </li>
        <li className="nav-links">
          <i className="fa-solid fa-envelope"></i>
          <p>Messages</p>
        </li>
        <li className="nav-links">
          <i className="fa-solid fa-wallet"></i>
          <p>Reservations</p>
        </li>
        <li className="nav-links">
          <Link to="/account/settings">
          <i className="fa-solid fa-gear"></i>
          <p>Settings</p>
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/login">
          <i className="fa-solid fa-door-open"></i>
          <p>Logout</p>
          </Link>
        </li>
      </ul>
      <div className="theme">
        <span className='icon'>
          <i ref={sun} className="fa-regular fa-sun lumen"></i>
          <i ref={moon} className="fa-regular fa-moon"></i>
        </span>
        <p className="mode">Dark Mode</p>
        <div id="switch">
          <div onClick={toggleTheme} className="toggle"></div>
        </div>
      </div>
    </section>
  )
}

export default Menu;
