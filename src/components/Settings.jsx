import {useRef, useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { handleChange } from '../effects';
import './Settings.css';

const Settings = () => {

  const bio = useRef()
  const security = useRef()
  const theme = useRef()

  const showBioSetting = () => {
    if (!bio.current.classList.contains('settingShow')) bio.current.classList.add('settingShow')
    security.current.classList.remove('settingShow')
    theme.current.classList.remove('settingShow')
  }

  const showSecuritySetting = () => {
    if (!security.current.classList.contains('settingShow')) security.current.classList.add('settingShow')
    bio.current.classList.remove('settingShow')
    theme.current.classList.remove('settingShow')
  }

  const showThemeSetting = () => {
    if (!theme.current.classList.contains('settingShow')) theme.current.classList.add('settingShow')
    bio.current.classList.remove('settingShow')
    security.current.classList.remove('settingShow')
  }

  let [userBio, setUserBio] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zipCode: '',
    countryOfResidence: ''
  })

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const user = useSelector(state => state.user.user)

  useEffect( () => {
    if (user) return setUserBio(user)
  }, [user])

  return (
    <section id="settings">
      <div className="settings">
        <div onClick={showBioSetting} className="SettingsOptions changeBio">
          <i className="fa-solid fa-pen"></i>
          <p>Profile</p>
        </div>
        <div onClick={showSecuritySetting} className="SettingsOptions changePassword">
          <i className="fa-solid fa-shield"></i>
          <p>Security</p>
        </div>
        <div onClick={showThemeSetting} className="SettingsOptions Changetheme">
          <i className="fa-solid fa-desktop"></i>
          <p>Theme</p>
        </div>
      </div>
      <div className="settingsDiv">
        <div ref={bio} className="s-options bioDiv settingShow">
          <form>
            <h1>Update Your Profile</h1>
            <input onChange={(e) => handleChange(e, setUserBio)} type="text" name="firstName" value={userBio.firstName} placeholder="Enter FirstName"/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="text" name="lastName" value={userBio.lastName} placeholder="Enter LastName"/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="text" name="phoneNumber" value={userBio.phoneNumber} placeholder='Enter Mobile Number'/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="email" name="email" value={userBio.email} placeholder="Enter Email"/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="text" name="addressOne" value={userBio.addressOne} placeholder="Address 1"/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="text" name="addressTwo" value={userBio.addressTwo} placeholder="Address 2"/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="text" name="city" value={userBio.city} placeholder="City"/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="text" name="state" value={userBio.state} placeholder="State"/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="text" name="zipCode" value={userBio.zipCode} placeholder="ZIP Code"/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="text" name="countryOfResidence" value={userBio.countryOfResidence} placeholder="Country of Residence"/>
            <input type="submit" value="Change Details"/>
          </form>
        </div>
        <div ref={security} className="s-options security">
          <form>
            <h1>Change Password</h1>
            <input onChange={(e) => handleChange(e, setUserBio)} type="password" name="oldPassowrd" value={password.oldPassword} placeholder='Old Password'/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="password" name="newPassword" value={password.newPassword} placeholder='New Password'/>
            <input onChange={(e) => handleChange(e, setUserBio)} type="password" name="confirmPassword" value={password.confirmPassword} placeholder='Confirm New Password'/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div ref={theme} className="s-options s-theme">
          <form>
            <h1>Change Theme</h1>
            <select name="Theme">
              <option disabled value="Select Your Theme">Select Your Theme</option>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
            <input type="submit" value="Change Theme"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Settings;
