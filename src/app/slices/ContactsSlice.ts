import { Contact } from "@interface/contact"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../store"

export const contactsApi = createApi({
  reducerPath: "contactsApi",
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

  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => `contacts`,
      providesTags: ["Contacts"],
    }),
    addContact: builder.mutation<Contact, Partial<Contact>>({
      query: (contact) => ({
        url: `contacts`,
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation<Contact, string>({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
})

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi
