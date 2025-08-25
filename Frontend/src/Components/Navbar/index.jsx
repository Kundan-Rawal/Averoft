import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear stored user info
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="navbar p-5 flex justify-between items-center">
      <h1 className="text-blue-700 font-bold text-2xl p-2">
        Event Management System
      </h1>

      <ul className="nav-links flex items-center gap-6" type="none">
        <Link to="/">
          <li className="text-black font-bold text-1xl">Home</li>
        </Link>
        <Link to="/events">
          <li className="text-black font-bold text-1xl">Events</li>
        </Link>
        <Link to="/bookings">
          <li className="text-black font-bold text-1xl">Bookings</li>
        </Link>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
