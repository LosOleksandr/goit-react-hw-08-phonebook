import { setTheme } from "@app/ThemeSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectTheme } from "@app/selectors"
import { BiSun, BiMoon } from "react-icons/bi"

const ThemeToggler = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const toggleTheme = () => {
    theme.mode === "light"
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"))
  }

  return (
    <button
      className="absolute top-4 right-4 border-2 bg-yellow-700 border-yellow-800 text-yellow-100 p-2 rounded-full "
      onClick={toggleTheme}
      type="button"
    >
      {theme.mode === "light" ? (
        <BiSun size={"1.5rem"} />
      ) : (
        <BiMoon size={"1.5rem"} />
      )}
    </button>
  )
}

export default ThemeToggler
