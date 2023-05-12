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
  const [entriesData, setEntriesData] = useState(entries);

  const handleChangeEntry = (entry, removeRow) => {
    if (removeRow) {
      setEntriesData(
        entriesData.filter((oldEntry) => entry.id !== oldEntry.id)
      );
    } else {
      setEntriesData(
        entriesData.map((oldEntry) => {
          if (oldEntry.id === entry.id) {
            return entry;
          }
          return oldEntry;
        })
      );
    }
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
    if (filter.length === 0) return entriesData;
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
        entries={getPageEntries()}
        breakPoints={breakPoints}
        handleChangeEntry={handleChangeEntry}
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
