import { Link } from "react-router-dom";
import {
  Error401,
  Error404,
  Error500,
  ErrorUnExpected,
} from "../components/errors";

interface IErrorPage {
  type: "401" | "404" | "500" | null;
}

function ErrorPage(props: IErrorPage) {
  const type = props.type;
  return (
    <div>
      {type == "401" && <Error401 />}
      {type == "404" && <Error404 />}
      {type == "500" && <Error500 />}
      {type == null && <ErrorUnExpected />}
    </div>
  );
}

export default ErrorPage;
