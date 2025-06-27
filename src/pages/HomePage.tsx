import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function HomePage() {
  const { t, i18n } = useTranslation();
  const notify = () => toast("Wow so easy!");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex flex-col">
      <h4>HomePage</h4>
      <button onClick={notify}>{t("submit")}</button>
      <button onClick={changeLanguage.bind(null, "en")}>English</button>
      <button onClick={changeLanguage.bind(null, "hi")}>Hindi </button>
    </div>
  );
}

export default HomePage;
