import ContactsList from "@components/ContactsList/ContactsList"
import Filter from "@components/Filter/Filter"
import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"

const SidebarList = () => {
  const [isHidden, setIsHidden] = useState(true)

  const hideSidebar = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <aside
        className={`bg-yellow-900 dark:bg-yellow-100   ${
          isHidden ? "-translate-x-full" : "translate-x-0"
        }  w-3/4 sm:w-3/6 md:w-2/5 lg:w-1/5 h-full p-4 absolute top-0 left-0 transition-transform`}
      >
        <button
          onClick={hideSidebar}
          className={`absolute ${
            isHidden && "rotate-180"
          }  text-orange-900 dark:text-yellow-100 hover:text-orange-500 dark:hover:text-orange-500 transition-all duration-300 inline-flex items-center font-semibold top-2/4 left-full`}
        >
          <IoIosArrowBack size={"3rem"} />
        </button>
        <div className="overflow-auto px-3 h-full scroll-smooth scroll-m-4">
          <h1 className="text-yellow-100 dark:text-yellow-900 font-bold text-2xl text-center mb-5">
            Your contacts
          </h1>
          <Filter />
          {!isHidden  && <ContactsList />}
        </div>
      </aside>
    </>
  )
}

export default SidebarList
