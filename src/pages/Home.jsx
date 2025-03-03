const Home = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MyApp</h1>
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-gray-800">Card {item}</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;
  