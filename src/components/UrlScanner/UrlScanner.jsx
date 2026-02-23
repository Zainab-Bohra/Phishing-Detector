import { useState } from "react";
import axios from "axios";

function UrlScanner() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const checkUrl = async () => {
  if (!url) return;

  setLoading(true);
  setResult("");

  try {
    const res = await axios.post(
      "https://taher98-phishing-web-detector.hf.space/check",
      { url: url }
    );

    const label = res.data.label;

    if (label === "phishing") {
      setResult("phishing");
    } else {
      setResult("safe");
    }

  } catch (error) {
    setResult("error");
  }

  setLoading(false);
};

  return (
    <div className="flex justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Phishing URL Scanner
        </h1>

        <p className="text-gray-600 text-center text-sm mb-6">
          Enter a website URL to check whether it is safe or a phishing link.
        </p>

        {/* Input */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="https://example.com"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none  text-black focus:ring-2 focus:ring-indigo-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkUrl()}
          />

          <button
            onClick={checkUrl}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition"
          >
            Scan
          </button>
        </div>

        {/* Loader */}
        {loading && (
          <div className="mt-6 text-center text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-2"></div>
            Checking URL security...
          </div>
        )}

        {/* Safe Result */}
        {result === "safe" && !loading && (
          <div className="mt-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-700 text-center font-semibold">
            ✅ Safe Website
          </div>
        )}

        {/* Phishing Result */}
        {result === "phishing" && !loading && (
          <div className="mt-6 p-4 rounded-lg bg-red-100 border border-red-300 text-red-700 text-center font-semibold">
            ⚠️ Phishing Website Detected
          </div>
        )}

        {/* Error */}
        {result === "error" && (
          <div className="mt-6 p-4 rounded-lg bg-yellow-100 border border-yellow-300 text-yellow-700 text-center font-semibold">
            Something went wrong. Try again.
          </div>
        )}
      </div>
    </div>
  );
}

export default UrlScanner;