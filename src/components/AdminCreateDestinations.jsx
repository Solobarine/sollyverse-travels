import {useRef, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import countryInfo from 'countries-list'
import { handleClick, handleChange } from "../effects"
import './AdminDestination.css'

const AdminCreateDestinations = () => {
  const store_city = useSelector(state => state.adminCity.city)
  const store_cities = useSelector(state => state.adminCity.cities)
  const store_country = useSelector(state => state.adminCity.country)
  const store_countries = useSelector(state => state.adminCountry.countries) 

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

  const [city, setCity] = useState({
    name: '',
    country: '',
    description: '',
    ratings: '',
    longitude: '',
    latitude: '',
    visitors: ''
  }) 

  const [country, setCountry] = useState({
    name: '',
    description: '',
    capital: '',
    continent: '',
    officialLanguage: '',
    longitude: '',
    latitude: ''
  })
  
  return (
    <section id="createDestinations">
      <div>
        <button
          ref={createCityButton}
          onClick={(e) => handleClick(e, buttonArray, sectionArray)}
          type="submit"
          className="showAdminDestination"
        >Create City</button>
        <button
          ref={createCountryButton}
          onClick={(e) => handleClick(e, buttonArray, sectionArray)}
          type="submit"
        >Create Country</button>
        <button
          ref={updateCityButton}
          onClick={(e) => handleClick(e, buttonArray, sectionArray)}
          type="submit"
        >Update City</button>
        <button
          ref={updateCountryButton}
          onClick={(e) => handleClick(e, buttonArray, sectionArray)}
          type="submit"
        >Update Country</button>
      </div>
      <div id='adminDestinations'>
        <form ref={createCity} className="create showDestination">
          <h2>Add New City</h2>
          <div>
            <label htmlFor="">Upload City Images</label>
            <input type="file" name="images" id="images" multiple/>
          </div>
          <div className="cityName">
            <label htmlFor="">Name of City</label>
            <input onChange={(e) => handleChange(e, setCity)} name="name" type="text" placeholder="City Name"/>
          </div>
          <div className="cityCountry">
            <label htmlFor="">Enter Country</label>
            <input onChange={(e) => handleChange(e, setCity)} name="country" type="text" placeholder="Country"/>
          </div>
          <div className="destDescription">
            <label htmlFor="">Enter City Description</label>
            <textarea onChange={(e) => handleChange(e, setCity)} name="description" type="text" placeholder="City Description"></textarea>
          </div>
          <div>
            <label htmlFor="">Enter Longitude</label>
            <input onChange={(e) => handleChange(e, setCity)} name="longitude" type="text" placeholder="City Longitude"/>
          </div>
          <div>
            <label htmlFor="">Enter Latitude</label>
            <input onChange={(e) => handleChange(e, setCity)} name="latitude" type="text" placeholder="City Latitude"/>
          </div>
          <input type="submit" value="Add City"/>
        </form>

        <form ref={createCountry} className="create hideDestination">
          <h2>Add New Country</h2>
          <div>
            <label htmlFor="">Select Country</label>
            <select name="name" onChange={() => handleChange(e, setCountry)}>
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
            <textarea name="description" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Enter Description"></textarea>
          </div>
          <div>
            <label htmlFor="">Enter Capital</label>
            <input name="capital" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Capital City"/>
          </div>
          <div>
            <label htmlFor="">Enter Continent</label>
            <input name="continent" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Continent"/>
          </div>
          <div>
            <label htmlFor="">Enter Official Language</label>
            <input name="officialLanguage" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Enter Official Language"/>
          </div>
          <div>
            <label htmlFor="">Enter Longitude</label>
            <input name="longitude" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Enter Longitude"/>
          </div>
          <div>
            <label htmlFor="">Enter Latitude</label>
            <input name="latitude" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Enter Latitude"/>
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
            <input name="name" onChange={(e) => handleChange(e, setCity)} type="text" placeholder="City Name"/>
          </div>
          <div className="cityCountry">
            <label htmlFor="">Update Country</label>
            <input name="country" onChange={(e) => handleChange(e, setCity)} type="text" placeholder="Update Country"/>
          </div>
          <div className="destDescription">
            <label htmlFor="">Update Description</label>
            <textarea name="description" onChange={(e) => handleChange(e, setCity)} type="text" placeholder="Update Description"></textarea>
          </div>
          <div>
            <label htmlFor="">Update Longitude</label>
            <input name="longitude" onChange={(e) => handleChange(e, setCity)} type="text" placeholder="Update Longitude"/>
          </div>
          <div>
            <label htmlFor="">Update Latitude</label>
            <input name="latitude" onChange={(e) => handleChange(e, setCity)} type="text" placeholder="Update Latitude"/>
          </div>
          <input type="submit" value="Update City"/>
        </form>

        <form ref={updateCountry} className="create hideDestination">
          <h2>Update Country</h2>
          <div>
            <label htmlFor="">Update Country</label>
            <input name="country" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Name of Country"/>
          </div>
          <div className="destDescription">
            <label htmlFor="">Update Description</label>
            <textarea name="description" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Update Description"></textarea>
          </div>
          <div>
            <label htmlFor="">Update Capital </label>
            <input name="capital" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Capital City"/>
          </div>
          <div>
            <label htmlFor="">Update Continent</label>
            <input name="continent" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Continent"/>
          </div>
          <div>
            <label htmlFor="">Update Official Language</label>
            <input name="officialLanguage" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Update Official Language"/>
          </div>
          <div>
            <label htmlFor="">Update Longitude</label>
            <input name="longitude" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Update Longitude"/>
          </div>
          <div>
            <label htmlFor="">Update Latitude</label>
            <input name="latitude" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Update Latitude"/>
          </div>
          <input type="submit" value="Update Country"/>
        </form>
      </div>
    </section>
  )
}

export default AdminCreateDestinations
