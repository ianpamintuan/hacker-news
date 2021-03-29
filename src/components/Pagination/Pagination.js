import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { usePagination } from "react-pagination-hook";

export const Pagination = ({
    currentPage = 1,
    totalPages = 1,
    setCurrentPage,
}) => {
    const [initialPage, setInitialPage] = React.useState(currentPage + 1);
    const [numberOfPages, setNumberOfPages] = React.useState(totalPages);
    const [maxButtons, setMaxButtons] = React.useState(4);
    const { activePage, visiblePieces, goToPage } = usePagination({
        initialPage,
        numberOfPages,
        maxButtons,
    });

    useEffect(() => {
        if (initialPage > numberOfPages) {
            setInitialPage(numberOfPages + 1);
        }
    }, [initialPage, numberOfPages]);

    useEffect(() => {
        if (maxButtons > numberOfPages) {
            setMaxButtons(numberOfPages);
        }
    }, [maxButtons, numberOfPages]);

    useEffect(() => {
        setNumberOfPages(totalPages > 1 ? totalPages + 1 : totalPages);
    }, [totalPages]);

    return (
        <div className="pagination flex-container justify-center">
            {visiblePieces.map((visiblePiece, index) => {
                const key = `${visiblePiece.type}-${index}`;

                if (visiblePiece.type === "ellipsis") {
                    return (
                        <div key={key} style={{ lineHeight: "48px" }}>
                            ...
                        </div>
                    );
                }

                const { pageNumber } = visiblePiece;
                const onClick = () => {
                    goToPage(pageNumber);
                    setCurrentPage(pageNumber - 1);
                };

                if (visiblePiece.type === "page-number") {
                    const isActive = pageNumber === activePage;
                    const className = isActive ? "active" : "";

                    return (
                        <button
                            key={key}
                            onClick={onClick}
                            className={className}
                        >
                            {pageNumber}
                        </button>
                    );
                }

                return (
                    <button
                        key={key}
                        disabled={visiblePiece.isDisabled}
                        onClick={onClick}
                    >
                        {visiblePiece.type === "next" ? ">" : "<"}
                    </button>
                );
            })}
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};
