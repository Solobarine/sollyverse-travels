import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SettingsMenu from './SettingsMenu';
import './css/Settings.css';

const Settings = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/settings') navigate('/settings/update-profile')
  })
  return (
    <section id="settings">
      <SettingsMenu/>
      <Outlet />
    </section>
  )
}

export default Settings;
