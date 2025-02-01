

export const generatePaginationNumbers = (totalPages: number, currentPage: number) => {


    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1) // [1, 2, 3, 4, 5, 6]
    }

    if (currentPage <= 4) {
        return [1, 2, 3, 4, '...', totalPages] // [1, 2, 3, 4, '...', 10]
    }

    if (currentPage >= totalPages - 3) {
        return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages] // [1, '...', 7, 8, 9, 10]
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages] // [1, '...', 4, 5, 6, '...', 10]
}