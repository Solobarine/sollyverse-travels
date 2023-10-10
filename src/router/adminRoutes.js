import Admin from "../components/Admin/Admin";
import DashBoard from "../components/Admin/Dashboard";
import Destinations from "../components/Admin/Destination";
import AddCountry from '../components/Admin/AddCountry'
import AddCity from '../components/Admin/AddCity'
import UpdateCountry from '../components/Admin/UpdateCountry'
import UpdateCity from '../components/Admin/UpdateCity'
import AdminLogin from "../views/AdminLogin";
import Mail from "../components/Admin/Mail";
import RouteSwitch from "../components/Admin/RouteSwitch";
import Security from "../components/Admin/Security"
import Settings from "../components/Admin/Settings";
import SignUp from "../views/SignUp";
import Staff from "../components/Admin/Staff";

const adminRoutes = [
    {
        path: '/admin/login',
        element: <AdminLogin />
    },
    {
        path: '/admin/register',
        element: <SignUp />
    },
    {
        path: '/admin/',
        element: <RouteSwitch />,
        children: [
            {
                path: 'profile',
                element: <Admin />
            },
            {
                path: 'dashboard',
                element: <DashBoard />
            },
            {
                path: 'destinations/',
                element: <Destinations />,
                children: [
                    {
                        path: 'country/new',
                        element: <AddCountry />
                    },
                    {
                        path: 'country/update',
                        element: <UpdateCountry />
                    },
                    {
                        path: 'city/new',
                        element: <AddCity />
                    },
                    {
                        path: 'city/update',
                        element: <UpdateCity />
                    }
                ]
            },
            {
                path: 'mails',
                element: <Mail />
            },
            {
                path: 'settings/',
                element: <Settings />,
                children: [
                    {
                        path: 'security',
                        element: <Security />
                    }
                ]
            },
            {
                path: 'staff',
                element: <Staff />
            },
            {
                path: '*',
                element: <h1>Seems You are Lost</h1>
            }
        ]
    }
]

export default adminRoutes