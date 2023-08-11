import { useAppSelector } from "@app/hooks"
import { selectUser } from "@app/selectors"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const ProtectedRoute = () => {
  const { token } = useAppSelector(selectUser)
  const location = useLocation()
  return !token ? <Outlet /> : <Navigate to="/" state={{ from: location }} />
}

export default ProtectedRoute
