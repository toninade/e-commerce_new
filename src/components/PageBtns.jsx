import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";
const PageBtns = memo(({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="d-flex justify-content-center gap-1 mt-4 mb-4">
      <Button
        className="page-list-btn"
        aria-label="prev page"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        Prev <FontAwesomeIcon icon={faAnglesLeft} />
      </Button>

      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          aria-label="pages"
          key={i}
          className={currentPage === i + 1 ? "active-btn" : "not active-btn"}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </Button>
      ))}

      <Button
        className="page-list-btn"
        aria-label="next page"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Next <FontAwesomeIcon icon={faAnglesRight} />
      </Button>
    </div>
  );
});

export default PageBtns;
