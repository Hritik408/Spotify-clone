import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '541eaaa774msh3f4f2e158faf03cp1e9f9fjsn4478c14cfaae',
    'x-rapidapi-host': 'shazam.p.rapidapi.com'
  }
};

fetch('https://shazam.p.rapidapi.com/songs/get-details?key=40333609&locale=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


    export const shazamCoreApi = createApi({
      reducerPath: 'shazamCoreApi',
      baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders:  (headers) => {  // prepare headers before each and every api
          headers.set('x-rapidapi-key','541eaaa774msh3f4f2e158faf03cp1e9f9fjsn4478c14cfaae');

          return headers;
        }
      }),
      endpoints: (builder) => ({
        getTopCharts: builder.query({ query: ( ) => '/songs/get-details?key=40333609&locale=en-US'})
      })
     });

     export const { useGetTopChartsQuery, } = shazamCoreApi;