import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    const fakeUser = { username: "user" };
    login(fakeUser);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
        />
        <button 
          onClick={handleLogin}
          className="w-full mt-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
