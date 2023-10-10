import { NavLink } from 'react-router-dom'
import './css/SettingsMenu.css'

const SettingsMenu = () => {
  return (
    <div id='settings_menu'>
        <NavLink to='/settings/update-profile'>
            <i class="fa-solid fa-user-pen"></i>
            <small>Update Profile</small>
        </NavLink>
        <NavLink to='/settings/security'>
            <i class="fa-solid fa-lock"></i>
            <small>Security</small>
        </NavLink>
    </div>
  )
}

export default SettingsMenu