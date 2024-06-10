"use client";
import "./pagination.css";
import ReactPaginate from "react-paginate";

interface IProps {
  total: number;
  handlePageClick: (page: any) => void;
  breakLabel?: string;
}

const PaginationComponent: React.FC<IProps> = ({
  handlePageClick,
  total,
  breakLabel = "...",
}) => {
  return (
    <div className="pagination">
      <ReactPaginate
      breakLabel={breakLabel}
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={total}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
    </div>
  );
};

export default PaginationComponent;
