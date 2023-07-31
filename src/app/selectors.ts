import { ThemeState } from "./ThemeSlice"
import { Contact } from "@interface/contacts"

export const selectContacts = (state: { contacts: { list: Contact[] } }) =>
  state.contacts

export const selectFilter = (state: { filter: string }) => state.filter

export const selectTheme = (state: { theme: ThemeState }) => state.theme
