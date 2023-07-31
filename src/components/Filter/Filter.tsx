import { setFilter } from "@app/FilterSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectFilter } from "@app/selectors"
import { ChangeEvent } from "react"

const Filter = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectFilter)

  return (
    <>
      <h3 className="font-medium text-xl mb-3 ">
        Filter your contacts by name
      </h3>
      <input
        className=" w-full  border-2 border-yellow-100 dark:border-yellow-900 placeholder-yellow-100/80 dark:placeholder-yellow-900/80 rounded-lg mt-1 px-2 py-2 outline-none bg-transparent focus:bg-yellow-200/40 dark:focus:bg-yellow-600/40 focus:border-yellow-700 dark:focus:border-yellow-600  transition-colors "
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
