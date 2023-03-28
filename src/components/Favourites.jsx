import { useSelector } from 'react-redux';
import Destination from './Destination';
import './Favourites.css';

const Favourites = () => {
  const countries = [{country: 'Egypt', city: 'Alexandria', image: '/landing/desert.jpg', cost: 685},
    {country: 'Italy', city: 'Naples', cost: 700, image: '/landing/beach-0.jpg'}]
  const favourites = useSelector(state.city.favourites)

  return (
    <section className="favourites">
      <h1>Favourite Cities</h1>
      <div>
        {countries.map((country, index) => (
          <Destination key={index} country={country} />
        ))}
      </div>
    </section>
  )
}

export default Favourites;
