import { Home } from "lucide-react";
import StyledLink from "../components/StyledLink";
import LoginFeature from "../features/LoginFeature";

function LoginPage() {
  const randomBgUrl = `https://picsum.photos/1600/900?random=${Math.floor(Math.random() * 1000)}`;
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        background: `url(${randomBgUrl})`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="lg:w-2/3"></div>
          <div className="lg:w-1/3 sm:w-1/2 w-full">
            <div className="bg-white/95 px-4 py-8 pt-2 my-2 sm:rounded-xl shadow-xl">
              <LoginFeature />
              <div className="flex flex-col items-center gap-2">
                <StyledLink to="/" variant="neutral" className="flex gap-2">
                  <Home /> Home
                </StyledLink>
                <StyledLink to="/register" variant="neutral" className="flex">
                  New User! Register
                </StyledLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
