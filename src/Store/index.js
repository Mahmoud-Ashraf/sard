import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./Lang/Lang";
import newsReducer from "./News/News";
import authReducer from "./Auth/Auth";
import stepperReducer from "./Stepper/Stepper";

const store = configureStore({
    reducer: { lang: langReducer, news: newsReducer, auth: authReducer, stepper: stepperReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                // ignoredActions: ['audio'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload'],
                // Ignore these paths in the state
                ignoredPaths: ['stepper'],
            },
        }),
});

export default store;