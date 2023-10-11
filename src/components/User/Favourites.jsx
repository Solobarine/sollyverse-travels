import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cityAsyncThunk from '../../redux/features/apiCalls/city';
import Destination from './Destination';
import './css/Favourites.css';

const Favourites = () => {
  const dispatch = useDispatch()
  const { favourites } = useSelector(state =>state.city)
  const { user } = useSelector(state => state.user)
  console.log(favourites);

  useEffect(() => {
    dispatch(cityAsyncThunk.showFavourite())
  }, [dispatch])

  return (
    <section className="favourites">
      <h1>Favourite Cities</h1>
        <div>
          {
            favourites.value.map((place, index) => (
                <Destination
                key={index}
                country={place.city.country}
                city={place.city}
                cost={place.city.cost}
                images={place.city.images}
                user={user._id}
                />
            ))
          }
        </div>
    </section>
  )
}

export default Favourites;
