import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nigths:0
  }

export const Search_options_Slice = createSlice({

    name: 'Search_options_Slice',
    initialState,
    reducers: {
        save_nights: (state,payload) => {
            state.nigths = payload
        }
    }
    
})

export const {save_nights} = Search_options_Slice.actions

export default Search_options_Slice.reducer