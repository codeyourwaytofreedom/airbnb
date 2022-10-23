import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const roomsSlice = createSlice({
  name: 'roomsSlice',
  initialState,
  reducers: {
    add_filter: (state, payload) => {
        state.value.push(payload)
    }
  },
})

export const { add_filter } = roomsSlice.actions

export default roomsSlice.reducer