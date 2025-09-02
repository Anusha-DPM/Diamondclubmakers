import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, basePath }) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7; // Show up to 7 page numbers
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than or equal to max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis logic
      if (currentPage <= 4) {
        // Show first 5 pages + ellipsis + last page
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        if (totalPages > 6) {
          pages.push('...');
        }
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Show first page + ellipsis + last 5 pages
        pages.push(1);
        if (totalPages > 6) {
          pages.push('...');
        }
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show first page + ellipsis + current-1, current, current+1 + ellipsis + last page
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        {/* Previous Button */}
        <Link
          href={currentPage > 1 ? `${basePath}/page-${currentPage - 1}` : '#'}
          className={`px-4 py-2 text-sm font-medium border-r border-gray-300 transition-colors duration-200 ${
            currentPage > 1
              ? 'text-blue-600 hover:text-blue-800 hover:bg-gray-50'
              : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          Previous
        </Link>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-sm text-gray-500 border-r border-gray-300"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Link
              key={pageNum}
              href={pageNum === 1 ? basePath : `${basePath}/page-${pageNum}`}
              className={`px-3 py-2 text-sm font-medium border-r border-gray-300 transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-blue-600 hover:text-blue-800 hover:bg-gray-50'
              }`}
            >
              {pageNum}
            </Link>
          );
        })}

        {/* Next Button */}
        <Link
          href={currentPage < totalPages ? `${basePath}/page-${currentPage + 1}` : '#'}
          className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            currentPage < totalPages
              ? 'text-blue-600 hover:text-blue-800 hover:bg-gray-50'
              : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
