import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <p>
        {error.status} {error.statusText}
      </p>
    )
  }
}

export default Error
