import { useEffect, useState } from "react";
import { CustomCard } from "./Card";
import Spinner from "../../CommonUI/Spinner";
const BASE_URL = "http://localhost:8000";

function CardPage() {
  const [filterTag, setFilterTag] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/projects`);
        const data = await res.json();
        setProducts(data);
      } catch {
        alert("There is some error on loading projects");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);

  const handleTagClick = (tag) => {
    setFilterTag(tag);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  const filteredProjects = filterTag
    ? products.filter((project) => project.tags.actual.includes(filterTag))
    : products;

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIdx, endIdx);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  if (isLoading) return <Spinner />;
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedProjects.map((project) => (
          <CustomCard
            key={project.id}
            image={project.image}
            description={project.description}
            title={project.title}
            tags={project.tags}
            status={project.status}
            onTagClick={handleTagClick}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mx-2 px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CardPage;
