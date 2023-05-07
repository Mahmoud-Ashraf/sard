import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { token: '', user: {}, long: '', lat: '', countryCode: '' ,temp:''};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setUser(state, action) {
            state.token = action.payload.token || state.token;
            state.user = action.payload.user || state.user;
        },
        setLocation(state, action) {
            state.long = action.payload.long;
            state.lat = action.payload.lat;
            state.countryCode = action.payload.countryCode
        },
        setTemperature(state, action){
            state.temp = action.payload.temp;
        }
    }
})



export const authActions = authSlice.actions;

export default authSlice.reducer;