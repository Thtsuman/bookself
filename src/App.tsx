import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl p-4 hover:backdrop-filter hover:backdrop-blur-lg rounded-lg text-white">
          Hello
        </div>
      </div>
    </div>
  );
};

export default App;
