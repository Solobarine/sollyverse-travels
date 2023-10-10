import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import countryAsyncThunk from '../../redux/features/apiCalls/country';
import MapArea from './Map.jsx'
import './css/Country.css'
import likeAsyncThunk from '../../redux/features/apiCalls/like';
import { addUserLikes } from '../../redux/features/user';

const Country = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(countryAsyncThunk.showOne(id))
  }, [dispatch, id])
  
  const { user, likes } = useSelector(state => state.user)
  const { country } = useSelector(state => state.country)
  const { cities } = country.value
  const countryInfo = country.value.country


  const HandleClick = (e) =>
   {
    if (e.target.classList.contains('fa-regular')) {
      e.target.classList.remove('fa-regular')
      e.target.classList.add('fa-solid')
    } else if (e.target.classList.contains('fa-solid')) {
      e.target.classList.remove('fa-solid')
      e.target.classList.add('fa-regular')
    }
  }

  const checkLike = (id) => {
    if (likes.length > 0) {
      for (let index = 0; index < likes.length; index++) {
        if (likes[index].city === id) {
          return 'fa-solid'
        }
      }
    }
  }

  return countryInfo ? (
    <section id="country">
      <div className="countryImages">
        <img src={countryInfo.imageUrl} alt={countryInfo.name} />
      </div>
      <div id="countryInfo">
        <div className="info">
          <i className="fa-solid fa-location" />
          <small>{countryInfo.capital}</small>
          <h5>Capital</h5>
        </div>
        <div className="info">
          <i className="fa-solid fa-earth-europe" />
          <small>{countryInfo.continent}</small>
          <h5>Continent</h5>
        </div>
        <div className="info">
          <i className="fa-solid fa-map-location-dot" />
          <small>600,000+</small>
          <h5>Visitors</h5>
        </div>
        <div className="info">
          <i className="fa-solid fa-language" />
          <small>{countryInfo.officialLanguage}</small>
          <h5>Language</h5>
        </div>
      </div>
      <div className="countryDescription">
        <h1>{countryInfo.name}</h1>
        <small>{countryInfo.description}</small>
      </div>
      <div className="countryMap">
          {
            (countryInfo.latitude && countryInfo.longitude)
            ? <MapArea props={{lat: countryInfo.latitude, lon: countryInfo.longitude, zoom: 10}} />
            : null
          }
      </div>
      <div id="countryCities">
        <h2>Cities to Explore</h2>
      <div className="countryCities">
        { cities.map((item, index) =>(
          <div key={index} className="countryCity">
            <img src={item.images[0]} alt="City"/>
            <div id='city_details'>
              <h5>{item.name}</h5>
              <div id="like_and_more">
                <i onClick={(e) => {
                  const payload = {user: user._id, city: item._id}
                  dispatch(likeAsyncThunk.create(payload))
                  dispatch(addUserLikes(payload))
                  HandleClick(e)
                  }} className={`${checkLike(item._id) ? checkLike(item._id) : 'fa-regular'} fa-heart`} />
                <Link to={`/city/${item._id}`}>Book Tour</Link>
              </div>
            </div>
            </div>
          ))
        }
          </div>
        </div>
    </section>
  )
  : null
}

export default Country;
