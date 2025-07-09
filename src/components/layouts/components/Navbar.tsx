import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { authService } from "@/features/auth/services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { authAction } from "@/redux/authSlice";
import { toast } from "react-toastify";

function Navbar() {
  const { i18n, t } = useTranslation();
  const disptach = useDispatch();
  const authState = useSelector((root: RootState) => root.auth);
  const isLoggedIn = authState.user != null;

  const setActiveLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const logoutHandler = async () => {
    await authService.sigout();
    toast.info("Logged out Successfully");
    const event = authAction.setUser(null);
    disptach(event);
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 cursor-pointer">
            {t("home")}
          </Link>
          {isLoggedIn && (
            <Link
              to="/categories"
              className="hover:text-yellow-300 cursor-pointer"
            >
              {t("categories")}
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/login" className="hover:text-yellow-300 cursor-pointer">
              {t("login", "Login")}
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to="/register"
              className="hover:text-yellow-300 cursor-pointer"
            >
              {t("register", "Register")}
            </Link>
          )}
          {isLoggedIn && (
            <Link
              to="/profile"
              className="hover:text-yellow-300 cursor-pointer"
            >
              {t("profile")}
            </Link>
          )}
          {isLoggedIn && (
            <button
              className="hover:text-yellow-300 cursor-pointer"
              onClick={logoutHandler}
            >
              {t("logout")}
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveLang("en")}
            className={clsx(
              "px-3 py-1 rounded",
              "cursor-pointer",

              i18n.language === "en"
                ? "bg-yellow-400 text-black"
                : "bg-gray-700 hover:bg-gray-600"
            )}
          >
            {t("english")}
          </button>
          <button
            onClick={() => setActiveLang("hi")}
            className={clsx(
              "px-3 py-1 rounded",
              "cursor-pointer",
              i18n.language === "hi"
                ? "bg-yellow-400 text-black"
                : "bg-gray-700 hover:bg-gray-600"
            )}
          >
            {t("hindi")}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
