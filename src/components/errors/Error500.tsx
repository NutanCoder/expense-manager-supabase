import ErrorTemplate from "./ErrorTemplate";

const Error500 = () => (
  <ErrorTemplate
    code="500"
    message="Server Error"
    description="Oops! Something went wrong on our end. Please try again later."
  />
);

export default Error500;
