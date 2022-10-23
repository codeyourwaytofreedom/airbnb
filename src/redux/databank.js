import { configureStore } from '@reduxjs/toolkit'
import roomsSlice from "./rooms_slider";

export const bank = configureStore({
  reducer: {

    roomsSlice: roomsSlice,
  },
})