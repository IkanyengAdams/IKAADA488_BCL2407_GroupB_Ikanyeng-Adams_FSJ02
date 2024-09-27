import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleSearch = () => {
    
  };

  return (
    <div className="relative flex justify-center mb-6">
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

        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto z-10">
            {suggestions.map((product) => (
              <li
                key={product.id}
                onClick={() => {
                  setSearchTerm(product.title);
                  setSuggestions([]);
                  onSearch(product.title);
                }}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {product.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
