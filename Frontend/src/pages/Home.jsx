import { Link } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6">
        Welcome to Event Management System
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-center max-w-xl">
        Manage your events seamlessly — browse existing events or{" "}
        {user?.role === "admin"
          ? "create new ones with ease."
          : "book your favorite events easily."}
      </p>

      <div className="flex gap-6">
        {/* View Events (always visible) */}
        <Link to="/events">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            View Events
          </button>
        </Link>

        {/* Role-based Button */}
        {user?.role === "admin" ? (
          <Link to="/create-event">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
              Create Event
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
