import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "./store"
import {
  LoginResponse,
  SignupResponse,
  User,
  UserLoginCredentials,
  UserSignupCredentials,
} from "@interface/auth"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<SignupResponse, UserSignupCredentials>({
      query: (credits) => ({
        url: "/users/signup",
        method: "POST",
        body: credits,
      }),
    }),
    login: builder.mutation<LoginResponse, UserLoginCredentials>({
      query: (credits) => ({
        url: "/users/login",
        method: "POST",
        body: credits,
      }),
    }),
    logout: builder.mutation<User, string | null>({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
    refreshUser: builder.query<User, string | null>({
      query: () => ({
        url: "/users/current",
        method: "GET",
      }),
    }),
  }),
})

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshUserQuery,
} = authApi
