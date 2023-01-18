import './Landing.css';

const Landing = () => {
  return (
    <section className="landing">
      <section id="main">
        <h1>Travel</h1>
        <p>Explore the huge world out there and enjoy it's beauty.</p>
        <p>discover new things in exploring the world and make your vacation memorable to remember forever.</p>
        <input type="submit" value="learn more" className="more"/>
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
          <img src="" alt="desert"/>
          <img src="" alt="mountains"/>
          <img src="" alt="cities"/>
          <img src="" alt="beaches"/>
        </div>
      </section>
      <section id="popular">
        <h2>The most popular</h2>
        <p>We have developed into a service that provides a better and more travel on any platform to help you enjoy your vacation.</p>
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
        <h3>Popular Places</h3>
        <div className="carousel"></div>
      </section>
      <section id="aboutUs">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quos at modi nam similique, nesciunt harum, neque esse voluptatibus natus deleniti saepe voluptas quasi quo suscipit reiciendis nisi distinctio! Similique!</p>
      </section>
      <section className="partners">
        <img src="/sponsors/ferrari.png" alt=""/>
        <img src="/sponsors/hilton.png" alt=""/>
        <img src="/sponsors/lamborghini.png" alt=""/>
        <img src="/sponsors/mastercard.png" alt=""/>
        <img src="/sponsors/mercedes_benz.png" alt=""/>
        <img src="/sponsors/oracle.png" alt=""/>
        <img src="/sponsors/qatar_airways.png" alt=""/>
        <img src="/sponsors/turkish_airlines.png" alt=""/>
      </section>
    </section>
  )
}

export default Landing;
