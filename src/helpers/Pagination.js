import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const Pagination = ({ pageIndex, pageSize, totalPages, setPageIndex, onChangePageSize }) => {
    useEffect(() => {
        // Ensure pageIndex is within bounds when totalPages changes
        if (pageIndex >= totalPages) {
            setPageIndex(Math.max(0, totalPages - 1));
        }
    }, [pageIndex, totalPages, setPageIndex]);

    return (
        <div className="d-lg-flex align-items-center text-center pb-1 pt-2">
            <div className="d-inline-block me-3">
                <label className="me-1">Display :</label>
                <select
                    value={pageSize}
                    onChange={(e) => {
                        const newSize = Number(e.target.value);
                        onChangePageSize(newSize);
                        setPageIndex(0);
                    }}
                    className="form-select d-inline-block w-auto">
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>

            <span className="me-3">
                Page{' '}
                <strong>
                    {pageIndex + 1} of {totalPages}
                </strong>
            </span>

            <label>Go to page : </label>
            {/* <input
                type="number"
                placeholder={`${pageIndex + 1}`}
                min="1"
                max={totalPages}
                onChange={(e) => {
                    const enteredPage = e.target.value;
                    setPageIndex((prev) => {
                        const newPage = enteredPage ? Math.max(1, Math.min(enteredPage, totalPages)) - 1 : 0;
                        return newPage;
                    });
                }}
                className="form-control  ms-1 d-inline-block"
                style={{
                    width: '80px',
                }}
            /> */}
            <input
                type="number"
                placeholder={`${pageIndex + 1}`}
                min="1"
                max={Number(totalPages)} // Convert totalPages to a number
                onChange={(e) => {
                    const enteredPage = e.target.value;
                    setPageIndex((prev) => {
                        const newPage = enteredPage ? Math.max(1, Math.min(enteredPage, totalPages)) - 1 : 0;
                        return newPage;
                    });
                }}
                className="form-control  ms-1 d-inline-block"
                style={{
                    width: '80px',
                }}
            />


            <ul className="pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0 pe-4">
                {pageIndex > 0 && (
                    <li className="page-item" onClick={() => setPageIndex(pageIndex - 1)}>
                        <Link to="#" className="page-link">
                            Previous
                        </Link>
                    </li>
                )}

                {Array.from({ length: totalPages }).map((_, page) => {
                    const isFirstPage = page === 0;
                    const isLastPage = page === totalPages - 1;
                    const isCurrentPage = page === pageIndex;

                    if (
                        totalPages <= 5 ||
                        isFirstPage ||
                        isLastPage ||
                        (page >= pageIndex - 1 && page <= pageIndex + 1)
                    ) {
                        return (
                            <li
                                key={`page-${page + 1}`}
                                className={`page-item ${isCurrentPage ? 'active' : ''}`}
                                onClick={() => setPageIndex(page)}>
                                <Link to="#" className="page-link">
                                    {page + 1}
                                </Link>
                            </li>
                        );
                    } else if ((isFirstPage && pageIndex >= 4) || (isLastPage && pageIndex <= totalPages - 3)) {
                        return (
                            <li key={`page-${page + 1}`} className="page-item disabled">
                                <Link to="#" className="page-link">
                                    ...
                                </Link>
                            </li>
                        );
                    }

                    return null;
                })}

                {pageIndex < totalPages - 1 && (
                    <li className="page-item" onClick={() => setPageIndex(pageIndex + 1)}>
                        <Link to="#" className="page-link">
                            Next
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;
