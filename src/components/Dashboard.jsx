import { useSelector } from 'react-redux';
import './Dashboard.css';
import Destination from './Destination';

const Dashboard = () => {
  const countries = [
    {country: 'Egypt', city: 'Luxor', image: '/landing/desert.jpg', cost: 600},
    {country: 'Japan', city: 'Tokyo', image: '/landing/tokyo.jpeg', cost: 850},
    {country: 'USA', city: 'Columbia', image: '/landing/british-columbia.jpg', cost: 1100},
    {country: 'Maldives', city: 'Flec-en-Flac', image: '/landing/beach-front.jpg', cost: 700}
  ]

  const user = useSelector(state => state.user)
  const top_countries = useSelector(state => state.country.top_countries)

  const firstName = user.user.firstName.split('').map((char, index) => {
    if (index === 0) {
       return char.toUpperCase()
     } else {
      return char
     }
  })

  const lastName = user.user.lastName.split('').map((char, index) => {
    if (index === 0) {
       return char.toUpperCase()
     } else {
      return char
     }
  })

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
            <div id="countryCaurosel">
              {countries.map((country, index) => (
                <Destination key={index} country={country} />
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
      <div id="dashboardSchedule">
        <div id="mySchedule">
          <h2>Schedule</h2>
          <div className="dashboardProfile">
            <img src="/landing/businessWoman.jpg" alt="Profile"/>
          </div>
          <h4>{firstName} {lastName}</h4>
          <p>{user.user.nickName}</p>
          <div className="wishList"></div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;
