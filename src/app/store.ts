// import { persistor } from "@app/"
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { contactsApi } from "./slices/ContactsSlice"
import { filterReducer } from "./slices/FilterSlice"
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import { persistedThemeReducer } from "./slices/ThemeSlice"
import { persistedAuthReducer } from "./slices/AuthSlice"
import { authApi } from "./auth"

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: persistedAuthReducer,
    filter: filterReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([contactsApi.middleware, authApi.middleware]),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
