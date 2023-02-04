import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="notFound">
      <div id="norFoundDiv"><img src="/404Image.jpg" className="notFoundImage"/></div>
      <img className="nfImage nfi-1" src="/circle.png" alt=""/>
      <img className="nfImage nfi-2" src="/circle-1.png" alt=""/>
      <img className="nfImage nfi-3" src="/new-moon.png" alt=""/>
      <img className="nfImage nfi-4" src="/circle.png" alt=""/>
      <h1>Error. Page Not Found</h1>
      <div className="nfButtons">
        <Link to="/" className="home">Home</Link>
      </div>
    </section>
  )
}

export default NotFound;
