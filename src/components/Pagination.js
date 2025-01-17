import React from 'react'

const Pagination = ({currentPage, totalPages, onPageChange}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePageClick = page => {
    onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1 mx-1 border ${
            currentPage === i ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          {i}
        </button>,
      )
    }
    return pageNumbers
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 border bg-gray-200 disabled:opacity-50"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 border bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
