import './UserDashboard.css';
import Menu from '../components/Menu';
import Dashboard from '../components/Dashboard';

const UserDashboard = () => {
  return (
    <section className="userDashboard">
      <Menu />
      <Dashboard />
    </section>    
  )
}

export default UserDashboard;
