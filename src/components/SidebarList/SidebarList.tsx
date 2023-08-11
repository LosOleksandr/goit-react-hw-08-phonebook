import { useAppSelector } from "@app/hooks"
import { selectUser } from "@app/selectors"
import Button from "@components/Button/Button"
import ContactsList from "@components/ContactsList/ContactsList"
import Filter from "@components/Filter/Filter"
import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { NavLink } from "react-router-dom"

const SidebarList = () => {
  const [isHidden, setIsHidden] = useState(true)
  const { token } = useAppSelector(selectUser)

  const hideSidebar = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <aside
        className={`  bg-no-repeat bg-fixed bg-gradient-to-b from-yellow-700 to-yellow-600 dark:from-emerald-950 dark:to-gray-700 ${
          isHidden ? "-translate-x-full" : "translate-x-0"
        }  w-3/4 sm:w-3/6 md:w-2/5 lg:w-1/5 h-full p-4 absolute top-0 left-0 transition-transform`}
      >
        <button
          onClick={hideSidebar}
          className={`absolute ${
            isHidden && "rotate-180"
          }  text-yellow-900 dark:text-emerald-500 hover:text-yellow-600 dark:hover:text-emerald-200 transition-all duration-300 inline-flex items-center font-semibold top-2/4 left-full`}
        >
          <IoIosArrowBack size={"3rem"} />
        </button>
        <div className="overflow-auto px-3 h-full scroll-smooth scroll-m-4">
          <h2 className="secondary-title reversed-color mb-4">Your contacts</h2>
          {token ? <Filter /> : <p className="text-center text-xl translate-y-2/4 ">Sorry, you need to Log In to see your contacts.</p>}
          {token ? (
            !isHidden && <ContactsList />
          ) : (
            <Button
              className="fixed bottom-4 left-2/4 -translate-x-2/4  "
              variant="primary"
              size="md"
            >
              <NavLink to={"/auth/signup"}>Sign Up/ Log In</NavLink>
            </Button>
          )}
        </div>
      </aside>
    </>
  )
}

export default SidebarList
