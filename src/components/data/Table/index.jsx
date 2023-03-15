import { Pagination } from "./Pagination";
import { TableUI } from "./interface";
import { useState } from "react";

function Table(props) {
  const {
    titles,
    actions,
    entries,
    // filter = "",
    pageLength = 10,
  } = props;

  const [currentPage, setCurrentPage] = useState(1),
    totalPages = Math.ceil(entries.length / pageLength),
    numRecordMax = pageLength * currentPage,
    numRecordsPerPage = numRecordMax - pageLength,
    firstEntryInPage = numRecordsPerPage + 1,
    EndEntryInPage = getPageEntries().length + numRecordsPerPage;

  function getPageEntries() {
    return entries.slice(numRecordsPerPage, numRecordMax);
  }

  function goToFirstPage() {
    setCurrentPage(1);
  }

  function goToEndPage() {
    setCurrentPage(totalPages);
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <>
      <TableUI titles={titles} actions={actions} entries={getPageEntries()} />
      {entries.length > pageLength && (
        <Pagination
          valueDataFirst={firstEntryInPage}
          valueDataEnd={EndEntryInPage}
          totalRecords={entries.length}
          handleStartPage={goToFirstPage}
          handlePrevPage={prevPage}
          handleNextPage={nextPage}
          handleEndPage={goToEndPage}
        />
      )}
    </>
  );
}

export { Table };
