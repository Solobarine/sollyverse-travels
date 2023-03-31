import { configureStore } from "@reduxjs/toolkit"
import adminReducer from "./features/adminReducer/admin"
import cityReducer from "./features/adminReducer/city"
import countryReducer from './features/adminReducer/country'
import messageReducer from './features/adminReducer/message'
import reservationReducer from "./features/adminReducer/reservation"
import staffReducer from "./features/adminReducer/staff"

const adminStore =configureStore({
  reducer: {
    admin: adminReducer,
    city: cityReducer,
    country: countryReducer,
    reservation: reservationReducer,
    message: messageReducer,
    staff: staffReducer
  }
})

