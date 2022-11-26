import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  // extraReducers: {
  //   [register.fulfilled](state, action) {
  //     console.log(action);
  //     state.user = action.payload.user;
  //   },
  // },

  extraReducers: builder =>
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
    }),
  // extraReducer: builder =>
  //   builder
  //     .addCase(register.pending, (state, action) => state)
  //     .addCase(register.fulfilled, (state, action) => {
  //       console.log(action.payload);
  //       state.user = action.payload.user;
  //       state.token = action.payload.user;
  //       state.isLoggedIn = true;
  //     })
  //     .addCase(register.rejected, (state, action) => state),
});

export default authSlice.reducer;
