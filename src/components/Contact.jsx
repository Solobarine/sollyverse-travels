import './Contact.css';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import MapArea from './Map';
import {useRef} from 'react';

const Contact = () => {
  const data = {lat: 4.8833,lon: 6.9845,zoom: 12}
  return (
    <section id="contactSection">
      <section className="contactOptions">
        <h1>Contact Us</h1>
        <div className="reach">
          <div className="options visitUs">
            <i class="fa-solid fa-map-location-dot"></i>
            <h3>Our Location</h3>
            <p>No 5 EastWood Avenue, Keagan Street, Derby County</p>
          </div>
          <div className="options sendMail">
            <i class="fa-solid fa-envelope"></i>
            <h3>Email Us</h3>
            <p>solobarine@gmail.com</p>
          </div>
          <div className="options call">
            <i class="fa-solid fa-phone"></i>
            <h3>Call Us</h3>
            <p>+234 903 208 3144</p>
          </div>
        </div>
          <MapArea props={data}>
          </MapArea>
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
