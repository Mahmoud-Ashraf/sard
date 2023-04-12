import { createSlice } from '@reduxjs/toolkit';

const initialNewsState = { latest: [], mostReaded: [], happendToday: [], urgent: [], sports: [], twitter: [] }

const newsSlice = createSlice({
    name: 'lang',
    initialState: initialNewsState,
    reducers: {
        latest(state, action) {
            state.latest = action.payload.latest;
        },
        mostReaded(state, action) {
            state.mostReaded = action.mostReaded;
        },
        happendToday(state, action) {
            state.happendToday = action.happendToday;
        },
        urgent(state, action) {
            state.urgent = action.urgent;
        },
        sports(state, action) {
            state.sports = action.sports;
        },
        twitter(state, action) {
            state.twitter = action.twitter;
        }
    }
})



export const NewsActions = newsSlice.actions;

export default newsSlice.reducer;