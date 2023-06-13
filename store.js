import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies/moviesSlice";

const rootReducer = combineReducers({ moviesReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
