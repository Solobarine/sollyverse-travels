import { useDispatch, useSelector } from 'react-redux';
import reservationAsyncThunk from '../../redux/features/apiCalls/reservation';
import Reservation from './Reservation'
import './css/Reservations.css';
import { useEffect } from 'react';

const Reservations = () => {
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(reservationAsyncThunk.show())
  }, [dispatch])
  
  const { reservations } = useSelector(state => state.reservation)
  
  return reservations.value ? (
    <section className="reservations">
      <h1>Reservations</h1>
      <div className="reserves">
        {reservations.value.map((item, index) => (
          <Reservation details={item} key={index} />
        ))}
      </div>
      </section>
  )
  : null
}

export default Reservations;
