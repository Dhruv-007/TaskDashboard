import React from "react";

interface FilterProps {
  filterStatus: string;
  onChange: (status: string) => void;
}

const FilterButton: React.FC<FilterProps> = ({ filterStatus, onChange }) => {
  return (
    <div>
      <button
        className={`${
          filterStatus === "All" ? "bg-blue-500" : "bg-gray-300"
        } text-white px-4 py-2 rounded-l-md mr-2`}
        onClick={() => onChange("All")}
      >
        All
      </button>
      <button
        className={`${
          filterStatus === "Pending" ? "bg-blue-500" : "bg-gray-300"
        } text-white px-4 py-2 rounded-r-md`}
        onClick={() => onChange("Pending")}
      >
        Pending
      </button>
      <button
        className={`${
          filterStatus === "Completed" ? "bg-blue-500" : "bg-gray-300"
        } text-white px-4 py-2 rounded-r-md`}
        onClick={() => onChange("Completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButton;
