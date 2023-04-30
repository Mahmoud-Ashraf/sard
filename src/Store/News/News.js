import { createSlice } from '@reduxjs/toolkit';

const initialNewsState = { categories: [] }

const newsSlice = createSlice({
    name: 'news',
    initialState: initialNewsState,
    reducers: {
        // latest(state, action) {
        //     state.latest = action.payload.latest;
        // },
        // mostReaded(state, action) {
        //     state.mostReaded = action.payload.mostReaded;
        // },
        // happendToday(state, action) {
        //     state.happendToday = action.payload.happendToday;
        // },
        // urgent(state, action) {
        //     state.urgent = action.payload.urgent;
        // },
        // sports(state, action) {
        //     state.sports = action.payload.sports;
        // },
        // twitter(state, action) {
        //     state.twitter = action.payload.twitter;
        // },
        customNews(state, action) {
            const newstType = Object.keys(action.payload)[0];
            state[newstType] = action.payload[newstType];
        },
        setCategories(state, action) {
            state.categories = action.payload;
        }
    }
})



export const NewsActions = newsSlice.actions;

export default newsSlice.reducer;