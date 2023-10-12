import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "../utils/utils.ts";
import {ICheckConfiguration, ISliderConfiguration} from "../globalInterface/globalInterface.ts";


export const api = createApi({
    reducerPath: 'Api',
    tagTypes: ['Api'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: build => ({
        getMinutes: build.query<ISliderConfiguration[], []>({
            query: () => '/minutesConfigurator',
            providesTags: () => [{type: 'Api'}]
        }),
        getSms: build.query<ISliderConfiguration[], []>({
            query: () => '/smsConfigurator',
            providesTags: () => [{type: 'Api'}]
        }),
        getInternet: build.query<ISliderConfiguration[], []>({
            query: () => '/internetConfigurator',
            providesTags: () => [{type: 'Api'}]
        }),
        getServices: build.query<ICheckConfiguration[], []>({
            query: () => '/additionalServices',
            providesTags: () => [{type: 'Api'}]
        }),
    })
})

export const {useGetInternetQuery, useGetMinutesQuery, useGetServicesQuery, useGetSmsQuery} = api