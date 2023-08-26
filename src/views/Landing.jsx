import {useEffect, useRef} from 'react';
import './Landing.css';

const Landing = () => {
  let i = 0
  const image = useRef()
  const landingImages  = ['abu-dhabi.jpg', 'abu-dhabi-2.jpg', 'ankor-wat.png', 'c8.jpg', 'cartagena-1.jpg', 'thai.png', 'tokyo.jpeg', 'beach-0.jpg', 'beach-3.jpg']

  const displayImages = () => {
    if (i < landingImages.length - 1) {
      image.current.src = `/landing/${landingImages[i]}`
      i++
    } else {
      i = 0
    }

    setTimeout(displayImages, 12000)
  }
  
  useEffect(() => {
    displayImages()
  })

  return (
    <section className="landing">
      <section id="main">
        <img ref={image} src="/landing/abu-dhabi.jpg" alt="Destinations to Explore"/>
        <div>
          <h1>Travel</h1>
          <p>Explore the huge world out there and enjoy it's beauty.</p>
          <p>discover new things in exploring the world and make your vacation memorable to remember forever.</p>
          <input type="submit" value="learn more" className="more"/>
        </div>
      </section>
      <section id="sub-bar">
        <div id="facilities">
          <h4>Facilities</h4>
          <p>see more</p>
          <div>
            <div id="stream">
              <i class="fa-solid fa-droplet"></i>
              <p>Streaming</p>
            </div>
            <div id="wifi">
              <i class="fa-solid fa-wifi"></i>
              <p>Wifi</p>
            </div>
            <div id="eat">
              <i class="fa-solid fa-utensils"></i>
              <p>Restaurant</p>
            </div>
            <div id="bedroom">
              <i class="fa-solid fa-bed"></i>
              <p>Bedroom</p>
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
          <div class="popularImage"><i class="fa-solid fa-user-group"></i></div>
          <h3>100000+</h3>
          <p>Our Explorers</p>
        </div>
        <div>
          <div class="popularImage"><i class="fa-solid fa-paper-plane"></i></div>
          <h3>640+</h3>
          <p>Best Destinations</p>
        </div>
        <div>
          <div class="popularImage"><i class="fa-solid fa-ticket"></i></div>
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
