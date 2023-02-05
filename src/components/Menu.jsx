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

  const hover = (e) => {
    const icon = e.target.children[0].children
    icon[0].style.color = '#fff'
    icon[0].style.transition = '.4s ease'
    icon[1].style.color = '#fff'
    icon[1].style.transition = '.4s ease'
  }

  const exitHover = (e) => {
    const icon = e.target.children[0].children
    icon[0].style.color = '#444'
    icon[1].style.color = '#444'
  }

  return (
    <section ref={menu} className='menu'>
      <i className="fa-solid fa-circle-chevron-right menuToggle"></i>
      <ul className="menuNav">
        <li onMouseEnter={hover} onMouseLeave={exitHover} className="nav-links">
          <Link to="/account/dashboard">
          <i className="fa-solid fa-house"></i>
          <p>Dashboard</p>
          </Link>
        </li>
        <li onMouseEnter={hover} onMouseLeave={exitHover} className="nav-links">
          <Link to="/">
          <i className="fa-solid fa-user"></i>
          <p>Profile</p>
          </Link>
        </li>
        <li onMouseEnter={hover} onMouseLeave={exitHover} className="nav-links">
          <Link to="/countries">
          <i className="fa-solid fa-plane-departure"></i>
          <p>Discover</p>
          </Link>
        </li>
        <li onMouseEnter={hover} onMouseLeave={exitHover} className="nav-links">
          <Link to="/account/favourite">
          <i className="fa-regular fa-thumbs-up"></i>
          <p>Favourites</p>
        </Link>
        </li>
        <li onMouseEnter={hover} onMouseLeave={exitHover} className="nav-links">
          <Link to="/account/messages">
          <i className="fa-solid fa-envelope"></i>
          <p>Messages</p>
        </Link>
        </li>
        <li onMouseEnter={hover} onMouseLeave={exitHover} className="nav-links">
          <Link to="/account/reservations">
          <i className="fa-solid fa-wallet"></i>
          <p>Reservations</p>
        </Link>
        </li>
        <li onMouseEnter={hover} onMouseLeave={exitHover} className="nav-links">
          <Link to="/account/settings">
          <i className="fa-solid fa-gear"></i>
          <p>Settings</p>
          </Link>
        </li>
        <li onMouseEnter={hover} onMouseLeave={exitHover} className="nav-links">
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
