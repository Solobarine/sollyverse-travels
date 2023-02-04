import {useRef} from 'react';
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
            <input type="text" placeholder="Enter FirstName"/>
            <input type="text" placeholder="Enter LastName"/>
            <input type="number" name="phoneNo" placeholder='Enter Mobile Number'/>
            <input type="text" placeholder="Enter Email"/>
            <input type="text" placeholder="Address 1"/>
            <input type="text" placeholder="Address 2"/>
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="State"/>
            <input type="text" placeholder="ZIP Code"/>
            <input type="text" placeholder="Country"/>
            <input type="submit" value="Change Details"/>
          </form>
        </div>
        <div ref={security} className="s-options security">
          <form>
            <h1>Change Password</h1>
            <input type="password" placeholder='Old Password'/>
            <input type="password" placeholder='New Password'/>
            <input type="password" placeholder='Confirm New Password'/>
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
