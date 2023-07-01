import { useState } from "react";
import ReactPaginate from "react-paginate";
import CardCountry from "../CardCountry";

const Pagination = ({ itemsPerPage, itemToTal, darkMode }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffSet = itemOffset + itemsPerPage;
  const currentItems = itemToTal.slice(itemOffset, endOffSet);
  const pageCount = Math.ceil(itemToTal.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemToTal.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="list-cardcountry">
        {currentItems &&
          currentItems.map((item, id) => (
            <CardCountry
              key={id}
              nameURL={item?.name?.common}
              nameCountry={item?.name?.common}
              flagCountry={item?.flags?.png}
              population={item?.population}
              region={item?.region}
              capital={item?.capital}
              darkMode={darkMode}
            />
          ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        previousLabel="< Previous"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName={
          darkMode === "light" ? "page-link" : "page-link dark-page-link"
        }
        previousClassName={
          darkMode === "light" ? "page-item" : "page-item dark-page-item"
        }
        previousLinkClassName={
          darkMode === "light" ? "page-link" : "page-link dark-page-link"
        }
        nextClassName={
          darkMode === "light" ? "page-item" : "page-item dark-page-item"
        }
        nextLinkClassName={
          darkMode === "light" ? "page-link" : "page-link dark-page-link"
        }
        breakClassName="page-item"
        breakLinkClassName={
          darkMode === "light" ? "page-link" : "page-link dark-page-link"
        }
        containerClassName="pagination countries-pagination"
        activeClassName="active"
      />
    </>
  );
};

export default Pagination;