import { useEffect } from "react"
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom"
import './css/Destination.css'

const Destinations = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/admin/destinations') {
      navigate('/admin/destinations/country/new')
    }

  }, [location.pathname, navigate])

  
  return (
    <section id="createDestinations">
      <div id="destinationMenu">
        <NavLink to='/admin/destinations/country/new' className="destinationLink">
          <i className="fa-solid fa-square-plus"></i>
          <p>New Country</p>
        </NavLink>
        <NavLink
        to='/admin/destinations/city/new'
        className="destinationLink">
          <i className="fa-solid fa-square-plus"></i>
          <p>New City</p>
        </NavLink>
        <NavLink
        to='/admin/destinations/country/update'
        className="destinationLink">
          <i className="fa-solid fa-pen-to-square"></i>
          <p>Update Country</p>
        </NavLink>
        <NavLink
        to='/admin/destinations/city/update' 
        className="destinationLink">
          <i className="fa-solid fa-pen-to-square"></i>
          <p>Update City</p>
        </NavLink>
      </div>
      <div id="destinationOutlet">
        <Outlet/>
      </div>
    </section>
  )
}

export default Destinations
