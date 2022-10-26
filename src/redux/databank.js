import { configureStore } from '@reduxjs/toolkit'
import roomsSlice from "./rooms_slider";
import filteredItemsSlice from './filteredItemsSlice';
import placeTypeSlice from './placeTypeSlice';
import propertyTypeSlice from './propertyTypeSlice';
import approveFiltersSlice from './approveFiltersSlice';

export const bank = configureStore({
  reducer: {

    roomsSlice: roomsSlice,
    filteredItemsSlice:filteredItemsSlice,
    placeTypeSlice:placeTypeSlice,
    propertyTypeSlice:propertyTypeSlice,
    approveFiltersSlice:approveFiltersSlice
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})