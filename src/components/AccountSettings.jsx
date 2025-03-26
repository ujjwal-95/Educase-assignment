import React from "react";
import img from "../assets/account-img.jpg";

const AccountSettings = () => {
  return (
    <div className="flex items-start justify-center h-screen">
      <div className="w-[350px]">
        <h2 className="text-lg font-semibold">Account Settings</h2>
        
       
        <div className="bg-gray-100 p-4 mt-3 rounded-lg">
          <div className="flex items-center">
            <img
              src={img}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-semibold">Marry Doe</h3>
              <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
            </div>
          </div>
        </div>

       
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
