import { ErrorMessage } from "@hookform/error-message"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import validationSchema from "./validationSchema"
import { useAddContactMutation } from "@app/ContactsSlice"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

type PhonebookFormFields = {
  name: string
  number: string
}

const PhonebookForm = () => {
  const [addContact] = useAddContactMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PhonebookFormFields>({ resolver: yupResolver(validationSchema) })

  const onSubmit: SubmitHandler<PhonebookFormFields> = (
    data: PhonebookFormFields,
  ) => {
    addContact(data).then(() => toast.success("Contact was added"))
    reset()
  }

  return (
    <>
      <form
        className="flex flex-col gap-5 border-4 py-12 px-4 border-yellow-100 dark:border-yellow-900 rounded-2xl bg-yellow-900 dark:bg-yellow-100  justify-center align-middle"
        action=""
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-medium">
          Name
          <input
            className="w-full  border-2 border-yellow-100 dark:border-yellow-900 placeholder-yellow-100/80 dark:placeholder-yellow-900/80 rounded-lg mt-1 px-2 py-2 outline-none bg-transparent focus:bg-yellow-200/40 dark:focus:bg-yellow-600/40 focus:border-yellow-700 dark:focus:border-yellow-600  transition-colors"
            type="text"
            {...register("name")}
            placeholder="Type name here..."
          />
          <ErrorMessage
            name="name"
            errors={errors}
            render={({ message }) => (
              <small className="text-red-500">{message}</small>
            )}
          />
        </label>
        <label className="font-medium">
          Phone
          <input
            {...register("number")}
            className="w-full  border-2 border-yellow-100 dark:border-yellow-900 placeholder-yellow-100/80 dark:placeholder-yellow-900/80 rounded-lg mt-1 px-2 py-2 outline-none bg-transparent focus:bg-yellow-200/40 dark:focus:bg-yellow-600/40 focus:border-yellow-700 dark:focus:border-yellow-600  transition-colors"
            type="tel"
            placeholder="Type phone here..."
          />
          <ErrorMessage
            name="number"
            errors={errors}
            render={({ message }) => (
              <small className="text-red-500">{message}</small>
            )}
          />
        </label>
        <button
          className="border-2 group mx-auto mt-4 text-yellow-100 bg-yellow-600 dark:border-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-orange-900  hover:bg-yellow-700 border-yellow-700  flex justify-center items-center py-3 px-5 rounded-2xl font-semibold  hover:text-yellow-300 transition-colors duration-300"
          type="submit"
        >
          Add Contact
        </button>
      </form>
      <ToastContainer />
    </>
  )
}

export default PhonebookForm
