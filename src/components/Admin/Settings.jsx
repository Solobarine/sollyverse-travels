import { Outlet, useLocation, useNavigate,  NavLink } from "react-router-dom"
import { useEffect } from "react"
import './css/Settings.css'

const Settings = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const updatePassword = {
    password: '',
    newPassword: '',
    confirmPassword: ''
  }

  useEffect(() => {
    if (location.pathname === '/admin/settings') navigate('/admin/settings/security')
}, [location.pathname, navigate])

  return (
    <section id="adminSetting">
      <div id='adminSettingsMenu'>
        <NavLink to='/admin/settings/security'>
          <ion-icon name="lock-closed"></ion-icon>
          <p>Security</p>
        </NavLink>
      </div>
      <div id="adminsSettingOutlet">
        <Outlet />
      </div>
    </section>
  )
}

export default Settings
