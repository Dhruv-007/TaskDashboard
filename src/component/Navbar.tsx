import React from "react";
import Search from "./Search";
import Filter from "./Filter";

interface NavbarProps {
  onClick?: () => void;
  searchQuery: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterStatus: string;
  filterchange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onClick,
  searchQuery,
  onChange,
  filterStatus,
  filterchange,
}) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center h-full">
        <h1 className="text-white text-xl font-bold">Task Management</h1>
        <div className="flex items-center space-x-4">
          <button
            style={{ height: 35 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
            onClick={onClick}
          >
            Create
          </button>

          <div style={{marginTop:20}}>
            <Search searchQuery={searchQuery} onChange={onChange} />
          </div>
          <div>
            <Filter filterStatus={filterStatus} onChange={filterchange} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
