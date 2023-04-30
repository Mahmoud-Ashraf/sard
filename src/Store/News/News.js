import { createSlice } from '@reduxjs/toolkit';
// const [] = [
// {
//     title: "تيست",
//     attachments: [
//         {
//             url: "https://www.youtube.com/watch?v=EsGkXt6nneE",
//             type: "video"
//         },
//         {
//             url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
//             type: "image"
//         }
//     ]
// },
// {
//     title: "اختبار عنوان كبير للتجربة",
//     attachments: [
//         {
//             url: "https://www.youtube.com/watch?v=EsGkXt6nneE",
//             type: "video"
//         },
//         {
//             url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
//             type: "image"
//         }
//     ]
// },
// {
//     title: "اختبار عنوان كبير جدا جدا جدا جدا جدا جدا جدا للتجربة والتحقق",
//     attachments: [
//         {
//             url: "https://www.youtube.com/watch?v=EsGkXt6nneE",
//             type: "video"
//         },
//         {
//             url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
//             type: "image"
//         }
//     ]
// }
// ]
const initialNewsState = { latest: [], mostReaded: [], happendToday: [], urgent: [], sports: [], twitter: [] }

const newsSlice = createSlice({
    name: 'lang',
    initialState: initialNewsState,
    reducers: {
        latest(state, action) {
            state.latest = action.payload;
        },
        mostReaded(state, action) {
            state.mostReaded = action.payload;
        },
        happendToday(state, action) {
            state.happendToday = action.payload;
        },
        urgent(state, action) {
            state.urgent = action.payload;
        },
        sports(state, action) {
            state.sports = action.payload;
        },
        twitter(state, action) {
            state.twitter = action.payload;
        },
        customNews(state, action) {
            const newstType = Object.keys(action)[0];
            state[newstType] = action[newstType];
        }
    }
})



export const NewsActions = newsSlice.actions;

export default newsSlice.reducer;