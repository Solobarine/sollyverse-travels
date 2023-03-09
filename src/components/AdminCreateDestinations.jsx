import {useRef, useState} from "react"
import countryInfo from 'countries-list'
import './AdminDestination.css'

const AdminCreateDestinations = () => {
  const chooseContinent = (shortName) => {
    switch (shortName) {
      case 'AF':
        return 'Africa'
      case 'AN':
        return 'Antartica'
      case 'AS':
        return 'Asia'
      case 'EU':
        return 'Europe'
case 'NA':
        return 'North America'
      case 'OC':
        return 'Oceania'
      case 'SA':
        return 'South America'
      default:
        return 'Not a Country' 
    }
  }
  const updateInfo = (countryDetails, setCountry, setContinent, setCapital) => {
    setCountry(countryDetails.name)
    setContinent(chooseContinent(countryDetails.continent))
    setCapital(countryDetails.capital)
  }

  // Reference Destination Sections and Buttons
  const createCity = useRef('')
  const createCountry = useRef('')
  const updateCity = useRef('')
  const updateCountry = useRef('')

  const createCityButton = useRef('')
  const createCountryButton = useRef('')
  const updateCityButton = useRef('')
  const updateCountryButton = useRef('')

  const buttonArray = [createCityButton, createCountryButton, updateCityButton, updateCountryButton]

  const sectionArray = [createCity, createCountry, updateCity, updateCountry]


  const {countries} = countryInfo
  let countryBio = []

  //Toggle visibility of each section
  const handleClick = (e) => {
    buttonArray.forEach((button, index) => {
    if (e.target !== button.current) {
      button.current.classList.remove('showAdminDestination')
      button.current.style.backgroundColor = '#c8e6c8'
      button.current.style.color = '#000'
      sectionArray[index].current.classList.remove('showDestination')
      sectionArray[index].current.classList.add('hideDestination')
    } else {
      button.current.classList.add('showAdminDestination')
      button.current.style.backgroundColor = '#20b970'
      button.current.style.color = '#fff'
      sectionArray[index].current.classList.add('showDestination')
      sectionArray[index].current.classList.remove('hideDestination')
    }
    })
  }

  // Create City Inputs
  const [city, setCity] = useState("")
  const [cityCountry, setCityCountry] = useState("")
  const [cityDescription, setCityDescription] = useState("")
  const [cityRating, setCityRating] = useState("")
  const [cityLongitude, setCityLongitude] = useState("")
  const [cityLatitude, setCityLatitude] = useState("")
  const [visitors, setVisitors] = useState("")

  // Update City Inputs
  const [city2, setCity2] = useState("")
  const [cityCountry2, setCityCouontry2] = useState("")
  const [cityDescription2, setCityDescription2] = useState("")
  const [cityRating2, setCityRating2] = useState("")
  const [cityLongitude2, setCityLongitude2] = useState("")
  const [cityLatitude2, setCityLatitude2] = useState("")
  const [cityVisitors2, setCityVisitors2] = useState("")


  // Create Country Inputs
  const [country, setCountry] = useState('')
  const [countryDescription, setCountryDescription] = useState('')
  const [capital, setCapital] = useState("")
  const [continent, setContinent] = useState("")
  const [officialLanguage, setOfficialLanguage] = useState("")
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [likes, setLikes] = useState('')

  // Update Coountry Inputs
  const [country1, setCountry1] = useState("")
  const [description1, setDescription1] = useState("")
  const [capital1, setCapital1] = useState("")
  const [continent1, setContinent1] = useState("")
  const [officialLanguage1, setOfficialLanguage1] = useState("")
  const [longitude1, setLongitude1] = useState("")
  const [latitude1, setLatitude1] = useState("")
  const [likes1, setLikes1] = useState("")
  
  const postCity = {city, country: cityCountry, description: cityDescription, rating: cityRating, location: {longitude: cityLongitude, latitude: cityLatitude}, visitors}

  const postCountry = {country, description: countryDescription, capital, continent, officialLanguage, location: {longitude, latitude}, likes}

  const updatedCity = {city: city2, country: cityCountry2, description: cityDescription2, ratings: cityRating2, location: {longitude: cityLongitude2, latitude: cityLatitude2}, visitors: cityVisitors2}

  const updatedCountry = {country: country1, description: description1, capital: capital1, continent: continent1,
    officialLanguage: officialLanguage1, location: {longitude: longitude1, latitude: latitude1}, likes: likes1}

  return (
    <section id="createDestinations">
      <div>
        <button ref={createCityButton} onClick={(e) => handleClick(e)} type="submit" className="showAdminDestination">Create City</button>
        <button ref={createCountryButton} onClick={(e) => handleClick(e)} type="submit">Create Country</button>
        <button ref={updateCityButton} onClick={(e) => handleClick(e)} type="submit">Update City</button>
        <button ref={updateCountryButton} onClick={(e) => handleClick(e)} type="submit">Update Country</button>
      </div>
      <div id='adminDestinations'>
        <form ref={createCity} className="create showDestination">
          <h2>Add New City</h2>
          <div>
            <label htmlFor="">Upload City Images</label>
            <input type="file" name="" id="" multiple/>
          </div>
          <div className="cityName">
            <label htmlFor="">Name of City</label>
            <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="City Name"/>
          </div>
          <div className="cityCountry">
            <label htmlFor="">Enter Country</label>
            <input onChange={(e) => setCityCountry(e.target.value)} type="text" placeholder="Country"/>
          </div>
          <div className="destDescription">
            <label htmlFor="">Enter City Description</label>
            <textarea onChange={(e) => setCityDescription(e.target.value)} type="text" placeholder="City Description"></textarea>
          </div>
          <div>
            <label htmlFor="">Enter Ratings</label>
            <input onChange={(e) => setCityRating(e.target.value)} type="text" placeholder="City Ratings"/>
          </div>
          <div>
            <label htmlFor="">Enter Longitude</label>
            <input onChange={(e) => setCityLongitude(e.target.value)} type="text" placeholder="City Longitude"/>
          </div>
          <div>
            <label htmlFor="">Enter Latitude</label>
            <input onChange={(e) => setCityLatitude(e.target.value)} type="text" placeholder="City Latitude"/>
          </div>
          <div className="cityVisitors">
            <label htmlFor="">Enter Visitors</label>
            <input onChange={(e) => setVisitors(e.target.value)} type="text" placeholder="Visitors"/>
          </div>
          <input type="submit" value="Add City"/>
        </form>

        <form ref={createCountry} className="create hideDestination">
          <h2>Add New Country</h2>
          <div>
            <label htmlFor="">Select Country</label>
            <select name="Country" id="" onChange={() => updateInfo(countryBio, setCountry, setContinent, setCapital)}>
              <option value="">Choose Country</option>(
              {Object.keys(countries).map((country, index) => (
                <option
                  onClick={
                    () => {
                      countryBio = country
                      console.log(countryBio)
                    }} key={index}>
                    {country.name}
                  </option>
              ))}
            </select>
          </div>
          <div className="destDescription">
            <label htmlFor="">Enter Description</label>
            <textarea onChange={(e) => setCountryDescription(e.target.value)} type="text" placeholder="Enter Description"></textarea>
          </div>
          <div>
            <label htmlFor="">Enter Capital</label>
            <input type="text" placeholder="Capital City"/>
          </div>
          <div>
            <label htmlFor="">Enter Continent</label>
            <input type="text" placeholder="Continent"/>
          </div>
          <div>
            <label htmlFor="">Enter Official Language</label>
            <input onChange={(e) => setOfficialLanguage(e.target.value)} type="text" placeholder="Enter Official Language"/>
          </div>
          <div>
            <label htmlFor="">Enter Longitude</label>
            <input onChange={(e) => setLongitude(e.target.value)} type="text" placeholder="Enter Longitude"/>
          </div>
          <div>
            <label htmlFor="">Enter Latitude</label>
            <input onChange={(e) => setLatitude(e.target.value)} type="text" placeholder="Enter Latitude"/>
          </div>
          <div>
            <label htmlFor="">Enter Likes</label>
            <input onChange={(e) => setLikes(e.target.value)} type="text" placeholder="Enter Likes"/>
          </div>
          <input type="submit" value="Add Country"/>
        </form>

        <form ref={updateCity} className="create hideDestination">
          <h2>Update City</h2>
          <div>
            <label htmlFor="">Upload City Images</label>
            <input type="file" name="" id="" multiple/>
          </div>
          <div className="cityName">
            <label htmlFor="">Update City Name</label>
            <input onChange={(e) => setCity2(e.target.value)} type="text" placeholder="City Name"/>
          </div>
          <div className="cityCountry">
            <label htmlFor="">Update Country</label>
            <input onChange={(e) => setCityCouontry2(e.target.value)} type="text" placeholder="Update Country"/>
          </div>
          <div className="destDescription">
            <label htmlFor="">Update Description</label>
            <textarea onChange={(e) => setCityDescription2(e.target.value)} type="text" placeholder="Update Description"></textarea>
          </div>
          <div>
            <label htmlFor="">Update Ratings</label>
            <input onChange={(e) => setCityRating2(e.target.value)} type="text" placeholder="Update Ratings"/>
          </div>
          <div>
            <label htmlFor="">Update Longitude</label>
            <input onChange={(e) => setCityLongitude2(e.target.value)} type="text" placeholder="Update Longitude"/>
          </div>
          <div>
            <label htmlFor="">Update Latitude</label>
            <input onChange={(e) => setCityLatitude2(e.target.value)} type="text" placeholder="Update Latitude"/>
          </div>
          <div className="cityVisitors">
            <label htmlFor="">Update Visitors</label>
            <input onChange={(e) => setCityVisitors2(e.target.value)} type="text" placeholder="Update Visitors"/>
          </div>
          <input type="submit" value="Update City"/>
        </form>

        <form ref={updateCountry} className="create hideDestination">
          <h2>Update Country</h2>
          <div>
            <label htmlFor="">Update Country</label>
            <input onChange={(e) => setCountry1(e.target.value)} type="text" placeholder="Name of Country"/>
          </div>
          <div className="destDescription">
            <label htmlFor="">Update Description</label>
            <textarea onChange={(e) => setDescription1(e.target.value)} type="text" placeholder="Update Description"></textarea>
          </div>
          <div>
            <label htmlFor="">Update Capital </label>
            <input onChange={(e) => setCapital1(e.target.value)} type="text" placeholder="Capital City"/>
          </div>
          <div>
            <label htmlFor="">Update Continent</label>
            <input onChange={(e) => setContinent1(e.target.value)} type="text" placeholder="Continent"/>
          </div>
          <div>
            <label htmlFor="">Update Official Language</label>
            <input onChange={(e) => setOfficialLanguage1(e.target.value)} type="text" placeholder="Update Official Language"/>
          </div>
          <div>
            <label htmlFor="">Update Longitude</label>
            <input onChange={(e) => setLongitude1(e.target.value)} type="text" placeholder="Update Longitude"/>
          </div>
          <div>
            <label htmlFor="">Update Latitude</label>
            <input onChange={(e) => setLatitude1(e.target.value)} type="text" placeholder="Update Latitude"/>
          </div>
          <div>
            <label htmlFor="">Update Likes</label>
            <input onChange={(e) => setLikes1(e.target.value)} type="text" placeholder="Update Likes"/>
          </div>
          <input type="submit" value="Update Country"/>
        </form>
      </div>
    </section>
  )
}

export default AdminCreateDestinations
