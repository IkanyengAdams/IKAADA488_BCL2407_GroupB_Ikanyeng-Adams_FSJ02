import { useState, useEffect } from "react";

export default function SortByCategory({ onSort }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchCategories = async () => {
    try {
      const res = await fetch("https://next-ecommerce-api.vercel.app/categories");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSort = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    onSort(selected);
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-full max-w-md">
        <select
          value={selectedCategory}
          onChange={handleSort}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Sort by Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
