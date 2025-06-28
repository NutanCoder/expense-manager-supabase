import RegisterFeature from "../features/RegisterFeature";
import StyledLink from "../components/StyledLink";
import { Home } from "lucide-react";

function RegisterPage() {
  const randomBgUrl = `https://picsum.photos/1600/900?random=${Math.floor(
    Math.random() * 1000
  )}`;
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        background: `url(${randomBgUrl})`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="lg:w-2/3"></div>
          <div className="lg:w-1/3 sm:w-1/2 w-full">
            <div className="bg-white/95 px-4 pt-2 py-8 my-2 sm:rounded-xl shadow-xl">
              <RegisterFeature />
              <div className="flex flex-col items-center gap-2">
                <StyledLink to="/" variant="neutral" className="flex gap-2">
                  <Home /> Home
                </StyledLink>
                <StyledLink to="/login" variant="neutral" className="flex">
                  Already Account! Login
                </StyledLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
