import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

import MapArea from './Map.jsx';
import './City.css';
import reservationAsyncThunk from '../redux/features/apiCalls/reservation.js';
import reviewAsyncThunk from '../redux/features/apiCalls/review.js';
import Loading from './Loading.jsx';
import { toggleLike, clickStar } from '../effects/index.js';
import postLike from '../utils/likeDestination.js';
import cityAsyncThunk from '../redux/features/apiCalls/city.js';

const City = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [nameOne, setNameOne] = useState('')
  const [nameTwo, setNameTwo] = useState('')
  const [title, setTitle] = useState('')
  const [review, setReview] = useState('')

  const stars = useRef()

  // const city_id = localStorage.getItem("city_id")
  // console.log(city_id);
  const city_id = useParams()
  console.log(city_id)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(useSelector(state => state.city));

  const user = useSelector(state => state.user.user)
  const city = useSelector(state => state.city.city.item)
  const city_likes = useSelector(state => state.city.city.likes)
  const status = useSelector(state => state.city.city.status)
  const top_reviews = useSelector(state => state.review.top.item)
  const has_reviewed = useSelector(state => state.review.has_reviewed.value)
  const user_review = useSelector(state => state.review.has_reviewed.review)
  const top_cities = useSelector(state => state.city.top.item)
  console.log(has_reviewed);
  console.log(city);
  console.log(useSelector(state => state.city.city));

 let rating = 0

 const reservation = {firstName, lastName, email: user.email, cost: city.cost, cityId: city._id, startDate, endDate}

 const reviewData = {destinationId: city._id, firstName: nameOne, lastName: nameTwo, email: user.email, rating, title, review} 

  useEffect(() => {
    dispatch(cityAsyncThunk.showOne({_id: city_id.id}))
    dispatch(cityAsyncThunk.showTopFour({email: user.email}))
  }, [dispatch, city_id, user.email])

  useEffect(() => {
    dispatch(reviewAsyncThunk.showFive({_id: city_id.id}))
    dispatch(reviewAsyncThunk.showOneReview({_id: city_id.id, email: user.email}))
  },[dispatch, city_id, user.email])

  // Set review to current user review
  useEffect(() => {
    if (user_review) {
      setNameOne(user_review.firstName)
      setNameTwo(user_review.lastName)
      setTitle(user_review.title)
      setReview(user_review.review)
    } else {
      setNameOne('')
      setNameTwo('')
      setTitle('')
      setReview('')
    }
  }, [user_review, city])

// Update Stars if User already liked City
  window.requestAnimationFrame(() => {
    console.log(has_reviewed)
    if (user_review) {
      const star = Array.from(stars.current.querySelectorAll('.fa-regular.fa-star'))
      if (star.length === 5) {
        star.map((item, index) => {
          console.log(index)
          if (index < user_review.rating) {
            item.classList.toggle('fa-regular')
            item.classList.toggle('fa-solid')
          }
          return user_review
        })
    }
  } else {
    return
  }
  })

  let longitude, lon, latitude, lat

  if (city.length !== 0) {
    longitude = city.longitude.split(' ')
    lon = longitude.shift().slice(0, -1)
   
    latitude = city.latitude.split(' ')
    lat = latitude.shift().slice(0, -1)
  }

  const data = {lat, lon, zoom: 5}

  if (status === 'Pending') return <Loading />

  if (status === 'Success') return (
    <section className="city">
      <div className="cityDetails">
        <div className="cityImages">
          <div>
            {city.images.map((image, index) => {
              return <img key={index} className="cityImage" id={`cityImage${index}`} src={`http://localhost:3005${image}`} alt="City" />
            })}
          </div>
        </div>
        <div className="cityBio">
          <div id="like_container">
            <span id="city_likes">{(city_likes) ? city_likes : 0} likes</span>
            <i onClick={(e) => {
              e.preventDefault()
              postLike(e, dispatch, {destinationId: city._id, destination: city.name, email: user.email})
              toggleLike(e)
              }} className="fa-regular fa-heart"/>
          </div>
          <h1>{city.name}</h1>
          <p>{city.description}</p>
        </div>
        <div className="cityReservation">
          <h2>Make a Reservation</h2>
          <form action="">
            <label>First Name<input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name'/></label>
            <label>Last Name<input onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last Name'/></label>
            <label>Start Date<input onChange={(e) => setStartDate(e.target.value)} type="date"/></label>
            <label>End Date<input onChange={(e) => setEndDate(e.target.value)} type="date"/></label>
            <input onClick={(e) => {
              e.preventDefault()
              dispatch(reservationAsyncThunk.create(reservation))
            }} type="submit" value="Make Reservation"/>
          </form>
        </div>
        <div className="otherCities">
          <h2>Cities you may Love</h2>
          <div className="majorCities">
            { top_cities.map((item, index) =>(
              <div key={index} className="mainCities">
                <div>
                  <img src={`http://localhost:3005${item.images[1]}`} alt='City' />
                </div>
                  <h4>{item.name}</h4>
                  <i onClick={(e) => {
                    e.preventDefault()
                    postLike(e, dispatch, {destinationId: item._id, destination: item.name, email: user.email})
                    toggleLike(e)
                    }} className="fa-regular fa-heart"/>
                  <p>${item.cost}/wk</p>
                  <Link onClick={(e) => {
                    e.preventDefault()
                    navigate(`/city/${item._id}`)
                  }} to={`/city/${item._id}`}>See More</Link>
              </div>
              ))
            }
          </div>
        </div>
        <Link to="/countries">Explore More Countries</Link>
      </div>
      <div className="aboutCity">
        <div className="cityMap">
          <MapArea props={data} />
        </div>
        <div className="cityReviews">
          <h2>Reviews</h2>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay,EffectFade]}
            effect="fade"
            slidesPerView={1}
            scrollbar={{ draggable: true }}
          >
            {(top_reviews) && top_reviews.map((review, index) => {
              return <SwiperSlide key={index}>
                <div key={index} className="rev">
                  <p>{review.firstName[0].toUpperCase() + review.firstName.substring(1)} {review.lastName[0].toUpperCase() + review.lastName.substring(1)}</p>
                  <p>{review.email}</p>
                  <p>{review.title}</p>
                  <p>{review.review}</p>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
        <div className="cityReview">
          <h2>Give a Review</h2>
          <div ref={stars} className="stars">
            <i onClick={(e) => clickStar(e, stars)} className="fa-regular fa-star"/>
            <i onClick={(e) => clickStar(e, stars)} className="fa-regular fa-star"/>
            <i onClick={(e) => clickStar(e, stars)} className="fa-regular fa-star"/>
            <i onClick={(e) => clickStar(e, stars)} className="fa-regular fa-star"/>
            <i onClick={(e) => clickStar(e, stars)} className="fa-regular fa-star"/>
          </div>
          <form action="">
            <input onChange={(e) => setNameOne(e.target.value)} type="text" value={nameOne} placeholder='First Name'/>
            <input onChange={(e) => setNameTwo(e.target.value)} type="text" value={nameTwo} placeholder='Last Name'/>
            <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} placeholder='Review Title'/>
            <textarea onChange={(e) => setReview(e.target.value)} name="review" value={review} placeholder='Give a Review'></textarea>
            {(!user_review) ? <input onClick={(e) => {
              e.preventDefault()
              const star = Array.from(stars.current.querySelectorAll('.fa-solid.fa-star'))
              reviewData.rating = star.length
              dispatch(reviewAsyncThunk.create(reviewData))
              }} type="submit" value="Submit Review"/> :
              <input onClick={(e) => {
                e.preventDefault()
                const star = Array.from(stars.current.querySelectorAll('.fa-solid.fa-star'))
                reviewData.rating = star.length
                reviewData._id = user_review._id
                dispatch(reviewAsyncThunk.update(reviewData))
                }} type="submit" value="Update Review"/>
            }
          </form>
        </div>
      </div>
    </section>
  )

  if (status === 'Failed') {
    return (
      <>
        <h1>Unable To Load City.</h1>
        <p>Redirecting to Countries</p>
        {setTimeout(() => {
          navigate('/countries')
        }, 3000)}
      </>
    )
  }
}

export default City;
