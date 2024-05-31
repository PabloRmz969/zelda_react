import { configureStore } from '@reduxjs/toolkit'
import { zeldaSlice } from './zelda/zeldaSlice'

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        zelda: zeldaSlice.reducer
    },
})
export type AppStore = typeof store;
export type ZeldaState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']