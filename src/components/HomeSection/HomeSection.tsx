import { useAppSelector } from "@app/hooks"
import { selectUser } from "@app/selectors"
import Button from "@components/Button/Button"
import { Dispatch, FC, SetStateAction } from "react"
import { PiPlusBold } from "react-icons/pi"
import { NavLink } from "react-router-dom"

type HomeSectionProps = {
  showModal: Dispatch<SetStateAction<boolean>>
}

const HomeSection: FC<HomeSectionProps> = ({ showModal }) => {
  const { user, token } = useAppSelector(selectUser)

  return (
    <section className="h-full py-10 ">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="main-title mb-5 capitalize">
          Hi{" "}
          <span className="text-yellow-600 dark:text-emerald-300 capitalize">
            {user?.name || "there"}
          </span>{" "}
          ! it's your own{" "}
          <span className="text-yellow-600  dark:text-emerald-300">
            phonebook
          </span>
          !
        </h1>
        <h2 className="secondary-title mb-8">
          The place for all your{" "}
          <span className="text-yellow-600 dark:text-emerald-300">Family</span>,
          <span className="text-yellow-600 dark:text-emerald-300">
            {" "}
            Friends
          </span>{" "}
          and{" "}
          <span className="text-yellow-600 dark:text-emerald-300">
            Work
          </span>{" "}
          contacts!
        </h2>
        {token ? (
          <Button
            onClick={() => showModal(true)}
            variant="primary"
            size="lg"
            className="group"
          >
            <span className="mr-0 group-hover:mr-2 w-0 overflow-hidden -translate-x-full group-hover:w-auto group-hover:translate-x-0 transition-transform duration-300">
              <PiPlusBold />
            </span>
            Add your contact!
          </Button>
        ) : (
          <Button variant="primary" className="group" size="lg">
            <span className="mr-0 group-hover:mr-2 w-0 overflow-hidden -translate-x-full group-hover:w-auto group-hover:translate-x-0 transition-transform duration-300">
              <PiPlusBold />
            </span>
            <NavLink to={"/auth/signup"}> Add your contact!</NavLink>
          </Button>
        )}
      </div>{" "}
    </section>
  )
}

export default HomeSection
