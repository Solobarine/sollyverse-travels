import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Landing from './views/Landing';
import Login from './views/Login';
import Register from './views/Register';
import ForgotPassword from './views/ForgotPassword';
import UserDashboard from './views/UserDashboard';
import NotFound from './views/NotFound';
import Countries from './views/Countries';
import City from './views/City';
import Country from './views/Country';
import UserSettings from './views/UserSettings';
import UserMessages from './views/UserMessages';
import UserProfile from './views/UserProfile';
import UserFavourites from './views/UserFavourites';
import UserReservations from './views/UserReservations';
import AdminMenu from './views/AdminMenu';
import AdminDashboard from './views/AdminDashBoard';
import AdminSettings from './views/AdminSettings';
import AdminLogin from './views/AdminLogin';
import AdminSignUp from './views/AdminSignUp';
import AdminStaff from './views/AdminStaff';
import AdminMail from './views/AdminMail';
import AdminDestination from './views/AdminDestination';
import AdminHeader from './components/AdminHeader';

function App() {
  return (
    <div className="App">
        <div id="App-Content">
          <Routes>
            <Route path='/admin' element={<AdminHeader/>}>
              <Route index element={<AdminDashboard />} />
              <Route path='profile' element={<AdminMenu/>} />
              <Route path='settings' element={<AdminSettings/>} />
              <Route path='register' element={<AdminSignUp/>} />
              <Route path='login' element={<AdminLogin/>} />
              <Route path='message' element={<AdminMail/>} />
              <Route path='destination' element={<AdminDestination/>} />
              <Route path='staff' element={<AdminStaff/>} />
            </Route>
            <Route path='/' element={<Header/>} >
            <Route index element={<Landing />} />
            <Route path='/login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path="/account/profile" element={<UserProfile/>} />
            <Route path='/account/messages' element={<UserMessages/>} />
            <Route path="/forgot_password" element={<ForgotPassword/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/account/dashboard' element={<UserDashboard/>} />
            <Route path='/account/favourites' element={<UserFavourites/>} />
            <Route path='/account/reservations' element={<UserReservations/>} />
            <Route path='/account/settings' element={<UserSettings/>} />
            <Route path='/countries' element={<Countries/>} />
            <Route path='/country' element={<Country/>} />
            <Route path='/city' element={<City/>} />
            <Route path='*' element={<NotFound/>} />
            </Route>
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
