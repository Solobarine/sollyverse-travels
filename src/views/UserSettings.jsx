import Settings from '../components/Settings';
import Menu from '../components/Menu';
import './UserSettings.css';

const UserSettings = () => {
  return (
    <section className="userSetting page">
      <Menu />
      <Settings />
    </section>
  )
}

export default UserSettings;
