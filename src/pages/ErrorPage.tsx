import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h4>Something Went Wrong!</h4>
      <Link to="/">Go To Home</Link>
    </div>
  );
}

export default ErrorPage;
