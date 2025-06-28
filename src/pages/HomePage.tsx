import { useTranslation } from "react-i18next";
import { DollarSign, PieChart, ShieldCheck } from "lucide-react";
import Button from "../components/Button";
import StyledLink from "../components/StyledLink";

function HomePage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-300" />,
      title: t("features.track.title"),
      desc: t("features.track.description"),
    },
    {
      icon: <PieChart className="w-8 h-8 text-yellow-300" />,
      title: t("features.insights.title"),
      desc: t("features.insights.description"),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-yellow-300" />,
      title: t("features.security.title"),
      desc: t("features.security.description"),
    },
  ];

  return (
    <div className="bg-gray-800 text-white font-sans">
      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
          {t("hero.headline")}
        </h1>
        <p className="max-w-xl mx-auto text-gray-300 text-lg mb-6">
          {t("hero.subtext")}
        </p>

        <StyledLink variant="primary" to="/register" className="py-3 px-6">
          {t("hero.getStarted")}
        </StyledLink>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center text-yellow-300 mb-12">
          {t("navigation.features")}
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-yellow-300 mb-12">
          {t("navigation.howItWorks")}
        </h2>
        <ol className="max-w-3xl mx-auto text-gray-200 space-y-6 list-decimal list-inside">
          <li>{t("howItWorks.step1")}</li>
          <li>{t("howItWorks.step2")}</li>
          <li>{t("howItWorks.step3")}</li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center text-yellow-300 mb-12">
          {t("navigation.testimonials")}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <blockquote className="bg-gray-800 p-6 rounded shadow">
            <p className="text-gray-300 italic">
              “This app helped me save thousands. Tracking made easy!”
            </p>
            <footer className="mt-4 text-yellow-300 font-bold">
              — Priya S.
            </footer>
          </blockquote>
          <blockquote className="bg-gray-800 p-6 rounded shadow">
            <p className="text-gray-300 italic">
              “The only expense tracker I actually enjoy using.”
            </p>
            <footer className="mt-4 text-yellow-300 font-bold">— Raj K.</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          {t("cta.heading", "Take Control of Your Money Today")}
        </h2>
        <StyledLink variant="secondary" to="/register" className="py-3 px-6">
          {t("cta.button", "Create Free Account")}
        </StyledLink>
      </section>
    </div>
  );
}

export default HomePage;
