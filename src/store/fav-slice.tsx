import { createSlice } from "@reduxjs/toolkit";
import { Article, Event, Film } from "../types/types";

type stateType = (Article | Event | Film) & {entry: "news" | "event" | "film"};

const initialState: {favourites: stateType[]} = {
    favourites: [],
}

const favSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addFav: (state, action) => {
            switch(action.payload.type) {
                case 'ADD_NEWS': state.favourites.push({...action.payload.data, entry: "news"}); break;
                case 'ADD_EVENT': state.favourites.push({...action.payload.data, entry: "event"}); break;
                case 'ADD_FILM': state.favourites.push({...action.payload.data, entry: "film"}); break;
                default: break;
            }
        },
        removeFav: (state, action) => {
            const index = state.favourites.findIndex((item) => item.entry === action.payload.type && item.id === action.payload.id);
            if(index !== -1) {
                state.favourites = [...state.favourites.slice(0, index), ...state.favourites.slice(index + 1)];
            }
        }
    }
});

export const {addFav, removeFav} = favSlice.actions;
export default favSlice.reducer;