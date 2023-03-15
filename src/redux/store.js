import { configureStore } from "@reduxjs/toolkit";
import countryReducer from './features/country'
import userReducer from './features/user'

const store = configureStore({
  user: userReducer,
  country: countryReducer
})

export default store;
