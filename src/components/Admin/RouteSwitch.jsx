import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { verifyToken } from '../../redux/features/apiCalls/admin'
import Menu from './Menu'

const RouteSwitch = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const admin = useSelector((state) => state.admin)

  console.log(admin);

  const token = localStorage.getItem('authentication_token')
  console.log(token);

  useEffect(() => {
      if (token && !admin.isLoggedIn && (admin.status !== 'failed' || admin.status !== 'pending')) {
        dispatch(verifyToken())
      }
  }, [dispatch, token, admin.isLoggedIn, admin.status, navigate])

  if (admin.isLoggedIn) return (
    <section id='admin_route_switch'>
        <Menu />
        <div id="admin_route_content">
          <Outlet />
        </div>
    </section>
  )

  if (!token) return navigate('/admin/login')
}

export default RouteSwitch