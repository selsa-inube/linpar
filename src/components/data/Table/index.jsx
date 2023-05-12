import { Stack } from "@inube/design-system";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { TableUI } from "./interface";

function Table(props) {
  const {
    titles,
    actions,
    entries,
    filter = "",
    pageLength = 10,
    breakPoints,
  } = props;

  const [newEntries, setNewEntries] = useState(entries);

  const handleDeleteTableRow = (id) => {
    setNewEntries(newEntries.filter((entry) => id != entry.id));
  };

  function filterArray() {
    const titlesId = titles.map((title) => title.id);
    return entries.filter((entry) => {
      for (const attribute in entry) {
        if (
          titlesId.includes(attribute) &&
          entry[attribute]
            .toString()
            .toLowerCase()
            .includes(filter.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  }

  function filterTable() {
    if (filter.length === 0) return newEntries;
    return filterArray();
  }

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filterTable().length / pageLength);
  const firstEntryInPage = (currentPage - 1) * pageLength;
  const lastEntryInPage = Math.min(
    firstEntryInPage + pageLength,
    filterTable().length
  );

  function getPageEntries() {
    return filterTable().slice(firstEntryInPage, lastEntryInPage);
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
    <Stack direction="column">
      <TableUI
        titles={titles}
        actions={actions}
        handleDeleteTableRow={handleDeleteTableRow}
        entries={getPageEntries()}
        breakPoints={breakPoints}
      />
      {filterTable().length > pageLength && (
        <Pagination
          firstEntryInPage={firstEntryInPage}
          lastEntryInPage={lastEntryInPage}
          totalRecords={filterTable().length}
          handleStartPage={goToFirstPage}
          handlePrevPage={prevPage}
          handleNextPage={nextPage}
          handleEndPage={goToEndPage}
        />
      )}
    </Stack>
  );
}

export { Table };
