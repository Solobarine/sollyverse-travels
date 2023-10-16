import {useEffect} from 'react';
import './css/Landing.css';
import { useLocation } from 'react-router-dom';

const Landing = () => {
  const location = useLocation()
  let i = 0
  const landingImages  = ['abu-dhabi.jpg', 'abu-dhabi-2.jpg', 'ankor-wat.png', 'c8.jpg', 'cartagena-1.jpg', 'thai.png', 'tokyo.jpeg', 'beach-0.jpg', 'beach-3.jpg']
  
  const displayImages = () => {
    const image = document.getElementById('destinationImages')

    if (image !== null) {
      if (i < landingImages.length - 1) {
        image.src = `/landing/${landingImages[i]}`
        i++
      } else {
        i = 0
      }
  
      setTimeout(displayImages, 3000)
    }

  }
  
  useEffect(() => {
    if (location.pathname === '/') {
      displayImages()
    }
  })

  return (
    <section className="landing">
      <section id="main">
        <img id='destinationImages' src="/landing/abu-dhabi.jpg" alt="Destinations to Explore"/>
      </section>
      <section id="sub-bar">
        <div id="facilities">
          <h4>Facilities</h4>
          <div>
            <div id="stream">
              <i className="fa-solid fa-droplet"></i>
              <small>Streaming</small>
            </div>
            <div id="wifi">
              <i className="fa-solid fa-wifi"></i>
              <small>Wifi</small>
            </div>
            <div id="eat">
              <i className="fa-solid fa-utensils"></i>
              <small>Restaurant</small>
            </div>
            <div id="bedroom">
              <i className="fa-solid fa-bed"></i>
              <small>Bedroom</small>
            </div>
          </div>
        </div>
        <div id="journey">
          <h2>Find your journey</h2>
          <img src="/landing/desert1.jpeg" alt="desert"/>
          <img src="/landing/mountain1.jpeg" alt="mountains"/>
          <img src="/landing/city1.jpeg" alt="cities"/>
          <img src="/landing/beach-front.jpg" alt="beaches"/>
        </div>
      </section>
      <section id="popular">
        <h2>The most popular</h2>
        <p>We have developed into a service that provides a better and more travel on any platform to help you enjoy your vacation. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem omnis fugiat ex sit soluta natus ducimus eos laboriosam itaque corporis perspiciatis sunt nulla repellendus facere labore, quidem, eaque ab?</p>
        <div className="popularStat">
        <div>
          <div className="popularImage"><i className="fa-solid fa-user-group"></i></div>
          <h3>100000+</h3>
          <p>Explorers</p>
        </div>
        <div>
          <div className="popularImage"><i className="fa-solid fa-paper-plane"></i></div>
          <h3>640+</h3>
          <p>Destinations</p>
        </div>
        <div>
          <div className="popularImage"><i className="fa-solid fa-ticket"></i></div>
          <h3>30000+</h3>
          <p>More Tips</p>
        </div>
      </div>
      </section>
      <section id="hotDestinations">
      </section>
      <section id="aboutUs">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quos at modi nam similique, nesciunt harum, neque esse voluptatibus natus deleniti saepe voluptas quasi quo suscipit reiciendis nisi distinctio! Similique!.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima quidem dolore aliquam corporis numquam rem molestiae voluptates totam mollitia.</p>
      </section>
      <section id="services">
      </section>
      <section className="partners">
        <img src="/sponsors/ferrari.svg" alt=""/>
        <img src="/sponsors/hilton.svg" alt=""/>
        <img src="/sponsors/lamborghini.svg" alt=""/>
        <img src="/sponsors/mastercard.svg" alt=""/>
        <img src="/sponsors/mercedes-benz.svg" alt=""/>
        <img src="/sponsors/oracle.svg" alt=""/>
        <img src="/sponsors/qatar-airways.svg" alt=""/>
        <img src="/sponsors/amd.svg" alt=""/>
      </section>
    </section>
  )
}

export default Landing;
