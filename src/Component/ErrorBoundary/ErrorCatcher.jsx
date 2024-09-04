import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Product from "./Product/Product";
import ErrorHandler from "./ErrorHandler";
const ErrorCatcher = () => {
  const fallbackRenderHandler = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
        {/* <button onClick={resetErrorBoundary}>Reset</button> */}
      </div>
    );
  };

  const logError = (error, info) => {
    console.log("Error is ",error.message);
    console.log(JSON.stringify(info));
    // Do something with the error, e.g. log to an external API
  };
  return (
    <ErrorBoundary
    //   fallback={<div>Something went wrong</div>}
      fallback={<ErrorHandler />}

    //   fallbackRender={fallbackRenderHandler}
      onError={logError}
    >
      <Product />
    </ErrorBoundary>
  );
};

export default ErrorCatcher;
