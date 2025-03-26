const Login = ({ setPage }) => {
  return (
    <div className="h-full flex flex-col justify-start">
      <h2 className="text-xl font-bold text-center">Sign in to your PopX account</h2>
      <p className="text-gray-600 text-center mb-4">Lorem ipsum dolor sit amet.</p>
      
      <div className="flex flex-col gap-3">
        <label className="text-sm font-semibold">Email Address</label>
        <input type="email" className="border p-2 rounded" placeholder="Enter email address" />

        <label className="text-sm font-semibold">Password</label>
        <input type="password" className="border p-2 rounded" placeholder="Enter password" />

        <button className="bg-gray-400 text-white py-2 rounded mt-4 cursor-pointer" onClick={() => setPage(4)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
