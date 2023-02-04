import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src="/airplane.png" alt="logo" id='image'/>
      <h2 className="brand">Sollyverse</h2>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/countries">Discover</Link></li>
        <li><Link to="/">Service</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Link to="/login" className="button login">Login</Link>
      <Link to="/register" className="button register">Register</Link>
    </header>
  )
}

export default Header;
