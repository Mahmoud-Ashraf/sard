import { createSlice } from '@reduxjs/toolkit';
const HappenedToDayArr = [
    {
        title: "تيست",
        attachments: [
            {
                url: "https://www.youtube.com/watch?v=EsGkXt6nneE",
                type: "video"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
                type: "image"
            }
        ]
    },
    {
        title: "اختبار عنوان كبير للتجربة",
        attachments: [
            {
                url: "https://www.youtube.com/watch?v=EsGkXt6nneE",
                type: "video"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
                type: "image"
            }
        ]
    },
    {
        title: "اختبار عنوان كبير جدا جدا جدا جدا جدا جدا جدا للتجربة والتحقق",
        attachments: [
            {
                url: "https://www.youtube.com/watch?v=EsGkXt6nneE",
                type: "video"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
                type: "image"
            }
        ]
    }
]
const initialNewsState = { latest: HappenedToDayArr, mostReaded: HappenedToDayArr, happendToday: HappenedToDayArr, urgent: HappenedToDayArr, sports: HappenedToDayArr, twitter: HappenedToDayArr }

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
        },
        customNews(state, action) {
            const newstType = Object.keys(action)[0];
            state[newstType] = action[newstType];
        }
    }
})



export const NewsActions = newsSlice.actions;

export default newsSlice.reducer;