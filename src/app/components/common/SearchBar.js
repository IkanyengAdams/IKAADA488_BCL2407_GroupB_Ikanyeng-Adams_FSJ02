

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

 
  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-l-md"
        />
        <button
          className="absolute right-0 top-0 h-full bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
