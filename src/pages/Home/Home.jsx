import UrlScanner from "../../components/UrlScanner/UrlScanner";
import image1 from "../../assets/Bank-fake.png";
import image2 from "../../assets/email-scam-main.png";
import image3 from "../../assets/Fake-Giveaway-Scams-on-Social-Media-Platforms.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Protect Yourself From
          <span className="text-red-500"> Phishing Attacks</span>
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Scan suspicious links instantly and detect whether a website is safe
          or a phishing attempt.
        </p>

        <div className="mt-12">
          <UrlScanner />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Real-Time Detection</h3>
          <p className="text-gray-400">
            Instantly analyze suspicious links using advanced phishing detection
            systems.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Security Analysis</h3>
          <p className="text-gray-400">
            Check SSL status, domain risk score, and malicious indicators.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Safe Browsing</h3>
          <p className="text-gray-400">
            Stay protected from fake login pages and scam websites.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Common Phishing Examples
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <img src={image1}
             className="rounded-lg mb-4" />
            <p className="text-gray-300">
              Fake banking login pages designed to steal credentials.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <img
              src={image2}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-300">
              Emails pretending to be from trusted companies.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <img
              src={image3}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-300">
              Fake offers and giveaway scams on social media.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
