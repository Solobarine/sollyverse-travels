import './css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="pitch">
          <div className="firm">
            <img src="/airplane.png" alt="Company Logo" id='logo'/>
            <h3 className="title">Sollyverse</h3>
          </div>
          <p>We help you find the best place for your vacation destination, <br/>take a break from your work, relax and enjoy</p>
          <div className="socials">
            <a href="http://facebook.com/solomon.akpuru"><img src="/facebook-s.png" alt="Facebook"/></a>
            <a href="https://www.linkedin.com/in/solomon-akpuru"><img src="/linkedin.png" alt="LinkedIn"/></a>
            <a href="https://gitlab.com/solobarine"><img src="/gitlab.png" alt="GitLab"/></a>
            <a href="solobarine@gmail.com"><img src="/gmail.png" alt="Gmail"/></a>
            <a href="https://github.com/solobarine"><img src="/github-sign.png" alt="Github"/></a>
          </div>
        </div>
        <div id='footer_links'>
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
        </div>
      </section>
      <div className="copy">
      <hr/>
      <p>Copyright &copy; Sollyverse 2022. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;
