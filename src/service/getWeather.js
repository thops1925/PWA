import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const weatherHeader = {
  'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  'x-rapidapi-key': 'b3ab83e703msh6b8609b2f8fe407p1590f4jsnd344db2af170',
};

const baseUrl = 'https://community-open-weather-map.p.rapidapi.com/weather';

const createWeatherRequest = (url) => ({
  url,
  headers: weatherHeader,
});

export const weatherAPI = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (query) => createWeatherRequest(`?q=${query}`),
    }),
  }),
});

export const { useGetWeatherQuery } = weatherAPI;
