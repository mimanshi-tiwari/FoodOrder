import { useRouteError } from 'react-router-dom'
//* UseRouteError is a hook that returns the error object from the route that caused the error
const Error = () => {
    const err = useRouteError()

    return (
        <div className="error">
            Opps! Something went wrong. Please try again later.
            <h1>{err.status}: {err.statusText}</h1>
        </div>
    )
}

export default Error