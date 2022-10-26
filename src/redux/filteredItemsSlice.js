import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filtered_properties:620
  }

  export const filteredItemsSlice = createSlice({
    name: 'filteredProperties',
    initialState,
    reducers: {
        updated_filtered_items: (state, payload) => {
            state.filtered_properties=payload
          }
    }
  })


  export const { updated_filtered_items } = filteredItemsSlice.actions

export default filteredItemsSlice.reducer