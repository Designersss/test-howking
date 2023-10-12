import {combineReducers} from "@reduxjs/toolkit";
import {api} from "../api/api.ts";
import {amountSlice} from "../slices/amountSlice.ts";

export const globalStore = combineReducers({
    finalAmount: amountSlice.reducer,
    [api.reducerPath]: api.reducer
})