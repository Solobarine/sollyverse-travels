import { Link } from 'react-router-dom';
import './css/Countries.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import countryAsyncThunk from '../../redux/features/apiCalls/country';

const Countries = () => {

  const dispatch = useDispatch()

  const { countries } = useSelector(state => state.country)

  useEffect(() => {
    dispatch(countryAsyncThunk.showAll())
  }, [dispatch])

  const toggleButton = (e) => {
    const elements = Array.from(document.getElementsByClassName('show'))

    e.target.classList.contains('country') && e.target.children[1].classList.toggle('show')

    elements && elements.forEach(element => {
      element.classList.remove('show')
    });
  }

  return (
    <section className="countries">
    {countries.value.map((item, index) => (
      <div
      key={index}
      onMouseEnter={toggleButton}
      onMouseLeave={toggleButton}
      className={`country country-${index}`}>
        <img className='countryImage' src={item.imageUrl} alt={item.name} />
        <h2>{item.name}</h2>
        <Link
        className='moreCountry'
        to={`/country/${item._id}`}
        >See More</Link>
      </div>
      ))}
    </section>
  )
}

export default Countries;
