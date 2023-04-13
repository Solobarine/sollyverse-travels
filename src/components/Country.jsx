import { useEffect, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import SwipeImages from './Swiper';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import {useDispatch, useSelector} from 'react-redux';
import { countries } from 'countries-list';
import Loading from './Loading';
import { save_id } from '../utils/helpers';
import countryAsyncThunk from '../redux/features/apiCalls/country';
import './Country.css'

const Country = () => {
  const likeCountry = useRef()
  const cities = [{name: 'Geneva', image: '/geneva0.jpg'}, {name: 'Bern', image: '/bern1.jpg'},
    {name: 'Zurich', image: '/zurich0.jpg'}, {name: 'Basel', image: '/basel0.jpg'},
    {name: 'Lucerne', image: '/lucerne1.jpg'}]
  const cityImage = []
  cities.forEach((item) => {
    cityImage.push(item.image)
  })

  const country_id = localStorage.getItem("country_id")
  const country = useSelector(state => state.country.country.item)
  const ciudad = useSelector(state => state.country.country.cities)
  const status = useSelector(state => state.country.country.status)
  const dispatch = useDispatch()

  console.log(ciudad)

  const checkCountry = (pais) => {
    return countries[pais].name === country.name
  }
  let flag = ''
  let longitude, lon, latitude, lat

  if (status === 'Success') {
    const pais = Object.keys(countries).filter(checkCountry)
    flag = pais[0].toLowerCase()

    longitude = country.longitude.split(' ')
    lon = longitude.shift().slice(0, -1)
   
    latitude = country.latitude.split(' ')
    lat = latitude.shift().slice(0, -1)
  }


  const HandleClick = (e) => {
    if (e.target.classList.contains('fa-regular')) {
      e.target.classList.remove('fa-regular')
      e.target.classList.add('fa-solid')
    } else if (e.target.classList.contains('fa-solid')) {
      e.target.classList.remove('fa-solid')
      e.target.classList.add('fa-regular')
    }
  }

  useEffect(() => {
    dispatch(countryAsyncThunk.showOne({_id: country_id}))
  }, [dispatch, country_id])

  if (status === 'Pending') return <Loading/>

  if (status === 'Success') return (
    <section id="country">
      <div className="countryImages">
        <SwipeImages props={cityImage}/>
      </div>
      <div className="countryDescription">
        <h1>{country.name}</h1>
        <p>{country.description}</p>
      </div>
      <div className="countryMap">
       { (status === 'Success') && <MapContainer center={[lon, lat]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <Marker position={[lon, lat]}>
            </Marker>
        </MapContainer>}
      </div>
      {(ciudad.length !== 0) && <div id="countryCities">
        <h2>Cities to Explore</h2>
      <div className="countryCities">
        { ciudad.map((item, index) =>(
          <div key={index} className="countryCity" onMouseEnter={() => save_id("city_id", item._id)}>
            <img src={item.images[0]} alt="City"/>
            <div>
              <h4>{item.name}</h4>
              <i onClick={HandleClick} className="fa-regular fa-heart" />
              <Link to={`/city/${item._id}`}><input type="submit" value="Book Tour"/></Link>
            </div>
            </div>
          ))
        }
          </div>
      </div>}
      <div id="countryInfo">
        <div className="info">
          <i className="fa-solid fa-location" />
          <p>{country.capital}</p>
          <h3>Capital</h3>
        </div>
        <div className="info">
          <i className="fa-solid fa-earth-europe" />
          <p>{country.continent}</p>
          <h3>Continent</h3>
        </div>
        <div className="info">
          <div>
            {(status === 'Success') && <img src={`https://flagcdn.com/w80/${flag}.png`} alt=""/>}
          </div>
          <h3>Flag</h3>
        </div>
        <div className="info">
          <i className="fa-solid fa-language" />
          <p>{country.officialLanguage}</p>
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

  if (status === 'Failed') <Navigate to="/countries"/>
}

export default Country;
