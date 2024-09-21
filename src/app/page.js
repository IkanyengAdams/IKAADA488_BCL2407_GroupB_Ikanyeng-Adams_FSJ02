"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Spinner from "./components/common/Spinner";
import ErrorHandler from "./components/common/ErrorHandler";

/**
 * Displays a page of products with pagination, search functionality, and product cards.
 * @returns {JSX.Element} The ProductsPage component.
 */
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 20;

  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;

  /**
   * Fetches products from the API for the current page.
   * @param {number} page - The current page number.
   */
  const fetchProducts = async (page) => {
    setLoading(true);
    const skip = (page - 1) * productsPerPage;
    try {
      const res = await fetch(
        `https://next-ecommerce-api.vercel.app/products?limit=${productsPerPage}&skip=${skip}`
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  // Fetch products when the current page changes.
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  /**
   * Navigates to the next page of products.
   */
  const handleNextPage = () => {
    router.push(`?page=${currentPage + 1}`);
  };

  /**
   * Navigates to the previous page of products.
   */
  const handlePrevPage = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-l-md"
          />
          <button className="absolute right-0 top-0 h-full bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : products.length === 0 ? (
        <ErrorHandler />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <ImageCarousel images={product.images} />
              <h2 className="text-xl font-semibold mb-2 text-black">
                {product.title}
              </h2>
              <p className="text-gray-800">{product.category}</p>
              <p className="text-gray-900 font-bold">${product.price}</p>

              <div className="flex justify-center mt-4">
                <Link href={`/products/${product.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Product
                  </button>
                </Link>
              </div>

              <div className="flex justify-center space-x-4 mt-2">
                <FaHeart className="text-gray-400 text-xl" />{" "}
                <FaShoppingCart className="text-gray-400 text-xl" />{" "}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-4">
        {currentPage > 1 && (
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded"
            onClick={handlePrevPage}
          >
            Previous Page
          </button>
        )}
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded"
          onClick={handleNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

/**
 * ImageCarousel component to display images in a carousel.
 * @param {Object} props - The props for the ImageCarousel component.
 * @param {string[]} props.images - Array of image URLs for the product.
 * @returns {JSX.Element} The ImageCarousel component.
 */
function ImageCarousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  /**
   * Moves to the next image in the carousel.
   */
  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  /**
   * Moves to the previous image in the carousel.
   */
  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentImage]}
        alt={`Product Image ${currentImage + 1}`}
        className="h-80 w-full object-cover mb-4"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
          >
            &#8249;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
          >
            &#8250;
          </button>
        </>
      )}
    </div>
  );
}
