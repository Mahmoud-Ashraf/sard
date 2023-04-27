import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { token: '', user: {} };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setUser(state, action) {
            state.token = action.payload.token || state.token;
            state.token = action.payload.user || state.user;
        }
    }
})



export const authActions = authSlice.actions;

export default authSlice.reducer;