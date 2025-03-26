import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div container-box>
    <div className="flex items-center justify-center space-x-4 mt-4">
      <button onClick={() => onPageChange(1)} className="text-gray-500 hover:text-gray-700 cursor-pointer">
        <HomeIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="text-gray-500 hover:text-gray-700 cursor-pointer">
        ❮
      </button>
      <span className="text-gray-600">{currentPage} of {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="text-gray-500 hover:text-gray-700 cursor-pointer">
        ❯
      </button>
    </div>
    </div>
  );
};

export default Pagination;
