import { useSelector } from 'react-redux';
import './css/Profile.css';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

const Profile = () => {
  const userState = useSelector(state => state.user)
  const { user } = userState

  return (
    <section id="profile">
      <div className="profile image">
        <img src="/landing/businessWoman.jpg" alt="Profile"/>
      </div>
      <div className="profile bio">
        <div>
          <p>Name:  </p>
          <span>{capitalizeFirstLetter(user.firstName)} {capitalizeFirstLetter(user.lastName)}</span>
        </div>
        <div>
          <p>Email:  </p>
          <span>{capitalizeFirstLetter(user.email)}</span>
        </div>
        <div>
          <p>Age:  </p>
          <span>26</span>
        </div>
        <div>
          <p>Country:  </p>
          <span>{capitalizeFirstLetter(user.countryOfOrigin)}</span>
        </div>
        <div>
          <p>Title:  </p>
          <span>Globe Trotter</span>
        </div>
      </div>
      <div className="profile journey">
        <div>
          <p>City of Residence</p>
          <span>{user.city}</span>
        </div>
        <div>
          <p>State of Residence</p>
          <span>{user.state}</span>
        </div>
        <div>
          <p>Country of Residence</p>
          <span>{user.countryOfResidence}</span>
        </div>
      </div>
    </section>
  )
}

export default Profile;
