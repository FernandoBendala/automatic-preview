import { createSlice } from '@reduxjs/toolkit'

const initialColor = { r: 102, g: 112, b: 128, a: 1 }
const initialState = {
    adsImages: [],
    currentSlide: 0,
    backgroundColor: initialColor,
    brandImage: '',
    buttonColor: initialColor,
    buttonText: '',
    buttonTextColor: initialColor,
    titleColor: initialColor,
    titleText: '',
}

const dominationSlide = createSlice( {
    name: 'domination',
    initialState,
    reducers: {
        setAdsImages ( state, action ) {
            state.adsImages = action.payload
        },
        setCurrentSlide ( state, action ) {
            state.currentSlide = action.payload
        },
        setBackgroundColor ( state, action ) {
            state.backgroundColor = action.payload
        },
        setBrandImage ( state, action ) {
            state.brandImage = action.payload
        },
        setButtonColor ( state, action ) {
            state.buttonColor = action.payload
        },
        setButtonText ( state, action ) {
            state.buttonText = action.payload
        },
        setButtonTextColor ( state, action ) {
            state.buttonTextColor = action.payload
        },
        setTitleColor ( state, action ) {
            state.titleColor = action.payload
        },
        setTitleText ( state, action ) {
            state.titleText = action.payload
        },
    }
} )

export const {
    setAdsImages,
    setCurrentSlide,
    setBackgroundColor,
    setBrandImage,
    setButtonColor,
    setButtonText,
    setButtonTextColor,
    setTitleColor,
    setTitleText,
} = dominationSlide.actions
export default dominationSlide.reducer
