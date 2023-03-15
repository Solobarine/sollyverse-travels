import './Reservation.css'

const Reservation = () => {
  return (
    <section className="reservation">
      <div>
        <img src="/landing/beach-3.jpg" alt=""/>
      </div>
      <h3>Belo Horizonte</h3>
      <h4>Brazil</h4>
      <p className='dates'>15-02-2023</p>
      <p className='dates'>07-03-2023</p>
      <p>$470/wk</p>
      <p>pending</p>
    </section>
  )
}

export default Reservation
