import './css/Reservation.css'

const Reservation = ({details}) => {

  return (
    <section className="reservation">
      <div>
        <img src={details.city.images[1]} alt=""/>
      </div>
      <h4>
        <i class="fa-solid fa-city"></i>
        <span>{details.city.name}</span>
      </h4>
      <h5>
        <i class="fa-solid fa-globe"></i>
        <span>Brazil</span>
      </h5>
      <p className='dates'>
        <i class="fa-regular fa-calendar-days" />
        <small>07-03-2023</small>
      </p>
      <p className='dates'>
        <i class="fa-regular fa-calendar-days" />
        <small>07-03-2023</small>
      </p>
      <p>
        <i class="fa-solid fa-money-bill-1"></i>
        <small>${details.city.cost}/wk</small>
      </p>
      <p>
        <i class="fa-solid fa-list"></i>
        <small>pending</small>
      </p>
    </section>
  )
}

export default Reservation
