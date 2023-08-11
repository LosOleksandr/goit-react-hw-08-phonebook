import { LoginResponse, SignupResponse, User } from "@interface/auth"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

export type AuthState = {
  user: User | null
  token: string | null
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload }: PayloadAction<LoginResponse | SignupResponse>,
    ) => {
      state.user = payload.user
      state.token = payload.token
    },
  },
})

const persistConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: ["token"],
}

export const { setCredentials } = authSlice.actions

const authReducer = authSlice.reducer

export const persistedAuthReducer = persistReducer(persistConfig, authReducer)
