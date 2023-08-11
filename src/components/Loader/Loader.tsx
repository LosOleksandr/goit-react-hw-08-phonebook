import { useAppSelector } from "@app/hooks"
import { selectTheme } from "@app/selectors"
import { FC } from "react"
import { BsThermometer } from "react-icons/bs"
import { BeatLoader } from "react-spinners"

type LoaderProps = {
  size: string
  color: string
  darkColor?: string
  className?: string
}

const Loader: FC<LoaderProps> = ({ size, color, darkColor, className }) => {
  const theme = useAppSelector(selectTheme)

  return (
    <div className={` ${className}`}>
      <BeatLoader
        size={size}
        color={theme.mode === "light" ? color : darkColor}
      />
    </div>
  )
}

export default Loader
