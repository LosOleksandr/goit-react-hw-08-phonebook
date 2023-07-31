import { useAppSelector } from "@app/hooks"
import { selectFilter } from "@app/selectors"
import { Contact } from "@interface/contacts"
import { BiSolidContact, BiPhone } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri"
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "@app/ContactsSlice"
// import { ToastContainer, toast } from "react-toastify"

const ContactsList = () => {
  const { data } = useGetContactsQuery()
  const filter = useAppSelector(selectFilter)
  const [deleteContact] = useDeleteContactMutation()

  const getVisibleContacts = (data: Contact[], filter: string) => {
    return data.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
    )
  }

  const visibleContacts = data ? getVisibleContacts(data, filter) : []

  return (
    <>
      <ul className="mt-4 flex flex-col gap-3 max-w-screen-md">
        {visibleContacts.length === 0 && (
          <p className="text-center font-medium text-xl">No Contacts!</p>
        )}
        {visibleContacts.map(({ id, name, number }) => (
          <li
            key={id}
            className=" w-full relative  border-2 border-yellow-100 dark:border-yellow-900  p-4 rounded-xl font-medium capitalize "
          >
            <ul className="w-full  ">
              <li className="flex  align-middle gap-2 mb-3 ">
                <BiSolidContact size={"1.5rem"} />
                <p className="">{name}</p>
              </li>
              <li className="flex  align-middle gap-2 ">
                <BiPhone size={"1.5rem"} />
                <p>{number}</p>
              </li>
            </ul>

            <button
              className="absolute top-2 right-2 hover:text-red-500 "
              type="button"
              onClick={() => deleteContact(id)}
            >
              <RiDeleteBin6Line size={"1.5rem"} />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ContactsList
