import ErrorTemplate from "./ErrorTemplate";

const Error404 = () => (
  <ErrorTemplate
    code="404"
    message="Page Not Found"
    description="The page you're looking for doesn’t exist or has been moved."
  />
);

export default Error404;
