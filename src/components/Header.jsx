import './Header.css'

const Header = () => {
  return (
    <header>
      <img src="/airplane.png" alt="logo" id='image'/>
      <h2 className="brand">Sollyverse</h2>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Discover</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      <input type="submit" value="Login" className="button login"/>
      <input type="submit" value="Register" className="button register"/>
    </header>
  )
}

export default Header;
