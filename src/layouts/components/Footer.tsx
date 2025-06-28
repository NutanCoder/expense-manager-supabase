import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm text-center py-6">
      <div className="flex justify-center space-x-6 mb-2">
        <a href="#" className="hover:text-yellow-300">
          {t("aboutUs")}
        </a>
        <a href="#" className="hover:text-yellow-300">
          {t("contact")}
        </a>
        <a href="#" className="hover:text-yellow-300">
          {t("careers")}
        </a>
        <a href="#" className="hover:text-yellow-300">
          {t("company")}
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} {t("copyright")}
      </p>
    </footer>
  );
}
