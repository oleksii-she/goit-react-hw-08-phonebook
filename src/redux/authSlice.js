import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogedin: false,
    isRafreshing: false,
  },
  extraReducer: builder =>
    builder
      .addCase(register.pending, (state, acrion) => state)
      .addCase(register.fulfilled, (state, acrion) => {
        return state;
      })
      .addCase(register.rejected, (state, acrion) => {
        return state;
      }),
});

export const authReducer = authSlice.reducer;
