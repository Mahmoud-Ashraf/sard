import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./Lang/Lang";
import newsReducer from "./News/News";
import authReducer from "./Auth/Auth";

const store = configureStore({
    reducer: { lang: langReducer, news: newsReducer, auth: authReducer }
});

export default store;