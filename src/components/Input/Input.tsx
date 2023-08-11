import { FC, Ref, SyntheticEvent, forwardRef } from "react"

type InputProps = {
  ref: Ref<HTMLInputElement>
  type: "email" | "password" | "text" | "tel"
  onChange: (e: SyntheticEvent) => void
  name: string
  placeholder?: string
  autoComplete?: "on" | "off"
}

const Input: FC<InputProps> = forwardRef(
  ({ type, onChange, name, autoComplete = "off", placeholder }, ref) => {
    return (
      <input
        ref={ref}
        autoComplete={autoComplete}
        type={type}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="w-full border-2 border-yellow-700 dark:border-emerald-700 placeholder-yellow-900/80 dark:placeholder-emerald-500/80 rounded-lg mt-1 px-2 py-2 outline-none bg-transparent focus:bg-yellow-600/40 dark:focus:bg-emerald-600/40 focus:border-yellow-600/40 dark:focus:border-emerald-900 transition-colors"
      />
    )
  },
)

export default Input
