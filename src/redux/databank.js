import { configureStore } from '@reduxjs/toolkit'
import roomsSlice from "./rooms_slider";
import filteredItemsSlice from './filteredItemsSlice';
import placeTypeSlice from './placeTypeSlice';
import propertyTypeSlice from './propertyTypeSlice';

export const bank = configureStore({
  reducer: {

    roomsSlice: roomsSlice,
    filteredItemsSlice:filteredItemsSlice,
    placeTypeSlice:placeTypeSlice,
    propertyTypeSlice:propertyTypeSlice
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})