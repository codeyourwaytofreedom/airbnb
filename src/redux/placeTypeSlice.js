import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected_place_types:[],
    entire:"e",
    priv:"p",
    shared:"s"
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
          update_place_types: (state, payload) => {
            state.selected_place_types = payload
          },
          set_entire: (state, payload) => {
            state.entire = payload
          },
          set_priv: (state, payload) => {
            state.priv = payload
          },
          set_shared: (state, payload) => {
            state.shared = payload
          },
    }
  })


  export const { add_place_type, remove_place_type, update_place_types,set_entire,set_priv,set_shared } = placeTypeSlice.actions

export default placeTypeSlice.reducer