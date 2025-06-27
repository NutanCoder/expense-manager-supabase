import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function HomePage() {
  const { t, i18n } = useTranslation();
  const notify = () => toast("Wow so easy!");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center gap-6 p-8">
        <h4 className="text-3xl font-bold text-primary">HomePage</h4>
        <button
          onClick={notify}
          className="px-6 py-2 rounded-md shadow text-white bg-blue-600 hover:bg-blue-900 transition"
        >
          {t("submit")}
        </button>

        <div className="flex gap-4">
          <button
            onClick={changeLanguage.bind(null, "en")}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            English
          </button>

          <button
            onClick={changeLanguage.bind(null, "hi")}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Hindi
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
