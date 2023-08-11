import { setFilter } from "@app/slices/FilterSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectFilter } from "@app/selectors"
import { ChangeEvent } from "react"

const Filter = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectFilter)

  return (
    <>
      <h3 className="font-medium text-xl reversed-color mb-1">
        Filter your contacts by name
      </h3>
      <input
        className="w-full border-2 reversed-color border-yellow-100 dark:border-emerald-700 placeholder-yellow-100/80 dark:placeholder-emerald-500/80 rounded-lg mt-1 px-2 py-2 outline-none bg-transparent focus:bg-yellow-100/40 dark:focus:bg-emerald-600/40 focus:border-yellow-100/40 dark:focus:border-emerald-900 transition-colors"
        type="text"
        value={value}
        placeholder="Filter here..."
        onChange={(evt: ChangeEvent<HTMLInputElement>) =>
          dispatch(setFilter(evt.target.value))
        }
      />
    </>
  )
}

export default Filter
