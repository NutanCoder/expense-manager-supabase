import { DollarSign, PieChart, ShieldCheck, UserCheck } from "lucide-react";

function HomePage() {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-300" />,
      title: "Track Your Spending",
      desc: "Visualize where your money goes and stay on budget.",
    },
    {
      icon: <PieChart className="w-8 h-8 text-yellow-300" />,
      title: "Smart Insights",
      desc: "Receive detailed reports to manage your finances smarter.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-yellow-300" />,
      title: "Secure & Private",
      desc: "Your data is protected with enterprise-grade security.",
    },
  ];

  return (
    <div className="bg-gray-800 text-white font-sans">
      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
          Manage Your Expenses Effortlessly
        </h1>
        <p className="max-w-xl mx-auto text-gray-300 text-lg mb-6">
          Track, analyze, and optimize your finances — all in one place.
        </p>
        <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center text-yellow-300 mb-12">
          Features
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
          How It Works
        </h2>
        <ol className="max-w-3xl mx-auto text-gray-200 space-y-6 list-decimal list-inside">
          <li>Sign up and connect your accounts securely.</li>
          <li>Start adding your daily expenses or let us auto-sync.</li>
          <li>View your spending insights and plan better.</li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center text-yellow-300 mb-12">
          What Our Users Say
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
          Take Control of Your Money Today
        </h2>
        <button className="mt-4 bg-yellow-300 text-black px-6 py-3 rounded hover:bg-yellow-400">
          Create Free Account
        </button>
      </section>
    </div>
  );
}

export default HomePage;
