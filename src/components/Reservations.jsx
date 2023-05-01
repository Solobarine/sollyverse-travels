import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reservationAsyncThunk from '../redux/features/apiCalls/reservation';
import Reservation from './Reservation'
import './Reservations.css';

const Reservations = () => {
  const dispatch = useDispatch()

  
  const reservation_data = useSelector(state => state.reservation.reservations)
  const cities = reservation_data.cities
  const booking = reservation_data.item
  
  useEffect(() => {
      dispatch(reservationAsyncThunk.show())
  }, [dispatch])
  
  let reservations = []

    booking.map((item) => {
      cities.forEach((element) => {
        if (element._id === item.cityId) {
          return reservations.push({
            ...item,
            city: element.name,
            country: element.country,
            images: element.images
          })
        }
      })
      return reservations
    })

  return (
    <section className="reservations">
      <h1>Reservations</h1>
        {(reservations.length === 0) ? 
        <div id='no_reserves'>
          <h2>You do not currently have any Reservations</h2>
          <h3>Please make a Reservation</h3>
        </div>
        :
        <div className="reserves">
          {reservations.map((reservation, index) => (
            <Reservation key={index} reservation={reservation} />
          ))}
        </div>
          }
      </section>
  )
}

export default Reservations;
