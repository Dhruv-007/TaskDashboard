import React, { ChangeEvent } from "react";

interface SearchProps {
  searchQuery: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={onChange}
        className="border border-gray-300 px-2 py-1 rounded-md mr-2"
      />
    </div>
  );
};

export default Search;
