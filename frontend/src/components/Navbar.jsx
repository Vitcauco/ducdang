import { Link } from "react-router-dom";
export default function Navbar() {

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

      <a href="#">
        <img className="h-9" src="" alt="Shorten Link" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link
          to="/"
          className="cursor-pointer px-6 py- transition text-gray-600 rounded-full"
        >
          Home
        </Link>        

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

