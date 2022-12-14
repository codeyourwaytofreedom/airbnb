import { configureStore } from '@reduxjs/toolkit'
import roomsSlice from "./rooms_slider";
import filteredItemsSlice from './filteredItemsSlice';
import placeTypeSlice from './placeTypeSlice';
import propertyTypeSlice from './propertyTypeSlice';
import approveFiltersSlice from './approveFiltersSlice';
import search_options_Slice from './search_options_Slice';

export const bank = configureStore({
  reducer: {

    roomsSlice: roomsSlice,
    filteredItemsSlice:filteredItemsSlice,
    placeTypeSlice:placeTypeSlice,
    propertyTypeSlice:propertyTypeSlice,
    approveFiltersSlice:approveFiltersSlice,
    search_options_Slice:search_options_Slice
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})