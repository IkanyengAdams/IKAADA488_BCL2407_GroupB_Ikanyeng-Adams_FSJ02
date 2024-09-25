import { useState, useEffect } from "react";

export default function SortByCategory({ onSort }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-full max-w-md">
        <select
          value={selectedCategory}
          onChange={handleSort}
          className="w-full px-4 py-2 border rounded-md"
        >
       
        </select>
      </div>
    </div>
  );
}
