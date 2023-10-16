import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import AdminHeader from './components/Admin/Header';
import Header from './components/User/Header';
import Footer from './components/User/Footer';

function App() {
  const path = useLocation()

  return (
    <div className="App">
      {
        path.pathname.includes('admin')
        ? <AdminHeader />
        : <Header />
      }
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
