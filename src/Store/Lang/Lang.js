import { createSlice } from '@reduxjs/toolkit';

let localLang = localStorage.getItem('lang');
if (!localLang) {
    localLang = 'ar'
}
const initialLangState = { globalLang: localLang, translation: require(`../../assets/json/lang/${localLang}.json`) }


const langSlice = createSlice({
    name: 'lang',
    initialState: initialLangState,
    reducers: {
        translation(state, action) {
            state.globalLang = action.payload.lang || state.globalLang;
            state.translation = require(`../../assets/json/lang/${action.payload.lang || state.globalLang}.json`);
        }
    }
})



export const langActions = langSlice.actions;

export default langSlice.reducer;