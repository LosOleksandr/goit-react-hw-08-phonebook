import ThemeToggler from "@components/ThemeToggler/ThemeToggler"
import { NavLink, Outlet } from "react-router-dom"
import { useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectTheme, selectUser } from "@app/selectors"
import { ToastContainer } from "react-toastify"
import { useLogoutMutation, useRefreshUserQuery } from "@app/auth"
import { setCredentials } from "@app/slices/AuthSlice"
import { LoginResponse } from "@interface/auth"
import Button from "@components/Button/Button"

const Layout = () => {
  const theme = useAppSelector(selectTheme)
  const HTMLRef = useRef(document.querySelector("html"))
  const { token } = useAppSelector(selectUser)
  const { data } = useRefreshUserQuery(token)
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data && token) {
      const credentials: LoginResponse = {
        user: data,
        token,
      }
      dispatch(setCredentials(credentials))
    }
  }, [data, dispatch, token])

  useEffect(() => {
    theme.mode === "light"
      ? HTMLRef.current?.classList.remove("dark")
      : HTMLRef.current?.classList.add("dark")
  }, [theme])

  return (
    <main className="h-full">
      {" "}
      <div className="flex gap-2 absolute top-4 right-4">
        {token ? (
          <Button
            onClick={() => {
              logout(token)
              dispatch(setCredentials({ user: null, token: null }))
              window.location.reload()
            }}
            variant="primary"
            size="sm"
          >
            Log Out
          </Button>
        ) : (
          <Button variant="primary" size="sm">
            <NavLink to={"/auth/signup"}>Sign Up/ Log In</NavLink>
          </Button>
        )}
        <ThemeToggler />
      </div>
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme.mode === "light" ? "light" : "dark"}
      />
    </main>
  )
}

export default Layout
