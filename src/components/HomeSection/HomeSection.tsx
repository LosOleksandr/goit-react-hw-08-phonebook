import { Dispatch, FC, SetStateAction } from "react"
import { PiPlusBold } from "react-icons/pi"

type HomeSectionProps = {
  showModal: Dispatch<SetStateAction<boolean>>
}

const HomeSection: FC<HomeSectionProps> = ({ showModal }) => {
  return (
    <section className="h-full py-10 ">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center text-orange-900 dark:text-yellow-100 font-bold mb-5  capitalize">
          Hi there! it's your own{" "}
          <span className="text-yellow-600  dark:text-yellow-500">
            phonebook
          </span>
          !
        </h1>
        <h2 className="text-2xl text-orange-900 dark:text-yellow-100 font-semibold text-center mb-8">
          The place for all your{" "}
          <span className="text-yellow-600 dark:text-yellow-500">Family</span>,
          <span className="text-yellow-600 dark:text-yellow-500"> Friends</span>{" "}
          and <span className="text-yellow-600 dark:text-yellow-500">Work</span>{" "}
          contacts!
        </h2>
        <button
          onClick={() => showModal(true)}
          className="border-2 group mx-auto text-yellow-100 bg-yellow-600 dark:border-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-orange-900  hover:bg-yellow-700 border-yellow-700  flex justify-center items-center py-3 px-5 rounded-2xl font-semibold  hover:text-yellow-300 transition-colors duration-300"
        >
          <span className="mr-0 group-hover:mr-2 w-0 overflow-hidden -translate-x-full group-hover:w-auto group-hover:translate-x-0 transition-transform duration-300">
            <PiPlusBold />
          </span>
          Add your contact!
        </button>
      </div>{" "}
    </section>
  )
}

export default HomeSection
