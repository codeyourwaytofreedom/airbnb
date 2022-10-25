import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected_place_types:[]
  }

  export const placeTypeSlice = createSlice({
    name: 'placeTypeSlice',
    initialState,
    reducers: {
        add_place_type: (state, payload) => {
            state.selected_place_types.push(payload)
          },
        remove_place_type: (state, payload) => {
            const index = state.selected_place_types.indexOf(payload)
            state.selected_place_types.splice(index,1)
          }
    }
  })


  export const { add_place_type, remove_place_type } = placeTypeSlice.actions

export default placeTypeSlice.reducer