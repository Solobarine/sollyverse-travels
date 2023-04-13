import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { autoLogin } from "../redux/features/apiCalls/admin"

const PersistAdminLogin = () => {
    const token = localStorage.getItem("authentication_token")
    const isLoggedIn = useSelector(state => state.admin.user.logged_in)
    const status = useSelector(state => state.admin.user.status)
    const dispatch = useDispatch()

    if (!token) return <Navigate to="/admin/login"/>

    if (status === 'idle') dispatch(autoLogin(token))

    if(status === 'Failed') return <Navigate to="/admin/login" />

    if (isLoggedIn === true) return <Outlet/>
}

export default PersistAdminLogin