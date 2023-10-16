import { useDispatch, useSelector } from 'react-redux';
import './css/Dashboard.css';
import Destination from './Destination';
import { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import cityAsyncThunk from '../../redux/features/apiCalls/city';

const Dashboard = () => {
  const dispatch = useDispatch()
  const countries = [
    {country: 'Egypt', city: 'Luxor', image: '/landing/desert.jpg', cost: 600},
    {country: 'Japan', city: 'Tokyo', image: '/landing/tokyo.jpeg', cost: 850},
    {country: 'USA', city: 'Columbia', image: '/landing/british-columbia.jpg', cost: 1100},
    {country: 'Maldives', city: 'Flec-en-Flac', image: '/landing/beach-front.jpg', cost: 700}
  ]

  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggle = () => {
    setIsCollapsed(!isCollapsed)
  }
  
  const { user } = useSelector(state => state.user)
  const { top } = useSelector(state => state.city)
  console.log(top)

  useEffect(() => {
    dispatch(cityAsyncThunk.showTopFour())
  }, [dispatch])

  return (
    <section className="dashboard">
      <div id="dashboardDiv">
        <div id="dashboardIntro">
          <h2>Hello, {capitalizeFirstLetter(user.firstName)}</h2>
          <p>Welcome back and explore the world</p>
          <i className="fa-regular fa-bell"/>
        </div>
        <div id="dashboardSearch">
          <input type="search" name="search"/>
          <i className="fa-solid fa-grip"/>
          <input type="submit" value="Search"/>
        </div>
        <div id="dashboardDiscover">
          <h2>Discover</h2>
          <div className="dashplaces">
            <div className="placesLink">
              <small className="placeLink">Popular</small>
              <small className="placeLink">Recommended</small>
              <small className="placeLink">Near Me</small>
            </div>
            <small className="viewall">View All  <i className="fa-solid fa-arrow-right"/></small>
          </div>
          <div id="dashboardCaurosel">
            <div id="countryCaurosel">
              {top.value.map((place, index) => (
                <Destination
                key={index}
                country={place.country}
                city={{name: place.cityName, _id: place._id}}
                cost={place.cost}
                images={place.images}
                user={user._id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="featureDestination">
          <div id="visitedDestination">
            <h2>Places Visited</h2>
            <div>
              <h3>No Places visited yet</h3>
            </div>
          </div>
          <div id="hotDestination">
            <h2>Hot Cities</h2>
            <div></div>
          </div>
        </div>
      </div>
      <div id="dashboardSchedule" className={`dashboardSchedule ${!isCollapsed ? 'show' : ''}`}>
        <i
        className={`fa-solid fa-chevron-left featuretoggle
        ${!isCollapsed ? 'show' : ''}`
        }
        onClick={toggle}
        ></i>
        <div id="mySchedule">
          <h2>Schedule</h2>
          <div className="dashboardProfile">
            <img src="/landing/businessWoman.jpg" alt="Profile"/>
          </div>
          <h4>{capitalizeFirstLetter(user.firstName)}  {capitalizeFirstLetter(user.lastName)}</h4>
          <p>{user.nickName}</p>
          <div className="wishList"></div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;
