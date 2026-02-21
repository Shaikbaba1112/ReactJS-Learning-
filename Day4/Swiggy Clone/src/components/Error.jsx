import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return <div>
        <h1>404 Not Found, Something went wrong 🤬</h1>
        <p>{error.status} - {error.statusText}</p>
    </div>
}

export default Error;