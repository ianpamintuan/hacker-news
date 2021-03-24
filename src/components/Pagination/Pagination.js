import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { usePagination } from "react-pagination-hook";

export const Pagination = (
    // currentPage = 1,
    // totalPages = 0,
    // totalItems = 0,
) => {
    const [initialPage, setInitialPage] = React.useState(1);
    const [numberOfPages, setNumberOfPages] = React.useState(10);
    const [maxButtons, setMaxButtons] = React.useState(4);
    const { activePage, visiblePieces, goToPage } = usePagination({
        initialPage,
        numberOfPages,
        maxButtons,
    });

    useEffect(() => {
        if (initialPage > numberOfPages) {
            setInitialPage(numberOfPages);
        }
    }, [initialPage, numberOfPages]);

    useEffect(() => {
        if (maxButtons > numberOfPages) {
            setMaxButtons(numberOfPages);
        }
    }, [maxButtons, numberOfPages]);

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
                const onClick = () => goToPage(pageNumber);

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

// Pagination.propTypes = {
//     currentPage: PropTypes.number.isRequired,
//     totalPages: PropTypes.number.isRequired,
//     totalItems: PropTypes.number.isRequired,
// };
