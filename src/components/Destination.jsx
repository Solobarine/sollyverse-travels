import './Destination.css';
import Like from './Like';

const Destination = (destination) => {
  return (
    <section className="destination">
      <figure id="images">
        <img src={destination.country.image} alt="Country"/>
      </figure>
        <div className="destinationBio">
          <h5 id="destinationname">{destination.country.country}</h5>
          <p id="destinationlocation">{destination.country.city}</p>
          <p className="destinationCost">${destination.country.cost}/wk</p>
          <Like />
        </div>
    </section>
  )
}

export default Destination;
