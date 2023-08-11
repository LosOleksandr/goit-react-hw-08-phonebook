import { ContactState } from "@interface/contactState"
import { ThemeState } from "./slices/ThemeSlice"
import { AuthState } from "./slices/AuthSlice"

export const selectContacts = (state: { contacts: ContactState }) =>
  state.contacts

export const selectFilter = (state: { filter: string }) => state.filter

export const selectTheme = (state: { theme: ThemeState }) => state.theme

export const selectUser = (state: { auth: AuthState }) => state.auth
