import './Dashboard.css';
import Destination from './Destination';

const Dashboard = () => {
  const countries = [
    {country: 'Egypt', city: 'Luxor', image: '/landing/desert.jpg', cost: 600},
    {country: 'Japan', city: 'Tokyo', image: '/landing/tokyo.jpeg', cost: 850},
    {country: 'USA', city: 'Columbia', image: '/landing/british-columbia.jpg', cost: 1100},
    {country: 'Maldives', city: 'Flec-en-Flac', image: '/landing/beach-front.jpg', cost: 700}
  ]
  return (
    <section className="dashboard">
      <div id="dashboardDiv">
        <div id="dashboardIntro">
          <h2>Hello, Solly</h2>
          <p>Welcome back and explore the world</p>
          <i className="fa-regular fa-bell"></i>
        </div>
        <div id="dashboardSearch">
          <input type="search" name="search"/>
          <div><i className="fa-solid fa-grip"></i></div>
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
            <p className="viewall">View All  <i className="fa-solid fa-arrow-right"></i></p>
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
          <h4>Luka Adams</h4>
          <p>Globe Trotter</p>
          <div className="wishList"></div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;
