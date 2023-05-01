import { useDispatch, useSelector } from 'react-redux'
import { toggleLike } from '../effects'
import postLike from '../utils/likeDestination'
import './Destination.css'

const Destination = (city) => {
  console.log(city)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  return (
    <section className="destination">
      <figure id="images">
        <img src={`http://localhost:3005${city.city.images[2]}`} alt="City"/>
      </figure>
        <div className="destinationBio">
          <p id="destinationname">{city.city.country}</p>
          <p id="destinationlocation">{city.city.name}</p>
          <p className="destinationCost">${city.city.cost}/wk</p>
          <i onClick={(e) => {
            e.preventDefault()
            postLike(e, dispatch, {destinationId: city.city._id, destination: city.city.name, email: user.email})
            toggleLike(e)
          }} className='fa-regular fa-heart' />
        </div>
    </section>
  )
}

export default Destination;
