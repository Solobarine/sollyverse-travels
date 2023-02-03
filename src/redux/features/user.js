import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'User',
  initialState: {firstName: '', lastName: '', email: '',
    sex: '', nationality: '', addressOne: '',
    addressTwo: '', city: '', state: '', country: '', token: ''
  },

})

export default userSlice;
