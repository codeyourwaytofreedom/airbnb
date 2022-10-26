import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected_place_types:[],
    type_entire:false,
    type_private:false,
    type_shared:false,
  }

  export const placeTypeSlice = createSlice({
    name: 'placeTypeSlice',
    initialState,
    reducers: {
        add_place_type: (state, payload) => {
            state.selected_place_types = [...state.selected_place_types, payload]
          },
        remove_place_type: (state, payload) => {
            let index = state.selected_place_types.indexOf(payload)
            state.selected_place_types.splice(index,1)
          },
        set_entire: (state, payload) => {
          state.type_entire = payload
        },
        set_private: (state, payload) => {
          state.type_private = payload
        },
        set_shared: (state, payload) => {
          state.type_shared = payload
        },
    }
  })


  export const { add_place_type, remove_place_type, set_entire, set_private, set_shared } = placeTypeSlice.actions

export default placeTypeSlice.reducer