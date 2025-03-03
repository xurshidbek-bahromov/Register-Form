import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyApp</Link>
        <div className="space-x-4">
          {user ? (
            <>
              <Link to="/add" className="hover:text-yellow-400 transition">Add</Link>
              <Link to="/edit" className="hover:text-yellow-400 transition">Edit</Link>
              <button onClick={logout} className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
              <Link to="/register" className="hover:text-yellow-400 transition">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
