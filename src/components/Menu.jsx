import {useRef} from 'react'
import './Menu.css'

const Menu = () => {
  const menu = useRef()
  const sun = useRef()
  const moon = useRef()
  

  const toggleMenu = (e) => {
    console.log('clicking')
    e.target.classList.toggle('close')
    menu.current.classList.toggle('closeMenu')
  }

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
      <i onClick={toggleMenu} className="fa-solid fa-circle-chevron-right menuToggle"></i>
      <ul className="menuNav">
        <li className="nav-links">
          <i className="fa-solid fa-house"></i>
          <p>Dashboard</p>
        </li>
        <li className="nav-links">
          <i className="fa-solid fa-plane-departure"></i>
          <p>Discover</p>
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
          <i className="fa-solid fa-gear"></i>
          <p>Settings</p>
        </li>
        <li className="nav-links">
          <i className="fa-solid fa-door-open"></i>
          <p>Logout</p>
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
