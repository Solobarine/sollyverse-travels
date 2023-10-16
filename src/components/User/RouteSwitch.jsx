import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import Menu from './Menu'
import { verifyToken } from '../../redux/features/apiCalls/user'

const RouteSwitch = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.user)
  const token = localStorage.getItem('authentication_token')

  
  
  useEffect(() => {
      if (!token) return navigate('/login')
      if (token && !user.isLoggedIn && user.status !== 'failed') {
        dispatch(verifyToken())
      }
  }, [dispatch, token, user.isLoggedIn, user.status, navigate])
  

    if (user.isLoggedIn) return (
    <section id='route_switch'>
        <Menu />
        <section id="route_content">
          <Outlet />
        </section>
    </section>
  )
}

export default RouteSwitch