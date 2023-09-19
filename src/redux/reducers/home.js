import { createSlice } from '@reduxjs/toolkit'

const homeSlide = createSlice( {
    name: 'home',
    initialState: {
        apps: ['Domination', 'Other'],
        selected: '',
    },
    reducers: {
        appSelected ( state, action ) {
            state.selected = action.payload
        },
    },
} )

export const { appSelected } = homeSlide.actions
export default homeSlide.reducer
