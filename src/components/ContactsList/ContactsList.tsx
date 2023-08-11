import { useAppSelector } from "@app/hooks"
import { selectFilter } from "@app/selectors"
import { Contact } from "@interface/contact"
import { useGetContactsQuery } from "@app/slices/ContactsSlice"
import ContactIten from "@components/ContactItem/ContactItem"

const ContactsList = () => {
  const { data, isUninitialized, isFetching } = useGetContactsQuery()
  const filter = useAppSelector(selectFilter)

  const getVisibleContacts = (data: Contact[], filter: string) => {
    return data.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
    )
  }

  const visibleContacts = data ? getVisibleContacts(data, filter) : []

  return (
    <>
      {!isUninitialized && (
        <ul className="mt-4 flex flex-col gap-3 max-w-screen-md">
          {visibleContacts.length === 0 &&
            data?.length === 0 &&
            !isFetching && (
              <p className="secondary-title reversed-color">No Contacts!</p>
            )}
          {data?.length !== 0 &&
            visibleContacts.length === 0 &&
            !isFetching && (
              <p className="secondary-title reversed-color">No Matches!</p>
            )}
          {visibleContacts.map((contact) => (
            <ContactIten key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  )
}

export default ContactsList
