import {useRef, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import countryInfo from 'countries-list'
import { handleClick, handleChange, toBase64 } from "../effects"
import cityAsyncThunk from "../redux/features/apiCalls/city"
import countryAsyncThunk from "../redux/features/apiCalls/country"
import './AdminDestination.css'
import { clear_error, clear_country_message } from "../redux/features/adminReducer/country"
import { clear_city_error, clear_message } from "../redux/features/adminReducer/city"

const {create, update} = cityAsyncThunk

const AdminCreateDestinations = () => {
  // const store_city = useSelector(state => state.adminCity.city)
  // const store_cities = useSelector(state => state.adminCity.cities)
  const store_country = useSelector(state => state.adminCountry.country)
  // const store_countries = useSelector(state => state.adminCountry.countries)

  // Reference Destination Sections and Buttons
  const createCity = useRef('')
  const createCountry = useRef('')
  const updateCity = useRef('')
  const updateCountry = useRef('')
  const updateImage = useRef('')

  const createCityButton = useRef('')
  const createCountryButton = useRef('')
  const updateCityButton = useRef('')
  const updateCountryButton = useRef('')
  const updateImageButton = useRef('')

  const buttonArray = [createCityButton, createCountryButton, updateCityButton, updateCountryButton]

  const sectionArray = [createCity, createCountry, updateCity, updateCountry]

  const {countries} = countryInfo

  const [images, setImages] = useState()

  const sendImage = (e) => {
    setImages(e.target.files)
  }

  const [city, setCity] = useState({
    name: '',
    country: '',
    cost: 0,
    description: '',
    longitude: '',
    latitude: ''
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
  city.images = images
  const dispatch = useDispatch()

  const create_city_error = useSelector((state) => state.adminCity.city.create_error)
  const update_city_error = useSelector((state) => state.adminCity.city.update_error)
  const create_country_error = useSelector((state) => state.adminCountry.country.create_error)
  const update_country_error = useSelector((state) => state.adminCountry.country.update_error)

  const city_success = useSelector((state) => state.adminCity.city.message)
  const country_success = useSelector((state) => state.adminCountry.country.message)

  
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
                <button
          ref={updateImageButton}
          onClick={(e) => handleClick(e, buttonArray, sectionArray)}
          type="submit"
        >Update Images</button>
      </div>
      <div id='adminDestinations'>
        <form ref={createCity} id="add_city" className="create showDestination">
          <h2>Add New City</h2>
          <div>
            <label htmlFor="">Upload City Images</label>
            <input type="file" name="" id="" multiple onChange={sendImage} />
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
          <div className="city_cost">
            <label htmlFor="">Tour Cost</label>
            <input onChange={(e) => handleChange(e, setCity)} name="cost" type="number" placeholder="Tour Cost"/>
          </div>
          <input onClick={async (e) => {
            e.preventDefault()
            let i = 0
            const photos = []
            while (i < Object.keys(city.images).length) {
             const photo = await toBase64(city.images[`${i}`])
             photos.push(photo)
              i++
            }
            city.images = photos
            dispatch(create(city))}} type="submit" value="Add City"/>
            {city_success && <section className="success_message">
              <p>{city_success}</p>
              <p onClick={() => {
                dispatch(clear_message(1))
              }}>&times;</p>
            </section>}
            {create_city_error && <section className={create_city_error && 'errors'}>
              <p>{create_city_error}</p>
              <p onClick={() => {
                console.log('i')
                dispatch(clear_city_error(1))
              }} className='clear_button'>&times;</p>
            </section>}
        </form>

        <form ref={createCountry} className="create hideDestination">
          <h2>Add New Country</h2>
          <div>
            <label htmlFor="">Select Country</label>
            <select name="name" onChange={(e) => handleChange(e, setCountry)}>
              <option value="">Choose Country</option>(
              {Object.keys(countries).map((country, index) => (
                <option
                     key={index}>
                {countries[country].emoji} {countries[country].name}
                  </option>
              ))}
            </select>
          </div>
          <div className="destDescription">
            <label htmlFor="">Enter Description</label>
            <textarea name="description" onChange={(e) => handleChange(e, setCountry)} type="text" placeholder="Enter Description"></textarea>
          </div>
          <div className="capital">
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
          <p id="country_error">{store_country.error}</p>
          <input onClick={(e) => {
            e.preventDefault()
            const countryName = country.name.split(' ')
            countryName.shift()
            country.name =  countryName.join(' ')
            dispatch(countryAsyncThunk.create(country))
            }} type="submit" value="Add Country"/>
            {country_success && <section className={country_success && 'country_success'}>
              <p id="country_message">{store_country.message}</p>
              <p onClick={() => {
                dispatch(clear_country_message(2))
              }} className="clear_button">&times;</p>
            </section>}
            {create_country_error && <section className={create_country_error && 'errors'}>
              <p>{create_country_error}</p>
              <p onClick={
                dispatch(clear_error(2))
              } className='clear_button'>&times;</p>
            </section>}
        </form>

        <form ref={updateCity} className="create hideDestination">
          <h2>Update City</h2>
          <div>
            <label htmlFor="">Upload City Images</label>
            <input hidden type="file" name="" id="" multiple/>
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
          <div className="city_cost">
            <label htmlFor="">Tour Cost</label>
            <input onChange={(e) => handleChange(e, setCity)} name="cost" type="number" placeholder="Tour Cost"/>
          </div>
          <input onClick={(e) => {
            e.preventDefault()
            dispatch(update(city))
          }} type="submit" value="Update City"/>
          {update_city_error && <section className={update_city_error && 'errors'}>
            <p>{update_city_error}</p>
            <p className='clear_button'>&times;</p>
          </section>}
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
          <div className="capital">
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
          <input onClick={(e) => {
            e.preventDefault()
            dispatch(countryAsyncThunk.update(country))
            }} type="submit" value="Update Country"/>
            {update_country_error && <section className={update_country_error && 'errors'}>
              <p>{update_country_error}</p>
              <p className='clear_button'>&times;</p>
            </section>}
        </form>
        <form ref={updateImage} className="create hideDestinations">
          <h2>Update Image</h2>
          <div>
            <label htmlFor="">Old Image Name</label>
            <input type="text" name="" onChange={(e) => handleChange(e, setCity)} placeholder="Old Image Name" />
          </div>
          <div>
            <label htmlFor="">New Image</label>
            <input type="file" name="" onChange={(e) => handleChange(e, setCity)} placeholder="New Image" />
          </div>
          <div>
            <label htmlFor="">Enter Country Name</label>
            <input type="text" name="" onChange={(e) => handleChange(e, setCity)} placeholder="Country Name" />
          </div>
          <div>
            <label htmlFor="">Enter City Name</label>
            <input type="text" name="" onChange={(e) => handleChange(e, setCity)} placeholder="City Name" />
          </div>
          <input type="submit" value="Change Image" className="submit" />
        </form>
      </div>
    </section>
  )
}

export default AdminCreateDestinations
