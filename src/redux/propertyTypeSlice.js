import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected_property_types: []
}

export const propertyTypeSlice = createSlice({
    name: 'propertyTypeSlice',
    initialState,
    reducers: {
        add_property_type: (state, payload) => {
            state.selected_property_types=payload;
        },
        remove_property_type: (state, payload) => {
            const index = state.selected_property_types.indexOf(payload)
            state.selected_property_types.splice(index, 1)
        }
    }
})


export const { add_property_type, remove_property_type } = propertyTypeSlice.actions

export default propertyTypeSlice.reducer