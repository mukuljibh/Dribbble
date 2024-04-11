import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from './userDetailsReducer.js'
export default configureStore({
    reducer: {
        user: userDetailsReducer,
    },
})