import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Home from "@pages/Home"
import Layout from "@components/Layout/Layout"
import Auth from "@pages/Auth"
import ProtectedRoute from "./protectedRoute"
import Error from "@pages/Error"

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
      </Route>
      ,
      <Route element={<ProtectedRoute />}>
        <Route path="auth/:action" element={<Auth />}></Route>
      </Route>
    </>,
  ),
)
