import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-700 shadow-[0_10px_30px_rgba(0,0,0,0.4)] sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          PhishGuard
        </h1>

        <div className="flex gap-8 text-gray-300 font-medium">

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/learn"
            className="hover:text-cyan-400 transition"
          >
            Learn
          </Link>

        </div>

      </div>

    </nav>
  );
}