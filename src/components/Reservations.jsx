import Reservation from './Reservation'
import './Reservations.css';

const Reservations = () => {
  const reserves = [1,2,3,4]
  return (
    <section className="reservations">
      <h1>Reservations</h1>
      <div className="reserves">
        {reserves.map((item) => (
          <Reservation />
        ))}
      </div>
      </section>
  )
}

export default Reservations;
