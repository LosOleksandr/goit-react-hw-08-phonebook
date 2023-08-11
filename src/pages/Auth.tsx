import LoginForm from "@components/AuthForm/LoginForm"
import SignupForm from "@components/AuthForm/SignupForm"
import { useParams } from "react-router-dom"

const Auth = () => {
  const { action } = useParams()

  return (
    <div className="h-full grid place-items-center">
      {action === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  )
}

export default Auth
