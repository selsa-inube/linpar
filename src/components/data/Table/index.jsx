import { Pagination } from "./Pagination";
import { TableUI } from "./interface";
import { useState } from "react";

function Table(props) {
  const {
    titles,
    actions,
    entries,
    // filter = "",
    pageLength = 7,
  } = props;

  const [currentPage, setCurrentPage] = useState(0);

  function pagination() {
    return entries.slice(currentPage, currentPage + pageLength);
  }

  function startPage() {
    setCurrentPage(0);
  }

  function endPage() {
    const records = Math.ceil(entries.length / pageLength);
    setCurrentPage((records - 1) * pageLength);
  }

  function nextPage() {
    if (entries.length > currentPage + pageLength) {
      setCurrentPage(currentPage + pageLength);
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - pageLength);
    }
  }

  function numRecordsEnd() {
    return pagination().length + currentPage;
  }

  function numRecordsFirst() {
    return currentPage + 1;
  }

  return (
    <>
      <TableUI titles={titles} actions={actions} entries={pagination()} />
      {entries.length > pageLength && (
        <Pagination
          valueDataFirst={numRecordsFirst()}
          valueDataEnd={numRecordsEnd()}
          totalRecords={entries.length}
          handleStartPage={startPage}
          handlePrevPage={prevPage}
          handleNextPage={nextPage}
          handleEndPage={endPage}
        />
      )}
    </>
  );
}

export { Table };
