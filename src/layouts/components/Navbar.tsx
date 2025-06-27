import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { authService } from "../../services/AuthService";

function Navbar() {
  const { i18n } = useTranslation();

  const setActiveLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const logoutHandler = () => {
    authService.sigout();
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 cursor-pointer">
            Home
          </Link>
          <Link
            to="/categories"
            className="hover:text-yellow-300 cursor-pointer"
          >
            Categories
          </Link>
          <Link to="/profile" className="hover:text-yellow-300 cursor-pointer">
            Profile
          </Link>
          <button
            className="hover:text-yellow-300 cursor-pointer"
            onClick={logoutHandler}
          >
            Logout
          </button>
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
            English
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
            Hindi
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
