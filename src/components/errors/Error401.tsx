import ErrorTemplate from "./ErrorTemplate";

const Error401 = () => (
  <ErrorTemplate
    code="401"
    message="Unauthorized"
    description="You are not authorized to view this page. Please login to continue."
  />
);

export default Error401;
