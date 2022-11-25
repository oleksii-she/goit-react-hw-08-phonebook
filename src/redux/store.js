import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { contactsBookReducer } from './contactsBookSlice';
import filterSlice from './filterSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsBookReducer,
    filter: filterSlice,
    auth: authReducer,
  },
});
