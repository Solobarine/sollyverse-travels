import { configureStore } from "@reduxjs/toolkit"
import cityReducer from './features/city'
import countryReducer from './features/country'
import userReducer from './features/user'
import reservationReducer from './features/reservation'
import reviewReducer from './features/review'
import messageReducer from './features/message'
import likeReducer from './features/like'

// Import Admin Reducers
import admin from "./features/adminReducer/admin"
import adminCountry from "./features/adminReducer/country"
import adminCity from "./features/adminReducer/city"
import adminMessage from "./features/adminReducer/message"
import adminReservation from "./features/adminReducer/reservation"
import staff from "./features/adminReducer/staff"

const store = configureStore({
  reducer: {
      user: userReducer,
      country: countryReducer,
      city: cityReducer,
      message: messageReducer,
      reservation: reservationReducer,
      review: reviewReducer,
      like: likeReducer,
      admin: admin,
      adminCity: adminCity,
      adminCountry: adminCountry,
      adminMessage: adminMessage,
      adminReservation: adminReservation,
      staff: staff
    }
})

export default store;
