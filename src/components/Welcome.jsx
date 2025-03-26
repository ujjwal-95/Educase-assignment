const Welcome = ({ setPage }) => {
  return (
    <div className="h-full flex flex-col justify-end items-center text-start">
      <h2 className="text-xl font-bold">Welcome to PopX</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit, amet</p>
      <button className="bg-purple-600 text-white py-2 px-4 rounded mt-4 cursor-pointer" onClick={() => setPage(3)}>
        Create Account
      </button>
      <button className="bg-purple-300 text-gray-800 py-2 px-4 rounded mt-2 cursor-pointer" onClick={() => setPage(2)}>
        Already Registered? Login
      </button>
    </div>
  );
};

export default Welcome;
