import { Link } from 'react-router-dom';
import Like from './Like';
import './css/Destination.css';

const Destination = ({city, country, cost, images, user}) => {
  
  return (
    <section className="destination">
      <figure id="images">
        <img src={images[0]} alt="Country"/>
      </figure>
        <div className="destinationBio">
          <Link
          to={`/city/${city._id}`}
          id="destinationname">{city.name}</Link>
          <Link
          to={`/country/${country._id}`}
          id="destinationlocation">{country.name}</Link>
          <p className="destinationCost">${cost}/wk</p>
          <Like user={user} city={city._id} />
        </div>
    </section>
  )
}

export default Destination;
