import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/data/dataSlice";
import appReducer from "./slices/app/appSlice";

const rootReducer = combineReducers({ appReducer, dataReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
