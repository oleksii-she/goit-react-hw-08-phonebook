import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { contactsBookReducer } from './contactsBookSlice';
import filterSlice from './filterSlice';
export const store = configureStore({
  reducer: {
    auth: authSlice,
    filter: filterSlice,
    contacts: contactsBookReducer,
  },
});
