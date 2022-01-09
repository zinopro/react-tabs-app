import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { slice } from './user'

const reducer = combineReducers({
  users: slice.reducer,
})

const store = configureStore({
  reducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;

