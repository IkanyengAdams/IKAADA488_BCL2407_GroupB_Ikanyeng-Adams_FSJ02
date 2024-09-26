import { useState } from "react";

export default function SortByPrice({ onSort }) {
  const [sortOrder, setSortOrder] = useState("");



  return (
    <div className="flex justify-center lg:justify-end mb-4">
      <label htmlFor="sort-price" className="mr-2 text-gray-700">
        Sort by Price:
      </label>
      <select
        id="sort-price"
        value={sortOrder}
        onChange={handleSortChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
       
      </select>
    </div>
  );
}
