import { Contact } from "@interface/contacts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64bc0c897b33a35a4446f943.mockapi.io/phonebook/v1/",
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
