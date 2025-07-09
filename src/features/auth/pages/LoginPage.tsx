import { Home } from "lucide-react";
import StyledLink from "@/components/StyledLink";
import { ROUTES } from "@/router/routes.constants";
import LoginFeature from "@/features/auth/components/LoginFeature";

function LoginPage() {
  return (
    <>
      <LoginFeature />
      <div className="flex flex-col items-center gap-2">
        <StyledLink to={ROUTES.HOME} variant="neutral" className="flex gap-2">
          <Home /> Home
        </StyledLink>
        <StyledLink
          to={ROUTES.AUTH.REGISTER}
          variant="neutral"
          className="flex"
        >
          New User! Register
        </StyledLink>
      </div>
    </>
  );
}

export default LoginPage;
