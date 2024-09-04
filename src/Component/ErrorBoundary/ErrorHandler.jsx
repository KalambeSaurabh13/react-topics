import React from 'react'
import { useErrorBoundary } from 'react-error-boundary'
const ErrorHandler = () => {
    const {resetBoundary } = useErrorBoundary();
  return (
    <div>
        I am Error ErrorHandler
        <button onClick={resetBoundary}>Reset IT</button>
    </div>
  )
}

export default ErrorHandler