import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    approval_status:false
  }

  export const approveFiltersSlice = createSlice({
    name: 'placeTypeSlice',
    initialState,
    reducers: {
        approve_filters: (state) => {
            state.approval_status = true;
          },
        disapprove_filters: (state) => {
            state.approval_status = false;
          },
    }
  })


  export const { approve_filters, disapprove_filters } = approveFiltersSlice.actions

export default approveFiltersSlice.reducer