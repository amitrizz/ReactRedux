import { configureStore } from '@reduxjs/toolkit'

import todoReducer from "../features/todoSlices/todoSlices"

export const store = configureStore({
    reducer: todoReducer
})