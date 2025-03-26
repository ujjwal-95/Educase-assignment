import React from "react";

const Signup = () => {
  return (
    <div className="flex items-start justify-center h-screen">
      <div className="w-[350px] p-6">
        <h2 className="text-xl font-bold">Create your PopX account</h2>
        <form className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name*
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter full name"
          />

          <label className="block text-sm font-medium text-gray-700 mt-3">
            Phone number*
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter phone number"
          />

          <label className="block text-sm font-medium text-gray-700 mt-3">
            Email address*
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter email"
          />

          <label className="block text-sm font-medium text-gray-700 mt-3">
            Password*
          </label>
          <input
            type="password"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter password"
          />

          <label className="block text-sm font-medium text-gray-700 mt-3">
            Company name
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter company name"
          />

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Are you an Agency?*
            </label>
            <div className="flex items-center mt-1">
              <input type="radio" id="yes" name="agency" className="mr-2" />
              <label htmlFor="yes" className="mr-4">
                Yes
              </label>
              <input type="radio" id="no" name="agency" className="mr-2" />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <button className="w-full bg-purple-600 text-white py-2 mt-4 rounded cursor-pointer">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
