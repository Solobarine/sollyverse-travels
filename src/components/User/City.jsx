import { useRef, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import MapArea from './Map.jsx'
import Review from './Review.jsx'
import { updateLike } from '../../redux/features/city.js'
import { toggleLike, clickStar } from '../../effects/index.js'
import {reviewInputs, reviewSchema} from '../../utils/reviewSchema.js'
import { reservationInputs, reservationSchema } from '../../utils/reservationSchema.js';
import cityAsyncThunk from '../../redux/features/apiCalls/city.js'
import reservationAsyncThunk from '../../redux/features/apiCalls/reservation.js'
import likeAsyncThunk from '../../redux/features/apiCalls/like.js'
import reviewAsyncThunk from '../../redux/features/apiCalls/review.js'
import { clearReserveError, clearReserveMessage } from '../../redux/features/reservation.js'
import './css/City.css'

const City = () => {
  const dispatch = useDispatch()
  const [rating, setRating] = useState(0)
  const { id } = useParams()

  const stars = useRef()

    const { city, random } = useSelector(state => state.city)
    const { user, likes } = useSelector(state => state.user)
    const { reserve } = useSelector(state => state.reservation)
    const { top } = useSelector(state => state.review)
    const [isLiked, setIsLiked] = useState('fa-regular fa-heart')

  useEffect(() => {
    dispatch(cityAsyncThunk.showOne(id))
    dispatch(reviewAsyncThunk.showFive(id))
    dispatch(cityAsyncThunk.showRandomFive())
  }, [dispatch, id])

  useEffect(() => {
    likes.map(like => (
        (like.city === city.value._id)
        ? setIsLiked('fa-solid fa-heart')
        : null
      ))
  })
  return city ? (
    <>
      {
          reserve.message ?
          <div className="responseMessage">
              <p>{reserve.message}</p>
              <p
              className="close"
              onClick={() => dispatch(clearReserveMessage())}
              >&#10006;</p>
          </div> 
          : null
      }
      {
          reserve.error
          ?
          <div className="responseError">
              <p>{reserve.error}</p>
              <p
              onClick={() => dispatch(clearReserveError())}
              className="close"
              >&#10006;</p>
          </div>
          : null
      }
      <section className="city">
        <div className="cityDetails">
          <div className="cityImages">
          {city.value.images ? 
          <img src={city.value.images[0]} alt="city"/>
          : null}
          </div>
          <div className="cityBio">
            <h1>{city.value.name}</h1>
            <div>
              <i
              onClick={(e) => {
                dispatch(likeAsyncThunk.create({user: user._id, city: city.value._id}))
                toggleLike(e, dispatch, updateLike)
              }}
              className={isLiked}
              />
              <span id='cityLikes'>{city.value.likes}</span>
            </div>
            <p>{city.value.description}</p>

          </div>
          <div className="cityReservation">
            <h2>Make a Reservation</h2>
            <Formik
            initialValues={{
              startDate: '',
              endDate: ''
            }}
            validationSchema={reservationSchema}
            onSubmit={(values) => {
              values.user = user._id
              values.city = city.value._id
              values.cost = city.value.cost
              console.log(values)
              dispatch(reservationAsyncThunk.create(values))
            }}
            >
              {
                ({ errors, touched }) => (
                  <Form>
                    {
                      reservationInputs.map((field, index) => (
                        <div key={index} className="form_input">
                        <label htmlFor={field.name}>{field.label}</label> 
                        <Field
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        />
                        {
                          errors[field.name] && touched[field.name]
                          ? <small>{errors[field.name]}</small>
                          : null
                        }
                        </div>
                      ))
                    }
                    <input type="submit" value="Make Reservation" />
                  </Form>
                )
              }
            </Formik>
          </div>
          <div className="otherCities">
            <h2>Cities you may Love</h2>
            <div className="majorCities">
              { random.value.map((item, index) =>(
                <div key={index} className="mainCities">
                  <div>
                    <img src={item.images[0]} alt='City' />
                  </div>
                    <h4>{item.name}</h4>
                    <i onClick={toggleLike} className="fa-regular fa-heart" />
                    <p>${item.cost}/wk</p>
                    <Link to={`/city/${item._id}`}>See More</Link>
                </div>
                ))
              }
            </div>
          </div>
          <Link to="/countries">Explore More Countries</Link>
        </div>
        <div className="aboutCity">
          <div className="cityMap">
            {
              (city.value.latitude && city.value.longitude)
              ? <MapArea props={{lat: city.value.latitude, lon: city.value.longitude, zoom: 6}} />
              : null
            }
            
          </div>
          <div className="cityReviews">
            <h2>Reviews</h2>
            <div>
              {
                top.item.length > 0 ? 
                top.item.map((review, index) => (
                  <Review review={review} key={index} />
                ))
                :
                <div className='singleReview noReview'>
                  <h3>No Reviews made Yet</h3>
                </div>
              }
            </div>
          </div>
          <div className="cityReview">
            <h2>Rate Your Vacation</h2>
            <div ref={stars} className="stars">
              <i onClick={(e) => clickStar(e, stars, setRating)} className="fa-regular fa-star"/>
              <i onClick={(e) => clickStar(e, stars, setRating)} className="fa-regular fa-star"/>
              <i onClick={(e) => clickStar(e, stars, setRating)} className="fa-regular fa-star"/>
              <i onClick={(e) => clickStar(e, stars, setRating)} className="fa-regular fa-star"/>
              <i onClick={(e) => clickStar(e, stars, setRating)} className="fa-regular fa-star"/>
            </div>
            <h2>Give a Review</h2>
            <Formik
    initialValues={{
      title: '',
      review: ''
    }}
    validationSchema={reviewSchema}
    onSubmit={(values) => {
      values.rating = rating
      values.user = user._id
      values.city = city.value._id
      console.log(values)
      dispatch(reviewAsyncThunk.create(values))
    }}
  >
    {({ errors, touched }) => (
      <Form>
        {reviewInputs.map((field) => (
          field.type !== 'textarea'
          ? <div className="form_input" key={field.id}>
            <label htmlFor={field.name}>{field.label}</label>
            <Field
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
            />
            {errors[field.name] && touched[field.name] ? (
              <small>{errors[field.name]}</small>
            ) : null}
          </div>
          :
          <div className="form_input textarea" key={field.id}>
          <label htmlFor="">{field.label}</label>
          <Field
            as="textarea"
            col="30"
            rows="10"
            name={field.name}
            placeholder={field.placeholder}
          />
          {errors[field.name] && touched[field.name] ? (
            <small>{errors[field.name]}</small>
          ) : null}
        </div>
        ))
      }
        <input type="submit" value="Submit Review"/>
      </Form>
    )}
  </Formik>
          </div>
        </div>
      </section>
    </>
  )
  : null
}

export default City;
