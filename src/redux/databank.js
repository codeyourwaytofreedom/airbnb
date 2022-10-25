import { configureStore } from '@reduxjs/toolkit'
import roomsSlice from "./rooms_slider";
import filteredItemsSlice from './filteredItemsSlice';

export const bank = configureStore({
  reducer: {

    roomsSlice: roomsSlice,
    filteredItemsSlice:filteredItemsSlice
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})