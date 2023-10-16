import './css/Contact.css';
import countryAsyncThunk from '../../redux/features/apiCalls/country';
import MapArea from './Map';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Contact = () => {
  const dispatch = useDispatch()
  const id = '6515e19c5a30e5c4f1224a5a'

  useEffect(() => {
    console.log('here');
    dispatch(countryAsyncThunk.showOne(id))
  }, [dispatch, id])
  const data = {lat: 4.8833,lon: 6.9845,zoom: 12}

  return (
    <section id="contactSection">
      <section className="contactOptions">
        <h1>Contact Us</h1>
        <div id="mapContainer">
          <MapArea props={data} />
        </div>
        <div className="reach">
          <div className="options sendMail">
            <i className="fa-solid fa-envelope"></i>
            <h3>Email Us</h3>
            <small>solobarine@gmail.com</small>
          </div>
          <div className="options call">
            <i className="fa-solid fa-phone"></i>
            <h3>Call Us</h3>
            <small>+234 903 208 3144</small>
          </div>
          <div className="options visitUs">
            <i className="fa-solid fa-map-location-dot"></i>
            <h3>Our Location</h3>
            <small>No 5 EastWood Avenue, Keagan Street, Derby County</small>
          </div>
        </div>
      </section>
      <section className="contactForm">
        <h5>Send Us A Message</h5>
        <h2>Do You have Any Questions?</h2>
        <form>
          <input type="text" id="fullName" placeholder="Enter Your Full Name"/>
          <input type="email" id="email" placeholder="Enter Your Email"/>
          <input type="number" id="phoneNo" placeholder="Enter Your Phone Number"/>
          <input type="text" id="subject" placeholder="Subject"/>
          <textarea id="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
          <input type="submit" value="Submit" id="submit"/>
        </form>
      </section>
    </section>
  )
}

export default Contact;
