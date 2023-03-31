import { configureStore } from "@reduxjs/toolkit"
import cityReducer from './features/city'
import countryReducer from './features/country'
import userReducer from './features/user'
import reservationReducer from './features/reservation'
import reviewReducer from './features/review'
import messageReducer from './features/message'

const store = configureStore({
  reducer: {
    user: userReducer,
    country: countryReducer,
    city: cityReducer,
    message: messageReducer,
    reservation: reservationReducer,
    review: reviewReducer
  }
})

export default store;
