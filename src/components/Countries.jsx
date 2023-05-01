import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { save_id } from '../utils/helpers';
import countryAsyncThunk from '../redux/features/apiCalls/country';

import './Countries.css';

const Countries = () => {
  const countries = useSelector(state => state.country.countries.item)
  const status = useSelector(state => state.country.countries.status)
  const dispatch = useDispatch()
  
  useEffect(() => async () => {
    if (status === `idle`) {
    dispatch(countryAsyncThunk.showAll())
    }
  }, [dispatch, status])

  console.log(countries)

  return (
    <section className="countries">
    {countries.map((item, index) => (
      <div key={index} className={`country country-${index}`} onMouseEnter={()=> save_id("country_id", item._id)}>
        <h2>{item.name}</h2>
        <Link  to={`/country/${item._id}`}
           className='moreCountry'>See More</Link>
      </div>
      ))}
    </section>
  )
}

export default Countries;