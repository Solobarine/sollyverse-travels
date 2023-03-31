import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const user = useSelector(state => state.user)

  return (
    <section id="profile">
      <div className="profile decor">
      </div>
      <div className="profile image">
        <img src="/landing/businessWoman.jpg" alt="Profile"/>
      </div>
      <div className="profile">
        <p>Name: <span>Titus Bernard</span></p>
        <p>Email: <span>titus@gmail.com</span></p>
        <p>Age: <span>26</span></p>
        <p>Country: <span>Turkiye</span></p>
        <p>Title: <span>Globe Trotter</span></p>
      </div>
      <div className="profile"></div>
      <div className="profile">
        <div>
          <p>Cities visited</p>
          <p>6</p>
        </div>
        <div>
          <p>Countries visited</p>
          <p>4</p>
        </div>
        <div>
          <p>Most visited City</p>
          <p>Hamburg</p>
          <p>Germany emoji</p>
        </div>
        <div>
          <p>Last visited</p>
          <p>Toledo</p>
          <p>Spain emoji</p>
        </div>
      </div>
    </section>
  )
}

export default Profile;
