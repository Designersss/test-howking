import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAmount} from "../globalInterface/globalInterface.ts";

const initialState: IAmount = {
    minutesAmount: 0,
    internetsAmount: 0,
    servicesAmount: 0,
    smsAmount: 0,
    operator: '',
    phone: ''
}
export const amountSlice = createSlice({
    name: 'Amount',
    initialState: initialState,
    reducers: {
        setMinutes: (state, action: PayloadAction<number>) => {
            state.minutesAmount = action.payload
        },
        setSms: (state, action: PayloadAction<number>) => {
            state.smsAmount = action.payload
        },
        setInternets: (state, action: PayloadAction<number>) => {
            state.internetsAmount = action.payload
        },
        setServices: (state, action: PayloadAction<number>) => {
            state.servicesAmount = action.payload
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload
        },
        setOperator: (state, action: PayloadAction<string>) => {
            state.operator = action.payload
        }
    }
})

export const {actions, reducer} = amountSlice