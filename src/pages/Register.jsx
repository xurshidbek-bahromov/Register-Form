const Register = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 mt-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400"
          />
          <button 
            className="w-full mt-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>
        </div>
      </div>
    );
  };
  
  export default Register;
  