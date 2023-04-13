import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { logout } from '../redux/features/user';
import './Header.css';

const Header = () => {
  const user = useSelector(state => state.user)
  const is_logged_in = useSelector(state => state.user.login)

  const dispatch = useDispatch()

  const exit = () => {
    dispatch(logout())
    if (!is_logged_in) return <Navigate to="/login"/>
  }

  return (
    <>
    <header>
      <div>
        <div id="logo_img">
          <img src="/airplane.png" alt="logo" id='image'/>
        </div>
        <h2 className="brand">Sollyverse</h2>
      </div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/countries">Discover</Link></li>
        <li><Link to="/">Service</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
        <ul className="header_buttons">
          {
          !is_logged_in ?
            <>
              <Link to="/login" className="button login">Login</Link>
              <Link to="/register" className="button register">Register</Link>
            </>
            :
            <Link onClick={() => exit()} className="button logout">Logout</Link>
          }
      </ul>
    </header>
    <Outlet />
    </>
  )
}

export default Header;
