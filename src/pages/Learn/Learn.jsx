export default function Learn() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Learn About Phishing
        </h1>

        <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
          Phishing is a cyber attack where attackers trick people into sharing
          passwords, banking details, or personal information by pretending to
          be a trusted organization.
        </p>

        {/* What is phishing */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            What is Phishing?
          </h2>

          <div className="bg-white p-8 rounded-xl shadow">
            <p className="text-gray-600 leading-relaxed">
              Phishing attacks usually come through emails, SMS messages,
              social media messages, or fake websites. The attacker pretends to
              be a trusted company like a bank, delivery service, or social
              media platform and tries to convince the user to click a malicious
              link.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-20">

          <h2 className="text-3xl font-semibold text-center mb-10">
            How Phishing Attacks Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">
                Step 1 — Bait
              </h3>
              <p className="text-gray-600">
                The attacker sends a message pretending to be from a trusted
                company like PayPal, Amazon, or a bank.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">
                Step 2 — Fake Website
              </h3>
              <p className="text-gray-600">
                The message contains a link that redirects the user to a fake
                login page that looks real.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">
                Step 3 — Information Theft
              </h3>
              <p className="text-gray-600">
                When the victim enters credentials, the attacker captures the
                information.
              </p>
            </div>

          </div>

        </section>

        {/* Types */}
        <section className="mt-20">

          <h2 className="text-3xl font-semibold text-center mb-10">
            Common Types of Phishing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-blue-50 p-6 rounded-xl border">
              <h3 className="font-semibold text-lg mb-2">
                Email Phishing
              </h3>
              <p className="text-gray-600">
                Fraudulent emails pretending to be from trusted companies.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border">
              <h3 className="font-semibold text-lg mb-2">
                SMS Phishing (Smishing)
              </h3>
              <p className="text-gray-600">
                Fake messages asking users to click suspicious links.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border">
              <h3 className="font-semibold text-lg mb-2">
                Clone Phishing
              </h3>
              <p className="text-gray-600">
                Attackers copy legitimate emails and replace links.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border">
              <h3 className="font-semibold text-lg mb-2">
                Social Media Phishing
              </h3>
              <p className="text-gray-600">
                Fake giveaways, promotions, and support messages.
              </p>
            </div>

          </div>

        </section>

        {/* Signs */}
        <section className="mt-20">

          <h2 className="text-3xl font-semibold text-center mb-10">
            Warning Signs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-red-50 p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">
                Suspicious URL
              </h3>
              <p className="text-gray-600">
                Slight spelling changes like paypaI.com instead of paypal.com
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">
                Urgent Language
              </h3>
              <p className="text-gray-600">
                Messages that push you to act immediately.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">
                Unknown Attachments
              </h3>
              <p className="text-gray-600">
                Files or links from unknown sources.
              </p>
            </div>

          </div>

        </section>

        {/* Protection */}
        <section className="mt-20">

          <h2 className="text-3xl font-semibold text-center mb-10">
            How to Stay Safe
          </h2>

          <div className="bg-green-50 p-8 rounded-xl border max-w-3xl mx-auto">

            <ul className="space-y-3 text-gray-700">
              <li>✔ Always verify website URLs</li>
              <li>✔ Do not click suspicious links</li>
              <li>✔ Enable two-factor authentication</li>
              <li>✔ Use security tools to scan links</li>
              <li>✔ Never share passwords or OTP</li>
            </ul>

          </div>

        </section>

      </div>
    </div>
  );
}