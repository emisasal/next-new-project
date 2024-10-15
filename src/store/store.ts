import { configureStore, combineReducers } from "@reduxjs/toolkit"

import userSlice from "./features/userSlice"
import newsSlice from "./features/newsSlice"

// probar combineSlices
const rootReducer = combineReducers({
  user: userSlice,
  news: newsSlice,
})

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
