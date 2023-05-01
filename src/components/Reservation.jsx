import './Reservation.css'

const Reservation = (data) => {
  const {reservation} = data
  console.log(reservation)
  return (
    <section className="reservation">
      <div>
        <img src={`http://localhost:3005${reservation.images[2]}`} alt=""/>
      </div>
      <h3>{reservation.city}</h3>
      <h4>{reservation.country}</h4>
      <p className='dates'>{reservation.startDate.substring(0, 10)}</p>
      <p className='dates'>{reservation.endDate.substring(0, 10)}</p>
      <p>${reservation.cost}/wk</p>
      <p>{reservation.status}</p>
    </section>
  )
}

export default Reservation
