import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const createRequest = (url) => (url)

export const spaceXAPI = createApi({
    reducerPath: 'spaceXAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4/' }),
    endpoints: (builder) => ({
        getRockets: builder.query({
            query: () => createRequest(`/rockets`)
        }),
        getRocketDetails: builder.query({
            query: (id) => createRequest(`/rockets/${id}`)
        }),
        getDragons: builder.query({
            query: () => createRequest(`/dragons`)
        }),
        getDragonDetails: builder.query({
            query: (id) => createRequest(`/dragons/${id}`)
        }),
        getCompanyInfo: builder.query({
            query: () => createRequest(`/company`)
        }),
        getMemberInfo: builder.query({
            query: () => createRequest(`/crew`)
        }),
    })
})

export const { 
    useGetRocketsQuery,
    useGetRocketDetailsQuery,
    useGetDragonsQuery,
    useGetDragonDetailsQuery,
    useGetCompanyInfoQuery,
    useGetMemberInfoQuery,
 } = spaceXAPI;