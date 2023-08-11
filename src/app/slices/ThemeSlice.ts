import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

export interface ThemeState {
  mode: "light" | "dark"
}

const initialState: ThemeState = {
  mode: "light",
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state: ThemeState, action: PayloadAction<"light" | "dark">) {
      state.mode = action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer

const persistConfig = {
  key: "theme",
  version: 1,
  storage,
}

export const persistedThemeReducer = persistReducer(persistConfig, themeReducer)
