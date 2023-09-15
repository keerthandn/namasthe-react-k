import { useRouteError } from "react-router-dom";
import "./error.css";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <h1>Oops!!! </h1>
      <h2>something went wrong!</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorPage;
