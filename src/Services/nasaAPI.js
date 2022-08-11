import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequest = (url) => url;

export const nasaAPI = createApi({
  reducerPath: "nasaAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.nasa.gov" }),
  endpoints: (builder) => ({
    getPod: builder.query({
      query: () =>
        createRequest(
          `planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}`
        ),
    }),
  }),
});

export const { useGetPodQuery } = nasaAPI;
