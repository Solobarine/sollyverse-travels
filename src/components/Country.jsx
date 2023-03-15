import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SwipeImages from './Swiper';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './Country.css';

const Country = () => {
  const likeCountry = useRef()
  const cities = [{name: 'Geneva', image: '/geneva0.jpg'}, {name: 'Bern', image: '/bern1.jpg'},
    {name: 'Zurich', image: '/zurich0.jpg'}, {name: 'Basel', image: '/basel0.jpg'},
    {name: 'Lucerne', image: '/lucerne1.jpg'}]
  const cityImage = []
  cities.forEach((item) => {
    cityImage.push(item.image)
  })

  const HandleClick = (e) => {
    if (e.target.classList.contains('fa-regular')) {
      e.target.classList.remove('fa-regular')
      e.target.classList.add('fa-solid')
    } else if (e.target.classList.contains('fa-solid')) {
      e.target.classList.remove('fa-solid')
      e.target.classList.add('fa-regular')
    }
  }

  return (
    <section id="country">
      <div className="countryImages">
        <SwipeImages props={cityImage}/>
      </div>
      <div className="countryDescription">
        <h1>Switzerland</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Mollitia repudiandae, nobis beatae maiores aspernatur distinctio iste velit error est, praesentium impedit suscipit. Tempora repellat pariatur eum quos perspiciatis illum iste, veniam consectetur ut delectus beatae non soluta recusandae, laudantium libero.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis saepe adipisci doloremque laudantium earum, nihil odit nisi molestias voluptatem deleniti ducimus cum quae distinctio reprehenderit sint odio quidem maiores consectetur. Dolores aliquid voluptatum veritatis consequatur sed quos delectus expedita numquam facilis. Provident iusto aspernatur neque id, incidunt quidem unde!</p>
      </div>
      <div className="countryMap">
        <MapContainer center={[46.9101, 8.4164]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <Marker position={[46.9101, 8.4164]}>
            </Marker>
        </MapContainer>
      </div>
      <div id="countryCities">
        <h2>Cities to Explore</h2>
      <div className="countryCities">
        { cities.map((item, index) =>(
          <div key={index} className="countryCity">
            <img src={item.image} alt="City"/>
            <div>
              <h4>{item.name}</h4>
              <i onClick={HandleClick} className="fa-regular fa-heart" />
              <Link to="/city"><input type="submit" value="Book Tour"/></Link>
            </div>
            </div>
          ))
        }
          </div>
        </div>
      <div id="countryInfo">
        <div className="info">
          <i className="fa-solid fa-location" />
          <p>Berlin</p>
          <h3>Capital</h3>
        </div>
        <div className="info">
          <i className="fa-solid fa-earth-europe" />
          <p>Europe</p>
          <h3>Continent</h3>
        </div>
        <div className="info">
          <i className="fa-solid fa-map-location-dot" />
          <p>600,000+</p>
          <h3>Visitors</h3>
        </div>
        <div className="info">
          <i className="fa-solid fa-language" />
          <p>German</p>
          <h3>Language</h3>
        </div>
        <div className="info">
          <i onClick={HandleClick} ref={likeCountry} className="fa-regular fa-heart likeCountry" />
          <p>27</p>
          <h3>Like</h3>
        </div>
      </div>
    </section>
  )
}

export default Country;
