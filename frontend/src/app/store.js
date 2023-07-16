import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../store/auth/authSlice'
import goalReducer from '../store/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
})
