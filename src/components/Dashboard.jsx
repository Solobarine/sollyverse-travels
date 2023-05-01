import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css';
import Destination from './Destination';
import cityAsyncThunk from '../redux/features/apiCalls/city';

const Dashboard = () => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const firstName = user.user.firstName
  const lastName = user.user.lastName
  const top_cities = useSelector(state => state.city.top.item)
  const error = useSelector(state => state.city.top.error)
  console.log(error);
  
  useEffect(() => {
    dispatch(cityAsyncThunk.showTopFour({email: user.user.email}))
  }, [dispatch, user])

  return (
    <section className="dashboard">
      <div id="dashboardDiv">
        <div id="dashboardIntro">
          <h2>Hello, {user.user.firstName.toUpperCase(0)}</h2>
          <p>Welcome back and explore the world</p>
          <i className="fa-regular fa-bell"/>
        </div>
        <div id="dashboardSearch">
          <input type="search" name="search"/>
          <div><i className="fa-solid fa-grip"/></div>
          <input type="submit" value="Search"/>
        </div>
        <div id="dashboardDiscover">
          <h2>Discover</h2>
          <div className="dashplaces">
            <div className="placesLink">
              <p className="placeLink">Popular</p>
              <p className="placeLink">Recommended</p>
              <p className="placeLink">Near Me</p>
            </div>
            <p className="viewall">View All  <i className="fa-solid fa-arrow-right"/></p>
          </div>
          <div id="dashboardCaurosel">

              {
                (error) ?  
                  <h2 id='dashboard_error'>{error}</h2>
                  :
                  <div id="countryCaurosel">
                    {top_cities.map((city, index) => (
                      <Destination key={index} city={city} />
                    ))}
                  </div>
              }
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
            <h2>Hot Countries</h2>
            <div></div>
          </div>
        </div>
      </div>
      <div id="dashboardSchedule">
        <div id="mySchedule">
          <h2>Schedule</h2>
          <div className="dashboardProfile">
            <img src="/landing/businessWoman.jpg" alt="Profile"/>
          </div>
          <h4>{`${firstName[0].toUpperCase()}${firstName.substring(1)}`} {`${lastName[0].toUpperCase()}${lastName.substring(1)}`}</h4>
          <p>{user.nickName}</p>
          <div className="wishList"></div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;
