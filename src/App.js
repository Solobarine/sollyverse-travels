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
import Countries from './components/Countries';
import City from './components/City';
import Country from './components/Country';
import UserSettings from './views/UserSettings';

function App() {
  return (
    <div className="App">
      <Header />
        <div id="App-Content">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path="/forgot_password" element={<ForgotPassword/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/account/dashboard' element={<UserDashboard/>} />
            <Route path='/account/settings' element={<UserSettings/>} />
            <Route path='/countries' element={<Countries/>} />
            <Route path='/country' element={<Country/>} />
            <Route path='/city' element={<City/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
