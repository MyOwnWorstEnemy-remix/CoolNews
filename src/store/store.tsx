import { configureStore } from "@reduxjs/toolkit";
import favReducer from './fav-slice';

export const store = configureStore({
    reducer: {
        favourites: favReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>