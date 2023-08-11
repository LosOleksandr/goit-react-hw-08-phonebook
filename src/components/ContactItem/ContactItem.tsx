import { useDeleteContactMutation } from "@app/slices/ContactsSlice"
import Loader from "@components/Loader/Loader"
import { Contact } from "@interface/contact"
import { FC } from "react"
import { BiPhone, BiSolidContact } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { toast } from "react-toastify"

type ContactProps = {
  contact: Contact
}

const ContactIten: FC<ContactProps> = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation()
  const { id, name, number } = contact
  return (
    <li
      key={id}
      className="w-full reversed-color relative border-2 border-yellow-100 dark:border-emerald-500 p-4 rounded-xl font-medium capitalize "
    >
      <ul className="w-full  ">
        <li className="flex align-middle gap-2 mb-3 ">
          <BiSolidContact size={"1.5rem"} />
          <p>{name}</p>
        </li>
        <li className="flex  align-middle gap-2 ">
          <BiPhone size={"1.5rem"} />
          <p>{number}</p>
        </li>
      </ul>

      <button
        className="absolute top-2 right-2 hover:text-red-500 "
        type="button"
        onClick={() =>
          deleteContact(id).then(() => toast.success("Contact was deleted"))
        }
      >
        {isLoading ? (
          <Loader
            color="rgb(239 68 68)"
            darkColor="rgb(239 68 68)"
            size="0.5rem"
          />
        ) : (
          <RiDeleteBin6Line size={"1.5rem"} />
        )}
      </button>
    </li>
  )
}

export default ContactIten
