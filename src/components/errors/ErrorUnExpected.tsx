import ErrorTemplate from "./ErrorTemplate";

const ErrorUnExpected = () => (
  <ErrorTemplate
    code="⚠️"
    message="Unexpected Error"
    description="An unexpected error occurred. Please refresh or contact support."
  />
);

export default ErrorUnExpected;
