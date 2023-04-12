import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./Lang/Lang";
import newsReducer from "./News/News";

const store = configureStore({
    reducer: { lang: langReducer, news: newsReducer }
});

export default store;