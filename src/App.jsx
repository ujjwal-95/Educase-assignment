import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AccountSettings from "./components/AccountSettings";
import Pagination from "./components/Pagination";

const App = () => {
  const [page, setPage] = useState(1);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Welcome setPage={setPage} />;
      case 2:
        return <Login setPage={setPage} />;
      case 3:
        return <Signup setPage={setPage} />;
      case 4:
        return <AccountSettings />;
      default:
        return <Welcome setPage={setPage} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
   
      <div className="w-[380px] h-[650px] p-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
        <div className="flex-grow flex flex-col justify-center">{renderPage()}</div>
      </div>

      
      <div className="mt-4 fixed bottom-1">
        <Pagination currentPage={page} totalPages={4} onPageChange={setPage} />
      </div>
    </div>
  );
};

export default App;
