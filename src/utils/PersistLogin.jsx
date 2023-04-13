import { useDispatch, useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import { autoLogin } from "../redux/features/apiCalls/user"

const PersistLogin = () => {
    const token = localStorage.getItem("authentication_token")
    const isLoggedIn = useSelector(state => state.user.login)
    const status = useSelector(state => state.user.status)

    const dispatch = useDispatch()

    if (!token) return <Navigate to="/login"/>

    if (status === 'idle') dispatch(autoLogin(token))

    if(status === 'Failed') return <Navigate to="/login" />

    if (isLoggedIn === true) return <Outlet/>
}

export default PersistLogin