import { FC, ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  variant: "primary" | "secondary"
  size: "sm" | "md" | "lg" | "rounded"
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
}

const getVariant = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return "border-2 text-yellow-100 bg-yellow-600 dark:border-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-emerald-950 hover:bg-yellow-700 border-yellow-700 flex justify-center items-center rounded-2xl font-semibold hover:text-yellow-300 dark:hover:text-emerald-100 transition-colors duration-300"
    case "secondary":
      return "border-2 text-yellow-900 bg-transparent border-yellow-900 dark:border-emerald-500 dark:hover:bg-emerald-600 dark:text-emerald-500 dark:hover:text-emerald-100 hover:bg-yellow-700 flex justify-center items-center rounded-2xl font-semibold hover:text-yellow-300 transition-colors duration-300"
  }
}

const getSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "sm":
      return "py-1 px-3"
    case "md":
      return "py-3 px-5"
    case "lg":
      return "py-4 px-6"
    case "rounded":
      return "py-2 px-2 rounded-full"
  }
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  size,
  type = "button",
  className,
}) => {
  const btnClassName = `${getVariant(variant)} ${getSize(size)} ${className}`

  return (
    <button className={btnClassName} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
