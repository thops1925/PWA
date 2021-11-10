import { configureStore } from '@reduxjs/toolkit';
import { weatherAPI } from '../service/getWeather';

export default configureStore({
  reducer: {
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherAPI.middleware),
});
