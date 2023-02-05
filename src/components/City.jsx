import { Link } from 'react-router-dom';
import MapArea from './Map.jsx';
import './City.css';
import { useRef, useEffect } from 'react';

const City = () => {
  const HandleClick = (e) => {
    if (e.target.classList.contains('fa-regular')) {
      e.target.classList.remove('fa-regular')
      e.target.classList.add('fa-solid')
      console.log(e)
    } else if (e.target.classList.contains('fa-solid')) {
      e.target.classList.remove('fa-solid')
      e.target.classList.add('fa-regular')
      console.log(e)
    }
    console.log(e.target)
  }

  let i = 0
  const cityImageDiv = useRef()

  const topCities = [{name: 'New York', image: '/landing/beach-3.jpg'}, {name: 'Sao Paolo', image: '/beach-view.jpg'},
    {name: 'Bangkok', image: '/landing/thai.png'}, {name: 'Jarkata', image: '/jarkata2.jpg'},
    {name: 'Tokyo', image: '/landing/tokyo1.jpeg'}]

  const images = ['/landing/c8.jpg', '/landing/beach-4.jpeg', '/lucerne1.jpg']


  const data = {lat: 47.0502,lon: 8.3093,zoom: 6}

  const showImage = () => {
    cityImageDiv.current.src = images[i]
    if (i < images.length - 1) {
      i++
    } else {
      i = 0
    }
    setTimeout(showImage, 6000)
  }

  useEffect(() => {
    showImage()
  })

  return (
    <section className="city">
      <div className="cityDetails">
        <div className="cityImages">
          <img ref={cityImageDiv} src="" alt="city"/>
        </div>
        <div className="cityBio">
          <h1>Lucerne</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus, placeat facilis ab repellendus incidunt libero ad sequi expedita ratione nesciunt eum inventore harum nisi illum quod reprehenderit voluptatem ipsam, fuga ut itaque. Quo impedit officia fuga, ipsum, minima autem nam provident ipsa eligendi accusantium a doloribus natus porro deleniti.</p>

        </div>
        <div className="cityReservation">
          <h2>Make a Reservation</h2>
          <form action="">
            <label>First Name<input type="text" placeholder='First Name'/></label>
            <label>Last Name<input type="text" placeholder='Last Name'/></label>
            <label>Start Date<input type="date"/></label>
            <label>End Date<input type="date"/></label>
            <input type="submit"/>
          </form>
        </div>
        <div className="otherCities">
          <h2>Cities you may Love</h2>
          <div className="majorCities">
            { topCities.map((item, index) =>(
              <div key={index} className="mainCities">
                <div>
                  <img src={item.image} alt='City' />
                </div>
                  <h4>{item.name}</h4>
                  <i onClick={HandleClick} className="fa-regular fa-heart" />
                  <p>$350/wk</p>
                  <Link to="/city">See More</Link>
              </div>
              ))
            }
          </div>
        </div>
        <Link to="/country">Explore More Countries</Link>
      </div>
      <div className="aboutCity">
        <div className="cityMap">
          <MapArea props={data} />
        </div>
        <div className="cityReviews">
          <h2>Reviews</h2>
        </div>
        <div className="cityReview">
          <h2>Rate Your Vacation</h2>
          <div className="stars">
            <i className="fa-solid fa-star"/>
            <i className="fa-solid fa-star"/>
            <i className="fa-solid fa-star"/>
            <i className="fa-solid fa-star"/>
            <i className="fa-solid fa-star"/>
          </div>
          <h2>Give a Review</h2>
          <form action="">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Review Title'/>
            <textarea name="review" placeholder='Give a Review'></textarea>
            <input type="submit" value="Submit Review"/>
</form>
        </div>
      </div>
    </section>
  )
}

export default City;
