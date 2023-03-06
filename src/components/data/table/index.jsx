import { Pagination } from "./Pagination";
import { TableUI } from "./interface";

function Table(props) {
  const {
    titles,
    actions,
    entries,
    filter = "",
    pageLength = 10,
    valuePage = 10,
    valueData = 15,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
  } = props;

  return (
    <>
      <TableUI titles={titles} actions={actions} entries={entries} />
      {entries.length > pageLength && (
        <Pagination
          valuePage={valuePage}
          valueData={valueData}
          handleStartPage={handleStartPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleEndPage={handleEndPage}
        />
      )}
    </>
  );
}

export { Table };
