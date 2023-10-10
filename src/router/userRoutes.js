import Landing from '../views/Landing'
import Login from "../views/Login";
import Register from "../views/Register";
import ForgotPassword from "../views/ForgotPassword";
import RouteSwitch from "../components/User/RouteSwitch";
import Dashboard from "../components/User/Dashboard";
import Profile from "../components/User/Profile";
import City from "../components/User/City";
import Country from "../components/User/Country";
import Countries from "../components/User/Countries";
import Contact from "../components/User/Contact";
import Favourites from "../components/User/Favourites";
import Messages from "../components/User/Messages";
import Reservations from "../components/User/Reservations";
import Settings from '../components/User/Settings';
import Security from '../components/User/Security';
import UserBio from '../components/User/UserBio';

const userRoutes = [
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: '/',
        element: <RouteSwitch />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'countries',
                element: <Countries />
            },
            {
                path: 'city/:id/',
                element: <City />,
                exact: true
            },
            {
                path: 'country/:id/',
                element: <Country />,
                exact: true
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'favourites',
                element: <Favourites />
            },
            {
                path: 'messages/',
                element: <Messages />,
                children: [
                    {
                        path: 'inbox',
                        element: <Messages />
                    },
                    {
                        path: 'starred',
                        element: <Messages />
                    },
                    {
                        path: 'archived',
                        element: <Messages />
                    },
                    {
                        path: 'important',
                        element: <Messages />
                    }
                ]
            },
            {
                path: 'reservations',
                element: <Reservations />
            },
            {
                path: 'settings/',
                element: <Settings />,
                children: [
                    {
                        path: 'security',
                        element: <Security />
                    },
                    {
                        path: 'update-profile',
                        element: <UserBio />
                    }
                ]
            },
            {
                path: '*',
                element: <h1>Seems You are Lost User</h1>
            }
        ]
    }
]

export default userRoutes