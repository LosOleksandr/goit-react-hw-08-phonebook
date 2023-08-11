import { setCredentials } from "@app/slices/AuthSlice"
import { useSignupMutation } from "@app/auth"
import { useAppDispatch } from "@app/hooks"
import Button from "@components/Button/Button"
import Input from "@components/Input/Input"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"

type SignUpCredentials = {
  name: string
  email: string
  password: string
}

const SignupForm = () => {
  const dispatch = useAppDispatch()
  const [signup] = useSignupMutation()
  const [errMsg, setErrMsg] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpCredentials>()

  const onSubmit: SubmitHandler<SignUpCredentials> = async (
    credits: SignUpCredentials,
  ) => {
    const response = await signup(credits)
    if ("error" in response) {
      setErrMsg("Signup Error")
      return
    }
    const { data } = response
    dispatch(setCredentials(data))

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form ">
      <h2 className="text-center text-2xl font-medium mb-12">Sign Up</h2>
      <label className="form-label">
        Username
        <Input
          type="text"
          {...register("name")}
          placeholder="Type username here..."
        />
      </label>
      <label className="form-label">
        Email
        <Input
          type="email"
          {...register("email")}
          placeholder="Type email here..."
        />
      </label>
      <label className="form-label">
        Password
        <Input
          type="password"
          {...register("password")}
          placeholder="Type password here..."
        />
      </label>
      <Button
        className="mx-auto mt-4"
        variant="primary"
        size="md"
        type="submit"
      >
        Sign Up
      </Button>
      <NavLink
        className={
          " max-w-max mx-auto hover:text-yellow-600 dark:hover:text-emerald-300 transition-colors"
        }
        to={"/auth/login"}
      >
        Already have an account? Log In
      </NavLink>
    </form>
  )
}

export default SignupForm
