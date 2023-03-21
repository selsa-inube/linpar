import { Pagination } from "./Pagination";
import { TableUI } from "./interface";
import { useState } from "react";

function Table(props) {
  const { titles, actions, entries, filter = "", pageLength = 10 } = props;

  function filterArray() {
    const TitlesColumn = titles.map((i) => i.id);
    return entries.filter((entry) => {
      let valueExists = false;
      for (const attribute in entry) {
        if (
          TitlesColumn.includes(attribute) &&
          entry[attribute]
            .toString()
            .toLowerCase()
            .includes(filter.toLowerCase())
        ) {
          valueExists = true;
        }
      }
      return valueExists;
    });
  }

  function filterTable() {
    if (filter.length === 0) return entries;
    return filterArray();
  }

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filterTable().length / pageLength);
  const firstEntryInPage = (currentPage - 1) * pageLength;
  const LastEntryInPage = Math.min(
    firstEntryInPage + pageLength,
    filterTable().length
  );

  function getPageEntries() {
    return filterTable().slice(firstEntryInPage, LastEntryInPage);
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
      {filterTable().length > pageLength && (
        <Pagination
          firstEntryInPage={firstEntryInPage}
          LastEntryInPage={LastEntryInPage}
          totalRecords={filterTable().length}
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
