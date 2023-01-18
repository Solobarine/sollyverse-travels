import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="pitch">
        <div className="firm">
        <img src="/airplane.png" alt="Company Logo" id='logo'/>
        <h3 className="title">Sollyverse</h3>
        </div>
        <p>We help you find the best place for your vacation destination, take a break from your work, relax and enjoy</p>
        <div className="socials">
          <a href=""><img src="/facebook-s.png" alt="Facebook"/></a>
          <a href=""><img src="/linkedin.png" alt="LinkedIn"/></a>
          <a href=""><img src="/gitlab.png" alt="GitLab"/></a>
          <a href=""><img src="/gmail.png" alt="Gmail"/></a>
          <a href=""><img src="/github-sign.png" alt="Github"/></a>
        </div>
      </div>
      <ul className="about ul">About
        <li>Desinations</li>
        <li>Five-Star Hotel</li>
        <li>Restaurant</li>
      </ul>
      <ul className="company ul">Company
        <li>About Us</li>
        <li>Help Center</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className="links ul">Links
        <li>Discover</li>
        <li>Service</li>
        <li>Contact Us</li>
      </ul>
      <div className="copy">
      <hr/>
      <p>Copyright &copy; Sollyverse 2022. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;
