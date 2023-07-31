import ThemeToggler from "@components/ThemeToggler/ThemeToggler"
import { Outlet } from "react-router-dom"
import { useEffect, useRef } from "react"
import { useAppSelector } from "@app/hooks"
import { selectTheme } from "@app/selectors"

const Layout = () => {
  const theme = useAppSelector(selectTheme)
  const HTMLRef = useRef(document.querySelector("html"))

  useEffect(() => {
    theme.mode === "light"
      ? HTMLRef.current?.classList.remove("dark")
      : HTMLRef.current?.classList.add("dark")
  }, [theme])

  return (
    <main className="h-full">
      <ThemeToggler />
      <Outlet />
    </main>
  )
}

export default Layout
