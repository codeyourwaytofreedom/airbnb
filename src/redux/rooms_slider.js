import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nu_room:0,
  nu_beds:0,
  nu_bathrooms:0,
}

export const roomsSlice = createSlice({
  name: 'roomsSlice',
  initialState,
  reducers: {
    add_filter_by_rooms: (state, payload) => {
      state.nu_room=payload
    },
    add_filter_by_beds: (state, payload) => {
      state.nu_beds=payload
  },
  add_filter_by_bathrooms: (state, payload) => {
    state.nu_bathrooms=payload
},
  },
})

export const { add_filter_by_rooms, add_filter_by_beds,add_filter_by_bathrooms  } = roomsSlice.actions

export default roomsSlice.reducer