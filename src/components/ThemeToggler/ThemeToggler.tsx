import { setTheme } from "@app/slices/ThemeSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectTheme } from "@app/selectors"
import Button from "@components/Button/Button"
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
    <Button
      className=""
      size="rounded"
      variant="primary"
      onClick={toggleTheme}
      type="button"
    >
      {theme.mode === "light" ? (
        <BiSun size={"1.5rem"} />
      ) : (
        <BiMoon size={"1.5rem"} />
      )}
    </Button>
  )
}

export default ThemeToggler
