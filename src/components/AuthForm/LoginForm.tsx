import { setCredentials } from "@app/slices/AuthSlice"
import { useLoginMutation } from "@app/auth"
import { useAppDispatch } from "@app/hooks"
import Button from "@components/Button/Button"
import Input from "@components/Input/Input"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import Loader from "@components/Loader/Loader"

type LoginCredentials = {
  email: string
  password: string
}

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const [login, { isLoading }] = useLoginMutation()
  const [errMsg, setErrMsg] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginCredentials>()

  const onSubmit: SubmitHandler<LoginCredentials> = async (
    credits: LoginCredentials,
  ) => {
    const response = await login(credits)

    if ("error" in response) {
      setErrMsg("Login Error")
      return
    }

    const { data } = response
    dispatch(setCredentials(data))
    reset()
    setErrMsg("")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <h2 className="text-center text-2xl font-medium mb-10">Log In</h2>
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
      <span className="text-red-500 text-center">{errMsg}</span>
      <Button
        className="mx-auto mt-4"
        variant="primary"
        size="md"
        type="submit"
      >
        {!isLoading ? (
          "Log In"
        ) : (
          <Loader
            size="0.7rem"
            darkColor="rgb(113 63 18)"
            color="rgb(254 249 195)"
          />
        )}
      </Button>
      <NavLink
        className={" max-w-max mx-auto hover:text-yellow-600 dark:hover:text-emerald-300 transition-colors"}
        to={"/auth/signup"}
      >
        Don`t have an account? Sign Up
      </NavLink>
    </form>
  )
}

export default LoginForm
