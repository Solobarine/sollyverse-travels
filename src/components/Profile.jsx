import { useSelector } from 'react-redux';
import country from 'countries-list';
import './Profile.css';

const Profile = () => {
  const user = useSelector(state => state.user)
  const account = user.user
  const firstName = account.firstName
  const lastName = account.lastName

  const date = new Date().getFullYear()
  const birthYear = (account) && account.dateOfBirth.split('-')[0]
  const age = (account) && date - birthYear

  return (
    <section id="profile">
      <div className="profile decor">
      </div>
      <div className="profile image">
        <img src="/landing/businessWoman.jpg" alt="Profile"/>
      </div>
      <div className="profile">
        <p>Name: <span>{`${firstName[0].toUpperCase()}${firstName.substring(1)}`} {`${lastName[0].toUpperCase()}${lastName.substring(1)}`}</span></p>
        <p>Age: <span>{age}</span></p>
        <p>Country: <span>{account.countryOfOrigin}</span></p>
        <p>Gender: <span>{account.gender}</span></p>
        <p>Title: <span>{account.nickName}</span></p>
      </div>
      <div className="profile">
        <p>Phone Number: <span>{account.phoneNumber}</span></p>
        <p>Email: <span>{account.email}</span></p>
        <p>Country of Residence: <span>{account.countryOfResidence}</span></p>
        <p>State: <span>{account.state}</span></p>
        <p>Address: <span>{account.addressOne}</span></p>
        <p>Zip Code: <span>{account.zipCode}</span></p>
      </div>
      <div className="profile">
      </div>
    </section>
  )
}

export default Profile;
