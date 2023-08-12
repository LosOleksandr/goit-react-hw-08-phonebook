import { ErrorMessage } from "@hookform/error-message"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import validationSchema from "./validationSchema"
import { useAddContactMutation } from "@app/slices/ContactsSlice"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Button from "@components/Button/Button"
import Loader from "@components/Loader/Loader"
import Input from "@components/Input/Input"
import MaskedInput from "react-text-mask"

type PhonebookFormFields = {
  name: string
  number: string
}

const PhonebookForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation()

  const {
    register,
    handleSubmit,
    reset,
    control,
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
        className="auth-form bg-yellow-100 dark:bg-gray-700"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="form-label">
          Name
          <Input
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
        <label className="form-label">
          Phone
          <Controller
            control={control}
            name="number"
            render={({ field: { ref, ...field } }) => (
              <MaskedInput
                {...field}
                ref={ref}
                mask={[
                  "+",
                  "3",
                  "8",
                  "0",
                  " ",
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                ]}
                className="w-full border-2  border-yellow-700 dark:border-emerald-700 placeholder-yellow-900/80 dark:placeholder-emerald-500/80 rounded-lg mt-1 px-2 py-2 outline-none bg-transparent focus:bg-yellow-600/40 dark:focus:bg-emerald-600/40 focus:border-yellow-600/40 dark:focus:border-emerald-900 transition-colors"
                placeholder="+380 __ ___ __ __"
              />
            )}
          />
          <ErrorMessage
            name="number"
            errors={errors}
            render={({ message }) => (
              <small className="text-red-500">{message}</small>
            )}
          />
        </label>

        <Button
          size="md"
          variant="secondary"
          className="w-2/4 mx-auto"
          type="submit"
        >
          {!isLoading ? (
            "Add Contact"
          ) : (
            <Loader
              size="0.7rem"
              darkColor="rgb(167 243 208)"
              color="rgb(254 249 195)"
            />
          )}
        </Button>
      </form>
    </>
  )
}

export default PhonebookForm
