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

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesIndex, setEntriesIndex] = useState(0);

  const totalPages = Math.ceil(entries.length / pageLength);

  function getPageEntries() {
    const numRecordMax = pageLength * currentPage;
    return entries.slice(numRecordMax - pageLength, numRecordMax);
  }

  function goToFirstPage() {
    setCurrentPage(1);
    setEntriesIndex(0);
  }

  function goToEndPage() {
    setCurrentPage(totalPages);
    setEntriesIndex((totalPages - 1) * pageLength);
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
      setEntriesIndex(entriesIndex + pageLength);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setEntriesIndex(entriesIndex - pageLength);
    }
  }

  function numRecordsEnd() {
    return getPageEntries().length + entriesIndex;
  }

  function numRecordsFirst() {
    return entriesIndex + 1;
  }

  return (
    <>
      <TableUI titles={titles} actions={actions} entries={getPageEntries()} />
      {entries.length > pageLength && (
        <Pagination
          valueDataFirst={numRecordsFirst()}
          valueDataEnd={numRecordsEnd()}
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
