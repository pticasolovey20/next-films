import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/data/dataSlice";

const rootReducer = combineReducers({ dataReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
