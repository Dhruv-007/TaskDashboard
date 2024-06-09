import React, { ChangeEvent } from "react";

interface FilterProps {
  filterStatus: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Filter: React.FC<FilterProps> = ({ filterStatus, onChange }) => {
  return (
    <select
      value={filterStatus}
      onChange={onChange}
      className="border border-gray-300 px-2 py-1 rounded-md"
    >
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Pending">Pending</option>
    </select>
  );
};

export default Filter;
