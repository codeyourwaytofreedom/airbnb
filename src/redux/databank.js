import { configureStore } from '@reduxjs/toolkit'
import roomsSlice from "./rooms_slider";
import filteredItemsSlice from './filteredItemsSlice';
import placeTypeSlice from './placeTypeSlice';

export const bank = configureStore({
  reducer: {

    roomsSlice: roomsSlice,
    filteredItemsSlice:filteredItemsSlice,
    placeTypeSlice:placeTypeSlice
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})