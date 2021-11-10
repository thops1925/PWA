import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (query) => ({
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: { q: query },
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key':
            'b3ab83e703msh6b8609b2f8fe407p1590f4jsnd344db2af170',
        },
      }),
    }),
  }),
});

export const { useGetWeatherQuery } = weatherAPI;
