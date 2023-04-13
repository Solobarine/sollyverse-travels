import Menu from '../components/Menu';
import Dashboard from '../components/Dashboard';

const UserDashboard = () => {

    return (
        <section className="userDashboard page shrinkMenu">
          <Menu />
          <Dashboard />
        </section>  
    )
}

export default UserDashboard;
