import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../api/apiPosts'


export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(postsApi.middleware)
})