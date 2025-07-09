import RegisterFeature from "@/features/auth/components/RegisterFeature";
import StyledLink from "@/components/StyledLink";
import { Home } from "lucide-react";

function RegisterPage() {
  return (
    <>
      <RegisterFeature />
      <div className="flex flex-col items-center gap-2">
        <StyledLink to="/" variant="neutral" className="flex gap-2">
          <Home /> Home
        </StyledLink>
        <StyledLink to="/login" variant="neutral" className="flex">
          Already Account! Login
        </StyledLink>
      </div>
    </>
  );
}

export default RegisterPage;
